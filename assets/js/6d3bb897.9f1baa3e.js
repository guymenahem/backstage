/*! For license information please see 6d3bb897.9f1baa3e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811510],{501209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const s={id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},i=void 0,a={id:"permissions/plugin-authors/01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author",source:"@site/../docs/permissions/plugin-authors/01-setup.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/01-setup",permalink:"/docs/permissions/plugin-authors/01-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/01-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},sidebar:"docs",previous:{title:"Defining custom permission rules",permalink:"/docs/permissions/custom-rules"},next:{title:"2. Adding a basic permission check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}},c={},l=[{value:"Setup for the Tutorial",id:"setup-for-the-tutorial",level:2},{value:"Integrate the new plugin",id:"integrate-the-new-plugin",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The following tutorial is designed to help plugin authors add support for permissions to their plugins. We'll add support for permissions to example ",(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins, but the process should be similar for other plugins!"]}),"\n",(0,r.jsxs)(t.p,{children:["The rest of this page is focused on adding the ",(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins to your Backstage instance. If you want to add support for permissions to your own plugin instead, feel free to skip to the ",(0,r.jsx)(t.a,{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check",children:"next section"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"setup-for-the-tutorial",children:"Setup for the Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:['We will use a "Todo list" feature, composed of the ',(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins, as well as their dependency, ",(0,r.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The source code is available here:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list",children:"todo-list"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-backend",children:"todo-list-backend"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-common",children:"todo-list-common"})}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Copy-paste the three folders into the plugins folder of your backstage application repository (removing the ",(0,r.jsx)(t.code,{children:"example-"})," prefix from each folder) or run the following script from the root of your backstage application:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ cd $(mktemp -d)\n  git clone --depth 1 --quiet --no-checkout --filter=blob:none https://github.com/backstage/backstage.git .\n  git checkout master -- plugins/example-todo-list/\n  git checkout master -- plugins/example-todo-list-backend/\n  git checkout master -- plugins/example-todo-list-common/\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-backend/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-common/package.json\n  for file in plugins/*; do mv \"$file\" \"$OLDPWD/${file/example-todo/todo}\"; done\n  cd -\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"plugins"})," directory of your project should now include ",(0,r.jsx)(t.code,{children:"todo-list"}),", ",(0,r.jsx)(t.code,{children:"todo-list-backend"}),", and ",(0,r.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important"}),": if you are on ",(0,r.jsx)(t.strong,{children:"Windows"}),", make sure you have WSL and git installed on your machine before executing the script above."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add these packages as dependencies for your Backstage app:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @internal/plugin-todo-list-backend @internal/plugin-todo-list-common\nyarn --cwd packages/app add @internal/plugin-todo-list\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Include the backend and frontend plugin in your application:"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/todolist.ts"})," with the following content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/todolist.ts"',children:"import { DefaultIdentityClient } from '@backstage/plugin-auth-node';\nimport { createRouter } from '@internal/plugin-todo-list-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin({\n  logger,\n  discovery,\n}: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Apply the following changes to ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import techdocs from './plugins/techdocs';\n/* highlight-add-next-line */\nimport todoList from './plugins/todolist';\nimport search from './plugins/search';\n\nasync function main() {\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n  /* highlight-add-next-line */\n  const todoListEnv = useHotMemoize(module, () => createEnv('todolist'));\n  // ..\n\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n  apiRouter.use('/permission', await permission(permissionEnv));\n  /* highlight-add-next-line */\n  apiRouter.use('/todolist', await todoList(todoListEnv));\n  // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n  apiRouter.use(notFoundHandler());\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Apply the following changes to ",(0,r.jsx)(t.code,{children:"packages/app/src/App.tsx"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'/* highlight-add-next-line */\nimport { TodoListPage } from \'@internal/plugin-todo-list\';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path="/search" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n    <Route path="/settings" element={<UserSettingsPage />} />\n    {/* highlight-add-next-line */}\n    <Route path="/todo-list" element={<TodoListPage />} />\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Now if you start your application you should be able to reach the ",(0,r.jsx)(t.code,{children:"/todo-list"})," page:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Todo List plugin page",src:n(226358).Z+"",width:"1323",height:"611"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"integrate-the-new-plugin",children:"Integrate the new plugin"}),"\n",(0,r.jsx)(t.p,{children:"If you play with the UI, you will notice that it is possible to perform a few actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["create a new todo item (",(0,r.jsx)(t.code,{children:"POST /todos"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["view todo items (",(0,r.jsx)(t.code,{children:"GET /todos"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["edit an existing todo item (",(0,r.jsx)(t.code,{children:"PUT /todos"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Let's try to bring authorization on top of each one of them."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},226358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permission-todo-list-page-6cbdeae87098cd84d982e8ece2442ce9.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var k=b.prototype=new x;k.constructor=b,m(k,y.prototype),k.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,s={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,o)&&!_.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:a,props:s,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,s,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===s?"."+P(c,0):s,j(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,s=""===s?".":s+":",j(e))for(var l=0;l<e.length;l++){var u=s+P(a=e[l],l);c+=C(a,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=C(a=a.value,t,o,u=s+P(a,l++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),s=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)v.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:s,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(667294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);