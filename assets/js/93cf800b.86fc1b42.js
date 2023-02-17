"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57694],{21055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,p={unversionedId:"guides/built-ins/functions/startsWith/index",id:"version-3.25.0/guides/built-ins/functions/startsWith/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.25.0/guides/built-ins/functions/startsWith/index.mdx",sourceDirName:"guides/built-ins/functions/startsWith",slug:"/guides/built-ins/functions/startsWith/",permalink:"/3.25.0/guides/built-ins/functions/startsWith/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/startsWith/index.mdx",tags:[],version:"3.25.0",frontMatter:{}},d={},o=[],m={toc:o};function k(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether a text starts with a certain sentence, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The text to search in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prefix")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The prefix.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"prefix")," is a prefix of ",(0,i.kt)("inlineCode",{parentName:"td"},"text"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$startsWith("Testing string contains", "Test")                 #true\n$startsWith("Testing string contains", "string contains")      #false\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-change-type\n    if:\n      - rule: $startsWith($head(), "feature/")\n        extra-actions:\n          - $addLabel("feature")\n      - rule: $startsWith($head(), "fix/")\n        extra-actions:\n          - $addLabel("fix")\n'))}k.isMDXComponent=!0}}]);