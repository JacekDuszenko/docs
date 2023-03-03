"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6613],{27310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const l={id:"common-pitfalls",slug:"/common-pitfalls",title:"Common Pitfalls and How To Avoid Them"},s=void 0,o={unversionedId:"common-pitfalls",id:"version-v4/common-pitfalls",title:"Common Pitfalls and How To Avoid Them",description:"Reviewpad is a powerful tool that can help streamline your review process, but like any software, it can be easy to make mistakes.",source:"@site/versioned_docs/version-v4/common-pitfalls.mdx",sourceDirName:".",slug:"/common-pitfalls",permalink:"/common-pitfalls",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/common-pitfalls.mdx",tags:[],version:"v4",frontMatter:{id:"common-pitfalls",slug:"/common-pitfalls",title:"Common Pitfalls and How To Avoid Them"},sidebar:"DocsSidebar",previous:{title:"Notify when long live pull request",permalink:"/use-cases/notify-when-long-live-pull-request"},next:{title:"How to Contribute",permalink:"/contribute"}},r={},m=[{value:"1. <code>Parse error: failed to build AST</code>",id:"1-parse-error-failed-to-build-ast",level:2},{value:"1.1 Using <code>&#39;</code> instead of <code>&quot;</code> for strings",id:"11-using--instead-of--for-strings",level:3},{value:"1.2 Missing the <code>$</code> prefix when using a built-in",id:"12-missing-the--prefix-when-using-a-built-in",level:3},{value:"1.3 Missing the parenthesis <code>()</code> when using a built-in",id:"13-missing-the-parenthesis--when-using-a-built-in",level:3},{value:"2. Using <code>seconds</code> on relative timestamps",id:"2-using-seconds-on-relative-timestamps",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reviewpad is a powerful tool that can help streamline your review process, but like any software, it can be easy to make mistakes."),(0,i.kt)("p",null,"On this page, we will be listing some of the most common pitfalls that users encounter when using Reviewpad."),(0,i.kt)("p",null,"By familiarizing yourself with these common mistakes, you can avoid them and get the most out of Reviewpad."),(0,i.kt)("p",null,"We hope that this page will help you become a more efficient and effective user of Reviewpad."),(0,i.kt)("h2",{id:"1-parse-error-failed-to-build-ast"},"1. ",(0,i.kt)("inlineCode",{parentName:"h2"},"Parse error: failed to build AST")),(0,i.kt)("p",null,"This error means that Reviewpad wasn't able to parse a property ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," defined in the configuration."),(0,i.kt)("p",null,"Some of the common parsing errors are:"),(0,i.kt)("h3",{id:"11-using--instead-of--for-strings"},"1.1 Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"'")," instead of ",(0,i.kt)("inlineCode",{parentName:"h3"},'"')," for strings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u2705"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$addLabel('hello')")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'$addLabel("hello")'))))),(0,i.kt)("h3",{id:"12-missing-the--prefix-when-using-a-built-in"},"1.2 Missing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"$")," prefix when using a built-in"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u2705"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'hasFileName("README.md")')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'$hasFileName("README.md")'))))),(0,i.kt)("h3",{id:"13-missing-the-parenthesis--when-using-a-built-in"},"1.3 Missing the parenthesis ",(0,i.kt)("inlineCode",{parentName:"h3"},"()")," when using a built-in"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u2705"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$isMerged")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$isMerged()"))))),(0,i.kt)("h2",{id:"2-using-seconds-on-relative-timestamps"},"2. Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"seconds")," on ",(0,i.kt)("a",{parentName:"h2",href:"./use-cases/timestamps/#relative-timestamps"},"relative timestamps")),(0,i.kt)("p",null,"For now, Reviewpad only supports minutes, hours, days, weeks, months, and years on relative timestamps. Using seconds will result in an error."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u2705"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"60 seconds ago")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1 minute ago"))))),(0,i.kt)("p",null,"Here's an example of the error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: maybe-LGTM\n    if:\n    # This will fail because we are using seconds\n    - rule: $totalCodeReviews() > 1 && $createdAt() < 60 seconds ago\n    then:\n    - $comment("This PR got a fast review. Is it a LGTM?")\n')))}u.isMDXComponent=!0}}]);