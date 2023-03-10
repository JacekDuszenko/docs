"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3303],{33799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const o="workflows:\n  - name: auto-merge\n    if:\n      - $approvalsCount() > 2\n    then:\n      - $merge()\n",r={},l=void 0,p={unversionedId:"guides/built-ins/functions/approvalsCount/index",id:"version-v4/guides/built-ins/functions/approvalsCount/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/approvalsCount/index.mdx",sourceDirName:"guides/built-ins/functions/approvalsCount",slug:"/guides/built-ins/functions/approvalsCount/",permalink:"/guides/built-ins/functions/approvalsCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/approvalsCount/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of approvals for a pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of approvals the pull request has received.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$approvalsCount()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}c.isMDXComponent=!0}}]);