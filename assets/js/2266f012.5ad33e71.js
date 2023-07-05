"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6883],{9595:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const d='workflows:\n  - name: add-label-based-on-description-heading\n    run: $addLabel($extractMarkdownHeadingContent($description(), "Merge strategy", 2))\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/extractMarkdownHeadingContent/index",id:"guides/built-ins/functions/extractMarkdownHeadingContent/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/extractMarkdownHeadingContent/index.mdx",sourceDirName:"guides/built-ins/functions/extractMarkdownHeadingContent",slug:"/guides/built-ins/functions/extractMarkdownHeadingContent/",permalink:"/next/guides/built-ins/functions/extractMarkdownHeadingContent/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/extractMarkdownHeadingContent/index.mdx",tags:[],version:"current",frontMatter:{}},s={},k=[],m={toc:k},g="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Extracts content from a Markdown heading with the title and the heading level."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Input Markdown string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of the heading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"level")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Heading level")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""')," if ",(0,r.kt)("inlineCode",{parentName:"td"},"heading")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"level")," does not exist in ",(0,r.kt)("inlineCode",{parentName:"td"},"input"),", the contents otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$extractMarkdownHeadingContent($description(), "How", 2) # It will extract the body of ## How in the description\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},d))}u.isMDXComponent=!0}}]);