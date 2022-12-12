"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83530],{434:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var a=n(87462),i=(n(67294),n(3905)),t=n(90814);const o={title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},r=void 0,c={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",id:"version-3.12.0/use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",title:"Assign review to a team",description:"An example of assigning a review to a team when touching a specific folder.",source:"@site/versioned_docs/version-3.12.0/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team",permalink:"/3.12.0/use-cases/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/3.12.0/use-cases/assign-review-to-3-developers"},next:{title:"Assign senior reviewers to new joiners",permalink:"/3.12.0/use-cases/assign-senior-reviewers-to-new-joiners"}},m={},g=[],v={toc:g};function l(e){let{components:s,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,i.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      - $assignTeamReviewer("devops")\n'),(0,i.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,i.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      - $assignReviewer($team("devops"), 3, "reviewpad")\n'),(0,i.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,i.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask John and devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      - $assignReviewer(["john"], "random")\n      - $assignTeamReviewer("devops")\n'))}l.isMDXComponent=!0}}]);