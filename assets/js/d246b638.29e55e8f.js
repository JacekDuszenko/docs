"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"First Revy Action: PR Size Label",id:"first-revy-action:-pr-size-label"},o=void 0,l={unversionedId:"getting-started/first-revy-action:-pr-size-label",id:"version-3.0.1/getting-started/first-revy-action:-pr-size-label",title:"First Revy Action: PR Size Label",description:"This page will help you run your first Reviewpad Action to automatically label pull requests in a GitHub repository depending on their size.",source:"@site/versioned_docs/version-3.0.1/getting-started/first-revy-action:-pr-size-label.md",sourceDirName:"getting-started",slug:"/getting-started/first-revy-action:-pr-size-label",permalink:"/getting-started/first-revy-action:-pr-size-label",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/getting-started/first-revy-action:-pr-size-label.md",tags:[],version:"3.0.1",frontMatter:{title:"First Revy Action: PR Size Label",id:"first-revy-action:-pr-size-label"},sidebar:"DocsSidebar",previous:{title:"Welcome to Reviewpad",permalink:"/"},next:{title:"Ship/Show/Ask",permalink:"/use-cases/ship-show-ask"}},s={},p=[{value:"Step 1. Configure the GitHub action",id:"step-1-configure-the-github-action",level:2},{value:"Step 2. Add <code>reviewpad.yml</code> to the root of the repository",id:"step-2-add-reviewpadyml-to-the-root-of-the-repository",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page will help you run your first Reviewpad Action to automatically label pull requests in a GitHub repository depending on their size."),(0,i.kt)("p",null,"You can check this Reviewpad action in the GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-showcase"},"reviewpad/action-showcase"),"."),(0,i.kt)("p",null,"To keep things simple, we will consider the size of a pull request as the sum of number added lines with the number of deleted lines."),(0,i.kt)("p",null,"Our goal is to automatically label PRs depending on their size:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"small")," until 90 LOC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"medium")," from 90 until 300 LOC "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"large")," to PRs after 300 LOC.")),(0,i.kt)("p",null,"To do this, we just need to do two steps."),(0,i.kt)("h2",{id:"step-1-configure-the-github-action"},"Step 1. Configure the GitHub action"),(0,i.kt)("p",null,"Configure Reviewpad as a GitHub Action in a ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request")," workflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        # Set version v3.x to automatically receive minor and patch updates\n        uses: reviewpad/action@v3.x\n")),(0,i.kt)("p",null,"The source code of the GitHub Action can be found in the GitHub repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action"},"reviewpad/action"),"."),(0,i.kt)("h2",{id:"step-2-add-reviewpadyml-to-the-root-of-the-repository"},"Step 2. Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of the repository"),(0,i.kt)("p",null,"Add the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," to the root of your repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    name: "small"\n    description: Small changes\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n  medium:\n    name: "medium"\n    description: Medium changes\n    color: "a8c3f7"\n  large:\n    name: "large"\n    description: Large changes\n    color: "8a2138"\n\nrules:\n  - name: isSmall\n    kind: patch\n    description: Small pull request\n    spec: $size() <= 30\n\n  - name: isMedium\n    kind: patch\n    description: Medium-sized pull request\n    spec: $size() > 30 && $size() <= 100\n\n  - name: isLarge\n    kind: patch\n    description: Large-sized pull request\n    spec: $size() > 100\n\nworkflows:\n  - name: label-pull-request-with-size\n    description: Label pull request with size\n    if:\n      - rule: isSmall\n        extra-actions:\n          - $addLabel("small")\n      - rule: isMedium\n        extra-actions:\n          - $addLabel("medium")\n      - rule: isLarge\n        extra-actions:\n          - $addLabel("large")\n')),(0,i.kt)("p",null,"Now, on each pull request event that triggers the GitHub workflow, Reviewpad will put the appropriated label depending on the size."),(0,i.kt)("p",null,"As an example of this automation, check this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-showcase/pull/20"},"pull request"),"."))}c.isMDXComponent=!0}}]);