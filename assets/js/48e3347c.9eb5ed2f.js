"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9912],{83381:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var t=i(87462),s=(i(67294),i(3905)),a=i(90814);const r='workflows:\n  - name: assign-reviewer\n    if:\n      - $description() != ""\n    then:\n      - $assignRandomReviewer()\n',o={},l=void 0,u={unversionedId:"guides/built-ins/actions/assignRandomReviewer/index",id:"guides/built-ins/actions/assignRandomReviewer/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/actions/assignRandomReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignRandomReviewer",slug:"/guides/built-ins/actions/assignRandomReviewer/",permalink:"/next/guides/built-ins/actions/assignRandomReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignRandomReviewer/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},c="wrapper";function g(e){let{components:n,...i}=e;return(0,s.kt)(c,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Assigns a random user of the GitHub organization as the reviewer.\nThis action will always pick a user different than the author of the pull request."),(0,s.kt)("p",null,"However, if the pull request already has a reviewer, nothing happens. This is to prevent\nadding a reviewer each time the pull request is updated."),(0,s.kt)("p",null,"When there's no reviewers to assign to, an error is returned."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$assignRandomReviewer()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}g.isMDXComponent=!0}}]);