"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[51686],{62637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),s=n(90814);const a={},l=void 0,o={unversionedId:"guides/built-ins/functions/reviewers/index",id:"version-3.15.0/guides/built-ins/functions/reviewers/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/functions/reviewers/index.mdx",sourceDirName:"guides/built-ins/functions/reviewers",slug:"/guides/built-ins/functions/reviewers/",permalink:"/3.15.0/guides/built-ins/functions/reviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewers/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the list of GitHub user logins that have reviewed the pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that have reviewed the pull request.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$reviewers()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: missing-senior-reviewer\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: \'$any($reviewers(), ($r: String => $isElementOf($r, $team("seniors")))) == false\'\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: missing-senior-reviewer\n        extra-actions:\n          - $info("A pull request must have at least one senior reviewer")\n'))}m.isMDXComponent=!0}}]);