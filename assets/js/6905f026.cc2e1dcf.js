"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[426],{19477:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),a=n(90814);const s='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: high-activity\n    if:\n      - $commitCount() > 10\n    then:\n      - $info("Please consider splitting the pull request into smaller pull requests.")\n',l={},r=void 0,u={unversionedId:"guides/built-ins/functions/commitCount/index",id:"version-v4/guides/built-ins/functions/commitCount/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/commitCount/index.mdx",sourceDirName:"guides/built-ins/functions/commitCount",slug:"/guides/built-ins/functions/commitCount/",permalink:"/guides/built-ins/functions/commitCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commitCount/index.mdx",tags:[],version:"v4",frontMatter:{}},m={},p=[],d={toc:p},c="wrapper";function k(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Retrieves the total number of commits made into the pull request."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"none")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"int")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The total number of commits in the pull request.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"$commitCount()\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);