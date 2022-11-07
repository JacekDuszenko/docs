"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[78831],{42939:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),r=i(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/functions/isWaitingForReview/index",id:"version-3.11.0/guides/built-ins/functions/isWaitingForReview/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.11.0/guides/built-ins/functions/isWaitingForReview/index.mdx",sourceDirName:"guides/built-ins/functions/isWaitingForReview",slug:"/guides/built-ins/functions/isWaitingForReview/",permalink:"/3.11.0/guides/built-ins/functions/isWaitingForReview/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isWaitingForReview/index.mdx",tags:[],version:"3.11.0",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Verifies whether a pull request is waiting for review, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("p",null,"A pull request is set as waiting for review when there are ",(0,a.kt)("strong",{parentName:"p"},"requested reviewers")," or when there's at least one reviewer whose last review is ",(0,a.kt)("strong",{parentName:"p"},"outdated"),"."),(0,a.kt)("p",null,"An outdated review is a review submitted before the last pull request update and whose state is not approved."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is waiting for review, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$isWaitingForReview()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: is-waiting-for-review\n    kind: patch\n    description: Verifies if the pull request is waiting for review\n    spec: '$isWaitingForReview()'\n"))}m.isMDXComponent=!0}}]);