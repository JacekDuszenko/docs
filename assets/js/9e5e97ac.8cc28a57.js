"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[59500],{21102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905)),r=n(90814);const d={},i=void 0,l={unversionedId:"guides/built-ins/functions/hasUnaddressedThreads/index",id:"version-3.15.0/guides/built-ins/functions/hasUnaddressedThreads/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",sourceDirName:"guides/built-ins/functions/hasUnaddressedThreads",slug:"/guides/built-ins/functions/hasUnaddressedThreads/",permalink:"/3.15.0/guides/built-ins/functions/hasUnaddressedThreads/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},o={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Verifies whether the pull request has review threads that are unaddressed, returning ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,s.kt)("p",null,"A review thread is unaddressed when it is not ",(0,s.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"outdated"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has any review thread that is not ",(0,s.kt)("inlineCode",{parentName:"td"},"resolved")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"outdated"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$hasUnaddressedThreads()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: attention-set\n    if:\n      - $hasUnaddressedThreads()\n    then:\n      - $addLabel("requires-author-attention")\n'))}m.isMDXComponent=!0}}]);