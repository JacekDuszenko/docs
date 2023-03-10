"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5069],{28487:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),o=n(90814);const s='workflows:\n  - name: high-activity\n    if:\n      - $commitCount() > 10\n    then:\n      - $info("Please consider splitting the pull request into smaller pull requests.")\n',l={},u=void 0,r={unversionedId:"guides/built-ins/functions/commitCount/index",id:"guides/built-ins/functions/commitCount/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/commitCount/index.mdx",sourceDirName:"guides/built-ins/functions/commitCount",slug:"/guides/built-ins/functions/commitCount/",permalink:"/next/guides/built-ins/functions/commitCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commitCount/index.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p},c="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the total number of commits made into the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of commits in the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commitCount()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);