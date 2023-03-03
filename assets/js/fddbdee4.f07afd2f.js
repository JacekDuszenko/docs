"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3465],{62121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: long-live\n    if:\n      # Verify if the pull request was created more than 10 days ago\n      - $createdAt() < 10 days ago\n    then:\n      - $info("This pull request is old. Please consider closing it.")\n',l={},o=void 0,d={unversionedId:"guides/built-ins/functions/createdAt/index",id:"version-v3/guides/built-ins/functions/createdAt/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/createdAt/index.mdx",sourceDirName:"guides/built-ins/functions/createdAt",slug:"/guides/built-ins/functions/createdAt/",permalink:"/v3/guides/built-ins/functions/createdAt/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/createdAt/index.mdx",tags:[],version:"v3",frontMatter:{}},p={},u=[],c={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the time the pull request / issue was created at."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of seconds elapsed since January 1, 1970 UTC.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$createdAt()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);