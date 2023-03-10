"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8899],{61055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),s=a(90814);const r='workflows:\n  - name: reviewers-assignment\n    if:\n      - $hasCodePattern("critical\\(.*\\)")\n    then:\n      - $assignTeamReviewer(["core"])\n',l={},o=void 0,m={unversionedId:"guides/built-ins/actions/assignTeamReviewer/index",id:"guides/built-ins/actions/assignTeamReviewer/index",title:"index",description:"This built-in is not available for issues.",source:"@site/docs/guides/built-ins/actions/assignTeamReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignTeamReviewer",slug:"/guides/built-ins/actions/assignTeamReviewer/",permalink:"/next/guides/built-ins/actions/assignTeamReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignTeamReviewer/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],u={toc:d},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description"),":"),(0,n.kt)("p",null,"Assigns a list of teams to review the pull request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"team_reviewers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub team slugs that will be requested to review.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'$assignTeamReviewer(["core", "support"])\n')),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,n.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}g.isMDXComponent=!0}}]);