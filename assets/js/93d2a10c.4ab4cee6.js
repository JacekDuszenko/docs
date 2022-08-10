"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4515],{3905:(e,i,t)=>{t.d(i,{Zo:()=>l,kt:()=>u});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var i=n.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},l=function(e){var i=s(e.components);return n.createElement(p.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||a;return t?n.createElement(m,o(o({ref:i},l),{},{components:t})):n.createElement(m,o({ref:i},l))}));function u(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in i)hasOwnProperty.call(i,p)&&(c[p]=i[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2713:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const a={title:"Aladino Specification",id:"aladino-specification"},o=void 0,c={unversionedId:"reviewpad-file-specification/aladino-specification/aladino-specification",id:"version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-specification",title:"Aladino Specification",description:"Aladino is a simple language to specify steps in pull request workflows.",source:"@site/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-specification.md",sourceDirName:"reviewpad-file-specification/aladino-specification",slug:"/reviewpad-file-specification/aladino-specification/",permalink:"/maester/reviewpad-file-specification/aladino-specification/",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-specification.md",tags:[],version:"3.0.1",frontMatter:{title:"Aladino Specification",id:"aladino-specification"},sidebar:"DocsSidebar",previous:{title:"Reviewpad Semantics",permalink:"/maester/reviewpad-file-specification/reviewpad-semantics"},next:{title:"Aladino Syntax",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-syntax"}},p={},s=[],l={toc:s};function f(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aladino is a simple language to specify steps in pull request workflows. "),(0,r.kt)("p",null,"The expressions in the language allow you to easily perform read and write actions on pull requests."))}f.isMDXComponent=!0}}]);