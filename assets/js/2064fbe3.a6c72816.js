"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3956],{20785:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(90814);const i='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: merge\n    if:\n      - rule: $workflowStatus("build") == "success"\n    then:\n      - $merge()\n',o={},s=void 0,p={unversionedId:"guides/built-ins/functions/workflowStatus/index",id:"version-v4/guides/built-ins/functions/workflowStatus/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/workflowStatus/index.mdx",sourceDirName:"guides/built-ins/functions/workflowStatus",slug:"/guides/built-ins/functions/workflowStatus/",permalink:"/guides/built-ins/functions/workflowStatus/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/workflowStatus/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],k={toc:d},m="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the status of a workflow run."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"workflow_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the workflow.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of the workflow run.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$workflowStatus("reviewpad")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},i))}f.isMDXComponent=!0}}]);