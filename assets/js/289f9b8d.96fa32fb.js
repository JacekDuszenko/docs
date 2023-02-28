"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8220],{4125:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),r=n(814);const s={},l=void 0,o={unversionedId:"guides/built-ins/functions/contains/index",id:"guides/built-ins/functions/contains/index",title:"index",description:"",source:"@site/docs/guides/built-ins/functions/contains/index.mdx",sourceDirName:"guides/built-ins/functions/contains",slug:"/guides/built-ins/functions/contains/",permalink:"/next/guides/built-ins/functions/contains/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/contains/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether a text includes a certain sentence, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The text to search in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"search_sentence")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The sentence to search for.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if searchSentence is found within the text, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$contains("Testing string contains", "string contains")     #true\n$contains("Testing string contains", "test")                #false\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: labe-change-type\r\n    if:\r\n      - $contains($title(), "fix")\r\n    then:\r\n      - $addLabel("bug")\r\n'))}c.isMDXComponent=!0}}]);