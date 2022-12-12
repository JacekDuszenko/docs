"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44929],{95948:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const t={title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},a=void 0,o={unversionedId:"use-cases/reviewer-assignment/assign-sequential-reviewers",id:"version-3.5.0/use-cases/reviewer-assignment/assign-sequential-reviewers",title:"Assign reviewers in a sequence",description:"In certain cases, it is very useful to specify an order in which the pull request should be reviewed.",source:"@site/versioned_docs/version-3.5.0/use-cases/reviewer-assignment/assign-sequential-reviewers.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-sequential-reviewers",permalink:"/3.5.0/use-cases/assign-sequential-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-sequential-reviewers.md",tags:[],version:"3.5.0",frontMatter:{title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},sidebar:"DocsSidebar",previous:{title:"Assign senior reviewers to new joiners",permalink:"/3.5.0/use-cases/assign-senior-reviewers-to-new-joiners"},next:{title:"Ship/Show/Ask",permalink:"/3.5.0/use-cases/ship-show-ask"}},u={},l=[],c={toc:l};function v(e){let{components:s,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In certain cases, it is very useful to specify an order in which the pull request should be reviewed."),(0,r.kt)("p",null,"For example, the following configuration enforces that changes to files in the database migration files will be first reviewed\nby john and only when john approves the changes it will be reviewed by the security team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\npipelines:\n  - name: security-changes\n    trigger: $hasFilePattern("services/db/migrations/**")\n    stages:\n      - actions:\n          - \'$assignReviewer(["john"])\'\n        until: $reviewerStatus("john") == "APPROVED"\n      - actions:\n          - \'$assignTeamReviewer(["security"])\'\n')))}v.isMDXComponent=!0}}]);