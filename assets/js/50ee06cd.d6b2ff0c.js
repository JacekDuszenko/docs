"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1503],{1819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=n(7462),o=(n(7294),n(3905)),r=n(814);const i={title:"Comment on pull requests",id:"comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests"},l=void 0,a={unversionedId:"use-cases/comment-on-pull-requests/comment-on-pull-requests",id:"version-v3/use-cases/comment-on-pull-requests/comment-on-pull-requests",title:"Comment on pull requests",description:"",source:"@site/versioned_docs/version-v3/use-cases/comment-on-pull-requests/index.mdx",sourceDirName:"use-cases/comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests",permalink:"/use-cases/comment-on-pull-requests",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/comment-on-pull-requests/index.mdx",tags:[],version:"v3",frontMatter:{title:"Comment on pull requests",id:"comment-on-pull-requests",slug:"/use-cases/comment-on-pull-requests"},sidebar:"DocsSidebar",previous:{title:"Check issue description",permalink:"/use-cases/check-issue-description"},next:{title:"Enforce branch conventions",permalink:"/use-cases/enforce-branch-conventions"}},m={},u=[{value:"Automatically comment the pull request",id:"automatically-comment-the-pull-request",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With Reviewpad, you can automatically add comments to the pull request."),(0,o.kt)("p",null,"There are three different mechanisms to add a comment to the pull request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#comment"},(0,o.kt)("inlineCode",{parentName:"a"},"comment"))," action."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#commentonce"},(0,o.kt)("inlineCode",{parentName:"a"},"commentOnce"))," action."),(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#error"},(0,o.kt)("inlineCode",{parentName:"a"},"error")),", ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#info"},(0,o.kt)("inlineCode",{parentName:"a"},"info"))," or ",(0,o.kt)("a",{parentName:"li",href:"/guides/built-ins#warn"},(0,o.kt)("inlineCode",{parentName:"a"},"warn"))," actions.")),(0,o.kt)("p",null,"The difference between the modes is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"comment")," action will add a comment every time the action is executed, ",(0,o.kt)("inlineCode",{parentName:"p"},"commentOnce")," will add a comment once no matter the amount of times the action is executed, while the other commenting actions are bundled together in a report comment which is also automatically updated."),(0,o.kt)("h2",{id:"automatically-comment-the-pull-request"},"Automatically comment the pull request"),(0,o.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nrules:\r\n  - name: empty-description\r\n    spec: $description() == ""\r\n\r\n  - name: is-first-time-contributor\r\n    spec: $pullRequestCountBy($author()) == 1\r\n\r\nworkflows:\r\n  - name: welcome-user\r\n    if:\r\n      - rule: is-first-time-contributor\r\n    then:\r\n      - $commentOnce("Well done! This is your first contribution.")\r\n\r\n  - name: comment-on-empty-description\r\n    if:\r\n      - rule: empty-description\r\n    then:\r\n      - $error("The description of the pull request cannot be empty.")\r\n\r\n  - name: comment-on-pull-request\r\n    description: Example comment on pull request\r\n    if:\r\n      - $description() != ""\r\n    then:\r\n      - $info("Thanks for this pull request!")\r\n      - $warn("Please make sure the CI is green before merging.")\r\n'))}p.isMDXComponent=!0}}]);