"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[513],{52536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s='api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-author-by-tech-lead\n    spec: $author() == "john"\n\nworkflows:\n  - name: share-knowledge\n    if:\n      - rule: is-author-by-tech-lead\n    then:\n      - $assignTeamReviewer(["juniors"])\n',o={},l=void 0,u={unversionedId:"guides/built-ins/functions/author/index",id:"version-v3/guides/built-ins/functions/author/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/author/index.mdx",sourceDirName:"guides/built-ins/functions/author",slug:"/guides/built-ins/functions/author/",permalink:"/v3/guides/built-ins/functions/author/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/author/index.mdx",tags:[],version:"v3",frontMatter:{}},p={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the pull request / issue author GitHub login."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The GitHub login of the pull request / issue author.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$author()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);