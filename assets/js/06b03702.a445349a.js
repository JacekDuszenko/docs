"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32676],{37422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/functions/selectFromJSON/index",id:"version-3.26.0/guides/built-ins/functions/selectFromJSON/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.26.0/guides/built-ins/functions/selectFromJSON/index.mdx",sourceDirName:"guides/built-ins/functions/selectFromJSON",slug:"/guides/built-ins/functions/selectFromJSON/",permalink:"/3.26.0/guides/built-ins/functions/selectFromJSON/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/selectFromJSON/index.mdx",tags:[],version:"3.26.0",frontMatter:{}},p={},m=[],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Allows the selection of arbitrary value(s) from a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," type using a ",(0,r.kt)("a",{parentName:"p",href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"},"JSONPath")," expression."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If no value is found for the given expression, an empty string is returned.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON value to select from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expression")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"},"JSONPath")," expression to evaluate")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON")," serialized string of the value found at the given expression, or empty string if no value is found")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$selectFromJSON($toJSON("[1, 2, 3]"), "$[0]") # select element at index 0\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-rebaseable\n    if:\n      - rule: $selectFromJSON($toJSON($context), "$.rebaseable") == "true"\n    then:\n      - $addLabel("rebaseable")\n'))}u.isMDXComponent=!0}}]);