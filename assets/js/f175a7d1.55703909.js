"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7027],{122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(7462),a=(n(7294),n(3905)),i=n(814);const r={},l=void 0,o={unversionedId:"guides/built-ins/functions/hasLinkedIssues/index",id:"guides/built-ins/functions/hasLinkedIssues/index",title:"index",description:"",source:"@site/docs/guides/built-ins/functions/hasLinkedIssues/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinkedIssues",slug:"/guides/built-ins/functions/hasLinkedIssues/",permalink:"/next/guides/built-ins/functions/hasLinkedIssues/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinkedIssues/index.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if a pull request has associated issues that might be closed by it."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has linked issues, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinkedIssues()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\r\n\r\nrules:\r\n  - name: is-compliant\r\n    spec: $hasLinkedIssues() && $hasLinearHistory()\r\n\r\nworkflows:\r\n  - name: assign-reviewers\r\n    if:\r\n      - rule: is-compliant\r\n    then:\r\n      - $assignRandomReviewer()\r\n"))}k.isMDXComponent=!0}}]);