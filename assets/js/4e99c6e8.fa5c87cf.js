"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19990],{86103:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={},l=void 0,s={type:"mdx",permalink:"/changelog/reviewpad-v3270",source:"@site/src/pages/changelog/reviewpad-v3270.md",description:"Reviewpad v3.27.0",frontMatter:{}},d=[{value:"Reviewpad v3.27.0",id:"reviewpad-v3270",level:2},{value:"Release date - 24 February 2023",id:"release-date---24-february-2023",level:2},{value:"Introduction",id:"introduction",level:2},{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"Built-ins",id:"built-ins",level:3},{value:"Commands",id:"commands",level:3},{value:"Improvements \ud83d\ude80",id:"improvements-",level:2},{value:"Bug \ud83d\udc1b",id:"bug-",level:2}],o={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"reviewpad-v3270"},(0,n.kt)("a",{parentName:"h2",href:"/changelog/reviewpad-v3260"},"Reviewpad v3.27.0")),(0,n.kt)("h2",{id:"release-date---24-february-2023"},"Release date - 24 February 2023"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This update introduces several new features and improvements. One of the latest additions is the ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins#isupdatedwithbasebranch"},(0,n.kt)("inlineCode",{parentName:"a"},"$isUpdatedWithBaseBranch"))," built-in that verifies if the pull request has been updated with the base branch. Additionally, the new ",(0,n.kt)("a",{parentName:"p",href:"/guides/commands#run"},(0,n.kt)("inlineCode",{parentName:"a"},"/reviewpad run"))," command has been added to trigger a reviewpad run. The ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins/#haveallchecksruncompleted"},(0,n.kt)("inlineCode",{parentName:"a"},"$haveAllChecksRunCompleted"))," built-in now includes a new ",(0,n.kt)("inlineCode",{parentName:"p"},"check_conclusions_to_ignore")," parameter, and the algorithm for the ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins/#assigncodeauthorreviewers"},(0,n.kt)("inlineCode",{parentName:"a"},"$assignCodeAuthorReviewers"))," built-in has been enhanced."),(0,n.kt)("p",null,"Furthermore, the ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins/#review"},(0,n.kt)("inlineCode",{parentName:"a"},"$review"))," built-in has been improved to enable it to perform a review even when the state or body of the review being conducted is different from the current review. Finally, this update addresses a bug where the transform action was missing in the ",(0,n.kt)("a",{parentName:"p",href:"/guides/syntax#pipeline"},(0,n.kt)("inlineCode",{parentName:"a"},"pipeline")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"until")," expressions."),(0,n.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,n.kt)("h3",{id:"built-ins"},"Built-ins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins#isupdatedwithbasebranch"},(0,n.kt)("inlineCode",{parentName:"a"},"$isUpdatedWithBaseBranch"))," - Checks if the pull request is updated with the base branch.")),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/commands#run"},(0,n.kt)("inlineCode",{parentName:"a"},"/reviewpad run"))," - Triggers a reviewpad run.")),(0,n.kt)("h2",{id:"improvements-"},"Improvements \ud83d\ude80"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins/#haveallchecksruncompleted"},(0,n.kt)("inlineCode",{parentName:"a"},"$haveAllChecksRunCompleted"))," built-in now accepts an optional parameter ",(0,n.kt)("inlineCode",{parentName:"li"},"check_conclusions_to_ignore")," with the list of check conclusions to ignore."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins/#assigncodeauthorreviewers"},(0,n.kt)("inlineCode",{parentName:"a"},"$assignCodeAuthorReviewers"))," built-in has an improved algorithm to assign a random reviewer when there aren't any code authors to assign."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins/#review"},(0,n.kt)("inlineCode",{parentName:"a"},"$review"))," built-in now performs a review whenever the state or body of the review to be performed is different from the existing review.")),(0,n.kt)("h2",{id:"bug-"},"Bug \ud83d\udc1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/syntax#pipeline"},(0,n.kt)("inlineCode",{parentName:"a"},"pipeline")),"'s ",(0,n.kt)("inlineCode",{parentName:"li"},"until")," expressions are now appropriately transformed.")))}u.isMDXComponent=!0}}]);