"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8740],{93633:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s='rules:\n  - name: is-author-by-tech-lead\n    spec: $author() == "john"\n\nworkflows:\n  - name: share-knowledge\n    if:\n      - rule: is-author-by-tech-lead\n    then:\n      - $assignTeamReviewer(["juniors"])\n',u={},l=void 0,o={unversionedId:"guides/built-ins/functions/author/index",id:"guides/built-ins/functions/author/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/author/index.mdx",sourceDirName:"guides/built-ins/functions/author",slug:"/guides/built-ins/functions/author/",permalink:"/next/guides/built-ins/functions/author/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/author/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the pull request / issue author GitHub login."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GitHub login of the pull request / issue author.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$author()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);