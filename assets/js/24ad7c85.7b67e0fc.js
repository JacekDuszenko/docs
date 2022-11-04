"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[97203],{33946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/actions/review/index",id:"version-3.12.0/guides/built-ins/actions/review/index",title:"index",description:"Please note that this action requires the Reviewpad Action to be installed with a GitHub token.",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/actions/review/index.mdx",sourceDirName:"guides/built-ins/actions/review",slug:"/guides/built-ins/actions/review/",permalink:"/guides/built-ins/actions/review/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/review/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},p={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Requires GitHub token",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this action requires the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"Reviewpad Action to be installed with a GitHub token"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Submits a pull request review."),(0,i.kt)("p",null,"The action fails when review type is ",(0,i.kt)("inlineCode",{parentName:"p"},"REQUEST_CHANGES")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMENT")," and no message is provided."),(0,i.kt)("p",null,"The review will only be performed if the following conditions are met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the last review is not ",(0,i.kt)("inlineCode",{parentName:"li"},"APPROVED"),";"),(0,i.kt)("li",{parentName:"ul"},"the pull request has changes since the last submitted review.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"review_type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The kind of review, can be ",(0,i.kt)("inlineCode",{parentName:"td"},"APPROVE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"REQUEST_CHANGES"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"COMMENT"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The message to write as a comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$review("APPROVE", "")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'rules:\n  - name: code-changes-without-tests\n    kind: patch\n    description: Changes to src and not to test files\n    spec: \'$hasFilePattern("src/**") && !$hasFilePattern("*_test.go")\'\n\nworkflows:\n  - name: request-changes-to-tests\n    if:\n      - rule: code-changes-without-tests\n    then:\n      - \'$review("REQUEST_CHANGES", "Please update the associated tests.")\''))}m.isMDXComponent=!0}}]);