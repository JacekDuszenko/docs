"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9172],{93762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s="rules:\n  - name: has-approval\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: '$any($reviewers(), ($r: String => $reviewerStatus($r) == \"APPROVED\"))'\n\nworkflows:\n  - name: merge\n    if:\n      - rule: has-approval\n    then:\n      - $merge()\n",l={},o=void 0,p={unversionedId:"guides/built-ins/functions/reviewerStatus/index",id:"guides/built-ins/functions/reviewerStatus/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/docs/guides/built-ins/functions/reviewerStatus/index.mdx",sourceDirName:"guides/built-ins/functions/reviewerStatus",slug:"/guides/built-ins/functions/reviewerStatus/",permalink:"/next/guides/built-ins/functions/reviewerStatus/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewerStatus/index.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the status of a reviewer in the pull request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reviewer_login")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GitHub login of the reviewer.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of a reviewer. It can be one of four string values: ",(0,r.kt)("inlineCode",{parentName:"td"},'""'),", if there was no review from the reviewer; ",(0,r.kt)("inlineCode",{parentName:"td"},'"COMMENTED"'),", if all the reviews from the reviewer were comments; ",(0,r.kt)("inlineCode",{parentName:"td"},'"CHANGES_REQUESTED"'),", if the last review, that was not a comment, requested changes; ",(0,r.kt)("inlineCode",{parentName:"td"},'"APPROVED"'),", if the last review that was not a comment requested changes.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$reviewerStatus("marcelosousa")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}g.isMDXComponent=!0}}]);