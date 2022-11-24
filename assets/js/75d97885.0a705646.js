"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[74337],{6799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=n(87462),o=(n(67294),n(3905)),i=n(90814);const a={title:"Comment on pull requests",id:"comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests"},l=void 0,r={unversionedId:"use-cases/comment-on-pull-requests/comment-on-pull-requests",id:"version-3.15.0/use-cases/comment-on-pull-requests/comment-on-pull-requests",title:"Comment on pull requests",description:"With Reviewpad, you can automatically add comments to the pull request.",source:"@site/versioned_docs/version-3.15.0/use-cases/comment-on-pull-requests/index.mdx",sourceDirName:"use-cases/comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests",permalink:"/use-cases/comment-on-pull-requests",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/comment-on-pull-requests/index.mdx",tags:[],version:"3.15.0",frontMatter:{title:"Comment on pull requests",id:"comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests"},sidebar:"DocsSidebar",previous:{title:"Check issue description",permalink:"/use-cases/check-issue-description"},next:{title:"Enforce branch conventions",permalink:"/use-cases/enforce-branch-conventions"}},m={},u=[{value:"Automatically comment the pull request",id:"automatically-comment-the-pull-request",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With Reviewpad, you can automatically add comments to the pull request."),(0,o.kt)("p",null,"There are three different mechanisms to add a comment to the pull request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#comment"},(0,o.kt)("inlineCode",{parentName:"a"},"comment"))," action."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#commentonce"},(0,o.kt)("inlineCode",{parentName:"a"},"commentOnce"))," action."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#error"},(0,o.kt)("inlineCode",{parentName:"a"},"error")),", ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#info"},(0,o.kt)("inlineCode",{parentName:"a"},"info"))," or ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#warn"},(0,o.kt)("inlineCode",{parentName:"a"},"warn"))," actions.")),(0,o.kt)("p",null,"The difference between the modes is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"comment")," action will add a comment every time the action is executed, ",(0,o.kt)("inlineCode",{parentName:"p"},"commentOnce")," will add a comment once no matter the amount of times the action is executed, while the other commenting actions are bundled together in a report comment which is also automatically updated."),(0,o.kt)("h2",{id:"automatically-comment-the-pull-request"},"Automatically comment the pull request"),(0,o.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: empty-description\n    spec: $description() == ""\n\n  - name: is-first-time-contributor\n    spec: $pullRequestCountBy($author()) == 1\n\nworkflows:\n  - name: welcome-user\n    if:\n      - rule: is-first-time-contributor\n    then:\n      - $commentOnce("Well done! This is your first contribution.")\n\n  - name: comment-on-empty-description\n    if:\n      - rule: empty-description\n    then:\n      - $error("The description of the pull request cannot be empty.")\n\n  - name: comment-on-pull-request\n    description: Example comment on pull request\n    if:\n      - $description() != ""\n    then:\n      - $info("Thanks for this pull request!")\n      - $warn("Please make sure the CI is green before merging.")\n'))}p.isMDXComponent=!0}}]);