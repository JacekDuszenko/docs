"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5024],{70581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const l='workflows:\n  - name: configuration-changes\n    run:\n      if: $hasFileExtensions([".yaml"])\n      then: $assignTeamReviewer(["devops"])\n',r={},o=void 0,p={unversionedId:"guides/built-ins/functions/hasFileExtensions/index",id:"guides/built-ins/functions/hasFileExtensions/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/hasFileExtensions/index.mdx",sourceDirName:"guides/built-ins/functions/hasFileExtensions",slug:"/guides/built-ins/functions/hasFileExtensions/",permalink:"/next/guides/built-ins/functions/hasFileExtensions/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasFileExtensions/index.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[],m={toc:u},k="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Determines whether all the extensions of the changed files in the patch are included on the provided list of file extensions, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("p",null,"Each extension provided on the list needs to be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"extensions")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of all file extensions.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if all file extensions in the patch are included in the list, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$hasFileExtensions([".test.ts"])\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}h.isMDXComponent=!0}}]);