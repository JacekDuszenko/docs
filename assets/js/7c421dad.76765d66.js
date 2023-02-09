"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36572],{4750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},o=void 0,p={unversionedId:"guides/built-ins/functions/isDraft/index",id:"version-3.23.0/guides/built-ins/functions/isDraft/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.23.0/guides/built-ins/functions/isDraft/index.mdx",sourceDirName:"guides/built-ins/functions/isDraft",slug:"/guides/built-ins/functions/isDraft/",permalink:"/3.23.0/guides/built-ins/functions/isDraft/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isDraft/index.mdx",tags:[],version:"3.23.0",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Verifies whether the pull request is a draft, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,"To know more about ",(0,i.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"GitHub Draft pull request"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is a draft, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$isDraft()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-ready-to-review\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: '!$isDraft() && $hasLinkedIssues() && $hasLinearHistory()'\n\nworkflows:\n  - name: distribute-review\n    if:\n      - rule: is-ready-to-review\n    then:\n      - $assignRandomReviewer()\n"))}m.isMDXComponent=!0}}]);