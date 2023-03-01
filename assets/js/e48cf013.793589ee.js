"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9173],{77210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: thank-contributors\n    if:\n      - $state() == "closed"\n    then:\n      - $info("Thanks for your contribution!")\n',o={},l=void 0,p={unversionedId:"guides/built-ins/functions/state/index",id:"version-Legacy/guides/built-ins/functions/state/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Legacy/guides/built-ins/functions/state/index.mdx",sourceDirName:"guides/built-ins/functions/state",slug:"/guides/built-ins/functions/state/",permalink:"/Legacy/guides/built-ins/functions/state/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/state/index.mdx",tags:[],version:"Legacy",frontMatter:{}},d={},u=[],c={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the state of a pull request / issue.\nThis state can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"closed"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state of the pull request / issue. The state can be ",(0,i.kt)("inlineCode",{parentName:"td"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"closed"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$state()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}k.isMDXComponent=!0}}]);