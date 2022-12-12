"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98982],{15171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),l=(n(67294),n(3905)),i=n(90814);const r={},o=void 0,p={unversionedId:"guides/built-ins/functions/haveAllChecksRunCompleted/index",id:"guides/built-ins/functions/haveAllChecksRunCompleted/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/haveAllChecksRunCompleted/index.mdx",sourceDirName:"guides/built-ins/functions/haveAllChecksRunCompleted",slug:"/guides/built-ins/functions/haveAllChecksRunCompleted/",permalink:"/next/guides/built-ins/functions/haveAllChecksRunCompleted/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/haveAllChecksRunCompleted/index.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"All check runs have completed.",id:"all-check-runs-have-completed",level:4},{value:"All check runs have been completed except for the <code>integration-tests</code> check.",id:"all-check-runs-have-been-completed-except-for-the-integration-tests-check",level:4},{value:"All check runs have been completed with <code>success</code>.",id:"all-check-runs-have-been-completed-with-success",level:4}],d={toc:s};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Checks if all check runs for a pull request have been completed."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"check_runs_to_ignore")," parameter is provided the checks with a name included in the parameter will be ignored."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"conclusion")," parameter is provided, all check runs must be complete with the provided conclusion."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"conclusion")," parameter can be one of ",(0,l.kt)("inlineCode",{parentName:"p"},"action_required"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cancelled"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"failure"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"skipped"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stale")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"timed_out"),"."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,l.kt)("strong",{parentName:"p"},"not")," available for ",(0,l.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,l.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"check_runs_to_ignore")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The names of the check runs to exclude from the completed check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"conclusion")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The final conclusion of the check")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")," if all check runs have completed, ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("h4",{id:"all-check-runs-have-completed"},"All check runs have completed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$haveAllChecksRunCompleted()\n")),(0,l.kt)("h4",{id:"all-check-runs-have-been-completed-except-for-the-integration-tests-check"},"All check runs have been completed except for the ",(0,l.kt)("inlineCode",{parentName:"h4"},"integration-tests")," check."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted(["integration-tests"])\n')),(0,l.kt)("h4",{id:"all-check-runs-have-been-completed-with-success"},"All check runs have been completed with ",(0,l.kt)("inlineCode",{parentName:"h4"},"success"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$haveAllChecksRunCompleted([], "success")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: auto-merge\n    if:\n      - $haveAllChecksRunCompleted([], "success")\n    then:\n      - $merge()\n'))}k.isMDXComponent=!0}}]);