"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23997],{56479:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const o={},l=void 0,r={unversionedId:"guides/built-ins/actions/comment/index",id:"guides/built-ins/actions/comment/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/comment/index.mdx",sourceDirName:"guides/built-ins/actions/comment",slug:"/guides/built-ins/actions/comment/",permalink:"/next/guides/built-ins/actions/comment/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/comment/index.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Posts a comment to the pull request / issue."),(0,i.kt)("p",null,"Note that this comment will always be added whenever this action is executed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The body of the comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$comment("This pull request has git conflicts. Please resolve them.")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: update-to-date\n    if:\n      - $hasLinearHistory() == false\n    then:\n      - $fail("The pull request does not have a linear history.")\n'))}c.isMDXComponent=!0}}]);