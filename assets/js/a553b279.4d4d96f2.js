"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[532],{46376:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=i(87462),a=(i(67294),i(3905)),r=i(90814);const o='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: run-critical-ci\n    if:\n      - $hasAnnotation("critical")\n    then:\n      - $triggerWorkflow("ci-critical-tests.yml")\n',l={},s=void 0,p={unversionedId:"guides/built-ins/actions/triggerWorkflow/index",id:"version-v3/guides/built-ins/actions/triggerWorkflow/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/actions/triggerWorkflow/index.mdx",sourceDirName:"guides/built-ins/actions/triggerWorkflow",slug:"/guides/built-ins/actions/triggerWorkflow/",permalink:"/v3/guides/built-ins/actions/triggerWorkflow/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/triggerWorkflow/index.mdx",tags:[],version:"v3",frontMatter:{}},d={},k=[],c={toc:k},m="wrapper";function g(t){let{components:e,...i}=t;return(0,a.kt)(m,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event"},"workflow dispatch event")," to manually trigger a GitHub Action workflow run."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that for this built-in to work, the workflow file that you which to trigger must have the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event"},(0,a.kt)("inlineCode",{parentName:"a"},"workflow_dispatch"))," trigger.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"file_name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The workflow file name.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$triggerWorkflow("main.yml")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}g.isMDXComponent=!0}}]);