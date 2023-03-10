"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3910],{6026:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),i=n(90814);const r='workflows:\n  - name: workload\n    if:\n      - $pullRequestCountBy($author(), "open") > 2\n    then:\n      - $commentOnce("You have too many open pull requests.")\n',s={slug:"/guides/built-ins-totalcreatedpullrequests"},u=void 0,o={unversionedId:"guides/built-ins/functions/totalCreatedPullRequests/index",id:"version-v4/guides/built-ins/functions/totalCreatedPullRequests/index",title:"index",description:"This built-in is no longer recommended. Avoid using it, and update existing code if possible.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",sourceDirName:"guides/built-ins/functions/totalCreatedPullRequests",slug:"/guides/built-ins-totalcreatedpullrequests",permalink:"/guides/built-ins-totalcreatedpullrequests",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",tags:[],version:"v4",frontMatter:{slug:"/guides/built-ins-totalcreatedpullrequests"}},d={},p=[],m={toc:p},k="wrapper";function g(t){let{components:e,...n}=t;return(0,l.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\ud83d\uddd1\ufe0f DEPRECATED",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"This built-in is no longer recommended. Avoid using it, and update existing code if possible."),(0,l.kt)("p",{parentName:"admonition"},"Be aware that this built-in may cease to work at any time."),(0,l.kt)("p",{parentName:"admonition"},"Please consider using ",(0,l.kt)("a",{parentName:"p",href:"./built-ins#pullrequestcountby"},"pullRequestCountBy")," built-in instead.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the total number of pull requests created by the given GitHub user login."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user_login")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The total number of pull requests created by the GitHub user login.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$totalCreatedPullRequests($author())\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}g.isMDXComponent=!0}}]);