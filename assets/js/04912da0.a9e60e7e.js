/*! For license information please see 04912da0.a9e60e7e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[214816],{65552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var n=r(824246),o=r(511151);const u={id:"plugin-explore-react.exploretoolsconfig.gettools",title:"ExploreToolsConfig.getTools",description:"API reference for ExploreToolsConfig.getTools"},c=void 0,l={id:"reference/plugin-explore-react.exploretoolsconfig.gettools",title:"ExploreToolsConfig.getTools",description:"API reference for ExploreToolsConfig.getTools",source:"@site/../docs/reference/plugin-explore-react.exploretoolsconfig.gettools.md",sourceDirName:"reference",slug:"/reference/plugin-explore-react.exploretoolsconfig.gettools",permalink:"/docs/reference/plugin-explore-react.exploretoolsconfig.gettools",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-explore-react.exploretoolsconfig.gettools.md",tags:[],version:"current",frontMatter:{id:"plugin-explore-react.exploretoolsconfig.gettools",title:"ExploreToolsConfig.getTools",description:"API reference for ExploreToolsConfig.getTools"}},s={},i=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-react",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-explore-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-react.exploretoolsconfig",children:(0,n.jsx)(t.code,{children:"ExploreToolsConfig"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-explore-react.exploretoolsconfig.gettools",children:(0,n.jsx)(t.code,{children:"getTools"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getTools: () => Promise<ExploreTool[]>;\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:l.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function x(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=x.prototype=new _;v.constructor=x,g(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},c=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var i=Array(s),a=0;a<s;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:r,type:e,key:c,ref:l,props:u,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,u,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return c=c(s=e),e=""===u?"."+R(s,0):u,b(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),T(c,t,o,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(s=0,u=""===u?".":u+":",b(e))for(var i=0;i<e.length;i++){var a=u+R(l=e[i],i);s+=T(l,t,o,a,c)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),i=0;!(l=e.next()).done;)s+=T(l=l.value,t,o,a=u+R(l,i++),c);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,t,r){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=x,t.StrictMode=u,t.Suspense=a,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)E.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==s?s[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var a=0;a<i;a++)s[a]=arguments[a+2];o.children=s}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>c});var n=r(667294);const o={},u=n.createContext(o);function c(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);