"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4370],{9452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(7462),s=(n(7294),n(3905)),r=n(814);const a='workflows:\n  - name: assign-reviewer\n    run:\n      if: $requestedReviewers() == []\n      then: $info("Please assign a reviewer.")\n',l={},u=void 0,o={unversionedId:"guides/built-ins/functions/requestedReviewers/index",id:"version-v4/guides/built-ins/functions/requestedReviewers/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/requestedReviewers/index.mdx",sourceDirName:"guides/built-ins/functions/requestedReviewers",slug:"/guides/built-ins/functions/requestedReviewers/",permalink:"/guides/built-ins/functions/requestedReviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/requestedReviewers/index.mdx",tags:[],version:"v4",frontMatter:{}},d={},p=[],m={toc:p},k="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the list of GitHub user logins or team slugs that were requested to review the pull request."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"[]string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins or team slugs that were requested to review the pull request.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$requestedReviewers()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}g.isMDXComponent=!0}}]);