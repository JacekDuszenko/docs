"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7624],{78317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting"},o=void 0,r={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"This page is designed to help you solve common problems that you may encounter when using Reviewpad.",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/next/troubleshooting",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting",slug:"/troubleshooting",title:"Troubleshooting"},sidebar:"DocsSidebar",previous:{title:"Notify when long live pull request",permalink:"/next/use-cases/notify-when-long-live-pull-request"},next:{title:"How to Contribute",permalink:"/next/contribute"}},s={},u=[{value:"Syntax errors",id:"syntax-errors",level:2},{value:"Using <code>&#39;</code> instead of <code>&quot;</code> for strings",id:"single-quotes",level:3},{value:"Missing the <code>$</code> prefix when using a built-in",id:"missing-dollar-prefix",level:3},{value:"Missing the parenthesis <code>()</code> when using a built-in",id:"missing-parenthesis",level:3},{value:"Using <code>seconds</code> on relative timestamps",id:"seconds-on-relative-timestamps",level:3},{value:"Built-ins misuse",id:"built-ins-misuse",level:2},{value:"Using GitHub suite name instead of check run name",id:"use-check-run-name",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page is designed to help you solve common problems that you may encounter when using Reviewpad."),(0,l.kt)("p",null,"Whether you are having issues with setting up your account, integrating with GitHub, configuring your pull request workflow, or anything else related to Reviewpad, you can find answers and solutions here."),(0,l.kt)("p",null,"Simply browse through the list below to find the problem you are having."),(0,l.kt)("p",null,"If you don't see your problem listed here, please contact us on #help on our ",(0,l.kt)("a",{parentName:"p",href:"https://reviewpad.com/discord"},"Discord server"),"."),(0,l.kt)("p",null,"We hope this page helps you get the most out of Reviewpad and enjoy a smooth and secure code review process."),(0,l.kt)("h2",{id:"syntax-errors"},"Syntax errors"),(0,l.kt)("p",null,"When there is a syntax error in your configuration, Reviewpad will show an error message:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"`Parse error: failed to build AST`\n")),(0,l.kt)("p",null,"This error means that Reviewpad wasn't able to parse a property ",(0,l.kt)("inlineCode",{parentName:"p"},"spec")," defined in the configuration."),(0,l.kt)("p",null,"Some of the common parsing errors are:"),(0,l.kt)("h3",{id:"single-quotes"},"Using ",(0,l.kt)("inlineCode",{parentName:"h3"},"'")," instead of ",(0,l.kt)("inlineCode",{parentName:"h3"},'"')," for strings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bad"),(0,l.kt)("th",{parentName:"tr",align:null},"Good"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$addLabel('hello')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'$addLabel("hello")'))))),(0,l.kt)("h3",{id:"missing-dollar-prefix"},"Missing the ",(0,l.kt)("inlineCode",{parentName:"h3"},"$")," prefix when using a built-in"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bad"),(0,l.kt)("th",{parentName:"tr",align:null},"Good"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'hasFileName("README.md")')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'$hasFileName("README.md")'))))),(0,l.kt)("h3",{id:"missing-parenthesis"},"Missing the parenthesis ",(0,l.kt)("inlineCode",{parentName:"h3"},"()")," when using a built-in"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bad"),(0,l.kt)("th",{parentName:"tr",align:null},"Good"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$isMerged")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$isMerged()"))))),(0,l.kt)("h3",{id:"seconds-on-relative-timestamps"},"Using ",(0,l.kt)("inlineCode",{parentName:"h3"},"seconds")," on ",(0,l.kt)("a",{parentName:"h3",href:"./use-cases/timestamps/#relative-timestamps"},"relative timestamps")),(0,l.kt)("p",null,"For now, Reviewpad only supports minutes, hours, days, weeks, months, and years on relative timestamps. Using seconds will result in an error."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bad"),(0,l.kt)("th",{parentName:"tr",align:null},"Good"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60 seconds ago")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1 minute ago"))))),(0,l.kt)("p",null,"Here's an example of the error:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: maybe-LGTM\n    if:\n    # This will fail because we are using seconds\n    - rule: $totalCodeReviews() > 1 && $createdAt() < 60 seconds ago\n    then:\n    - $comment("This PR got a fast review. Is it a LGTM?")\n')),(0,l.kt)("h2",{id:"built-ins-misuse"},"Built-ins misuse"),(0,l.kt)("h3",{id:"use-check-run-name"},"Using GitHub suite name instead of check run name"),(0,l.kt)("p",null,"When using the built-ins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/built-ins/#checkrunconclusion"},(0,l.kt)("inlineCode",{parentName:"a"},"$checkRunConclusion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/built-ins/#hasanycheckruncompleted"},(0,l.kt)("inlineCode",{parentName:"a"},"$hasAnyCheckRunCompleted"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/built-ins/#haveallchecksruncompleted"},(0,l.kt)("inlineCode",{parentName:"a"},"$haveAllChecksRunCompleted"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/built-ins/#workflowstatus"},(0,l.kt)("inlineCode",{parentName:"a"},"$workflowStatus")," \ud83d\uddd1\ufe0f"))),(0,l.kt)("p",null,"We need to use the ",(0,l.kt)("strong",{parentName:"p"},"check run name")," instead of the suite name."),(0,l.kt)("p",null,"In the following GitHub workflow example, the suite name is ",(0,l.kt)("inlineCode",{parentName:"p"},"CI")," and the check run name is ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"name: CI # check suite name\n\non:\n  push:\n\njobs:\n  build: # check run name\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Run a one-line script\n        run: echo Hello, world!\n")),(0,l.kt)("p",null,"Following the example above, we would use ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"CI"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$checkRunConclusion("build")\n$hasAnyCheckRunCompleted(["build"])\n$haveAllChecksRunCompleted(["build"])\n$workflowStatus("build")\n')))}m.isMDXComponent=!0}}]);