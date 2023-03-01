"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4266],{40803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var n=a(87462),i=(a(67294),a(3905)),c=a(90814);const s='api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-env-var\n    description: Patch includes changes to environment variables\n    spec: $hasCodePattern("ENV_*")\n  - name: includes_gh_token\n    description: Patch includes a GitHub token\n    spec: $hasCodePattern("gh_*")\n\nworkflows:\n  - name: critical\n    if:\n      - rule: changes-env-var\n    then:\n      - $addLabel("critical")\n  - name: security\n    if:\n      - rule: includes_gh_token\n    then:\n      - $fail("Patch includes a GitHub token")\n',l={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},r=void 0,o={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",id:"use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The hasCodePattern built-in allows us to query the code contained in the diff.",source:"@site/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",sourceDirName:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/next/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",tags:[],version:"current",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/next/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/next/use-cases/label-critical-changes-with-semantic-code-annotations"}},d={},h=[],u={toc:h},p="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows us to query the code contained in the diff."),(0,i.kt)("p",null,"This ability let us a query for changes and understand, for instance, if sensitive (e.g. access token) data was explicitly added to the code."),(0,i.kt)(c.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s))}b.isMDXComponent=!0}}]);