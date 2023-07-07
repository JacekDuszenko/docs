"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3161],{3103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),l=n(814);const s='workflows:\n  - name: disallow-binary-file\n    run:\n      if: $hasBinaryFile()\n      then:\n        - $close()\n        - $error("Please don\'t add any binary file into the repository")\n',r={},o=void 0,u={unversionedId:"guides/built-ins/functions/hasBinaryFile/index",id:"guides/built-ins/functions/hasBinaryFile/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/hasBinaryFile/index.mdx",sourceDirName:"guides/built-ins/functions/hasBinaryFile",slug:"/guides/built-ins/functions/hasBinaryFile/",permalink:"/next/guides/built-ins/functions/hasBinaryFile/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasBinaryFile/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},k="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if a pull request has a binary file in the patch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request contains a binary file, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$hasBinaryFile()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}c.isMDXComponent=!0}}]);