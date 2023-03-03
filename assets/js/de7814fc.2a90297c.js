"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[470],{61790:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=o(87462),t=(o(67294),o(3905)),a=o(90814);const i='api-version: reviewpad.com/v3.x\n\nlabels:\n  ask:\n    color: fd5e53\n  show:\n    color: ffd800\n  ship:\n    color: 76dbbe\n\ngroups:\n  - name: juniors\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer) < 10\n\nworkflows:\n  - name: ask\n    description: Ask process - request a review before merge\n    if:\n      - $hasFileName("main.js")\n      - $fileCount() > 5\n      - $isElementOf($author(), $group("juniors"))\n    then:\n      - $addLabel("ask")\n      - $assignRandomReviewer()\n\n  - name: show\n    description: Show process - auto-merge and later review\n    if:\n      - rule: $hasFileExtensions([".md"])\n        extra-actions:\n          - $assignReviewer($group("seniors"), "reviewpad")\n      - $hasFileExtensions([".test.ts"])\n    then:\n      - $addLabel("show")\n      - $merge("rebase")\n\n  - name: ship\n    description: Ship process - auto-merge without need for review\n    if:\n      - $size() < 50\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n',r={title:"Ship/Show/Ask",id:"ship-show-ask",slug:"/use-cases/ship-show-ask"},l=void 0,p={unversionedId:"use-cases/ship-show-ask/ship-show-ask",id:"version-v4/use-cases/ship-show-ask/ship-show-ask",title:"Ship/Show/Ask",description:"Ship/Show/Ask is a methodology to increase the pace of software teams by not having to block developers for each pull request.",source:"@site/versioned_docs/version-v4/use-cases/ship-show-ask/index.mdx",sourceDirName:"use-cases/ship-show-ask",slug:"/use-cases/ship-show-ask",permalink:"/use-cases/ship-show-ask",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/ship-show-ask/index.mdx",tags:[],version:"v4",frontMatter:{title:"Ship/Show/Ask",id:"ship-show-ask",slug:"/use-cases/ship-show-ask"},sidebar:"DocsSidebar",previous:{title:"Assign reviewers in a sequence",permalink:"/use-cases/assign-sequential-reviewers"},next:{title:"Timestamps",permalink:"/use-cases/timestamps"}},h={},u=[{value:"Know more",id:"know-more",level:3}],m={toc:u},c="wrapper";function d(e){let{components:s,...o}=e;return(0,t.kt)(c,(0,n.Z)({},m,o,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Ship/Show/Ask")," is a methodology to increase the pace of software teams by not having to block developers for each pull request."),(0,t.kt)("p",null,"It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain pull requests."),(0,t.kt)("p",null,"Here's an example of a ",(0,t.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that we use in our team to automate these three processes."),(0,t.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},i),(0,t.kt)("h3",{id:"know-more"},"Know more"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/ship-show-ask.html"},"Ship/Show/Ask methodology"))))}d.isMDXComponent=!0}}]);