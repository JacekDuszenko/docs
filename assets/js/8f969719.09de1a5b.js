"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1333],{30037:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>v});var n=i(87462),r=(i(67294),i(3905)),t=i(90814);const a='api-version: reviewpad.com/v3.x\n\npipelines:\n  - name: security-changes\n    trigger: $hasFilePattern("services/db/migrations/**")\n    stages:\n      - actions:\n          - $assignReviewer(["john"], "random")\n        until: $reviewerStatus("john") == "APPROVED"\n      - actions:\n          - $assignTeamReviewer(["security"])\n',o={title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},u=void 0,l={unversionedId:"use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",id:"version-Latest/use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",title:"Assign reviewers in a sequence",description:"In certain cases, it is very useful to specify an order in which the pull request should be reviewed.",source:"@site/versioned_docs/version-Latest/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers",permalink:"/use-cases/assign-sequential-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",tags:[],version:"Latest",frontMatter:{title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},sidebar:"DocsSidebar",previous:{title:"Assign senior reviewers to new joiners",permalink:"/use-cases/assign-senior-reviewers-to-new-joiners"},next:{title:"Ship/Show/Ask",permalink:"/use-cases/ship-show-ask"}},c={},v=[],w={toc:v},d="wrapper";function g(e){let{components:s,...i}=e;return(0,r.kt)(d,(0,n.Z)({},w,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In certain cases, it is very useful to specify an order in which the pull request should be reviewed."),(0,r.kt)("p",null,"For example, the following configuration enforces that changes to files in the database migration files will be first reviewed\nby john and only when john approves the changes it will be reviewed by the security team."),(0,r.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}g.isMDXComponent=!0}}]);