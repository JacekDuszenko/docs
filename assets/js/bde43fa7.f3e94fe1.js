"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8883],{4127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(814);const p={},s=void 0,o={unversionedId:"guides/built-ins/actions/approve/index",id:"guides/built-ins/actions/approve/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/approve/index.mdx",sourceDirName:"guides/built-ins/actions/approve",slug:"/guides/built-ins/actions/approve/",permalink:"/next/guides/built-ins/actions/approve/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/approve/index.mdx",tags:[],version:"current",frontMatter:{}},l={},d=[],m={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Submits a pull request review marked as approved."),(0,i.kt)("admonition",{title:"note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is a shortcut to the ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#review"},(0,i.kt)("inlineCode",{parentName:"a"},"review"))," built-in.\nIt is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},'$review("APPROVE", <MESSAGE>)'),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The message to write as a comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$approve()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: trivial-changes\n    if:\n      - $hasFileExtensions([".md"])\n    then:\n      - $approve("LGTM")\n'))}u.isMDXComponent=!0}}]);