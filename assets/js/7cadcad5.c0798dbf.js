"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7861],{4476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(814);const s={},l=void 0,o={unversionedId:"guides/built-ins/functions/isDraft/index",id:"guides/built-ins/functions/isDraft/index",title:"index",description:"",source:"@site/docs/guides/built-ins/functions/isDraft/index.mdx",sourceDirName:"guides/built-ins/functions/isDraft",slug:"/guides/built-ins/functions/isDraft/",permalink:"/next/guides/built-ins/functions/isDraft/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isDraft/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Verifies whether the pull request is a draft, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,r.kt)("p",null,"To know more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"GitHub Draft pull request"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,r.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,r.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is a draft, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$isDraft()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\r\n\r\nrules:\r\n  - name: is-ready-to-review\r\n    # The expression is wrapped in quotes to avoid YAML parsing errors\r\n    spec: '!$isDraft() && $hasLinkedIssues() && $hasLinearHistory()'\r\n\r\nworkflows:\r\n  - name: distribute-review\r\n    if:\r\n      - rule: is-ready-to-review\r\n    then:\r\n      - $assignRandomReviewer()\r\n"))}m.isMDXComponent=!0}}]);