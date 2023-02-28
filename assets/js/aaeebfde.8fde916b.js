"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8322],{3530:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=i(7462),r=(i(7294),i(3905)),t=i(814);const a={title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},o=void 0,u={unversionedId:"use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",id:"use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",title:"Assign reviewers in a sequence",description:"",source:"@site/docs/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers",permalink:"/next/use-cases/assign-sequential-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",tags:[],version:"current",frontMatter:{title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},sidebar:"DocsSidebar",previous:{title:"Assign senior reviewers to new joiners",permalink:"/next/use-cases/assign-senior-reviewers-to-new-joiners"},next:{title:"Ship/Show/Ask",permalink:"/next/use-cases/ship-show-ask"}},l={},c=[],w={toc:c};function g(e){let{components:s,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},w,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In certain cases, it is very useful to specify an order in which the pull request should be reviewed."),(0,r.kt)("p",null,"For example, the following configuration enforces that changes to files in the database migration files will be first reviewed\nby john and only when john approves the changes it will be reviewed by the security team."),(0,r.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\npipelines:\r\n  - name: security-changes\r\n    trigger: $hasFilePattern("services/db/migrations/**")\r\n    stages:\r\n      - actions:\r\n          - $assignReviewer(["john"], "random")\r\n        until: $reviewerStatus("john") == "APPROVED"\r\n      - actions:\r\n          - $assignTeamReviewer(["security"])\r\n'))}g.isMDXComponent=!0}}]);