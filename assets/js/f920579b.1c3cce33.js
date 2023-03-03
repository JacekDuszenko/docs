"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[424],{73054:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: warn-large-pull-requests\n    if:\n      - rule: $toNumber($selectFromContext("$.additions")) > 100\n    then:\n      - $warn("please break down large pull requests into smaller and easy to review parts.")\n',o={},s=void 0,p={unversionedId:"guides/built-ins/functions/toNumber/index",id:"version-v3/guides/built-ins/functions/toNumber/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/toNumber/index.mdx",sourceDirName:"guides/built-ins/functions/toNumber",slug:"/guides/built-ins/functions/toNumber/",permalink:"/v3/guides/built-ins/functions/toNumber/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/toNumber/index.mdx",tags:[],version:"v3",frontMatter:{}},m={},u=[],d={toc:u},k="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Converts a string into a number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string value to convert to a number.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The converted number")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$toNumber("1")\n$toNumber("-1")\n$toNumber($selectFromContext("$.comments"))\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);