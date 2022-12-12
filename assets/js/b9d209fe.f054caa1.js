"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76649],{23386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=a(87462),r=(a(67294),a(3905)),d=a(90814);const s={},i=void 0,l={unversionedId:"guides/built-ins/functions/hasUnaddressedThreads/index",id:"version-3.12.0/guides/built-ins/functions/hasUnaddressedThreads/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",sourceDirName:"guides/built-ins/functions/hasUnaddressedThreads",slug:"/guides/built-ins/functions/hasUnaddressedThreads/",permalink:"/3.12.0/guides/built-ins/functions/hasUnaddressedThreads/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},p={},o=[],u={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Verifies whether the pull request has review threads that are unaddressed, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,r.kt)("p",null,"A review thread is unaddressed when it is not ",(0,r.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"outdated"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available for:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"issue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has any review thread that is not ",(0,r.kt)("inlineCode",{parentName:"td"},"resolved")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"outdated"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$hasUnaddressedThreads()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(d.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: attention-set\n    if:\n      - $hasUnaddressedThreads()\n    then:\n      - $addLabel("requires-author-attention")\n'))}m.isMDXComponent=!0}}]);