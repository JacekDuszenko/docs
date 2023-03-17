"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9409,9961,7456,9402,8089,8962],{56999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-random-reviewer",id:"version-v4/guides/commands/assign-random-reviewer",title:"assign-random-reviewer",description:"The assign-random-reviewer command triggers the $assignRandomReviewer action.",source:"@site/versioned_docs/version-v4/guides/commands/assign-random-reviewer.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-random-reviewer",permalink:"/guides/commands/assign-random-reviewer",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-random-reviewer.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-random-reviewer")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignrandomreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignRandomReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a random user of the GitHub organization as the reviewer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")))}p.isMDXComponent=!0},3146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-reviewers",id:"version-v4/guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/versioned_docs/version-v4/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-reviewers",permalink:"/guides/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,r.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}p.isMDXComponent=!0},60454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=a(87462),r=(a(67294),a(3905)),s=a(3146),i=a(56999),o=a(29994),d=a(77918),m=a(66831);const l={title:"Commands",id:"commands",slug:"/guides/commands"},u=void 0,p={unversionedId:"guides/commands/commands",id:"version-v4/guides/commands/commands",title:"Commands",description:"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments.",source:"@site/versioned_docs/version-v4/guides/commands/commands.mdx",sourceDirName:"guides/commands",slug:"/guides/commands",permalink:"/guides/commands",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/commands.mdx",tags:[],version:"v4",frontMatter:{title:"Commands",id:"commands",slug:"/guides/commands"},sidebar:"DocsSidebar",previous:{title:"Annotations",permalink:"/guides/annotations"},next:{title:"Extends",permalink:"/guides/extends"}},c={},g=[{value:"Available commands",id:"available-commands",level:2},{value:"assign-reviewers",id:"assign-reviewers",level:3},{value:"assign-random-reviewer",id:"assign-random-reviewer",level:3},{value:"dry-run",id:"dry-run",level:3},{value:"run",id:"run",level:3},{value:"summarize \ud83e\uddea",id:"summarize",level:3}],v={toc:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments."),(0,r.kt)("p",null,"This is particularly useful when you want to trigger actions on a pull request that are not specified in the reviewpad configuration file."),(0,r.kt)("p",null,"A command is a comment that follows the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad [ACTION] [ACTION_ARGUMENTS]\n")),(0,r.kt)("p",null,"Where ACTION is the action to be triggered and ACTION_ARGUMENTS are the arguments to be passed to the action."),(0,r.kt)("h2",{id:"available-commands"},"Available commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-reviewers"},"/reviewpad assign-reviewers")," - Assign reviewers to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-random-reviewer"},"/reviewpad assign-random-reviewer")," - Assign a random reviewer to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dry-run"},"/reviewpad dry-run")," - Run reviewpad in dry-run mode and adds a comment with the actions that would be triggered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run"},"/reviewpad run")," - Trigger a reviewpad run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#summarize"},"/reviewpad summarize")," (\ud83e\uddea EXPERIMENTAL) - Comment the pull request with the summary of the changes.")),(0,r.kt)("h3",{id:"assign-reviewers"},"assign-reviewers"),(0,r.kt)("hr",null),(0,r.kt)(s.default,null),(0,r.kt)("h3",{id:"assign-random-reviewer"},"assign-random-reviewer"),(0,r.kt)("hr",null),(0,r.kt)(i.default,null),(0,r.kt)("h3",{id:"dry-run"},"dry-run"),(0,r.kt)("hr",null),(0,r.kt)(o.default,null),(0,r.kt)("h3",{id:"run"},"run"),(0,r.kt)("hr",null),(0,r.kt)(d.default,null),(0,r.kt)("h3",{id:"summarize"},"summarize \ud83e\uddea"),(0,r.kt)("hr",null),(0,r.kt)(m.default,null))}h.isMDXComponent=!0},29994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/dry-run",id:"version-v4/guides/commands/dry-run",title:"dry-run",description:"The dry-run command runs reviewpad in dry-run mode on the pull request where the command is invoked.",source:"@site/versioned_docs/version-v4/guides/commands/dry-run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/dry-run",permalink:"/guides/commands/dry-run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/dry-run.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dry-run")," command runs reviewpad in dry-run mode on the pull request where the command is invoked.\nThe outcome of the dry-run is added as a pull request comment.\nThe reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")))}p.isMDXComponent=!0},77918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/run",id:"version-v4/guides/commands/run",title:"run",description:"The run command triggers a reviewpad run.",source:"@site/versioned_docs/version-v4/guides/commands/run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/run",permalink:"/guides/commands/run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/run.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command triggers a reviewpad run."),(0,r.kt)("p",null,"The reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")))}p.isMDXComponent=!0},66831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/summarize",id:"version-v4/guides/commands/summarize",title:"summarize",description:"This is a command that is currently in closed beta phase.",source:"@site/versioned_docs/version-v4/guides/commands/summarize.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/summarize",permalink:"/guides/commands/summarize",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/summarize.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],l={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\ud83e\uddea EXPERIMENTAL",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is a command that is currently in closed beta phase."),(0,r.kt)("p",{parentName:"admonition"},"Join the ",(0,r.kt)("a",{parentName:"p",href:"https://reviewpad.com/openai-waitlist"},"waitlist"),". We will notify you when the command is available for you to use."),(0,r.kt)("p",{parentName:"admonition"},"We send information to OpenAI about the pull request, including parts of the git patch and git diff.\nWe do not send any information that is not retrieved from the pull request.\nFor more questions, contact us on ",(0,r.kt)("a",{parentName:"p",href:"https://reviewpad.com/discord"},"discord"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize")," command adds a comment to the pull request with the summary of the changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad summarize\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad summarize\n")))}p.isMDXComponent=!0}}]);