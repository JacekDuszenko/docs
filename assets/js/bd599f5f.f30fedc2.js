"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5974],{61667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),i=n(90814);const r='workflows:\n  - name: attention-set\n    if:\n      - $hasUnaddressedThreads()\n    then:\n      - $addLabel("requires-author-attention")\n',d={},l=void 0,o={unversionedId:"guides/built-ins/functions/hasUnaddressedThreads/index",id:"guides/built-ins/functions/hasUnaddressedThreads/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",sourceDirName:"guides/built-ins/functions/hasUnaddressedThreads",slug:"/guides/built-ins/functions/hasUnaddressedThreads/",permalink:"/next/guides/built-ins/functions/hasUnaddressedThreads/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasUnaddressedThreads/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],m={toc:u},h="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Verifies whether the pull request has review threads that are unaddressed, returning ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,s.kt)("p",null,"A review thread is unaddressed when it is not ",(0,s.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"outdated"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has any review thread that is not ",(0,s.kt)("inlineCode",{parentName:"td"},"resolved")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"outdated"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$hasUnaddressedThreads()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);