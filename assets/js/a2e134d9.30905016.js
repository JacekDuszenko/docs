"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15766],{6232:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/actions/warn/index",id:"version-3.15.0/guides/built-ins/actions/warn/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/actions/warn/index.mdx",sourceDirName:"guides/built-ins/actions/warn",slug:"/guides/built-ins/actions/warn/",permalink:"/3.15.0/guides/built-ins/actions/warn/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/warn/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},d={},p=[],m={toc:p};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Adds a message to the warnings section of the report."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available for:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"issue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The comment to be added in the warnings.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$warn("Please do not forget to add the tests.")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: validate-changes\n    if:\n      - $hasFilePattern("*.lock")\n    then:\n      - $warn("Please remove the lock file from the commit.")\n'))}k.isMDXComponent=!0}}]);