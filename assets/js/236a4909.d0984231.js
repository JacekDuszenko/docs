"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8471],{1471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),o=n(814);const r={},s=void 0,m={unversionedId:"guides/built-ins/actions/comment/index",id:"version-v3/guides/built-ins/actions/comment/index",title:"index",description:"",source:"@site/versioned_docs/version-v3/guides/built-ins/actions/comment/index.mdx",sourceDirName:"guides/built-ins/actions/comment",slug:"/guides/built-ins/actions/comment/",permalink:"/guides/built-ins/actions/comment/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/comment/index.mdx",tags:[],version:"v3",frontMatter:{}},l={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Posts a comment on the pull request / issue."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please be aware that this built-in may cause unexpected behavior."),(0,i.kt)("p",{parentName:"admonition"},"The comment built-in is executed on each Reviewpad execution as long as the condition is met."),(0,i.kt)("p",{parentName:"admonition"},"In the configuration below, the comment will be posted on each Reviewpad execution as long as the pull request has at least one approval."),(0,i.kt)("p",{parentName:"admonition"},"For instance, if after getting approval there are 5 activities on the pull request (e.g. committing, pushing, labeling), the comment will be posted 5 times."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: comment\n    if:\n      - rule: $approvalsCount() > 0\n    then:\n      - $comment("This pull request has been approved.")\n')),(0,i.kt)("p",{parentName:"admonition"},"You might consider using the ",(0,i.kt)("a",{parentName:"p",href:"guides/built-ins#commentonce"},(0,i.kt)("inlineCode",{parentName:"a"},"commentOnce"))," built-in instead.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The body of the comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$comment("This pull request has git conflicts. Please resolve them.")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: update-to-date\r\n    if:\r\n      - $hasLinearHistory() == false\r\n    then:\r\n      - $comment("The pull request does not have a linear history.")\r\n      - $fail("non-linear history")'))}c.isMDXComponent=!0}}]);