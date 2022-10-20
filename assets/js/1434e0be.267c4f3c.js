"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[87063],{31804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r={},l=void 0,o={unversionedId:"guides/built-ins/actions/assignTeamReviewer/index",id:"version-3.10.0/guides/built-ins/actions/assignTeamReviewer/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/assignTeamReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignTeamReviewer",slug:"/guides/built-ins/actions/assignTeamReviewer/",permalink:"/3.10.0/guides/built-ins/actions/assignTeamReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignTeamReviewer/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},m={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Assigns a list of teams to review the pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"team_reviewers")),(0,i.kt)("td",{parentName:"tr",align:null},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of GitHub team slugs that will be requested to review.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$assignTeamReviewer(["core", "support"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: review-core-code\n    description: Assign review to core team when changes are made in critical code\n    if:\n      - rule: changes-critical\n    then:\n      - '$assignTeamReviewer([\"core\"])'\n"))}u.isMDXComponent=!0}}]);