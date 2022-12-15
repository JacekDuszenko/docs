"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38594],{50768:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const r={},s=void 0,o={unversionedId:"guides/built-ins/functions/hasGitConflicts/index",id:"version-3.10.0/guides/built-ins/functions/hasGitConflicts/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/functions/hasGitConflicts/index.mdx",sourceDirName:"guides/built-ins/functions/hasGitConflicts",slug:"/guides/built-ins/functions/hasGitConflicts/",permalink:"/3.10.0/guides/built-ins/functions/hasGitConflicts/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasGitConflicts/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},p={},d=[],u={toc:d};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines if the pull request has Git conflicts, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has Git conflicts, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasGitConflicts()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},"labels:\n  has-conflicts:\n    color: ff0000\n\nworkflows:\n  - name: find-git-conflicts\n    if:\n      - rule: '$hasGitConflicts()'\n    then:\n      - '$addLabel(\"has-conflicts\")'\n"))}m.isMDXComponent=!0}}]);