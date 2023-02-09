"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13287],{51605:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const r={},o=void 0,l={unversionedId:"guides/built-ins/functions/commits/index",id:"guides/built-ins/functions/commits/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/commits/index.mdx",sourceDirName:"guides/built-ins/functions/commits",slug:"/guides/built-ins/functions/commits/",permalink:"/next/guides/built-ins/functions/commits/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commits/index.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the list of commit messages of the pull request."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This buit-in is not available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of commit messages of the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commits()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-bug\n    # Verify if any commit message starts with the word "fix:"\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec:  \'$any($commits(), ($c: String => $startsWith($c, "fix:")  ))\'\n\nworkflows:\n  - name: labe-change-type\n    if:\n      - rule: is-bug\n    then:\n      - $addLabel("bug")\n'))}d.isMDXComponent=!0}}]);