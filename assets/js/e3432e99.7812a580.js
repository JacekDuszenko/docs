"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33210],{26529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),i=a(90814);const s={},r=void 0,d={unversionedId:"guides/built-ins/actions/addLabel/index",id:"version-3.24.0/guides/built-ins/actions/addLabel/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.24.0/guides/built-ins/actions/addLabel/index.mdx",sourceDirName:"guides/built-ins/actions/addLabel",slug:"/guides/built-ins/actions/addLabel/",permalink:"/3.24.0/guides/built-ins/actions/addLabel/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/addLabel/index.mdx",tags:[],version:"3.24.0",frontMatter:{}},o={},p=[],m={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Adds a label to the pull request / issue."),(0,l.kt)("p",null,"If the label is not applied to the pull request / issue then nothing happens."),(0,l.kt)("p",null,"It will check if there is a label with this key in the labels section of ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml"),"."),(0,l.kt)("p",null,"If such label exists, it will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," property of the label; if the property is not present, then it uses the key as the name."),(0,l.kt)("p",null,"If such label does not exist in labels, it will use the provided input string and create a label with that name."),(0,l.kt)("p",null,"Here's an example:"),(0,l.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    name: Small Change\n    description: Few files\n  medium:\n    description: Some files\n\nworkflows:\n  - name: add-label\n    if:\n      - rule: $size() < 10\n        extra-actions:\n          - $addLabel("small")  # creates the label "Small Change" with description "Few files"\n          - $addLabel("medium") # creates the label "medium" with description "Some files"\n          - $addLabel("large")  # creates the label "large" without description\n'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the label to add.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$addLabel("bug")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-small-pull-request\n    if:\n      - $size() < 10\n    then:\n      - $addLabel("small")\n'))}u.isMDXComponent=!0}}]);