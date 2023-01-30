"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9122],{78075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const r={},p=void 0,s={unversionedId:"guides/built-ins/functions/size/index",id:"version-3.11.0/guides/built-ins/functions/size/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.11.0/guides/built-ins/functions/size/index.mdx",sourceDirName:"guides/built-ins/functions/size",slug:"/guides/built-ins/functions/size/",permalink:"/3.11.0/guides/built-ins/functions/size/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/size/index.mdx",tags:[],version:"3.11.0",frontMatter:{}},d={},o=[],m={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total amount of changed lines in the patch excluding files that match the given patterns."),(0,i.kt)("p",null,"By default, if no parameter is provided, it will perform a count on all changed files."),(0,i.kt)("p",null,"Any added or removed line is considered a change. For instance, the following patch will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," of 2 (one line removed and one line added)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'function helloWorld() {\n-   return "Hello"\n+   return "Hello World"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"excluded_patterns")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The file patterns to exclude from count.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The sum of all changed lines in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$size()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: is-big-change\n    kind: patch\n    description: Verifies if change is big\n    spec: '$size() > 100'\n"))}u.isMDXComponent=!0}}]);