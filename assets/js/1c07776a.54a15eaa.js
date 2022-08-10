"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[6642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={title:"Aladino Syntax",id:"aladino-syntax"},o=void 0,l={unversionedId:"reviewpad-file-specification/aladino-specification/aladino-syntax",id:"version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-syntax",title:"Aladino Syntax",description:"The syntax of Aladino is quite simple. Here\u2019s the BNF grammar representation:",source:"@site/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-syntax.md",sourceDirName:"reviewpad-file-specification/aladino-specification",slug:"/reviewpad-file-specification/aladino-specification/aladino-syntax",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-syntax",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-syntax.md",tags:[],version:"3.0.1",frontMatter:{title:"Aladino Syntax",id:"aladino-syntax"},sidebar:"DocsSidebar",previous:{title:"Aladino Specification",permalink:"/maester/reviewpad-file-specification/aladino-specification/"},next:{title:"Aladino Semantics",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-semantics"}},s={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The syntax of Aladino is quite simple. Here\u2019s the BNF grammar representation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"prog := stat_list\nstat := expr\nexpr := expr BINOP expr\n      | UNARYOP expr\n      | TIMESTAMP\n      | RELATIVE_TIMESTAMP\n      | NUMBER\n      | STRING\n      | BOOLEAN\n      | '[' expr_list ']'\n      | '$' IDENTIFIER '(' expr_list ')'\n\nTIMESTAMP := \n        YYYYMMDD \n      | YYYY-MM-DD\n      | YYYYMMDDTHH:MM:SS\n      | YYYY-MM-DDTHH:MM:SS\n\nRELATIVE_TIMESTAMP := NUMBER TIME_UNIT ago\n\nTIME_UNIT := \n        'year'   | 'years'\n      | 'month'  | 'months'\n      | 'week'   | 'weeks'\n      | 'day'    | 'days'\n      | 'hour'   | 'hours'\n      | 'minute' | 'minutes'\n\nBINOP := \n        '==' | '>=' | '>' | '<' | '<=' \n      | '&&' | '||' \n\nUNARYOP := '!'\n")),(0,a.kt)("p",null,"This allows us to specify:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logical expressions: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'"a" == "a"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},"$fun() == 1"),";"),(0,a.kt)("li",{parentName:"ol"},"Function calls: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'$label("bug")'))))}d.isMDXComponent=!0}}]);