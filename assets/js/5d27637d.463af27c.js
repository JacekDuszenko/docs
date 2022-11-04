"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[8920],{86572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var l=n(87462),a=(n(67294),n(3905)),i=n(90814);const s={},r=void 0,o={unversionedId:"guides/built-ins/actions/close/index",id:"version-3.11.0/guides/built-ins/actions/close/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.11.0/guides/built-ins/actions/close/index.mdx",sourceDirName:"guides/built-ins/actions/close",slug:"/guides/built-ins/actions/close/",permalink:"/3.11.0/guides/built-ins/actions/close/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/close/index.mdx",tags:[],version:"3.11.0",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Closes an issue / pull request with a given comment - without merging it."),(0,a.kt)("p",null,"By default, if no parameter is provided, it will close the issue / pull request without a comment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"comment")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The body of the comment.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$close()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: close-pull-request\n    description: Close pull request\n    if:\n      - rule: stale-pull-request\n    then:\n      - '$close(\"Closing for inactivity.\")'\n"))}m.isMDXComponent=!0}}]);