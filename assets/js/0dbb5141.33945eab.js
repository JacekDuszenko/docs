"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[309],{63311:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var e=i(87462),s=(i(67294),i(3905)),o=i(90814);const a='workflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $commitLint()\n',l={},m=void 0,c={unversionedId:"guides/built-ins/actions/commitLint/index",id:"guides/built-ins/actions/commitLint/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/actions/commitLint/index.mdx",sourceDirName:"guides/built-ins/actions/commitLint",slug:"/guides/built-ins/actions/commitLint/",permalink:"/next/guides/built-ins/actions/commitLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/commitLint/index.mdx",tags:[],version:"current",frontMatter:{}},r={},u=[],p={toc:u},d="wrapper";function k(t){let{components:n,...i}=t;return(0,s.kt)(d,(0,e.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Checks if the commits in the pull request follow the ",(0,s.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$commitLint()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}k.isMDXComponent=!0}}]);