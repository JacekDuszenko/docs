"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9419],{6020:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l='workflows:\n  - name: congratulate\n    if:\n      - $pullRequestCountBy($author(), "all") == 1\n    then:\n      - $commentOnce($sprintf("Thank you @%s for this first contribution!", [$author()]))\n',s={},p=void 0,o={unversionedId:"guides/built-ins/functions/sprintf/index",id:"guides/built-ins/functions/sprintf/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/sprintf/index.mdx",sourceDirName:"guides/built-ins/functions/sprintf",slug:"/guides/built-ins/functions/sprintf/",permalink:"/next/guides/built-ins/functions/sprintf/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/sprintf/index.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],u={toc:m},k="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Returns a formatted string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"format_string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string to be formatted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arguments_list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of arguments to replace the format specifiers.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The formatted string.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$sprintf("Hello, %s!", ["world"])  # "Hello, world!"\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}f.isMDXComponent=!0}}]);