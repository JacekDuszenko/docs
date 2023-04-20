"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3406],{63e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(87462),a=(n(67294),n(3905)),i=n(90814);const o='workflows:\n  - name: attention-set\n    run:\n      - if: $isWaitingForReview()\n        then: $addLabel("waiting-review")\n      - if: $isWaitingForReview() == false\n        then: $removeLabel("waiting-review")\n      - if: $hasUnaddressedThreads()\n        then: $addLabel("requires-author-attention")\n      - if: $hasUnaddressedThreads() == false\n        then: $removeLabel("requires-author-attention")\n',r={title:"Attention set",id:"attention-set",slug:"/use-cases/attention-set"},l=void 0,d={unversionedId:"use-cases/attention-set/attention-set",id:"version-v4/use-cases/attention-set/attention-set",title:"Attention set",description:"The Attention Set defines what kind of attention a pull request needs at a certain time.",source:"@site/versioned_docs/version-v4/use-cases/attention-set/index.mdx",sourceDirName:"use-cases/attention-set",slug:"/use-cases/attention-set",permalink:"/use-cases/attention-set",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/attention-set/index.mdx",tags:[],version:"v4",frontMatter:{title:"Attention set",id:"attention-set",slug:"/use-cases/attention-set"},sidebar:"DocsSidebar",previous:{title:"Remove label based on file paths",permalink:"/use-cases/remove-label-based-on-file-paths"},next:{title:"Blocking Merge",permalink:"/use-cases/blocking-merge"}},u={},c=[],p={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"Attention Set")," defines what kind of attention a pull request needs at a certain time"),"."),(0,a.kt)("p",null,"For instance, a brand new pull request with an assigned reviewer requires the reviewer's attention but not the author's attention."),(0,a.kt)("p",null,"Here's an example of a reviewpad.yml configuration that labels a pull request according to the required attention set."),(0,a.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}h.isMDXComponent=!0}}]);