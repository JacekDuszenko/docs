"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87035],{49265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),c=a(90814);const s={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},l=void 0,r={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",id:"version-3.12.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The hasCodePattern built-in allows us to query the code contained in the diff.",source:"@site/versioned_docs/version-3.12.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",sourceDirName:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/3.12.0/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/3.12.0/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/3.12.0/use-cases/label-critical-changes-with-semantic-code-annotations"}},o={},d=[],h={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows us to query the code contained in the diff."),(0,i.kt)("p",null,"This ability let us a query for changes and understand, for instance, if sensitive (e.g. access token) data was explicitly added to the code."),(0,i.kt)(c.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-env-var\n    description: Patch includes changes to environment variables\n    spec: $hasCodePattern("ENV_*")\n  - name: includes_gh_token\n    description: Patch includes a GitHub token\n    spec: $hasCodePattern("gh_*")\n\nworkflows:\n  - name: critical\n    if:\n      - rule: changes-env-var\n    then:\n      - $addLabel("critical")\n  - name: security\n    if:\n      - rule: includes_gh_token\n    then:\n      - $error("Patch includes a GitHub token")\n      - $fail("GitHub token in patch")\n'))}u.isMDXComponent=!0}}]);