"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42717],{46411:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(90814);const l={},i=void 0,s={unversionedId:"guides/built-ins/functions/toBool/index",id:"version-3.24.0/guides/built-ins/functions/toBool/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.24.0/guides/built-ins/functions/toBool/index.mdx",sourceDirName:"guides/built-ins/functions/toBool",slug:"/guides/built-ins/functions/toBool/",permalink:"/3.24.0/guides/built-ins/functions/toBool/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/toBool/index.mdx",tags:[],version:"3.24.0",frontMatter:{}},p={},d=[],u={toc:d};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Converts a string into a boolean. This built-in is a wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/strconv#ParseBool"},"strconv.ParseBool"),".\nIt accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Any other value returns an error."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The string value to be converted to a boolean.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The converted boolean")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'$toBool("true")\n$toBool("false")\n$toBool($selectFromContext("$.locked"))\n')),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-locked\n    if:\n      - rule: $toBool($selectFromContext("$.locked"))\n    then:\n      - $addLabel("locked")\n'))}m.isMDXComponent=!0}}]);