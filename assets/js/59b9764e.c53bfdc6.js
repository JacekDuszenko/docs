"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[351],{8242:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905)),i=n(814);const l={},p=void 0,s={unversionedId:"guides/built-ins/functions/matchString/index",id:"guides/built-ins/functions/matchString/index",title:"index",description:"",source:"@site/docs/guides/built-ins/functions/matchString/index.mdx",sourceDirName:"guides/built-ins/functions/matchString",slug:"/guides/built-ins/functions/matchString/",permalink:"/next/guides/built-ins/functions/matchString/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/matchString/index.mdx",tags:[],version:"current",frontMatter:{}},d={},o=[],m={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Verifies if a provided regular expression pattern is matched by a given text."),(0,r.kt)("p",null,"See supported ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/regexp/syntax"},"regular expression syntax")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The regular expression pattern")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text to match")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"text")," matches the ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$matchString("a(bc)+$", "abcbc") # true\n$matchString("\\d+", "text")      # false\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: branch-convention\r\n    if:\r\n      - rule: '!$matchString(\"(feature|fix|docs)/.+\", $head())'\r\n    then:\r\n      - $error(\"The branch name must start with 'feature/', 'fix/' or 'docs/'\")\r\n"))}u.isMDXComponent=!0}}]);