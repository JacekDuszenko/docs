"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4182],{60456:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s='workflows:\n  - name: changes-on-security\n    description: Warn when changes include security annotation\n    run:\n      if: $hasAnnotation("security")\n      then: \'$warn($sprintf("This pull request contains security changes. Please, request a 1:1 with security team: %s", [$join($team("security", ", "))]))\'\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/join/index",id:"guides/built-ins/functions/join/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/join/index.mdx",sourceDirName:"guides/built-ins/functions/join",slug:"/guides/built-ins/functions/join/",permalink:"/next/guides/built-ins/functions/join/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/join/index.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],u={toc:m},c="wrapper";function k(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Concatenates an array of strings, using the specified separator between each member."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"elements")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The array to join.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"separator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The separator to put between the elements.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The concatenated string of elements with the separator between them.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$join(["alice", "bob"], " ")    # "alice bob"\n$join(["alice", "bob"], ", ")   # "alice, bob"\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",name:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);