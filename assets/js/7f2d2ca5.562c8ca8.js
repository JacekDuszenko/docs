"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8691],{6961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=n(7462),i=(n(7294),n(3905)),a=n(814);const l="workflows:\n  - name: assign-reviewers\n    run:\n      if: $hasLinkedIssues() && $hasLinearHistory()\n      then: $assignRandomReviewer()\n",r={},u=void 0,o={unversionedId:"guides/built-ins/functions/hasLinkedIssues/index",id:"version-v4/guides/built-ins/functions/hasLinkedIssues/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasLinkedIssues/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinkedIssues",slug:"/guides/built-ins/functions/hasLinkedIssues/",permalink:"/guides/built-ins/functions/hasLinkedIssues/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinkedIssues/index.mdx",tags:[],version:"v4",frontMatter:{}},d={},p=[],k={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,s.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if a pull request has associated issues that might be closed by it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has linked issues, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinkedIssues()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);