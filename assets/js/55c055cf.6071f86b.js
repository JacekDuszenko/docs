"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9763],{6697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),o=n(814);const r='workflows:\n  - name: auto-merge-docs-changes\n    run:\n      if: $hasFileExtensions([".md"]) && $checkRunConclusion("build") == "success"\n      then: $merge()\n',s={},l=void 0,u={unversionedId:"guides/built-ins/functions/checkRunConclusion/index",id:"version-v4/guides/built-ins/functions/checkRunConclusion/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/checkRunConclusion/index.mdx",sourceDirName:"guides/built-ins/functions/checkRunConclusion",slug:"/guides/built-ins/functions/checkRunConclusion/",permalink:"/guides/built-ins/functions/checkRunConclusion/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/checkRunConclusion/index.mdx",tags:[],version:"v4",frontMatter:{}},c={},d=[],p={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/troubleshooting#use-check-run-name"},"Please make sure you use the ",(0,i.kt)("strong",{parentName:"a"},"check run name")," and not the check suite name."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Reviewpad looks for the check run conclusion based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the check run."),(0,i.kt)("p",{parentName:"admonition"},"This means that if you have multiple check runs with the same name, Reviewpad will only check for the first check run with that name."),(0,i.kt)("p",{parentName:"admonition"},"It is recommended to use unique names for your check runs.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the conclusion of the given ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/guides/getting-started-with-the-checks-api#about-check-runs"},"check run"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"check_run_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the check run.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The conclusion of the check run, can be ",(0,i.kt)("inlineCode",{parentName:"td"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"stale"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"timed_out"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$checkRunConclusion("build")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);