"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4397],{60203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=t(87462),a=(t(67294),t(3905)),s=t(90814);const o='rules:\n  - name: ready-to-merge\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: ready-to-merge\n    then:\n      - $merge()\n      - $deleteHeadBranch()\n',l={},r=void 0,d={unversionedId:"guides/built-ins/actions/deleteHeadBranch/index",id:"version-v4/guides/built-ins/actions/deleteHeadBranch/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/actions/deleteHeadBranch/index.mdx",sourceDirName:"guides/built-ins/actions/deleteHeadBranch",slug:"/guides/built-ins/actions/deleteHeadBranch/",permalink:"/guides/built-ins/actions/deleteHeadBranch/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/deleteHeadBranch/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},p=[],c={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in does not work on pull request from forks.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deleting a branch will cause all pull requests that have the deleted branch as head or base to be closed.")),(0,a.kt)("admonition",{title:"INFO",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is only executed if the pull request is either closed or merged.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Deletes the head branch of the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$deleteHeadBranch()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}h.isMDXComponent=!0}}]);