"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1299,8129,3440,4668,7804],{80837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={slug:"/commands/assign-random-reviewer"},i=void 0,o={unversionedId:"guides/commands/assign-random-reviewer",id:"version-Latest/guides/commands/assign-random-reviewer",title:"assign-random-reviewer",description:"The assign-random-reviewer command triggers the $assignRandomReviewer action.",source:"@site/versioned_docs/version-Latest/guides/commands/assign-random-reviewer.mdx",sourceDirName:"guides/commands",slug:"/commands/assign-random-reviewer",permalink:"/commands/assign-random-reviewer",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-random-reviewer.mdx",tags:[],version:"Latest",frontMatter:{slug:"/commands/assign-random-reviewer"}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-random-reviewer")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"../guides/built-ins#assignrandomreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignRandomReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a random user of the GitHub organization as the reviewer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")))}p.isMDXComponent=!0},96779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={slug:"/commands/assign-reviewers"},i=void 0,o={unversionedId:"guides/commands/assign-reviewers",id:"version-Latest/guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/versioned_docs/version-Latest/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/commands/assign-reviewers",permalink:"/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"Latest",frontMatter:{slug:"/commands/assign-reviewers"}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"../guides/built-ins#assignreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,r.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}p.isMDXComponent=!0},45189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(96779),i=a(80837),o=a(43822),d=a(90731);const m={title:"Commands",id:"commands",slug:"/guides/commands"},l=void 0,u={unversionedId:"guides/commands/commands",id:"version-Latest/guides/commands/commands",title:"Commands",description:"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments.",source:"@site/versioned_docs/version-Latest/guides/commands/commands.mdx",sourceDirName:"guides/commands",slug:"/guides/commands",permalink:"/guides/commands",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/commands.mdx",tags:[],version:"Latest",frontMatter:{title:"Commands",id:"commands",slug:"/guides/commands"},sidebar:"DocsSidebar",previous:{title:"Annotations",permalink:"/guides/annotations"},next:{title:"Extends",permalink:"/guides/extends"}},p={},c=[{value:"Available commands",id:"available-commands",level:2},{value:"assign-reviewers",id:"assign-reviewers",level:3},{value:"assign-random-reviewer",id:"assign-random-reviewer",level:3},{value:"dry-run",id:"dry-run",level:3},{value:"run",id:"run",level:3}],g={toc:c},v="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments."),(0,r.kt)("p",null,"This is particularly useful when you want to trigger actions on a pull request that are not specified in the reviewpad configuration file."),(0,r.kt)("p",null,"A command is a comment that follows the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad [ACTION] [ACTION_ARGUMENTS]\n")),(0,r.kt)("p",null,"Where ACTION is the action to be triggered and ACTION_ARGUMENTS are the arguments to be passed to the action."),(0,r.kt)("h2",{id:"available-commands"},"Available commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-reviewers"},"/reviewpad assign-reviewers")," - Assign reviewers to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-random-reviewer"},"/reviewpad assign-random-reviewer")," - Assign a random reviewer to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dry-run"},"/reviewpad dry-run")," - Run reviewpad in dry-run mode and adds a comment with the actions that would be triggered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run"},"/reviewpad run")," - Trigger a reviewpad run.")),(0,r.kt)("h3",{id:"assign-reviewers"},"assign-reviewers"),(0,r.kt)("hr",null),(0,r.kt)(s.default,null),(0,r.kt)("h3",{id:"assign-random-reviewer"},"assign-random-reviewer"),(0,r.kt)("hr",null),(0,r.kt)(i.default,null),(0,r.kt)("h3",{id:"dry-run"},"dry-run"),(0,r.kt)("hr",null),(0,r.kt)(o.default,null),(0,r.kt)("h3",{id:"run"},"run"),(0,r.kt)("hr",null),(0,r.kt)(d.default,null))}k.isMDXComponent=!0},43822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/dry-run",id:"version-Latest/guides/commands/dry-run",title:"dry-run",description:"The dry-run command runs reviewpad in dry-run mode on the pull request where the command is invoked.",source:"@site/versioned_docs/version-Latest/guides/commands/dry-run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/dry-run",permalink:"/guides/commands/dry-run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/dry-run.mdx",tags:[],version:"Latest",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dry-run")," command runs reviewpad in dry-run mode on the pull request where the command is invoked.\nThe outcome of the dry-run is added as a pull request comment.\nThe reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")))}p.isMDXComponent=!0},90731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/run",id:"version-Latest/guides/commands/run",title:"run",description:"The run command triggers a reviewpad run.",source:"@site/versioned_docs/version-Latest/guides/commands/run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/run",permalink:"/guides/commands/run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/run.mdx",tags:[],version:"Latest",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command triggers a reviewpad run."),(0,r.kt)("p",null,"The reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")))}p.isMDXComponent=!0}}]);