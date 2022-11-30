"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[17351],{8693:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r={},o=void 0,l={unversionedId:"guides/built-ins/functions/state/index",id:"guides/built-ins/functions/state/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/state/index.mdx",sourceDirName:"guides/built-ins/functions/state",slug:"/guides/built-ins/functions/state/",permalink:"/next/guides/built-ins/functions/state/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/state/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],d={toc:u};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the state of an issue or pull request.\nThis state can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"closed"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The state of the issue/pull request. The state can be ",(0,i.kt)("inlineCode",{parentName:"td"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"closed"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$state()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: thank-contributors\n    if:\n      - $state() == "closed"\n    then:\n      - $info("Thanks for your contribution!")\n\n'))}m.isMDXComponent=!0}}]);