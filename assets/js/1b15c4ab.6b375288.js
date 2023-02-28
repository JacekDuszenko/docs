"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9842],{6955:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(7462),a=(n(7294),n(3905)),o=n(814);const r={},s=void 0,l={unversionedId:"guides/built-ins/functions/commentCount/index",id:"guides/built-ins/functions/commentCount/index",title:"index",description:"",source:"@site/docs/guides/built-ins/functions/commentCount/index.mdx",sourceDirName:"guides/built-ins/functions/commentCount",slug:"/guides/built-ins/functions/commentCount/",permalink:"/next/guides/built-ins/functions/commentCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commentCount/index.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the total number of comments made into the pull request / issue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of comments in the pull request / issue.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commentCount()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: high-activity\r\n    if:\r\n      - $commentCount() > 15\r\n    then:\r\n      - $info("Please consider splitting the pull request into smaller pull requests.")\r\n'))}d.isMDXComponent=!0}}]);