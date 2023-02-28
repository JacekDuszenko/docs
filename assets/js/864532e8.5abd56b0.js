"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9994],{7034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),a=n(814);const s={},d=void 0,l={unversionedId:"guides/built-ins/functions/isMerged/index",id:"version-v3/guides/built-ins/functions/isMerged/index",title:"index",description:"",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/isMerged/index.mdx",sourceDirName:"guides/built-ins/functions/isMerged",slug:"/guides/built-ins/functions/isMerged/",permalink:"/guides/built-ins/functions/isMerged/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isMerged/index.mdx",tags:[],version:"v3",frontMatter:{}},o={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Verifies whether a pull request is merged, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,r.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,r.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is merged, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$isMerged()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: notify-unaddressed-threads-merge\r\n    if:\r\n      - rule: $hasUnaddressedThreads() && $isMerged()\r\n    then:\r\n      - $comment("Pull request merged with unaddressed threads!")\r\n'))}m.isMDXComponent=!0}}]);