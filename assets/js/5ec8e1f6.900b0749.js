"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9114],{3189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(814);const s={},l=void 0,o={unversionedId:"guides/built-ins/actions/assignReviewer/index",id:"guides/built-ins/actions/assignReviewer/index",title:"index",description:"",source:"@site/docs/guides/built-ins/actions/assignReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignReviewer",slug:"/guides/built-ins/actions/assignReviewer/",permalink:"/next/guides/built-ins/actions/assignReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignReviewer/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,i.kt)("p",null,"Reviewers can be assigned following one of the described policies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"random"),": the reviewers are chosen in a random manner;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"round-robin"),": the reviewers are chosen following the ",(0,i.kt)("inlineCode",{parentName:"li"},"round-robin")," algorithm;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reviewpad"),": the reviewers are chosen based on the total number of pull requests assigned to them. The smaller the number of pull requests assigned to a reviewer, the greater the probability of being picked.")),(0,i.kt)("p",null,"When there are not enough reviewers to assign to, a warning is returned."),(0,i.kt)("p",null,"If a reviewer from the defined list has performed a review, their review will be re-requested."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reviewers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub logins to select from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"total")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"policy")," (optional)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,i.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$assignReviewer(["john", "marie", "peter"], 2, "random")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nworkflows:\r\n  - name: reviewers-assignment\r\n    if:\r\n      - rule: $isElementOf($author(), $team("devops"))\r\n        extra-actions:\r\n          - $assignReviewer($team("devops"))\r\n      - rule: $isElementOf($author(), $team("juniors"))\r\n        extra-actions:\r\n          - $assignReviewer($team("seniors"), 1, "reviewpad")\r\n'))}u.isMDXComponent=!0}}]);