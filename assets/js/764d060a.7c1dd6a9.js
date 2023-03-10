"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9086],{99779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const r='workflows:\n  - name: check-run-failure\n    if:\n      - $hasAnyCheckRunCompleted([], ["failure"])\n    then:\n      - $review("REQUEST_CHANGES", "Some of the pull request checks are failing. Please fix them.")\n',o={slug:"/guides/built-ins-has-any-check-run-completed"},s=void 0,p={unversionedId:"guides/built-ins/functions/hasAnyCheckRunCompleted/index",id:"version-v4/guides/built-ins/functions/hasAnyCheckRunCompleted/index",title:"index",description:"This built-in is not available for issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasAnyCheckRunCompleted/index.mdx",sourceDirName:"guides/built-ins/functions/hasAnyCheckRunCompleted",slug:"/guides/built-ins-has-any-check-run-completed",permalink:"/guides/built-ins-has-any-check-run-completed",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasAnyCheckRunCompleted/index.mdx",tags:[],version:"v4",frontMatter:{slug:"/guides/built-ins-has-any-check-run-completed"}},c={},d=[{value:"Any check run has been completed with any conclusion.",id:"any-check-run-has-been-completed-with-any-conclusion",level:4},{value:"Any check run has failed.",id:"any-check-run-has-failed",level:4},{value:"Any check run has been skipped or failed.",id:"any-check-run-has-been-skipped-or-failed",level:4},{value:"Any check run has been completed with skipped except for the <code>integration-tests</code> check run.",id:"any-check-run-has-been-completed-with-skipped-except-for-the-integration-tests-check-run",level:4}],u={toc:d},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"../../troubleshooting#use-check-run-name"},"Please make sure you use the ",(0,i.kt)("strong",{parentName:"a"},"check run name")," and not the check suite name."))),(0,i.kt)("admonition",{title:"Known issue",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that Reviewpad will run for ",(0,i.kt)("strong",{parentName:"p"},"every check run")," that is completed."),(0,i.kt)("p",{parentName:"admonition"},"This can be an issue if you use built-ins that are not idempotent (e.g. the ",(0,i.kt)("a",{parentName:"p",href:"./built-ins#comment"},"comment")," built-in).\nIn this case, Reviewpad will run the built-in multiple times."),(0,i.kt)("p",{parentName:"admonition"},"Here's an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: has-any-check-run-completed\n    if:\n      - $hasAnyCheckRunCompleted()\n    then:\n      - $comment("Hello")\n')),(0,i.kt)("p",{parentName:"admonition"},'In this example, if you have 5 checks Reviewpad comment "Hello" 5 times.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks, whether any check runs for a pull request, have been completed with the provided conclusions."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_runs_to_ignore")," parameter is provided, any check runs that have a name included in the parameter will be ignored."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions")," parameter is provided, only check runs that have been completed with one of the provided conclusions will be considered."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"check_conclusions")," parameter accepts the following values: ",(0,i.kt)("inlineCode",{parentName:"p"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stale"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"timed_out"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_runs_to_ignore")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of check run names to be disregarded. By default, is []")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_conclusions")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of the final conclusions of the check. By default, is []")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if there is at least one check completed with one of the provided conclusions, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("h4",{id:"any-check-run-has-been-completed-with-any-conclusion"},"Any check run has been completed with any conclusion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasAnyCheckRunCompleted()\n")),(0,i.kt)("h4",{id:"any-check-run-has-failed"},"Any check run has failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnyCheckRunCompleted([], ["failure"])\n')),(0,i.kt)("h4",{id:"any-check-run-has-been-skipped-or-failed"},"Any check run has been skipped or failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnyCheckRunCompleted([], ["skipped", "failure"])\n')),(0,i.kt)("h4",{id:"any-check-run-has-been-completed-with-skipped-except-for-the-integration-tests-check-run"},"Any check run has been completed with skipped except for the ",(0,i.kt)("inlineCode",{parentName:"h4"},"integration-tests")," check run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnyCheckRunCompleted(["integration-tests"], ["skipped"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}h.isMDXComponent=!0}}]);