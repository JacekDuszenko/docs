"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7861],{4476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s="workflows:\n  - name: distribute-review\n    run:\n      if: '!$isDraft() && $hasLinkedIssues() && $hasLinearHistory()'\n      then: $assignRandomReviewer()\n",l={},u=void 0,o={unversionedId:"guides/built-ins/functions/isDraft/index",id:"guides/built-ins/functions/isDraft/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/isDraft/index.mdx",sourceDirName:"guides/built-ins/functions/isDraft",slug:"/guides/built-ins/functions/isDraft/",permalink:"/next/guides/built-ins/functions/isDraft/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isDraft/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},k="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Verifies whether the pull request is a draft, returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,a.kt)("p",null,"To know more about ",(0,a.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"GitHub Draft pull request"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is a draft, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$isDraft()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}f.isMDXComponent=!0}}]);