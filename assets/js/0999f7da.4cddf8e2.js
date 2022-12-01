"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[99855],{12504:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),o=n(90814);const s={},r=void 0,l={unversionedId:"guides/built-ins/functions/commentCount/index",id:"version-3.14.0/guides/built-ins/functions/commentCount/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.14.0/guides/built-ins/functions/commentCount/index.mdx",sourceDirName:"guides/built-ins/functions/commentCount",slug:"/guides/built-ins/functions/commentCount/",permalink:"/3.14.0/guides/built-ins/functions/commentCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commentCount/index.mdx",tags:[],version:"3.14.0",frontMatter:{}},m={},u=[],p={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the total number of comments made into the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of comments in the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commentCount()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: high-activity\n    if:\n      - $commentCount() > 15\n    then:\n      - $info("Please consider splitting the pull request into smaller pull requests.")\n'))}d.isMDXComponent=!0}}]);