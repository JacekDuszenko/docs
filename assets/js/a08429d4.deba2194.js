"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36979],{95514:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const o={},l=void 0,s={unversionedId:"guides/built-ins/actions/rebase/index",id:"version-3.24.0/guides/built-ins/actions/rebase/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.24.0/guides/built-ins/actions/rebase/index.mdx",sourceDirName:"guides/built-ins/actions/rebase",slug:"/guides/built-ins/actions/rebase/",permalink:"/3.24.0/guides/built-ins/actions/rebase/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/rebase/index.mdx",tags:[],version:"3.24.0",frontMatter:{}},p={},u=[],m={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Rebases the pull request."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,r.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,r.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Currently, this built-in has some limitations and known issues:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("a",{parentName:"li",href:"getting-started/installation"},"Github App")," ",(0,r.kt)("strong",{parentName:"li"},"only non-forked and user owned forks are supported"),". This is due to GitHub restrictions on committing to a pull request branch from a fork. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork"},"this Github documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("a",{parentName:"li",href:"/getting-started/installation-action-tokenized"},"Github Action")," ",(0,r.kt)("strong",{parentName:"li"},"only non-forked repositories are supported"),".")),(0,r.kt)("p",{parentName:"admonition"},"Overall, the following table shows the current support for the different scenarios:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Github App"),(0,r.kt)("th",{parentName:"tr",align:null},"Github Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Non forked"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User owned fork"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Organization owned fork"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$rebase()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: rebase-pull-request\n    if:\n      - $toBool($selectFromContext("$.rebaseable"))\n    then:\n      - $rebase()\n'))}d.isMDXComponent=!0}}]);