"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[1747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},662:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,l={type:"mdx",permalink:"/changelog/reviewpad-v100",source:"@site/src/pages/changelog/reviewpad-v100.md",description:"New features",frontMatter:{}},c=[{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"YAML Specification",id:"yaml-specification",level:3},{value:"Aladino Language",id:"aladino-language",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Actions",id:"actions",level:3},{value:"Functions",id:"functions",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,i.kt)("h3",{id:"yaml-specification"},"YAML Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated protectionGates syntax to workflows format."),(0,i.kt)("li",{parentName:"ul"},"Edition property ")),(0,i.kt)("h3",{id:"aladino-language"},"Aladino Language"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/use-cases/timestamps"},"Timestamps")," - RFC3339 timestamps or relative timestamps.")),(0,i.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#close"},(0,i.kt)("inlineCode",{parentName:"a"},"close"))," - Closes a pull request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#comment"},(0,i.kt)("inlineCode",{parentName:"a"},"comment"))," - Adds a comment to the pull request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#error"},(0,i.kt)("inlineCode",{parentName:"a"},"error"))," - Add a message to the errors section of the report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#info"},(0,i.kt)("inlineCode",{parentName:"a"},"info"))," - Add a message to the info section of the report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#warn"},(0,i.kt)("inlineCode",{parentName:"a"},"warn"))," - Add a message to the warnings section of the report.")),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#changed"},(0,i.kt)("inlineCode",{parentName:"a"},"changed"))," - Checks for correlations between file patterns.")))}s.isMDXComponent=!0}}]);