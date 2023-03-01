"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2225],{21960:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>c});var t=l(87462),s=(l(67294),l(3905)),o=l(90814);const i='api-version: reviewpad.com/v3.x\n\nrules:\n  - name: long-live-change\n    description: Pull request has been opened for more than 15 days\n    spec: $createdAt() < 15 days ago\n\nworkflows:\n  - name: long-live\n    if:\n      - rule: long-live-change\n    then:\n      - $commentOnce("This pull request has been opened for more than 15 days. Please consider closing it!")\n',u={title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},a=void 0,r={unversionedId:"use-cases/timestamps/notify-when-long-live-pull-request/notify-when-long-live-pull-request",id:"use-cases/timestamps/notify-when-long-live-pull-request/notify-when-long-live-pull-request",title:"Notify when long live pull request",description:"An example of notifying the pull request author when the pull request has been opened for a long time.",source:"@site/docs/use-cases/timestamps/notify-when-long-live-pull-request/index.mdx",sourceDirName:"use-cases/timestamps/notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request",permalink:"/next/use-cases/notify-when-long-live-pull-request",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/notify-when-long-live-pull-request/index.mdx",tags:[],version:"current",frontMatter:{title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},sidebar:"DocsSidebar",previous:{title:"Label on change freeze",permalink:"/next/use-cases/label-on-change-freeze"},next:{title:"Common Pitfalls and How To Avoid Them",permalink:"/next/common-pitfalls"}},p={},c=[],h={toc:c},m="wrapper";function d(e){let{components:n,...l}=e;return(0,s.kt)(m,(0,t.Z)({},h,l,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An example of notifying the pull request author when the pull request has been opened for a long time."),(0,s.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},i))}d.isMDXComponent=!0}}]);