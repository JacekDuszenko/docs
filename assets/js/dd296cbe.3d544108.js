"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3535],{90144:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s='workflows:\n  - name: label-change-type\n    run:\n      - if: $startsWith($head(), "feature/")\n        then: $addLabel("feature")\n      - if: $startsWith($head(), "fix/")\n        then: $addLabel("fix")\n',l={},p=void 0,d={unversionedId:"guides/built-ins/functions/startsWith/index",id:"guides/built-ins/functions/startsWith/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/startsWith/index.mdx",sourceDirName:"guides/built-ins/functions/startsWith",slug:"/guides/built-ins/functions/startsWith/",permalink:"/next/guides/built-ins/functions/startsWith/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/startsWith/index.mdx",tags:[],version:"current",frontMatter:{}},o={},m=[],k={toc:m},u="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Determines whether a text starts with a certain sentence, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text to search in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prefix")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The prefix.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"prefix")," is a prefix of ",(0,r.kt)("inlineCode",{parentName:"td"},"text"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$startsWith("Testing string contains", "Test")                 #true\n$startsWith("Testing string contains", "string contains")      #false\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}f.isMDXComponent=!0}}]);