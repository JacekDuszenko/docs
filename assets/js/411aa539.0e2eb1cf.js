"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8794],{59318:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s='workflows:\n  - name: add-label-based-on-branch-convention\n    if:\n      - $matchString("(feat|chore)/\\\\w+", $head())\n    then:\n      - $addLabel($subMatchesString((feat|chore)/\\\\w+), $head()))\n',l={},p=void 0,d={unversionedId:"guides/built-ins/functions/subMatchesString/index",id:"version-v4/guides/built-ins/functions/subMatchesString/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/subMatchesString/index.mdx",sourceDirName:"guides/built-ins/functions/subMatchesString",slug:"/guides/built-ins/functions/subMatchesString/",permalink:"/guides/built-ins/functions/subMatchesString/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/subMatchesString/index.mdx",tags:[],version:"v4",frontMatter:{}},o={},u=[],m={toc:u},g="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Extracts the first match on a string based on a given regular expression pattern."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The regular expression pattern to match against the input value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string value to test against the given pattern")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""')," if the input string does not have the pattern")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("p",null,"Matching a string against a simple pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$subMatchesString("name:\\\\s*(\\\\w+)", "name: Peter")\n')),(0,r.kt)("p",null,"Using this function in a ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);