"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5024],{70581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const l='workflows:\n  - name: configuration-changes\n    if:\n      - $hasFileExtensions([".yaml"])\n    then:\n      - $assignTeamReviewer(["devops"])\n',r={},o=void 0,p={unversionedId:"guides/built-ins/functions/hasFileExtensions/index",id:"guides/built-ins/functions/hasFileExtensions/index",title:"index",description:"This built-in is not available for issues.",source:"@site/docs/guides/built-ins/functions/hasFileExtensions/index.mdx",sourceDirName:"guides/built-ins/functions/hasFileExtensions",slug:"/guides/built-ins/functions/hasFileExtensions/",permalink:"/next/guides/built-ins/functions/hasFileExtensions/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasFileExtensions/index.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],u={toc:m},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether all the extensions of the changed files in the patch are included on the provided list of file extensions, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,"Each extension provided on the list needs to be a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"extensions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of all file extensions.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if all file extensions in the patch are included in the list, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasFileExtensions([".test.ts"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}h.isMDXComponent=!0}}]);