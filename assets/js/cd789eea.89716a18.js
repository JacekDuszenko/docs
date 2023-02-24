"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28284],{63294:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),s=(n(67294),n(3905)),a=n(90814);const o={},r=void 0,l={unversionedId:"guides/built-ins/functions/commits/index",id:"version-3.27.0/guides/built-ins/functions/commits/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.27.0/guides/built-ins/functions/commits/index.mdx",sourceDirName:"guides/built-ins/functions/commits",slug:"/guides/built-ins/functions/commits/",permalink:"/guides/built-ins/functions/commits/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commits/index.mdx",tags:[],version:"3.27.0",frontMatter:{}},m={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the list of commit messages of the pull request."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,s.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,s.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"[]string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The list of commit messages of the pull request.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$commits()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-bug\n    # Verify if any commit message starts with the word "fix:"\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec:  \'$any($commits(), ($c: String => $startsWith($c, "fix:")  ))\'\n\nworkflows:\n  - name: labe-change-type\n    if:\n      - rule: is-bug\n    then:\n      - $addLabel("bug")\n'))}d.isMDXComponent=!0}}]);