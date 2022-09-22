"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4920],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?o.createElement(d,c(c({ref:n},m),{},{components:t})):o.createElement(d,c({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={title:"Enforce conventional commits",id:"enforce-conventional-commits"},c=void 0,a={unversionedId:"use-cases/enforce-conventional-commits",id:"use-cases/enforce-conventional-commits",title:"Enforce conventional commits",description:"Conventional commits is a specification for adding human and machine readable meaning to commit messages",source:"@site/docs/use-cases/enforce-conventional-commits.md",sourceDirName:"use-cases",slug:"/use-cases/enforce-conventional-commits",permalink:"/next/use-cases/enforce-conventional-commits",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-conventional-commits.md",tags:[],version:"current",frontMatter:{title:"Enforce conventional commits",id:"enforce-conventional-commits"},sidebar:"DocsSidebar",previous:{title:"Enforce branch conventions",permalink:"/next/use-cases/enforce-branch-conventions"},next:{title:"Label pull requests with Git conflicts",permalink:"/next/use-cases/label-pull-requests-with-git-conflicts"}},s={},l=[{value:"Enforce conventional commits",id:"enforce-conventional-commits",level:2}],m={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional commits")," is a specification for adding human and machine readable meaning to commit messages"),(0,r.kt)("p",null,"Reviewpad can be used to check and provide an error message if a commit in a pull request do not comply with the conventional commits specification."),(0,r.kt)("h2",{id:"enforce-conventional-commits"},"Enforce conventional commits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: lint-commits\n    description: Lint commit messages\n    if:\n      - rule: '!$hasLinearHistory()'\n        extra-actions:\n          - '$warn(\"This pull request does not have linear history - please fix this!\")'\n      - rule: 'true'\n        extra-actions:\n          - '$commitLint()'\n")))}p.isMDXComponent=!0}}]);