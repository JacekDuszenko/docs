"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9],{71706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),i=a(90814);const s='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewer\n    if:\n      - \'!$isWaitingForReview() && !isDraft()\'\n    then:\n      - $assignCodeAuthorReviewers(2, ["john", "marie"], 3)\n',o={},l=void 0,d={unversionedId:"guides/built-ins/actions/assignCodeAuthorReviewers/index",id:"version-Legacy/guides/built-ins/actions/assignCodeAuthorReviewers/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Legacy/guides/built-ins/actions/assignCodeAuthorReviewers/index.mdx",sourceDirName:"guides/built-ins/actions/assignCodeAuthorReviewers",slug:"/guides/built-ins/actions/assignCodeAuthorReviewers/",permalink:"/Legacy/guides/built-ins/actions/assignCodeAuthorReviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignCodeAuthorReviewers/index.mdx",tags:[],version:"Legacy",frontMatter:{}},p={},u=[],m={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description"),":"),(0,n.kt)("p",null,"Assigns the most relevant and available reviewers to the pull request."),(0,n.kt)("p",null,"The relevancy is based on the code ownership information available on the impacted source files. The more lines of code are owned by a reviewer on the impacted source files, the more relevant this reviewer is for the pull request."),(0,n.kt)("p",null,"The availability is based on the number of open pull requests per reviewer. Above a configurable threshold (",(0,n.kt)("inlineCode",{parentName:"p"},"max_reviews"),"), the reviewer is considered unavailable."),(0,n.kt)("p",null,"The assigned reviewers will always be different than the pull request's author."),(0,n.kt)("p",null,"If no relevant reviewers are available for the pull request, the reviewers are randomly selected from the list of GitHub repository collaborators."),(0,n.kt)("p",null,"If the pull request already has a reviewer, no action will be taken."),(0,n.kt)("p",null,"When there are no reviewers to assign to, an error is returned."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"total_required_reviewers")," (optional)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total number of required reviewers. By default, it is one.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"excluded_reviewers")," (optional)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of usernames to exclude from review requests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"max_reviews")," (optional)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of open pull requests that a single user can be responsible for reviewing.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'$assignCodeAuthorReviewers(2, ["john", "marie"], 3)\n')),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,n.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}h.isMDXComponent=!0}}]);