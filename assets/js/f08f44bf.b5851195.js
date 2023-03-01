"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9827],{381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: blacklist-binary-files\n    if:\n      - rule: \'$any(["file", "folder/file"], ($file: String => $isBinary($file)))\'\n    then:\n      - $fail("Blacklisted binary files aren\'t allowed in pull request")\n',s={},p=void 0,o={unversionedId:"guides/built-ins/functions/isBinary/index",id:"version-Legacy/guides/built-ins/functions/isBinary/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Legacy/guides/built-ins/functions/isBinary/index.mdx",sourceDirName:"guides/built-ins/functions/isBinary",slug:"/guides/built-ins/functions/isBinary/",permalink:"/Legacy/guides/built-ins/functions/isBinary/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isBinary/index.mdx",tags:[],version:"Legacy",frontMatter:{}},d={},m=[],u={toc:m},k="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Verifies whether the file in the provided path is a binary file."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filepath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The filepath to the file to verify if it is binary.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the file is a binary, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$isBinary("folder/filename")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$isBinary("filename")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}f.isMDXComponent=!0}}]);