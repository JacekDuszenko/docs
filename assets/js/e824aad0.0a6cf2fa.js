"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32838],{7917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const r={},s=void 0,o={unversionedId:"guides/built-ins/actions/removeLabel/index",id:"version-3.27.0/guides/built-ins/actions/removeLabel/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.27.0/guides/built-ins/actions/removeLabel/index.mdx",sourceDirName:"guides/built-ins/actions/removeLabel",slug:"/guides/built-ins/actions/removeLabel/",permalink:"/guides/built-ins/actions/removeLabel/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/removeLabel/index.mdx",tags:[],version:"3.27.0",frontMatter:{}},p={},m=[],d={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Removes a label applied to a pull request / issue."),(0,i.kt)("p",null,"It will check if there is a label with this key in the labels section of reviewpad.yml."),(0,i.kt)("p",null,"If such label exists, it will use ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property of the label; if the property is not present, then it uses the key as the name."),(0,i.kt)("p",null,"If the label does not exist in the repository, no action will be taken."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the label to remove.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$removeLabel("bug")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: conflicts\n    if:\n      - rule: $hasGitConflicts() == false\n        extra-actions:\n          - $removeLabel("git-conflicts")\n'))}u.isMDXComponent=!0}}]);