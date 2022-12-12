"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28248],{54517:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},t=void 0,a={unversionedId:"use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",id:"version-3.7.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",title:"Assign senior reviewers to new joiners",description:"Here's an example of assigning senior reviewers to new joiners pull requests.",source:"@site/versioned_docs/version-3.7.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-senior-reviewers-to-new-joiners",permalink:"/3.7.0/use-cases/assign-senior-reviewers-to-new-joiners",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",tags:[],version:"3.7.0",frontMatter:{title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},sidebar:"DocsSidebar",previous:{title:"Assign review to a team",permalink:"/3.7.0/use-cases/assign-review-to-a-team"},next:{title:"Assign reviewers in a sequence",permalink:"/3.7.0/use-cases/assign-sequential-reviewers"}},l={},u=[],d={toc:u};function c(e){let{components:s,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here's an example of assigning senior reviewers to new joiners pull requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  priority:\n    description: Priority reviews\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: seniors\n    description: Group of senior developers\n    kind: developers\n    spec: \'["torvalds"]\'\n\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer) < 10\n\nrules:\n  - name: authoredByJunior\n    kind: patch\n    description: Patch is authored by a junior dev\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: critical\n    description: PRs by juniors should be reviewed by the gods\n    if:\n      - rule: authoredByJunior\n    then:\n      - $addLabel("priority")\n      - $assignReviewer($group("seniors"))\n')))}c.isMDXComponent=!0}}]);