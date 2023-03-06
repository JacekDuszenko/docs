"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3738],{2371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),i=a(90814);const r='workflows:\n  - name: conflicts\n    if:\n      - rule: $hasGitConflicts() == false\n        extra-actions:\n          - $removeLabel("git-conflicts")\n',s={},o=void 0,p={unversionedId:"guides/built-ins/actions/removeLabel/index",id:"guides/built-ins/actions/removeLabel/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/removeLabel/index.mdx",sourceDirName:"guides/built-ins/actions/removeLabel",slug:"/guides/built-ins/actions/removeLabel/",permalink:"/next/guides/built-ins/actions/removeLabel/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/removeLabel/index.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],u={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Removes a label applied to a pull request / issue."),(0,l.kt)("p",null,"It will check if there is a label with this key in the labels section of reviewpad.yml."),(0,l.kt)("p",null,"If such label exists, it will use ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," property of the label; if the property is not present, then it uses the key as the name."),(0,l.kt)("p",null,"If the label does not exist in the repository, no action will be taken."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the label to remove.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$removeLabel("bug")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);