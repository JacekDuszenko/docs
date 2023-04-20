"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9499],{72257:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>v,default:()=>w,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=i(87462),r=(i(67294),i(3905)),t=i(90814);const a='rules:\n  - name: changes-transactions-code\n    spec: \n\nworkflows:\n  - name: ask\n    description: Ask 3 developers for review\n    run:\n      if: $hasFilePattern("src/transactions/**")\n      then: $assignReviewer($organization(), 3, "reviewpad")\n',o={title:"Assign review to 3 developers",id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers"},v=void 0,d={unversionedId:"use-cases/reviewer-assignment/assign-review-to-3-developers/assign-review-to-3-developers",id:"version-v4/use-cases/reviewer-assignment/assign-review-to-3-developers/assign-review-to-3-developers",title:"Assign review to 3 developers",description:"An example of assigning a review to at least 3 developers when changing transactions code.",source:"@site/versioned_docs/version-v4/use-cases/reviewer-assignment/assign-review-to-3-developers/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers",permalink:"/use-cases/assign-review-to-3-developers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-3-developers/index.mdx",tags:[],version:"v4",frontMatter:{title:"Assign review to 3 developers",id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers"},sidebar:"DocsSidebar",previous:{title:"Reviewer Assignment",permalink:"/use-cases/reviewer-assignment"},next:{title:"Assign review to a team",permalink:"/use-cases/assign-review-to-a-team"}},l={},c=[],g={toc:c},p="wrapper";function w(e){let{components:s,...i}=e;return(0,r.kt)(p,(0,n.Z)({},g,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An example of assigning a review to at least 3 developers when changing transactions code."),(0,r.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}w.isMDXComponent=!0}}]);