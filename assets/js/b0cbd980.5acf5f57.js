"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[1054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(w,i(i({ref:t},p),{},{components:r})):n.createElement(w,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Welcome to Reviewpad",id:"welcome-to-reviewpad"},i=void 0,l={unversionedId:"getting-started/welcome-to-reviewpad",id:"getting-started/welcome-to-reviewpad",title:"Welcome to Reviewpad",description:"Reviewpad is an easy-to-use GitHub Action to accelerate the software delivery lifecycle.",source:"@site/docs/getting-started/welcome-to-reviewpad.md",sourceDirName:"getting-started",slug:"/getting-started/welcome-to-reviewpad",permalink:"/maester/docs/next/getting-started/welcome-to-reviewpad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/welcome-to-reviewpad.md",tags:[],version:"current",frontMatter:{title:"Welcome to Reviewpad",id:"welcome-to-reviewpad"},sidebar:"DocsSidebar",next:{title:"First Revy Action: PR Size Label",permalink:"/maester/docs/next/getting-started/first-revy-action:-pr-size-label"}},s={},c=[{value:"Why Reviewpad?",id:"why-reviewpad",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reviewpad is an easy-to-use GitHub Action to accelerate the software delivery lifecycle. "),(0,a.kt)("p",null,"Reviewpad reads a ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file from your repository where you can specify pull request workflows. The action enforces and automates those processes so that developers can have more time for the things that really matter!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reviewpad Preview",src:r(3461).Z,width:"3070",height:"2406"})),(0,a.kt)("h2",{id:"why-reviewpad"},"Why Reviewpad?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pull requests take too much time to merge.")),(0,a.kt)("p",null,"Most actions around pull requests such as reviewer assignment, the code review itself and the merge actions are still manual. It is up to the developers to understand 1) who should review, 2) what to review, 3) when to merge and 4) how to merge. "),(0,a.kt)("p",null,"We believe that most of these actions follow an implicit team policy that could be specified and automated."),(0,a.kt)("p",null,"So we have created Reviewpad to help you automate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pull request merges;"),(0,a.kt)("li",{parentName:"ol"},"Code review assignment policies;"),(0,a.kt)("li",{parentName:"ol"},"Custom code quality and security comments;"),(0,a.kt)("li",{parentName:"ol"},"Pull request labels.")),(0,a.kt)("p",null,"Finally, having workflow configurations in a git repository allows them to be updated in a consistent way and help onboarding new team members."))}u.isMDXComponent=!0},3461:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/0f78539-Reviewpad_Preview_A2x_1-29e0b8673e1081e4922522911fb4d201.png"}}]);