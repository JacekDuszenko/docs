"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84353,69626],{59997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const r={},i=void 0,o={unversionedId:"guides/commands/assign-reviewers",id:"guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/docs/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-reviewers",permalink:"/next/guides/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"current",frontMatter:{}},l={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},(0,s.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,s.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Flags"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,s.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}p.isMDXComponent=!0},93552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),r=a(59997);const i={title:"Commands",id:"commands",slug:"/guides/commands"},o=void 0,l={unversionedId:"guides/commands/commands",id:"guides/commands/commands",title:"Commands",description:"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments.",source:"@site/docs/guides/commands/commands.mdx",sourceDirName:"guides/commands",slug:"/guides/commands",permalink:"/next/guides/commands",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/commands.mdx",tags:[],version:"current",frontMatter:{title:"Commands",id:"commands",slug:"/guides/commands"},sidebar:"DocsSidebar",previous:{title:"Annotations",permalink:"/next/guides/annotations"},next:{title:"Extends",permalink:"/next/guides/extends"}},d={},m=[{value:"Available commands",id:"available-commands",level:2},{value:"assign-reviewers",id:"assign-reviewers",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Reviewpad commands introduce the ability to trigger reviewpad actions through a command-like instruction using pull request comments."),(0,s.kt)("p",null,"This is particularly useful when you want to trigger actions on a pull request that are not specified in the reviewpad configuration file."),(0,s.kt)("p",null,"A command is a comment that follows the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad [ACTION] [ACTION_ARGUMENTS]\n")),(0,s.kt)("p",null,"Where ACTION is the action to be triggered and ACTION_ARGUMENTS are the arguments to be passed to the action."),(0,s.kt)("h2",{id:"available-commands"},"Available commands"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#assign-reviewers"},"/reviewpad assign-reviewers")," - Assign reviewers to a pull request.")),(0,s.kt)("h3",{id:"assign-reviewers"},"assign-reviewers"),(0,s.kt)("hr",null),(0,s.kt)(r.default,null))}u.isMDXComponent=!0}}]);