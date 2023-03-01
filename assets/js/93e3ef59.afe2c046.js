"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8830],{37431:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const o='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: run-critical-ci\n    if:\n      - $hasAnnotation("critical")\n    then:\n      - $triggerWorkflow("ci-critical-tests.yml")\n',l={},s=void 0,p={unversionedId:"guides/built-ins/actions/triggerWorkflow/index",id:"guides/built-ins/actions/triggerWorkflow/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/triggerWorkflow/index.mdx",sourceDirName:"guides/built-ins/actions/triggerWorkflow",slug:"/guides/built-ins/actions/triggerWorkflow/",permalink:"/next/guides/built-ins/actions/triggerWorkflow/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/triggerWorkflow/index.mdx",tags:[],version:"current",frontMatter:{}},d={},k=[],c={toc:k},m="wrapper";function g(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event"},"workflow dispatch event")," to manually trigger a GitHub Action workflow run."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that for this built-in to work, the workflow file that you wish to trigger must have the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event"},(0,i.kt)("inlineCode",{parentName:"a"},"workflow_dispatch"))," trigger.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The workflow file name.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$triggerWorkflow("main.yml")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}g.isMDXComponent=!0}}]);