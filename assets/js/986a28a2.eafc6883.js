"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5116],{3409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),r=n(814);const s='workflows:\n  - name: check-compliance\n    run:\n      if: \'$any($reviewers(), ($r: String => $isElementOf($r, $team("seniors")))) == false\'\n      then: $info("A pull request must have at least one senior reviewer")\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/reviewers/index",id:"version-v4/guides/built-ins/functions/reviewers/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/reviewers/index.mdx",sourceDirName:"guides/built-ins/functions/reviewers",slug:"/guides/built-ins/functions/reviewers/",permalink:"/guides/built-ins/functions/reviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewers/index.mdx",tags:[],version:"v4",frontMatter:{}},u={},d=[],m={toc:d},k="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be aware that this built-in ",(0,a.kt)("strong",{parentName:"p"},"DOES NOT")," retrieve the list of ",(0,a.kt)("strong",{parentName:"p"},"ALL")," reviewers on a pull request but the list of the reviewers that have ",(0,a.kt)("strong",{parentName:"p"},"REVIEWED")," the pull request."),(0,a.kt)("p",{parentName:"admonition"},"If you wish to retrieve the list of all reviewers on a pull request, you can create a ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#group"},(0,a.kt)("inlineCode",{parentName:"a"},"group"))," and use both ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#review"},(0,a.kt)("inlineCode",{parentName:"a"},"reviewers"))," and ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#requestedreviewers"},(0,a.kt)("inlineCode",{parentName:"a"},"requestedReviewers"))," built-ins."),(0,a.kt)("p",{parentName:"admonition"},"Here's an example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"groups:\n  - name: all-reviewers\n    spec: $append($reviewers(), $requestedReviewers())\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the list of GitHub user logins that have reviewed the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that have reviewed the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$reviewers()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}v.isMDXComponent=!0}}]);