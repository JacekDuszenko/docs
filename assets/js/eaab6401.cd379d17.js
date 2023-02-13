"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88977],{77712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const s={},r=void 0,l={unversionedId:"guides/built-ins/actions/deleteHeadBranch/index",id:"guides/built-ins/actions/deleteHeadBranch/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/deleteHeadBranch/index.mdx",sourceDirName:"guides/built-ins/actions/deleteHeadBranch",slug:"/guides/built-ins/actions/deleteHeadBranch/",permalink:"/next/guides/built-ins/actions/deleteHeadBranch/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/deleteHeadBranch/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Deletes the head branch of the pull request."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in does not work on pull request from forks.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deleting a branch will cause all pull requests that have the deleted branch as head or base to be closed.")),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is only executed if the pull request is either closed or merged.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$deleteHeadBranch()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: ready-to-merge\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: ready-to-merge\n    then:\n      - $merge()\n      - $deleteHeadBranch()\n\n'))}u.isMDXComponent=!0}}]);