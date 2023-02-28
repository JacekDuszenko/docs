"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4490],{553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=n(7462),a=(n(7294),n(3905)),i=n(814);const r={},l=void 0,o={unversionedId:"guides/built-ins/functions/assignees/index",id:"version-v3/guides/built-ins/functions/assignees/index",title:"index",description:"",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/assignees/index.mdx",sourceDirName:"guides/built-ins/functions/assignees",slug:"/guides/built-ins/functions/assignees/",permalink:"/guides/built-ins/functions/assignees/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/assignees/index.mdx",tags:[],version:"v3",frontMatter:{}},u={},p=[],d={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the list of GitHub user logins that are assigned to the pull request / issue."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that are assigned to the pull request / issue.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$assignees()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: by-default-assign-to-author\r\n    # Run workflow regardless of previous workflow result\r\n    always-run: true\r\n    if:\r\n      - $assignees() == []\r\n    then:\r\n      - $assignAssignees([$author()])\r\n"))}g.isMDXComponent=!0}}]);