"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8982],{5171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),l=n(814);const o='workflows:\n  - name: auto-merge\n    run:\n      if: $haveAllChecksRunCompleted([], "success", ["skipped"])\n      then: $merge()\n',c={},s=void 0,r={unversionedId:"guides/built-ins/functions/haveAllChecksRunCompleted/index",id:"guides/built-ins/functions/haveAllChecksRunCompleted/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/haveAllChecksRunCompleted/index.mdx",sourceDirName:"guides/built-ins/functions/haveAllChecksRunCompleted",slug:"/guides/built-ins/functions/haveAllChecksRunCompleted/",permalink:"/next/guides/built-ins/functions/haveAllChecksRunCompleted/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/haveAllChecksRunCompleted/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"All check runs have been completed (regardless of the conclusion).",id:"all-check-runs-have-been-completed-regardless-of-the-conclusion",level:4},{value:"All check runs have been completed except for the <code>integration-tests</code> check.",id:"all-check-runs-have-been-completed-except-for-the-integration-tests-check",level:4},{value:"All check runs have been completed with a <code>success</code> conclusion.",id:"all-check-runs-have-been-completed-with-a-success-conclusion",level:4},{value:"All check runs have been completed with <code>success</code> ignoring the checks with <code>skipped</code> conclusion.",id:"all-check-runs-have-been-completed-with-success-ignoring-the-checks-with-skipped-conclusion",level:4}],m={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/troubleshooting#use-check-run-name"},"Please make sure you use the ",(0,i.kt)("strong",{parentName:"a"},"check run name")," and not the check suite name."))),(0,i.kt)("admonition",{title:"Known issue",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that Reviewpad will run for ",(0,i.kt)("strong",{parentName:"p"},"every check run")," that is completed."),(0,i.kt)("p",{parentName:"admonition"},"This can be an issue if the checks finish around the same time and you use built-ins that are not idempotent (e.g. the ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#comment"},"comment")," built-in).\nIn this case, Reviewpad will run the built-in multiple times."),(0,i.kt)("p",{parentName:"admonition"},"Here's an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: all-checks-completed\n    run:\n      if: $haveAllChecksRunCompleted([], "success")\n      then: $comment("Hello")\n')),(0,i.kt)("p",{parentName:"admonition"},'In this example, if you have 5 checks Reviewpad comment "Hello" 5 times.'),(0,i.kt)("p",{parentName:"admonition"},"If checks finish all with ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," around the same time then,\nwhen Reviewpad runs for each check, the condition of all checks being completed with ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," will be true\nand Reviewpad will run ",(0,i.kt)("inlineCode",{parentName:"p"},'$comment("Hello")')," for each check. This will result in 5 comments.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad")," check run is ignored.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if all check runs for a pull request have been completed."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_runs_to_ignore")," parameter is provided the checks with a name included in the parameter will be ignored."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"conclusion")," parameter is provided, all check runs must be complete with the provided conclusion."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"conclusion")," parameter can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stale")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"timed_out"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions_to_ignore")," parameter is set, any checks with a conclusion that appears in the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions_to_ignore")," list will be ignored."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_runs_to_ignore")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of check run names to be disregarded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"conclusion")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The final conclusion of the check. Empty by default. All conclusion values are valid.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_conclusions_to_ignore")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of check conclusions to be disregarded. Any checks with a conclusion in that list will be ignored.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if all check runs have been completed, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("h4",{id:"all-check-runs-have-been-completed-regardless-of-the-conclusion"},"All check runs have been completed (regardless of the conclusion)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$haveAllChecksRunCompleted()\n")),(0,i.kt)("h4",{id:"all-check-runs-have-been-completed-except-for-the-integration-tests-check"},"All check runs have been completed except for the ",(0,i.kt)("inlineCode",{parentName:"h4"},"integration-tests")," check."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted(["integration-tests"])\n')),(0,i.kt)("h4",{id:"all-check-runs-have-been-completed-with-a-success-conclusion"},"All check runs have been completed with a ",(0,i.kt)("inlineCode",{parentName:"h4"},"success")," conclusion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted([], "success")\n')),(0,i.kt)("h4",{id:"all-check-runs-have-been-completed-with-success-ignoring-the-checks-with-skipped-conclusion"},"All check runs have been completed with ",(0,i.kt)("inlineCode",{parentName:"h4"},"success")," ignoring the checks with ",(0,i.kt)("inlineCode",{parentName:"h4"},"skipped")," conclusion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted([], "success", ["skipped"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}h.isMDXComponent=!0}}]);