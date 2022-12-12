"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97280],{10594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Attention Set",id:"attention-set"},s=void 0,o={unversionedId:"use-cases/attention-set",id:"version-3.6.0/use-cases/attention-set",title:"Attention Set",description:"The Attention Set defines what kind of attention a pull request needs at a certain time.",source:"@site/versioned_docs/version-3.6.0/use-cases/attention-set.md",sourceDirName:"use-cases",slug:"/use-cases/attention-set",permalink:"/3.6.0/use-cases/attention-set",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/attention-set.md",tags:[],version:"3.6.0",frontMatter:{title:"Attention Set",id:"attention-set"},sidebar:"DocsSidebar",previous:{title:"Remove label based on file paths",permalink:"/3.6.0/use-cases/remove-label-based-on-file-paths"},next:{title:"Check issue description",permalink:"/3.6.0/use-cases/check-issue-description"}},l={},d=[{value:"reviewpad.yml",id:"reviewpadyml",level:2},{value:"Reviewpad Action",id:"reviewpad-action",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Unavailable <code>pull_request_review_thread</code> event",id:"unavailable-pull_request_review_thread-event",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Attention Set")," defines ",(0,i.kt)("strong",{parentName:"p"},"what kind of attention a pull request needs at a certain time"),". "),(0,i.kt)("p",null,"For instance, a just created pull request with an assigned reviewer requires the reviewer attention but not the author attention."),(0,i.kt)("h2",{id:"reviewpadyml"},"reviewpad.yml"),(0,i.kt)("p",null,"In order to define the attention set we will use the built-ins ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#iswaitingforreview"},"isWaitingForReview")," and ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hasunaddressedthreads"},"hasUnaddressedThreads"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: waiting-review\n    kind: patch\n    spec: '$isWaitingForReview()'\n  - name: not-waiting-review\n    kind: patch\n    spec: '!$rule(\"waiting-review\")'\n  - name: author-attention\n    kind: patch\n    spec: '$hasUnaddressedThreads()'\n  - name: not-author-attention\n    kind: patch\n    spec: '!$rule(\"author-attention\")'\n\nworkflows:\n  - name: attention-set\n    if:     \n      - rule: waiting-review\n        extra-actions:\n          - '$addLabel(\"waiting-review\")'\n      - rule: not-waiting-review\n        extra-actions:\n          - '$removeLabel(\"waiting-review\")'\n      - rule: author-attention\n        extra-actions:\n          - '$addLabel(\"requires-author-attention\")'\n      - rule: not-author-attention\n        extra-actions:\n          - '$removeLabel(\"requires-author-attention\")'\n")),(0,i.kt)("h2",{id:"reviewpad-action"},"Reviewpad Action"),(0,i.kt)("p",null,"In order to have the automation for ",(0,i.kt)("inlineCode",{parentName:"p"},"Attention Set")," working properly we need to update our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/reviewpad-action"},"reviewpad action"),", mainly the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," to which reviewpad action is triggered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},"name: Reviewpad\n\n# List of events that will trigger reviewpad\non:\n  pull_request_target:\n    types:\n      - opened\n      - reopened\n      - synchronize\n      - ready_for_review\n      - converted_to_draft\n      - edited\n      - review_requested\n      - review_request_removed\n  pull_request_review:\n  pull_request_review_comment:\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Reviewpad\n        uses: reviewpad/action@v3.x\n")),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"unavailable-pull_request_review_thread-event"},"Unavailable ",(0,i.kt)("inlineCode",{parentName:"h3"},"pull_request_review_thread")," event"),(0,i.kt)("p",null,"As for now GitHub actions are not able to be triggered on ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request_review_thread")," events. This limitation does not allow ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad")," to be triggered when a review thread status is updated (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"unresolved"),")"),(0,i.kt)("p",null,"To solve this issue one can comment a pull request with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"/reviewpad run\n")))}p.isMDXComponent=!0}}]);