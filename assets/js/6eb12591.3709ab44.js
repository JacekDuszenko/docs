"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8317],{2203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),l=n(90814);const s='workflows:\n  - name: too-big\n    if:\n      - $fileCount() > 10\n    then:\n      - $info("Please consider splitting the pull request into smaller pull requests.")\n',o={},r=void 0,u={unversionedId:"guides/built-ins/functions/fileCount/index",id:"guides/built-ins/functions/fileCount/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/docs/guides/built-ins/functions/fileCount/index.mdx",sourceDirName:"guides/built-ins/functions/fileCount",slug:"/guides/built-ins/functions/fileCount/",permalink:"/next/guides/built-ins/functions/fileCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/fileCount/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the total number of files changed in the patch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of files changed in the patch.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$fileCount()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}f.isMDXComponent=!0}}]);