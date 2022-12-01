"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[51181],{23814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s={},l=void 0,m={unversionedId:"guides/built-ins/actions/merge/index",id:"guides/built-ins/actions/merge/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/merge/index.mdx",sourceDirName:"guides/built-ins/actions/merge",slug:"/guides/built-ins/actions/merge/",permalink:"/next/guides/built-ins/actions/merge/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/merge/index.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Merges a pull request with a specific merge method."),(0,r.kt)("p",null,"By default, if no parameter is provided, it will perform a standard git merge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The merge method (merge, rebase or squash).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$merge()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: only-changes-documentation\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: merge\n    if:\n      - rule: only-changes-documentation\n    then:\n      - $merge()\n\n'))}u.isMDXComponent=!0}}]);