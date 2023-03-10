"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1444],{31143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var i=n(87462),s=(n(67294),n(3905)),a=n(90814);const o='workflows:\n  - name: rebase-pull-request\n    if:\n      - $toBool($selectFromContext("$.rebaseable"))\n    then:\n      - $rebase()\n',r={slug:"/guides/built-ins-rebase"},l=void 0,u={unversionedId:"guides/built-ins/actions/rebase/index",id:"guides/built-ins/actions/rebase/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.",source:"@site/docs/guides/built-ins/actions/rebase/index.mdx",sourceDirName:"guides/built-ins/actions/rebase",slug:"/guides/built-ins-rebase",permalink:"/next/guides/built-ins-rebase",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/rebase/index.mdx",tags:[],version:"current",frontMatter:{slug:"/guides/built-ins-rebase"}},p={},d=[],m={toc:d},c="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignored it when running on issues.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is only supported on ",(0,s.kt)("strong",{parentName:"p"},"non-forked")," and ",(0,s.kt)("strong",{parentName:"p"},"user-owned forks")," repositories. This is due to GitHub restrictions on committing to a pull request branch from a fork. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork"},"this Github documentation"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Rebases the pull request."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$rebase()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}b.isMDXComponent=!0}}]);