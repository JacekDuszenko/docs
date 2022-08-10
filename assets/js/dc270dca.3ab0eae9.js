"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Security Information",slug:"security-information"},a=void 0,c={unversionedId:"product-development/security-information",id:"version-3.0.1/product-development/security-information",title:"Security Information",description:"Reviewpad Action is distributed through Docker images so that it can be executed easily with any runner. This can be either a GitHub action runner, developer machine, or a server in the organisation.",source:"@site/versioned_docs/version-3.0.1/product-development/security-information.md",sourceDirName:"product-development",slug:"/product-development/security-information",permalink:"/maester/product-development/security-information",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/product-development/security-information.md",tags:[],version:"3.0.1",frontMatter:{title:"Security Information",slug:"security-information"},sidebar:"DocsSidebar",previous:{title:"VSCode Reviewpad YAML Schema",permalink:"/maester/tooling/vscode-reviewpad-yaml-schema"}},s={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reviewpad Action is distributed through Docker images so that it can be executed easily with any runner. This can be either a GitHub action runner, developer machine, or a server in the organisation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A running instance of Reviewpad does not communicate with ",(0,o.kt)("a",{parentName:"strong",href:"http://reviewpad.com/"},"Reviewpad.com")," servers or any non-disclosed third-party to send any information.")),(0,o.kt)("p",null,"Reviewpad executions do not communicate between them, they are ephemeral and run in an isolated environment from other users so that there is no possibility of information leaks between environments."),(0,o.kt)("p",null,"For further investigation, you can inspect the Docker images on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/reviewpad/action"},"dockerhub"),"."))}l.isMDXComponent=!0}}]);