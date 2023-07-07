"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6899],{3617:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),l=n(814);const r='workflows:\n  - name: workload\n    run:\n      if: $pullRequestCountBy($author(), "open") > 2\n      then: $commentOnce("You have too many open pull requests.")\n',s={},o=void 0,u={unversionedId:"guides/built-ins/functions/totalCreatedPullRequests/index",id:"guides/built-ins/functions/totalCreatedPullRequests/index",title:"index",description:"This built-in is no longer recommended. Avoid using it, and update existing code if possible.",source:"@site/docs/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",sourceDirName:"guides/built-ins/functions/totalCreatedPullRequests",slug:"/guides/built-ins/functions/totalCreatedPullRequests/",permalink:"/next/guides/built-ins/functions/totalCreatedPullRequests/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},k="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\ud83d\uddd1\ufe0f DEPRECATED",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is no longer recommended. Avoid using it, and update existing code if possible."),(0,i.kt)("p",{parentName:"admonition"},"Be aware that this built-in may cease to work at any time."),(0,i.kt)("p",{parentName:"admonition"},"Please consider using ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#pullrequestcountby"},(0,i.kt)("inlineCode",{parentName:"a"},"pullRequestCountBy"))," built-in instead.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of pull requests created by the given GitHub user login."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"user_login")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of pull requests created by the GitHub user login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$totalCreatedPullRequests($author())\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}c.isMDXComponent=!0}}]);