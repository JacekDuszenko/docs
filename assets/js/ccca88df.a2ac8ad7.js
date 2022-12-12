"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34053],{46774:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),l=n(90814);const r={},s=void 0,o={unversionedId:"guides/built-ins/actions/titleLint/index",id:"version-3.10.0/guides/built-ins/actions/titleLint/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/titleLint/index.mdx",sourceDirName:"guides/built-ins/actions/titleLint",slug:"/guides/built-ins/actions/titleLint/",permalink:"/3.10.0/guides/built-ins/actions/titleLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/titleLint/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},p={},d=[],m={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if the pull request title follows the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available for:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"issue")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$titleLint()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: pr-title-lint\n    description: Lint pull request title with conventional commits\n    always-run: true\n    if:\n      - 'true'\n    then:\n      - '$titleLint()'\n"))}u.isMDXComponent=!0}}]);