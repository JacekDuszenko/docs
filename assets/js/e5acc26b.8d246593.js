"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86645],{19747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(87462),a=(n(67294),n(3905)),i=n(90814);const o={title:"Attention set",id:"attention-set",slug:"/use-cases/attention-set"},r=void 0,l={unversionedId:"use-cases/attention-set/attention-set",id:"version-3.17.0/use-cases/attention-set/attention-set",title:"Attention set",description:"The Attention Set defines what kind of attention a pull request needs at a certain time.",source:"@site/versioned_docs/version-3.17.0/use-cases/attention-set/index.mdx",sourceDirName:"use-cases/attention-set",slug:"/use-cases/attention-set",permalink:"/use-cases/attention-set",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/attention-set/index.mdx",tags:[],version:"3.17.0",frontMatter:{title:"Attention set",id:"attention-set",slug:"/use-cases/attention-set"},sidebar:"DocsSidebar",previous:{title:"Remove label based on file paths",permalink:"/use-cases/remove-label-based-on-file-paths"},next:{title:"Blocking Merge",permalink:"/use-cases/blocking-merge"}},d={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"Attention Set")," defines what kind of attention a pull request needs at a certain time"),"."),(0,a.kt)("p",null,"For instance, a brand new pull request with an assigned reviewer requires the reviewer's attention but not the author's attention."),(0,a.kt)("p",null,"Here's an example of a reviewpad.yml configuration that labels a pull request according to the required attention set."),(0,a.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: attention-set\n    if:\n      - rule: $isWaitingForReview()\n        extra-actions:\n          - $addLabel("waiting-review")\n      - rule: $isWaitingForReview() == false\n        extra-actions:\n          - $removeLabel("waiting-review")\n      - rule: $hasUnaddressedThreads()\n        extra-actions:\n          - $addLabel("requires-author-attention")\n      - rule: $hasUnaddressedThreads() == false\n        extra-actions:\n          - $removeLabel("requires-author-attention")\n'))}p.isMDXComponent=!0}}]);