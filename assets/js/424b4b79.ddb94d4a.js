"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[61463],{81680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>v,toc:()=>c});var i=n(87462),r=(n(67294),n(3905)),t=n(90814);const a={title:"Assign review to 3 developers",id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers"},o=void 0,v={unversionedId:"use-cases/reviewer-assignment/assign-review-to-3-developers/assign-review-to-3-developers",id:"version-3.10.0/use-cases/reviewer-assignment/assign-review-to-3-developers/assign-review-to-3-developers",title:"Assign review to 3 developers",description:"An example of assigning a review to at least 3 developers when changing transactions code.",source:"@site/versioned_docs/version-3.10.0/use-cases/reviewer-assignment/assign-review-to-3-developers/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers",permalink:"/3.10.0/use-cases/assign-review-to-3-developers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-3-developers/index.mdx",tags:[],version:"3.10.0",frontMatter:{title:"Assign review to 3 developers",id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers"},sidebar:"DocsSidebar",previous:{title:"Reviewer Assignment",permalink:"/3.10.0/use-cases/reviewer-assignment"},next:{title:"Assign review to a team",permalink:"/3.10.0/use-cases/assign-review-to-a-team"}},d={},c=[],l={toc:c};function p(e){let{components:s,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An example of assigning a review to at least 3 developers when changing transactions code."),(0,r.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-transactions-code\n    kind: patch\n    description: Changes code in transactions\n    spec: '$hasFilePattern(\"src/transactions/**\")'\n\nworkflows:\n  - name: ask\n    description: Ask 3 developers for review\n    if:\n      - rule: changes-transactions-code\n    then:\n      - '$assignReviewer($organization(), 3, \"reviewpad\")'\n"))}p.isMDXComponent=!0}}]);