"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4428],{96311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),i=a(90814);const s='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-size\n    if:\n      - rule: $size() < 10\n        extra-actions:\n          - $addLabel("small")\n          - $removeLabels(["medium", "large"])\n',r={},o=void 0,p={unversionedId:"guides/built-ins/actions/removeLabels/index",id:"version-v4/guides/built-ins/actions/removeLabels/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/actions/removeLabels/index.mdx",sourceDirName:"guides/built-ins/actions/removeLabels",slug:"/guides/built-ins/actions/removeLabels/",permalink:"/guides/built-ins/actions/removeLabels/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/removeLabels/index.mdx",tags:[],version:"v4",frontMatter:{}},m={},d=[],u={toc:d},k="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Removes the provided labels from the pull request / issue."),(0,l.kt)("p",null,"For each given label, it will check if there is a label with this key in the labels section of ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml"),"."),(0,l.kt)("p",null,"If such label exists, it will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," property of the label; Otherwsise, it uses the key as the label name."),(0,l.kt)("p",null,"If the label does not exist in the repository, no action will be taken."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"labels")),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of the labels to be removed.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$removeLabels(["bug", "p1"])\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}c.isMDXComponent=!0}}]);