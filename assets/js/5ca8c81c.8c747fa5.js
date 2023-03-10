"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{64889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const r='workflows:\n  - name: check-compliance\n    if:\n      - $hasLinearHistory() == false\n    then:\n      - $fail("The pull request does not have a linear history.")\n',o={},l=void 0,p={unversionedId:"guides/built-ins/functions/hasLinearHistory/index",id:"version-v4/guides/built-ins/functions/hasLinearHistory/index",title:"index",description:"This built-in is not available for issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasLinearHistory/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinearHistory",slug:"/guides/built-ins/functions/hasLinearHistory/",permalink:"/guides/built-ins/functions/hasLinearHistory/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinearHistory/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if a pull request has a linear history."),(0,a.kt)("p",null,"A linear history is simply a Git history in which all commits come after one another, i.e., you will not find any merges of branches with independent commit histories."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has a linear history, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinearHistory()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);