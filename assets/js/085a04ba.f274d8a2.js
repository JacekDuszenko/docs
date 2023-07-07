"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5163],{4286:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),s=n(814);const r="workflows:\n  - name: auto-merge\n    run:\n      if: $approvalsCount() > 2\n      then: $merge()\n",l={},o=void 0,p={unversionedId:"guides/built-ins/functions/approvalsCount/index",id:"guides/built-ins/functions/approvalsCount/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/approvalsCount/index.mdx",sourceDirName:"guides/built-ins/functions/approvalsCount",slug:"/guides/built-ins/functions/approvalsCount/",permalink:"/next/guides/built-ins/functions/approvalsCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/approvalsCount/index.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of approvals for a pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of approvals the pull request has received.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$approvalsCount()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}c.isMDXComponent=!0}}]);