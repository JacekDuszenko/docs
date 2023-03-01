"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9015],{9123:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(814);const i={},o=void 0,s={unversionedId:"guides/built-ins/functions/pullRequestCountBy/index",id:"version-v3/guides/built-ins/functions/pullRequestCountBy/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/pullRequestCountBy/index.mdx",sourceDirName:"guides/built-ins/functions/pullRequestCountBy",slug:"/guides/built-ins/functions/pullRequestCountBy/",permalink:"/guides/built-ins/functions/pullRequestCountBy/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/pullRequestCountBy/index.mdx",tags:[],version:"v3",frontMatter:{}},p={},u=[],d={toc:u};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the total number of pull requests created by the given GitHub user login and state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user_login")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"state")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The pull request state (open, closed or all).")))),(0,l.kt)("p",null,"Passing the empty string ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," to ",(0,l.kt)("inlineCode",{parentName:"p"},"user_login")," returns the number of pull requests with a given state in the repository."),(0,l.kt)("p",null,"Passing the empty string ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," or nothing to ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The total number of pull requests created by the given GitHub user login with provided the state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$pullRequestCountBy($author(), "all")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-workload\n    if:\n      - $pullRequestCountBy($author(), "open") > 2\n    then:\n      - $commentOnce("You have too many open pull requests.")\n'))}m.isMDXComponent=!0}}]);