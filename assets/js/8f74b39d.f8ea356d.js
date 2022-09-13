"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1096:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={},o=void 0,l={type:"mdx",permalink:"/changelog/reviewpad-v320-faro-edition",source:"@site/src/pages/changelog/reviewpad-v320-faro-edition.md",description:"New features",frontMatter:{}},s=[{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Functions",id:"functions",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Actions",id:"actions",level:3},{value:"Improvements \ud83d\ude80",id:"improvements-",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,i.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hasunaddressedthreads"},(0,i.kt)("inlineCode",{parentName:"a"},"hasUnaddressedThreads"))," - Verifies whether the pull request has review threads that aren't either ",(0,i.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"outdated"),"."),(0,i.kt)("h3",{id:"utilities"},"Utilities"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#sprintf"},(0,i.kt)("inlineCode",{parentName:"a"},"sprintf"))," -  Returns a formatted string."),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#addtoproject"},(0,i.kt)("inlineCode",{parentName:"a"},"addToProject"))," - Adds a pull request to a project with a particular status."),(0,i.kt)("h2",{id:"improvements-"},"Improvements \ud83d\ude80"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Report simplified to a list of triggered action.")))}p.isMDXComponent=!0}}]);