"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5737],{2573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(814);const o='workflows:\n  - name: merge\n    run:\n      if: $workflowStatus("build") == "success"\n      then: $merge()\n',l={},s=void 0,d={unversionedId:"guides/built-ins/functions/workflowStatus/index",id:"guides/built-ins/functions/workflowStatus/index",title:"index",description:"This built-in is no longer recommended. Avoid using it, and update existing code if possible.",source:"@site/docs/guides/built-ins/functions/workflowStatus/index.mdx",sourceDirName:"guides/built-ins/functions/workflowStatus",slug:"/guides/built-ins/functions/workflowStatus/",permalink:"/next/guides/built-ins/functions/workflowStatus/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/workflowStatus/index.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p},k="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\ud83d\uddd1\ufe0f DEPRECATED",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is no longer recommended. Avoid using it, and update existing code if possible."),(0,i.kt)("p",{parentName:"admonition"},"Be aware that this built-in may cease to work at any time."),(0,i.kt)("p",{parentName:"admonition"},"Please consider using ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#checkrunconclusion"},(0,i.kt)("inlineCode",{parentName:"a"},"checkRunConclusion"))," built-in instead.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/troubleshooting#use-check-run-name"},"Please make sure you use the ",(0,i.kt)("strong",{parentName:"a"},"workflow run name")," and not the workflow suite name."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the status of a workflow run."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"workflow_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the workflow run.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The conclusion of the check run, can be ",(0,i.kt)("inlineCode",{parentName:"td"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"stale"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"timed_out"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$workflowStatus("reviewpad")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}c.isMDXComponent=!0}}]);