"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3997],{56479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const s='workflows:\n  - name: update-to-date\n    if:\n      - $hasLinearHistory() == false\n    then:\n      - $comment("The pull request does not have a linear history.")\n      - $fail("non-linear history")\n',l={slug:"/guides/built-ins-comment"},m=void 0,r={unversionedId:"guides/built-ins/actions/comment/index",id:"guides/built-ins/actions/comment/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/comment/index.mdx",sourceDirName:"guides/built-ins/actions/comment",slug:"/guides/built-ins-comment",permalink:"/next/guides/built-ins-comment",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/comment/index.mdx",tags:[],version:"current",frontMatter:{slug:"/guides/built-ins-comment"}},p={},u=[],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Posts a comment on the pull request / issue."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please be aware that this built-in may cause unexpected behavior."),(0,i.kt)("p",{parentName:"admonition"},"The comment built-in is executed on each Reviewpad execution as long as the condition is met."),(0,i.kt)("p",{parentName:"admonition"},"In the configuration below, the comment will be posted on each Reviewpad execution as long as the pull request has at least one approval."),(0,i.kt)("p",{parentName:"admonition"},"For instance, if after getting approval there are 5 activities on the pull request (e.g. committing, pushing, labeling), the comment will be posted 5 times."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: comment\n    if:\n    - rule: $approvalsCount() > 0\n    then:\n    - $comment("This pull request has been approved.")\n')),(0,i.kt)("p",{parentName:"admonition"},"You might consider using the ",(0,i.kt)("a",{parentName:"p",href:"./built-ins#commentonce"},(0,i.kt)("inlineCode",{parentName:"a"},"commentOnce"))," built-in instead.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The body of the comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$comment("This pull request has git conflicts. Please resolve them.")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}h.isMDXComponent=!0}}]);