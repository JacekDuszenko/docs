"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9947],{58678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: requires-review\n    if:\n      - $isElementOf($author(), $team("juniors"))\n    then:\n      - $assignTeamReviewer(["seniors"])\n',s={},o=void 0,p={unversionedId:"guides/built-ins/functions/isElementOf/index",id:"version-v4/guides/built-ins/functions/isElementOf/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/isElementOf/index.mdx",sourceDirName:"guides/built-ins/functions/isElementOf",slug:"/guides/built-ins/functions/isElementOf/",permalink:"/guides/built-ins/functions/isElementOf/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isElementOf/index.mdx",tags:[],version:"v4",frontMatter:{}},m={},d=[],u={toc:d},k="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether a list includes a certain value among its entries, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"search_element")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value to search for.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"list")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list to search in.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"search_element")," is found within the list, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$isElementOf("john", ["maria", "john"])  # true\n$isElementOf(3, [1, 2])                  # false\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}f.isMDXComponent=!0}}]);