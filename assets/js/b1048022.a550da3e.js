"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4080],{57834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const r='workflows:\n  - name: assign-reviewer-when-pr-ready-for-review\n    if:\n      - $eventType() == "ready_for_review"\n    then:\n      - $assignRandomReviewer()\n',l={},p=void 0,o={unversionedId:"guides/built-ins/functions/eventType/index",id:"guides/built-ins/functions/eventType/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/docs/guides/built-ins/functions/eventType/index.mdx",sourceDirName:"guides/built-ins/functions/eventType",slug:"/guides/built-ins/functions/eventType/",permalink:"/next/guides/built-ins/functions/eventType/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/eventType/index.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the type of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request"},"pull request event"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"pull_request")," event activity type.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$eventType()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}c.isMDXComponent=!0}}]);