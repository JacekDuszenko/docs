"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9340],{21703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(90814);const i={},p=void 0,s={unversionedId:"guides/built-ins/functions/length/index",id:"version-3.13.0/guides/built-ins/functions/length/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/functions/length/index.mdx",sourceDirName:"guides/built-ins/functions/length",slug:"/guides/built-ins/functions/length/",permalink:"/3.13.0/guides/built-ins/functions/length/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/length/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},o={},d=[],m={toc:d};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the length of an array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available for:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"issue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The array of elements.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The length of the array.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$length(["a", "b"]) # 2\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: $length($reviewers()) < 2\n        extra-actions:\n          - $info("A pull request must have at least two reviewers")\n      - rule: $length($reviewers()) > 5\n        extra-actions:\n          - $info("A pull request should not more than 5 reviewers")\n'))}k.isMDXComponent=!0}}]);