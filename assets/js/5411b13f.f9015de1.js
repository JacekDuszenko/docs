"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6474],{99781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(87462),r=(n(67294),n(3905)),a=n(90814);const s='rules:\n  - name: missing-senior-reviewer\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: \'$any($reviewers(), ($r: String => $isElementOf($r, $team("seniors")))) == false\'\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: missing-senior-reviewer\n        extra-actions:\n          - $info("A pull request must have at least one senior reviewer")\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/reviewers/index",id:"guides/built-ins/functions/reviewers/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/docs/guides/built-ins/functions/reviewers/index.mdx",sourceDirName:"guides/built-ins/functions/reviewers",slug:"/guides/built-ins/functions/reviewers/",permalink:"/next/guides/built-ins/functions/reviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewers/index.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that this built-in ",(0,r.kt)("strong",{parentName:"p"},"DOES NOT")," retrieve the list of ",(0,r.kt)("strong",{parentName:"p"},"ALL")," reviewers on a pull request but the list of the reviewers that have ",(0,r.kt)("strong",{parentName:"p"},"REVIEWED")," the pull request."),(0,r.kt)("p",{parentName:"admonition"},"If you wish to retrieve the list of all reviewers on a pull request, you can create a ",(0,r.kt)("a",{parentName:"p",href:"/guides/syntax#group"},(0,r.kt)("inlineCode",{parentName:"a"},"group"))," and use both ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#review"},(0,r.kt)("inlineCode",{parentName:"a"},"reviewers"))," and ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#requestedreviewers"},(0,r.kt)("inlineCode",{parentName:"a"},"requestedReviewers"))," built-ins."),(0,r.kt)("p",{parentName:"admonition"},"Here's an example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"groups:\n  - name: all-reviewers\n    spec: $append($reviewers(), $requestedReviewers())\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the list of GitHub user logins that have reviewed the pull request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that have reviewed the pull request.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$reviewers()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}c.isMDXComponent=!0}}]);