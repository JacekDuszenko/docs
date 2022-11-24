"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[85707],{21875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/actions/assignReviewer/index",id:"version-3.14.0/guides/built-ins/actions/assignReviewer/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.14.0/guides/built-ins/actions/assignReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignReviewer",slug:"/guides/built-ins/actions/assignReviewer/",permalink:"/3.14.0/guides/built-ins/actions/assignReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignReviewer/index.mdx",tags:[],version:"3.14.0",frontMatter:{}},d={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,a.kt)("p",null,"Reviewers can be assigned following one of the described policies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"random"),": the reviewers are chosen in a random manner;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"round-robin"),": the reviewers are chosen following the ",(0,a.kt)("inlineCode",{parentName:"li"},"round-robin")," algorithm;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reviewpad"),": the reviewers are chosen based on the total number of pull requests assigned to them. The smaller the number of pull requests assigned to a reviewer, the greater the probability of being picked.")),(0,a.kt)("p",null,"When there are not enough reviewers to assign to, a warning is returned."),(0,a.kt)("p",null,"If a reviewer from the defined list has performed a review, their review will be re-requested."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"reviewers")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub logins to select from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"policy")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,a.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$assignReviewer(["john", "marie", "peter"], 2, "random")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: reviewers-assignment\n    if:\n      - rule: $isElementOf($author(), $team("devops"))\n        extra-actions:\n          - $assignReviewer($team("devops"))\n      - rule: $isElementOf($author(), $team("juniors"))\n        extra-actions:\n          - $assignReviewer($team("seniors"), 1, "reviewpad")\n'))}u.isMDXComponent=!0}}]);