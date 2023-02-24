"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3878],{91950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s={},d=void 0,l={unversionedId:"guides/built-ins/functions/isMerged/index",id:"version-3.27.0/guides/built-ins/functions/isMerged/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.27.0/guides/built-ins/functions/isMerged/index.mdx",sourceDirName:"guides/built-ins/functions/isMerged",slug:"/guides/built-ins/functions/isMerged/",permalink:"/guides/built-ins/functions/isMerged/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isMerged/index.mdx",tags:[],version:"3.27.0",frontMatter:{}},o={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Verifies whether a pull request is merged, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is merged, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$isMerged()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: notify-unaddressed-threads-merge\n    if:\n      - rule: $hasUnaddressedThreads() && $isMerged()\n    then:\n      - $comment("Pull request merged with unaddressed threads!")\n'))}m.isMDXComponent=!0}}]);