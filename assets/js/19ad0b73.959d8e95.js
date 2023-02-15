"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70534],{2683:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r={},l=void 0,o={unversionedId:"guides/built-ins/functions/issueCountBy/index",id:"version-3.25.0/guides/built-ins/functions/issueCountBy/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.25.0/guides/built-ins/functions/issueCountBy/index.mdx",sourceDirName:"guides/built-ins/functions/issueCountBy",slug:"/guides/built-ins/functions/issueCountBy/",permalink:"/guides/built-ins/functions/issueCountBy/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/issueCountBy/index.mdx",tags:[],version:"3.25.0",frontMatter:{}},u={},p=[],d={toc:p};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of issues created by the given GitHub user login and issue state."),(0,i.kt)("p",null,"Note that altough GitHub considers a pull request to be an issue, we exclude pull requests in this request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"user_login")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The issue state (open, closed or all).")))),(0,i.kt)("p",null,"Passing the empty string ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," to ",(0,i.kt)("inlineCode",{parentName:"p"},"user_login")," returns the number of issues with a given state in the repository."),(0,i.kt)("p",null,"Passing the empty string ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," or nothing to ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of issues created by the given GitHub user login with the state.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$issueCountBy($author())\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: congratulate\n    if:\n      - rule: $issueCountBy($author(), "all") == 1\n        extra-actions:\n          - $commentOnce("Congratulations on your first issue!")\n      - rule: $issueCountBy($author(), "all") == 10\n        extra-actions:\n          - $commentOnce("Way to go! You have created 10 issues!")\n'))}m.isMDXComponent=!0}}]);