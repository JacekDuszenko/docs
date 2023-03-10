"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5061],{5023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s='workflows:\n  - name: label-change-type\n    if:\n      - rule: $startsWith($head(), "feat/")\n        extra-actions:\n          - $addLabel("feature")\n      - rule: $startsWith($head(), "fix/")\n        extra-actions:\n          - $addLabel("fix")\n',l={},d=void 0,o={unversionedId:"guides/built-ins/functions/head/index",id:"guides/built-ins/functions/head/index",title:"index",description:"This built-in is not available for issues.",source:"@site/docs/guides/built-ins/functions/head/index.mdx",sourceDirName:"guides/built-ins/functions/head",slug:"/guides/built-ins/functions/head/",permalink:"/next/guides/built-ins/functions/head/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/head/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],m={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the name of the branch where the pull request changes are implemented."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the branch where the pull request changes are implemented.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$head()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}h.isMDXComponent=!0}}]);