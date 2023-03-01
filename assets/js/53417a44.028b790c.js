"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9103],{22732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),s=(n(67294),n(3905)),r=n(90814);const a='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventions\n    if:\n      - $description() == ""\n    then:\n      - $fail("Pull request description is empty")\n',o={},p=void 0,l={unversionedId:"guides/built-ins/functions/description/index",id:"version-Latest/guides/built-ins/functions/description/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Latest/guides/built-ins/functions/description/index.mdx",sourceDirName:"guides/built-ins/functions/description",slug:"/guides/built-ins/functions/description/",permalink:"/guides/built-ins/functions/description/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/description/index.mdx",tags:[],version:"Latest",frontMatter:{}},d={},u=[],c={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the description of the pull request / issue."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The description of the pull request / issue.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$description()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}k.isMDXComponent=!0}}]);