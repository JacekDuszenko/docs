"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6678],{10886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-milestone\n    if:\n      - rule: $milestone() == "Hacktoberfest"\n        extra-actions:\n          - $addLabel("hacktoberfest")\n      - rule: $startsWith($milestone(), "v")\n        extra-actions:\n          - $addLabel("release")\n',o={},r=void 0,p={unversionedId:"guides/built-ins/functions/milestone/index",id:"version-v3/guides/built-ins/functions/milestone/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/milestone/index.mdx",sourceDirName:"guides/built-ins/functions/milestone",slug:"/guides/built-ins/functions/milestone/",permalink:"/v3/guides/built-ins/functions/milestone/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/milestone/index.mdx",tags:[],version:"v3",frontMatter:{}},u={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the milestone title associated to the pull request."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The milestone title associated to the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$milestone()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}k.isMDXComponent=!0}}]);