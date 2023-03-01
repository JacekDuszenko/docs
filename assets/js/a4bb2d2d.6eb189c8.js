"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9508],{20611:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),s=n(90814);const a='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $commitLint()\n',m={},c=void 0,l={unversionedId:"guides/built-ins/actions/commitLint/index",id:"version-Latest/guides/built-ins/actions/commitLint/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Latest/guides/built-ins/actions/commitLint/index.mdx",sourceDirName:"guides/built-ins/actions/commitLint",slug:"/guides/built-ins/actions/commitLint/",permalink:"/guides/built-ins/actions/commitLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/commitLint/index.mdx",tags:[],version:"Latest",frontMatter:{}},r={},p=[],d={toc:p},u="wrapper";function k(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Checks if the commits in the pull request follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"none")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"$commitLint()\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}k.isMDXComponent=!0}}]);