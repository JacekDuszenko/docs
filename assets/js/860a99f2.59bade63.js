"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17580],{97528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/actions/assignReviewer/index",id:"version-3.10.0/guides/built-ins/actions/assignReviewer/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/assignReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignReviewer",slug:"/guides/built-ins/actions/assignReviewer/",permalink:"/3.10.0/guides/built-ins/actions/assignReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignReviewer/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},d={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,r.kt)("p",null,"Reviewers can be assigned following one of the described policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random"),": the reviewers are chosen in a random manner;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"round-robin"),": the reviewers are chosen following the ",(0,r.kt)("inlineCode",{parentName:"li"},"round-robin")," algorithm;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reviewpad"),": the reviewers are chosen based on the total number of pull requests assigned to them. The smaller the number of pull requests assigned to a reviewer, the greater the probability of being picked.")),(0,r.kt)("p",null,"When there are not enough reviewers to assign to, a warning is returned."),(0,r.kt)("p",null,"If a reviewer from the defined list has performed a review, their review will be re-requested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available for:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"issue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reviewers")),(0,r.kt)("td",{parentName:"tr",align:null},"[","]string"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of GitHub logins to select from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"total")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"policy")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The policy followed for reviewer assignment. By default, the policy is ",(0,r.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$assignReviewer(["john", "marie", "peter"], 2, "random")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'workflows:\n  - name: review-code-from-new-joiners\n    description: Assign senior reviewers randomly to pull requests from new joiners\n    if:\n      - rule: authored-by-junior\n    then:\n      - \'$assignReviewer($group("seniors"), 2, "random")\'\n'))}u.isMDXComponent=!0}}]);