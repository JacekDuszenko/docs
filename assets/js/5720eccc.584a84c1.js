"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9126],{52278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const r="api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: rebase\n    if:\n      - '!$isUpdatedWithBaseBranch()'\n    then:\n      - $rebase()\n",d={},p=void 0,l={unversionedId:"guides/built-ins/functions/isUpdatedWithBaseBranch/index",id:"version-v4/guides/built-ins/functions/isUpdatedWithBaseBranch/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/isUpdatedWithBaseBranch/index.mdx",sourceDirName:"guides/built-ins/functions/isUpdatedWithBaseBranch",slug:"/guides/built-ins/functions/isUpdatedWithBaseBranch/",permalink:"/guides/built-ins/functions/isUpdatedWithBaseBranch/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isUpdatedWithBaseBranch/index.mdx",tags:[],version:"v4",frontMatter:{}},o={},u=[],c={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if the pull request is updated with the base branch, i.e., if the first commit of the head branch is the last commit from the base branch."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request is updated with the base branch, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$isUpdatedWithBaseBranch()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}h.isMDXComponent=!0}}]);