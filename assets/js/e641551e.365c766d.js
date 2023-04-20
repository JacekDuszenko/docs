"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6996],{59668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var s=n(87462),l=(n(67294),n(3905)),a=n(90814);const i='workflows:\n  - name: assign-reviewers\n    run:\n      if: $isElementOf("bug", $labels())\n      then: $assignTeamReviewer(["testers"])\n',r={},o=void 0,p={unversionedId:"guides/built-ins/functions/labels/index",id:"version-v4/guides/built-ins/functions/labels/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/labels/index.mdx",sourceDirName:"guides/built-ins/functions/labels",slug:"/guides/built-ins/functions/labels/",permalink:"/guides/built-ins/functions/labels/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/labels/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the list of labels of the pull request / issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"none")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of labels of the pull request / issue.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$labels()\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},i))}c.isMDXComponent=!0}}]);