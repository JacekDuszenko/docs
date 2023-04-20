"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6269],{8394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s='workflows:\n  - name: assign-reviewer\n    run:\n      if: \'!$isWaitingForReview() && !$isDraft()\'\n      then: $assignCodeAuthorReviewers(2, ["john", "marie"], 3)\n',l={},o=void 0,u={unversionedId:"guides/built-ins/actions/assignCodeAuthorReviewers/index",id:"guides/built-ins/actions/assignCodeAuthorReviewers/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/actions/assignCodeAuthorReviewers/index.mdx",sourceDirName:"guides/built-ins/actions/assignCodeAuthorReviewers",slug:"/guides/built-ins/actions/assignCodeAuthorReviewers/",permalink:"/next/guides/built-ins/actions/assignCodeAuthorReviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignCodeAuthorReviewers/index.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p},h="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns the most relevant and available reviewers to the pull request."),(0,a.kt)("p",null,"The relevancy is based on the code ownership information available on the impacted source files. The more lines of code are owned by a reviewer on the impacted source files, the more relevant this reviewer is for the pull request."),(0,a.kt)("p",null,"The availability is based on the number of open pull requests per reviewer. Above a configurable threshold (",(0,a.kt)("inlineCode",{parentName:"p"},"max_reviews"),"), the reviewer is considered unavailable."),(0,a.kt)("p",null,"The assigned reviewers will always be different than the pull request's author."),(0,a.kt)("p",null,"If no relevant reviewers are available for the pull request, the reviewers are randomly selected from the list of GitHub repository collaborators."),(0,a.kt)("p",null,"If the pull request already has a reviewer, no action will be taken."),(0,a.kt)("p",null,"When there are no reviewers to assign to, an error is returned."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total_required_reviewers")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of required reviewers. By default, it is one.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"excluded_reviewers")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of usernames to exclude from review requests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"max_reviews")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The maximum number of open pull requests that a single user can be responsible for reviewing.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$assignCodeAuthorReviewers(2, ["john", "marie"], 3)\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}k.isMDXComponent=!0}}]);