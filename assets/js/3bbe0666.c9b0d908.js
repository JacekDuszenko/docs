"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6752],{19384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=i(87462),a=(i(67294),i(3905)),s=i(90814);const r='workflows:\n  - name: reviewers-assignment\n    if:\n      - $hasCodePattern("critical\\(.*\\)")\n    then:\n      - $assignTeamReviewer(["core"])\n',l={},o=void 0,p={unversionedId:"guides/built-ins/actions/assignTeamReviewer/index",id:"version-v4/guides/built-ins/actions/assignTeamReviewer/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/actions/assignTeamReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignTeamReviewer",slug:"/guides/built-ins/actions/assignTeamReviewer/",permalink:"/guides/built-ins/actions/assignTeamReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignTeamReviewer/index.mdx",tags:[],version:"v4",frontMatter:{}},m={},d=[],u={toc:d},g="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns a list of teams to review the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"team_reviewers")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub team slugs that will be requested to review.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$assignTeamReviewer(["core", "support"])\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}c.isMDXComponent=!0}}]);