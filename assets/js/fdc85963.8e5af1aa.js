"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3785],{2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=n(7462),l=(n(7294),n(3905)),a=n(814);const i={},r=void 0,o={unversionedId:"guides/built-ins/functions/labels/index",id:"version-v3/guides/built-ins/functions/labels/index",title:"index",description:"",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/labels/index.mdx",sourceDirName:"guides/built-ins/functions/labels",slug:"/guides/built-ins/functions/labels/",permalink:"/guides/built-ins/functions/labels/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/labels/index.mdx",tags:[],version:"v3",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the list of labels of the pull request / issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"none")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of labels of the pull request / issue.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$labels()\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: assign-reviewers\r\n    if:\r\n      - rule: $isElementOf("bug", $labels())\r\n    then:\r\n      - $assignTeamReviewer(["testers"])\r\n'))}m.isMDXComponent=!0}}]);