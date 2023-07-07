"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4578],{9750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),i=r(814);const o='workflows:\n  - name: check-compliance\n    run:\n      if: $size() > 100\n      then: $error("This pull request is too large")\n',s={},l=void 0,d={unversionedId:"guides/built-ins/actions/error/index",id:"guides/built-ins/actions/error/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/error/index.mdx",sourceDirName:"guides/built-ins/actions/error",slug:"/guides/built-ins/actions/error/",permalink:"/next/guides/built-ins/actions/error/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/error/index.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],c={toc:m},u="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Add a message to the errors section of the report."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"comment")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The comment to be added in the errors.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$error("Please do not touch these files.")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}k.isMDXComponent=!0}}]);