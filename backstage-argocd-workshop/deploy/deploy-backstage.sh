#!/bin/sh


# Build Parameters
BACKSTAGE_IMAGE=backstage-argocd-workshop:1.0.2
GITHUB_TOKEN="aaa"
ARGOCD_AUTH_TOKEN="bbb"
POSTGRES_USER="backstage"
POSTGRES_PASSWORD="hunter2"

# Build Options
SHOULD_BUILD_IMAGE=true
SHOULD_DEPLOY_ARGO=true
SHOULD_LOAD_IMAGE_TO_KIND=true

# Build Image
if $SHOULD_BUILD_IMAGE ; then
    yarn install --frozen-lockfile
    yarn tsc
    yarn build:backend
    docker image build . -f packages/backend/Dockerfile --tag $BACKSTAGE_IMAGE
fi


if $SHOULD_LOAD_IMAGE_TO_KIND ; then
    kind load docker-image $BACKSTAGE_IMAGE --name guy-single-node
fi

if $SHOULD_DEPLOY_ARGO ; then
    helm upgrade --install argocd argo-cd \
    --repo https://argoproj.github.io/argo-helm \
    --namespace argocd --create-namespace \
    --values deploy/argocd-config/helm-values.yaml --wait

    ARGOCD_ADMIN_PASSWORD=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d)
    argocd login --insecure --port-forward --insecure --username admin --password $ARGOCD_ADMIN_PASSWORD --port-forward-namespace argocd
    ARGOCD_AUTH_TOKEN=$(argocd account generate-token --port-forward --port-forward-namespace argocd)
fi

# create backstage namespace
kubectl create namespace backstage --dry-run=client -o yaml | kubectl apply -f -

# Configure Postgres Secrets
yq --inplace ".data.POSTGRES_USER = \"$(echo $POSTGRES_USER | base64)\"" deploy/postgres-resources/pg-secret.yaml
yq --inplace ".data.POSTGRES_PASSWORD = \"$(echo $POSTGRES_PASSWORD | base64)\"" deploy/postgres-resources/pg-secret.yaml
yq --inplace ".data.POSTGRES_USER = \"$(echo $POSTGRES_USER | base64)\"" deploy/backstage-resources/bs-secret.yaml
yq --inplace ".data.POSTGRES_PASSWORD = \"$(echo $POSTGRES_PASSWORD | base64)\"" deploy/backstage-resources/bs-secret.yaml

# Configure Backstage Secrets 
yq --inplace ".data.GITHUB_TOKEN = \"$(echo $GITHUB_TOKEN | base64)\"" deploy/backstage-resources/bs-secret.yaml
yq --inplace ".data.ARGOCD_AUTH_TOKEN = \"$(echo $ARGOCD_AUTH_TOKEN | base64)\"" deploy/backstage-resources/bs-secret.yaml

# Deploy Postgres
kubectl apply -f deploy/postgres-resources
kubectl rollout status -w -n backstage deployment postgres --timeout=180s

# Deploy Backstage
yq --inplace ".spec.template.spec.containers[0].image = \"$BACKSTAGE_IMAGE\"" deploy/backstage-resources/bs-deploy.yaml
kubectl apply -f deploy/backstage-resources
kubectl rollout status -w -n backstage deployment backstage --timeout=180s


