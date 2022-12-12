"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27774],{17697:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const o={},l=void 0,r={unversionedId:"guides/built-ins/actions/titleLint/index",id:"version-3.17.0/guides/built-ins/actions/titleLint/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.17.0/guides/built-ins/actions/titleLint/index.mdx",sourceDirName:"guides/built-ins/actions/titleLint",slug:"/guides/built-ins/actions/titleLint/",permalink:"/guides/built-ins/actions/titleLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/titleLint/index.mdx",tags:[],version:"3.17.0",frontMatter:{}},p={},c=[],d={toc:c};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if the pull request title follows the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,a.kt)("strong",{parentName:"p"},"not")," available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$titleLint()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $titleLint()\n'))}m.isMDXComponent=!0}}]);