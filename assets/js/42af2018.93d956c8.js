"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2503],{1144:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const l='workflows:\n  - name: check-compliance\n    if:\n      - $hasGitConflicts()\n    then:\n      - $fail("Pull request has git conflicts")\n',o={},r=void 0,p={unversionedId:"guides/built-ins/functions/hasGitConflicts/index",id:"version-v4/guides/built-ins/functions/hasGitConflicts/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasGitConflicts/index.mdx",sourceDirName:"guides/built-ins/functions/hasGitConflicts",slug:"/guides/built-ins/functions/hasGitConflicts/",permalink:"/guides/built-ins/functions/hasGitConflicts/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasGitConflicts/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],c={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Determines if the pull request has Git conflicts, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has Git conflicts, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$hasGitConflicts()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}k.isMDXComponent=!0}}]);