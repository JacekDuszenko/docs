"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8908],{82457:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>g,toc:()=>v});var n=a(87462),i=(a(67294),a(3905)),t=a(90814);const r='workflows:\n  - name: ask\n    description: Ask devops team\n    run:\n      if: $hasFilePattern("src/config/**")\n      then:  $assignTeamReviewer(["devops"])\n',o='workflows:\n  - name: ask\n    description: Ask devops team\n    run:\n      if: $hasFilePattern("src/config/**")\n      then: $assignReviewer($team("devops"), 3, "reviewpad")\n',m='workflows:\n  - name: ask\n    description: Ask John and devops team\n    run:\n      if: $hasFilePattern("src/config/**")\n      then:\n        - $assignReviewer(["john"], "random")\n        - $assignTeamReviewer(["devops"])\n',c={title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},l=void 0,g={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",id:"use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",title:"Assign review to a team",description:"An example of assigning a review to a team when touching a specific folder.",source:"@site/docs/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team",permalink:"/next/use-cases/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",tags:[],version:"current",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/next/use-cases/assign-review-to-3-developers"},next:{title:"Assign senior reviewers to new joiners",permalink:"/next/use-cases/assign-senior-reviewers-to-new-joiners"}},d={},v=[],w={toc:v},p="wrapper";function u(e){let{components:s,...a}=e;return(0,i.kt)(p,(0,n.Z)({},w,a,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,i.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r),(0,i.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,i.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o),(0,i.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,i.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},m))}u.isMDXComponent=!0}}]);