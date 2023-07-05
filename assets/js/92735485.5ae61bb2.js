"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7099],{52784:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(90814);const l='workflows:\n  - name: assign-devops-reviewer\n    run:\n      if: $isElementOf($author(), $team("devops"))\n      then: $assignTeamReviewer(["devops"])\n',s={},m=void 0,o={unversionedId:"guides/built-ins/functions/team/index",id:"version-v4/guides/built-ins/functions/team/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/team/index.mdx",sourceDirName:"guides/built-ins/functions/team",slug:"/guides/built-ins/functions/team/",permalink:"/guides/built-ins/functions/team/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/team/index.mdx",tags:[],version:"v4",frontMatter:{}},p={},d=[],u={toc:d},k="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the members of a team and child teams."),(0,i.kt)("p",null,"To list members in a team, the team must be visible to the authenticated user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"team_slug")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slug of the team name on GitHub.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of all team and child teams members GitHub login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$team("devops")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);