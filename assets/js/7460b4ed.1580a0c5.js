"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69606],{79624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),i=a(90814);const r={},o=void 0,s={unversionedId:"guides/built-ins/actions/removeLabel/index",id:"version-3.10.0/guides/built-ins/actions/removeLabel/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/removeLabel/index.mdx",sourceDirName:"guides/built-ins/actions/removeLabel",slug:"/guides/built-ins/actions/removeLabel/",permalink:"/3.10.0/guides/built-ins/actions/removeLabel/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/removeLabel/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},p={},m=[],d={toc:m};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Removes a label applied to a pull request."),(0,l.kt)("p",null,"It will check if there is a label with this key in the labels section of reviewpad.yml."),(0,l.kt)("p",null,"If such label exists, it will use ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," property of the label; if the property is not present, then it uses the key as the name."),(0,l.kt)("p",null,"If the label does not exist in the repository, no action will be taken."),(0,l.kt)("admonition",{title:"INFO",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This built-in will be deprecated in the upcoming 4.x series."),(0,l.kt)("p",{parentName:"admonition"},"Replace its usage by ",(0,l.kt)("a",{parentName:"p",href:"/guides/built-ins#removeLabels"},(0,l.kt)("inlineCode",{parentName:"a"},"$removeLabels")),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Available for:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the label to remove.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$removeLabel("bug")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: remove-small-label-in-pull-request\n    description: Remove small label applied to pull request\n    if:\n      - rule: is-not-small\n    then:\n      - '$removeLabel(\"small\")'\n"))}u.isMDXComponent=!0}}]);