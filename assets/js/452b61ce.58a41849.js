"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7031],{66090:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const o='workflows:\n  - name: waiting-for-feedback\n    run:\n      if: $comments() == []\n      then: $addLabel("waiting-for-feedback")\n',r={},l=void 0,m={unversionedId:"guides/built-ins/functions/comments/index",id:"guides/built-ins/functions/comments/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/comments/index.mdx",sourceDirName:"guides/built-ins/functions/comments",slug:"/guides/built-ins/functions/comments/",permalink:"/next/guides/built-ins/functions/comments/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/comments/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],d={toc:u},c="wrapper";function k(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the list of comment body of the pull request / issue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of comment body of the pull request / issue.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$comments()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}k.isMDXComponent=!0}}]);