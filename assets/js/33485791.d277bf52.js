"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37487],{23641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/actions/warn/index",id:"version-3.16.0/guides/built-ins/actions/warn/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.16.0/guides/built-ins/actions/warn/index.mdx",sourceDirName:"guides/built-ins/actions/warn",slug:"/guides/built-ins/actions/warn/",permalink:"/3.16.0/guides/built-ins/actions/warn/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/warn/index.mdx",tags:[],version:"3.16.0",frontMatter:{}},d={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Adds a message to the warnings section of the report."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The comment to be added in the warnings.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$warn("Please do not forget to add the tests.")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: validate-changes\n    if:\n      - $hasFilePattern("*.lock")\n    then:\n      - $warn("Please remove the lock file from the commit.")\n'))}c.isMDXComponent=!0}}]);