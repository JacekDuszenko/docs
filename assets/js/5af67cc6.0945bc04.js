"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1444],{31143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var s=n(87462),i=(n(67294),n(3905)),a=n(90814);const o='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: rebase-pull-request\n    if:\n      - $toBool($selectFromContext("$.rebaseable"))\n    then:\n      - $rebase()\n',r={slug:"/guides/built-ins-rebase"},l=void 0,u={unversionedId:"guides/built-ins/actions/rebase/index",id:"guides/built-ins/actions/rebase/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/rebase/index.mdx",sourceDirName:"guides/built-ins/actions/rebase",slug:"/guides/built-ins-rebase",permalink:"/next/guides/built-ins-rebase",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/rebase/index.mdx",tags:[],version:"current",frontMatter:{slug:"/guides/built-ins-rebase"}},p={},d=[],m={toc:d},c="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Rebases the pull request."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Only non-forked and user-owned forks are supported by this built-in"),". This is due to GitHub restrictions on committing to a pull request branch from a fork. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork"},"this Github documentation"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$rebase()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}b.isMDXComponent=!0}}]);