"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3864],{78423:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const d='workflows:\n  - name: add-label-based-on-description-heading\n    run: $addLabel($extractMarkdownHeadingContent($description(), "Merge strategy", 2))\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/extractMarkdownHeadingContent/index",id:"version-v4/guides/built-ins/functions/extractMarkdownHeadingContent/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/extractMarkdownHeadingContent/index.mdx",sourceDirName:"guides/built-ins/functions/extractMarkdownHeadingContent",slug:"/guides/built-ins/functions/extractMarkdownHeadingContent/",permalink:"/guides/built-ins/functions/extractMarkdownHeadingContent/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/extractMarkdownHeadingContent/index.mdx",tags:[],version:"v4",frontMatter:{}},s={},k=[],m={toc:k},g="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(g,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Extracts content from a Markdown heading with the title and the heading level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Input Markdown string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Title of the heading")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"level")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Heading level")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'""')," if ",(0,i.kt)("inlineCode",{parentName:"td"},"heading")," with ",(0,i.kt)("inlineCode",{parentName:"td"},"level")," does not exist in ",(0,i.kt)("inlineCode",{parentName:"td"},"input"),", the contents otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$extractMarkdownHeadingContent($description(), "How", 2) # It will extract the body of ## How in the description\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},d))}u.isMDXComponent=!0}}]);