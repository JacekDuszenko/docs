"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4924],{4665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='workflows:\n  - name: assign-reviewers\n    run:\n      if: $totalCodeReviews($author()) < 5\n      then: $assignReviewer($team("seniors"), 1, "reviewpad")\n',o={},s=void 0,d={unversionedId:"guides/built-ins/functions/totalCodeReviews/index",id:"version-v4/guides/built-ins/functions/totalCodeReviews/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/totalCodeReviews/index.mdx",sourceDirName:"guides/built-ins/functions/totalCodeReviews",slug:"/guides/built-ins/functions/totalCodeReviews/",permalink:"/guides/built-ins/functions/totalCodeReviews/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/totalCodeReviews/index.mdx",tags:[],version:"v4",frontMatter:{}},p={},u=[],m={toc:u},k="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of code reviews made by the given GitHub user login."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"user_login")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of code reviews made by the GitHub user login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$totalCodeReviews($author())\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}g.isMDXComponent=!0}}]);