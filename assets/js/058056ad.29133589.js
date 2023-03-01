"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1181],{23814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='api-version: reviewpad.com/v3.x\n\nrules:\n  - name: only-changes-documentation\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: merge\n    if:\n      - rule: only-changes-documentation\n    then:\n      - $merge()\n',s={},o=void 0,m={unversionedId:"guides/built-ins/actions/merge/index",id:"guides/built-ins/actions/merge/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/merge/index.mdx",sourceDirName:"guides/built-ins/actions/merge",slug:"/guides/built-ins/actions/merge/",permalink:"/next/guides/built-ins/actions/merge/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/merge/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Merges a pull request with a specific merge method."),(0,i.kt)("p",null,"By default, this action is only enabled for open pull requests that are not draft."),(0,i.kt)("p",null,"Also, by default, if no parameter is provided, it will perform a standard git merge."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The merge method (merge, rebase or squash). By default, it will perform a standard git merge.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$merge()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);