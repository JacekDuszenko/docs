"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5852],{24978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const r='workflows:\n  - name: check-run-failure\n    if:\n      - $hasAnyCheckRunCompleted([], ["failure"])\n    then:\n      - $review("REQUEST_CHANGES", "Some of the pull request checks are failing. Please fix them.")\n',o={},p=void 0,s={unversionedId:"guides/built-ins/functions/hasAnyCheckRunCompleted/index",id:"guides/built-ins/functions/hasAnyCheckRunCompleted/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/hasAnyCheckRunCompleted/index.mdx",sourceDirName:"guides/built-ins/functions/hasAnyCheckRunCompleted",slug:"/guides/built-ins/functions/hasAnyCheckRunCompleted/",permalink:"/next/guides/built-ins/functions/hasAnyCheckRunCompleted/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasAnyCheckRunCompleted/index.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Any check run has completed with any conclusion.",id:"any-check-run-has-completed-with-any-conclusion",level:4},{value:"Any check run has failed.",id:"any-check-run-has-failed",level:4},{value:"Any check run has been skipped or failed.",id:"any-check-run-has-been-skipped-or-failed",level:4},{value:"Any check run has been completed with skipped except for integration-tests check run.",id:"any-check-run-has-been-completed-with-skipped-except-for-integration-tests-check-run",level:4}],k={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks whether any check runs for a pull request have been completed with the provided conclusions."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_runs_to_ignore")," parameter is provided, any check runs that have a name included in the parameter will be ignored."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions")," parameter is provided, only check runs that have been completed with one of the provided conclusions will be considered."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions")," parameter accepts the following values: ",(0,i.kt)("inlineCode",{parentName:"p"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stale"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"timed_out"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_runs_to_ignore")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of checks to be disregarded. By default, is []")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_conclusions")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of the final conclusions of the check. By default, is []")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if there is at least on check completed with one of the provided conclusions, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("h4",{id:"any-check-run-has-completed-with-any-conclusion"},"Any check run has completed with any conclusion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasAnyCheckRunCompleted()\n")),(0,i.kt)("h4",{id:"any-check-run-has-failed"},"Any check run has failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnyCheckRunCompleted([], ["failure"])\n')),(0,i.kt)("h4",{id:"any-check-run-has-been-skipped-or-failed"},"Any check run has been skipped or failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnyCheckRunCompleted([], ["skipped", "failure"])\n')),(0,i.kt)("h4",{id:"any-check-run-has-been-completed-with-skipped-except-for-integration-tests-check-run"},"Any check run has been completed with skipped except for integration-tests check run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted(["integration-tests"], ["skipped"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}h.isMDXComponent=!0}}]);