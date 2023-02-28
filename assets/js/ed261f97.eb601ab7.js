"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4752,7467,6727,4211,5475],{1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-random-reviewer",id:"version-v3/guides/commands/assign-random-reviewer",title:"assign-random-reviewer",description:"The assign-random-reviewer command triggers the $assignRandomReviewer action.",source:"@site/versioned_docs/version-v3/guides/commands/assign-random-reviewer.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-random-reviewer",permalink:"/guides/commands/assign-random-reviewer",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-random-reviewer.mdx",tags:[],version:"v3",frontMatter:{}},d={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-random-reviewer")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignrandomreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignRandomReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a random user of the GitHub organization as the reviewer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")))}u.isMDXComponent=!0},6976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-reviewers",id:"version-v3/guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/versioned_docs/version-v3/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-reviewers",permalink:"/guides/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"v3",frontMatter:{}},d={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,r.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}u.isMDXComponent=!0},128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),s=n(6976),i=n(1438),o=n(3872),d=n(701);const l={title:"Commands",id:"commands",slug:"/guides/commands"},m=void 0,u={unversionedId:"guides/commands/commands",id:"version-v3/guides/commands/commands",title:"Commands",description:"",source:"@site/versioned_docs/version-v3/guides/commands/commands.mdx",sourceDirName:"guides/commands",slug:"/guides/commands",permalink:"/guides/commands",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/commands.mdx",tags:[],version:"v3",frontMatter:{title:"Commands",id:"commands",slug:"/guides/commands"},sidebar:"DocsSidebar",previous:{title:"Annotations",permalink:"/guides/annotations"},next:{title:"Extends",permalink:"/guides/extends"}},p={},c=[{value:"Available commands",id:"available-commands",level:2},{value:"assign-reviewers",id:"assign-reviewers",level:3},{value:"assign-random-reviewer",id:"assign-random-reviewer",level:3},{value:"dry-run",id:"dry-run",level:3},{value:"run",id:"run",level:3}],g={toc:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments."),(0,r.kt)("p",null,"This is particularly useful when you want to trigger actions on a pull request that are not specified in the reviewpad configuration file."),(0,r.kt)("p",null,"A command is a comment that follows the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad [ACTION] [ACTION_ARGUMENTS]\n")),(0,r.kt)("p",null,"Where ACTION is the action to be triggered and ACTION_ARGUMENTS are the arguments to be passed to the action."),(0,r.kt)("h2",{id:"available-commands"},"Available commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-reviewers"},"/reviewpad assign-reviewers")," - Assign reviewers to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-random-reviewer"},"/reviewpad assign-random-reviewer")," - Assign a random reviewer to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dry-run"},"/reviewpad dry-run")," - Run reviewpad in dry-run mode and adds a comment with the actions that would be triggered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run"},"/reviewpad run")," - Trigger a reviewpad run.")),(0,r.kt)("h3",{id:"assign-reviewers"},"assign-reviewers"),(0,r.kt)("hr",null),(0,r.kt)(s.default,null),(0,r.kt)("h3",{id:"assign-random-reviewer"},"assign-random-reviewer"),(0,r.kt)("hr",null),(0,r.kt)(i.default,null),(0,r.kt)("h3",{id:"dry-run"},"dry-run"),(0,r.kt)("hr",null),(0,r.kt)(o.default,null),(0,r.kt)("h3",{id:"run"},"run"),(0,r.kt)("hr",null),(0,r.kt)(d.default,null))}v.isMDXComponent=!0},3872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"guides/commands/dry-run",id:"version-v3/guides/commands/dry-run",title:"dry-run",description:"The dry-run command runs reviewpad in dry-run mode on the pull request where the command is invoked.",source:"@site/versioned_docs/version-v3/guides/commands/dry-run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/dry-run",permalink:"/guides/commands/dry-run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/dry-run.mdx",tags:[],version:"v3",frontMatter:{}},d={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dry-run")," command runs reviewpad in dry-run mode on the pull request where the command is invoked.\nThe outcome of the dry-run is added as a pull request comment.\nThe reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad dry-run\n")))}u.isMDXComponent=!0},701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"guides/commands/run",id:"version-v3/guides/commands/run",title:"run",description:"The run command triggers a reviewpad run.",source:"@site/versioned_docs/version-v3/guides/commands/run.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/run",permalink:"/guides/commands/run",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/run.mdx",tags:[],version:"v3",frontMatter:{}},d={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command triggers a reviewpad run."),(0,r.kt)("p",null,"The reviewpad configuration used is the one from the pull request base branch or the head branch if the pull request updates the reviewpad configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad run\n")))}u.isMDXComponent=!0}}]);