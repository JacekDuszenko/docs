"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6825],{99239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: staging-changes\n    if:\n      - $base() == "stage"\n    then:\n      - $info("Please make sure you\'ve tested your changes in staging environment.")\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/base/index",id:"version-Legacy/guides/built-ins/functions/base/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Legacy/guides/built-ins/functions/base/index.mdx",sourceDirName:"guides/built-ins/functions/base",slug:"/guides/built-ins/functions/base/",permalink:"/Legacy/guides/built-ins/functions/base/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/base/index.mdx",tags:[],version:"Legacy",frontMatter:{}},u={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the name of the branch the pull request should be pulled into."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the branch the pull request should be pulled into.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$base()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);