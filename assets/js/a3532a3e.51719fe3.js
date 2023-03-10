"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3802],{79726:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const s='workflows:\n  - name: LGTM\n    if:\n      - $hasCodeWithoutSemanticChanges()\n    then:\n      - $approve("LGTM")\n',r={},l=void 0,p={unversionedId:"guides/built-ins/functions/hasCodeWithoutSemanticChanges/index",id:"version-v4/guides/built-ins/functions/hasCodeWithoutSemanticChanges/index",title:"index",description:"This is an experimental built-in. Be careful before using it in production.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasCodeWithoutSemanticChanges/index.mdx",sourceDirName:"guides/built-ins/functions/hasCodeWithoutSemanticChanges",slug:"/guides/built-ins/functions/hasCodeWithoutSemanticChanges/",permalink:"/guides/built-ins/functions/hasCodeWithoutSemanticChanges/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasCodeWithoutSemanticChanges/index.mdx",tags:[],version:"v4",frontMatter:{}},d={},u=[],m={toc:u},h="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(h,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\ud83e\uddea EXPERIMENTAL",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This is an experimental built-in. Be careful before using it in production.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if a pull request contains only code changes that do not touch the semantics of the software."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file_patterns_to_ignore")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of file pattern globs to ignore in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request changes are not semantic code changes")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasCodeWithoutSemanticChanges()\n$$hasCodeWithoutSemanticChanges(["**/*_test.go"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}c.isMDXComponent=!0}}]);