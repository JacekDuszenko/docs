"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9960],{66034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=a(87462),n=(a(67294),a(3905)),i=a(90814);const s='labels:\n  small:\n    name: Small Change\n    description: Few files\n  medium:\n    description: Some files\n\nworkflows:\n  - name: add-label\n    if:\n      - rule: $size() < 10\n        extra-actions:\n          - $addLabel("small")  # creates the label "Small Change" with description "Few files"\n          - $addLabel("medium") # creates the label "medium" with description "Some files"\n          - $addLabel("large")  # creates the label "large" without description\n',d='workflows:\n  - name: label-small-pull-request\n    if:\n      - $size() < 10\n    then:\n      - $addLabel("small")\n',r={},o=void 0,p={unversionedId:"guides/built-ins/actions/addLabel/index",id:"version-v4/guides/built-ins/actions/addLabel/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/actions/addLabel/index.mdx",sourceDirName:"guides/built-ins/actions/addLabel",slug:"/guides/built-ins/actions/addLabel/",permalink:"/guides/built-ins/actions/addLabel/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/addLabel/index.mdx",tags:[],version:"v4",frontMatter:{}},m={},u=[],c={toc:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description"),":"),(0,n.kt)("p",null,"Adds a label to the pull request / issue."),(0,n.kt)("p",null,"If the label is not applied to the pull request / issue then nothing happens."),(0,n.kt)("p",null,"It will check if there is a label with this key in the labels section of ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml"),"."),(0,n.kt)("p",null,"If such label exists, it will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property of the label; if the property is not present, then it uses the key as the name."),(0,n.kt)("p",null,"If such label does not exist in labels, it will use the provided input string and create a label with that name."),(0,n.kt)("p",null,"Here's an example:"),(0,n.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the label to add.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'$addLabel("bug")\n')),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,n.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},d))}b.isMDXComponent=!0}}]);