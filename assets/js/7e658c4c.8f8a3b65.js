"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9384],{16694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=n(87462),s=(n(67294),n(3905)),a=n(90814);const l='workflows:\n  - name: label-milestone\n    if:\n      - rule: $milestone() == "Hacktoberfest"\n        extra-actions:\n          - $addLabel("hacktoberfest")\n      - rule: $startsWith($milestone(), "v")\n        extra-actions:\n          - $addLabel("release")\n',o={},r=void 0,u={unversionedId:"guides/built-ins/functions/milestone/index",id:"version-v4/guides/built-ins/functions/milestone/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/milestone/index.mdx",sourceDirName:"guides/built-ins/functions/milestone",slug:"/guides/built-ins/functions/milestone/",permalink:"/guides/built-ins/functions/milestone/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/milestone/index.mdx",tags:[],version:"v4",frontMatter:{}},p={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the milestone title associated with the pull request."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The milestone title associated with the pull request.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$milestone()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}k.isMDXComponent=!0}}]);