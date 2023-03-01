"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7011],{82674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(87462),r=(n(67294),n(3905)),s=n(90814);const a='api-version: reviewpad.com/v3.x\n\nrules:\n  - name: missing-senior-reviewer\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: \'$any($reviewers(), ($r: String => $isElementOf($r, $team("seniors")))) == false\'\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: missing-senior-reviewer\n        extra-actions:\n          - $info("A pull request must have at least one senior reviewer")\n',l={},o=void 0,p={unversionedId:"guides/built-ins/functions/reviewers/index",id:"version-Legacy/guides/built-ins/functions/reviewers/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Legacy/guides/built-ins/functions/reviewers/index.mdx",sourceDirName:"guides/built-ins/functions/reviewers",slug:"/guides/built-ins/functions/reviewers/",permalink:"/Legacy/guides/built-ins/functions/reviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewers/index.mdx",tags:[],version:"Legacy",frontMatter:{}},u={},d=[],m={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the list of GitHub user logins that have reviewed the pull request."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that have reviewed the pull request.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$reviewers()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},a))}k.isMDXComponent=!0}}]);