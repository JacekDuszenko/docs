"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22509,57197,81623],{2851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-random-reviewer",id:"version-3.22.0/guides/commands/assign-random-reviewer",title:"assign-random-reviewer",description:"The assign-random-reviewer command triggers the $assignRandomReviewer action.",source:"@site/versioned_docs/version-3.22.0/guides/commands/assign-random-reviewer.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-random-reviewer",permalink:"/3.22.0/guides/commands/assign-random-reviewer",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-random-reviewer.mdx",tags:[],version:"3.22.0",frontMatter:{}},d={},l=[],m={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-random-reviewer")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignrandomreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignRandomReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a random user of the GitHub organization as the reviewer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-random-reviewer\n")))}p.isMDXComponent=!0},9596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={},i=void 0,o={unversionedId:"guides/commands/assign-reviewers",id:"version-3.22.0/guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/versioned_docs/version-3.22.0/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-reviewers",permalink:"/3.22.0/guides/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"3.22.0",frontMatter:{}},d={},l=[],m={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},(0,r.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,r.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,r.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}p.isMDXComponent=!0},25004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),s=a(9596),i=a(2851);const o={title:"Commands",id:"commands",slug:"/guides/commands"},d=void 0,l={unversionedId:"guides/commands/commands",id:"version-3.22.0/guides/commands/commands",title:"Commands",description:"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments.",source:"@site/versioned_docs/version-3.22.0/guides/commands/commands.mdx",sourceDirName:"guides/commands",slug:"/guides/commands",permalink:"/3.22.0/guides/commands",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/commands.mdx",tags:[],version:"3.22.0",frontMatter:{title:"Commands",id:"commands",slug:"/guides/commands"},sidebar:"DocsSidebar",previous:{title:"Annotations",permalink:"/3.22.0/guides/annotations"},next:{title:"Extends",permalink:"/3.22.0/guides/extends"}},m={},p=[{value:"Available commands",id:"available-commands",level:2},{value:"assign-reviewers",id:"assign-reviewers",level:3},{value:"assign-random-reviewer",id:"assign-random-reviewer",level:3}],g={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments."),(0,r.kt)("p",null,"This is particularly useful when you want to trigger actions on a pull request that are not specified in the reviewpad configuration file."),(0,r.kt)("p",null,"A command is a comment that follows the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad [ACTION] [ACTION_ARGUMENTS]\n")),(0,r.kt)("p",null,"Where ACTION is the action to be triggered and ACTION_ARGUMENTS are the arguments to be passed to the action."),(0,r.kt)("h2",{id:"available-commands"},"Available commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-reviewers"},"/reviewpad assign-reviewers")," - Assign reviewers to a pull request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign-random-reviewer"},"/reviewpad assign-random-reviewer")," - Assign a random reviewer to a pull request.")),(0,r.kt)("h3",{id:"assign-reviewers"},"assign-reviewers"),(0,r.kt)("hr",null),(0,r.kt)(s.default,null),(0,r.kt)("h3",{id:"assign-random-reviewer"},"assign-random-reviewer"),(0,r.kt)("hr",null),(0,r.kt)(i.default,null))}u.isMDXComponent=!0}}]);