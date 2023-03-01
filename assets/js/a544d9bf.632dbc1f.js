"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3232],{5144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905)),s=n(814);const i={},r=void 0,p={unversionedId:"guides/built-ins/functions/labels/index",id:"guides/built-ins/functions/labels/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/labels/index.mdx",sourceDirName:"guides/built-ins/functions/labels",slug:"/guides/built-ins/functions/labels/",permalink:"/next/guides/built-ins/functions/labels/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/labels/index.mdx",tags:[],version:"current",frontMatter:{}},o={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the list of labels of the pull request / issue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of labels of the pull request / issue.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$labels()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewers\n    if:\n      - rule: $isElementOf("bug", $labels())\n    then:\n      - $assignTeamReviewer(["testers"])\n'))}m.isMDXComponent=!0}}]);