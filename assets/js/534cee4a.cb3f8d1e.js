"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6601],{171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),c=a(814);const s={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},l=void 0,r={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",id:"version-v3/use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"",source:"@site/versioned_docs/version-v3/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",sourceDirName:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",tags:[],version:"v3",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/use-cases/label-critical-changes-with-semantic-code-annotations"}},o={},d=[],h={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows us to query the code contained in the diff."),(0,i.kt)("p",null,"This ability let us a query for changes and understand, for instance, if sensitive (e.g. access token) data was explicitly added to the code."),(0,i.kt)(c.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\r\n\r\nrules:\r\n  - name: changes-env-var\r\n    description: Patch includes changes to environment variables\r\n    spec: $hasCodePattern("ENV_*")\r\n  - name: includes_gh_token\r\n    description: Patch includes a GitHub token\r\n    spec: $hasCodePattern("gh_*")\r\n\r\nworkflows:\r\n  - name: critical\r\n    if:\r\n      - rule: changes-env-var\r\n    then:\r\n      - $addLabel("critical")\r\n  - name: security\r\n    if:\r\n      - rule: includes_gh_token\r\n    then:\r\n      - $fail("Patch includes a GitHub token")\r\n'))}u.isMDXComponent=!0}}]);