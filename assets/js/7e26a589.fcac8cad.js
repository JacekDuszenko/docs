"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33509],{2247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=t(87462),l=(t(67294),t(3905));const o={title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},i=void 0,r={unversionedId:"use-cases/timestamps/notify-when-long-live-pull-request",id:"version-3.6.0/use-cases/timestamps/notify-when-long-live-pull-request",title:"Notify when long live pull request",description:"Here's an example of notifying the pull request author when the pull request has been opened for a long time.",source:"@site/versioned_docs/version-3.6.0/use-cases/timestamps/notify-when-long-live-pull-request.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/notify-when-long-live-pull-request",permalink:"/3.6.0/use-cases/notify-when-long-live-pull-request",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/notify-when-long-live-pull-request.md",tags:[],version:"3.6.0",frontMatter:{title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},sidebar:"DocsSidebar",previous:{title:"Label on change freeze",permalink:"/3.6.0/use-cases/label-on-change-freeze"},next:{title:"How to Contribute",permalink:"/3.6.0/contributing/how-to-contribute"}},a={},u=[],p={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Here's an example of notifying the pull request author when the pull request has been opened for a long time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: longLiveChange\n    kind: patch\n    description: PR has been open for more than 15 days\n    spec: $createdAt() < 15 days ago\n\nworkflows:\n  - name: notify-long-live-pr\n    description: Notify author when long live PR\n    if:\n      - rule: longLiveChange\n    then:\n      - $comment("This PR has been opened for more than 15 days. Please consider closing it!")\n')))}c.isMDXComponent=!0}}]);