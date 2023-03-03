"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5470],{54593:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: core-changes\n    if:\n      - $hasFilePattern("src/transactions/**")\n    then:\n      - $assignTeamReviewer(["core"])\n',s={},p=void 0,o={unversionedId:"guides/built-ins/functions/hasFilePattern/index",id:"version-v3/guides/built-ins/functions/hasFilePattern/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v3/guides/built-ins/functions/hasFilePattern/index.mdx",sourceDirName:"guides/built-ins/functions/hasFilePattern",slug:"/guides/built-ins/functions/hasFilePattern/",permalink:"/v3/guides/built-ins/functions/hasFilePattern/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasFilePattern/index.mdx",tags:[],version:"v3",frontMatter:{}},d={},m=[],k={toc:m},u="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether the provided file pattern matches any of the files in the patch, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,"The file pattern needs to be a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file_pattern")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The file pattern glob to look for in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if any of the files in the patch matches the provided file pattern, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasFilePattern("src/transactions/**")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);