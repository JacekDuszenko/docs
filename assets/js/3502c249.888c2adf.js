"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7217],{5930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=n(814);const l='workflows:\n  - name: critical-code\n    run:\n      if: $hasCodePattern("placeBet\\(.*\\)")\n      then:\n        - $assignReviewer($team("core"), 1)\n        - $addLabel("critical")\n',s={},o=void 0,p={unversionedId:"guides/built-ins/functions/hasCodePattern/index",id:"version-v4/guides/built-ins/functions/hasCodePattern/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasCodePattern/index.mdx",sourceDirName:"guides/built-ins/functions/hasCodePattern",slug:"/guides/built-ins/functions/hasCodePattern/",permalink:"/guides/built-ins/functions/hasCodePattern/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasCodePattern/index.mdx",tags:[],version:"v4",frontMatter:{}},d={},u=[],m={toc:u},k="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Verifies if the patch matches the provided code pattern, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,"The code pattern needs to be a compilable regular expression."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"query_pattern")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The query pattern to look for in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the patch matches the query pattern, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasCodePattern("placeBet\\(.*\\)")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);