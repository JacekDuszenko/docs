"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27076],{27933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/functions/isWaitingForReview/index",id:"version-3.16.0/guides/built-ins/functions/isWaitingForReview/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.16.0/guides/built-ins/functions/isWaitingForReview/index.mdx",sourceDirName:"guides/built-ins/functions/isWaitingForReview",slug:"/guides/built-ins/functions/isWaitingForReview/",permalink:"/3.16.0/guides/built-ins/functions/isWaitingForReview/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isWaitingForReview/index.mdx",tags:[],version:"3.16.0",frontMatter:{}},p={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Verifies whether a pull request is waiting for review, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("p",null,"A pull request is set as waiting for review when there are ",(0,a.kt)("strong",{parentName:"p"},"requested reviewers")," or when there's at least one reviewer whose last review is ",(0,a.kt)("strong",{parentName:"p"},"outdated"),"."),(0,a.kt)("p",null,"An outdated review is a review submitted before the last pull request update and whose state is not approved."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,a.kt)("strong",{parentName:"p"},"not")," available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is waiting for review, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$isWaitingForReview()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: attention-set\n    if:\n      - rule: $isWaitingForReview()\n        extra-actions:\n          - $addLabel("waiting-for-review")\n      - rule: $hasUnaddressedThreads()\n        extra-actions:\n          - $addLabel("requires-author-attention")\n'))}m.isMDXComponent=!0}}]);