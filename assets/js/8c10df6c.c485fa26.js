"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34579],{55951:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=s(87462),n=(s(67294),s(3905)),t=s(90814);const i={title:"Label based on file paths",id:"label-based-on-file-paths",slug:"/use-cases/label-based-on-file-paths"},o=void 0,c={unversionedId:"use-cases/automated-labelling/label-based-on-file-paths/label-based-on-file-paths",id:"version-3.25.0/use-cases/automated-labelling/label-based-on-file-paths/label-based-on-file-paths",title:"Label based on file paths",description:"Here's an example of a reviewpad.yml configuration that labels pull requests that contain changes to a certain filepath.",source:"@site/versioned_docs/version-3.25.0/use-cases/automated-labelling/label-based-on-file-paths/index.mdx",sourceDirName:"use-cases/automated-labelling/label-based-on-file-paths",slug:"/use-cases/label-based-on-file-paths",permalink:"/3.25.0/use-cases/label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-based-on-file-paths/index.mdx",tags:[],version:"3.25.0",frontMatter:{title:"Label based on file paths",id:"label-based-on-file-paths",slug:"/use-cases/label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Label based on author groups",permalink:"/3.25.0/use-cases/label-based-on-author-groups"},next:{title:"Label critical changes with code pattern",permalink:"/3.25.0/use-cases/label-critical-changes-with-code-pattern"}},r={},d=[],p={toc:d};function b(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that labels pull requests that contain changes to a certain filepath."),(0,n.kt)("p",null,"This is useful when we want to automatically assign a reviewer based on the files that were changed or label a pull request as critical when it contains changes to critical files."),(0,n.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical changes\n    color: fd5e53\n\nrules:\n  - name: changes-main-file\n    spec: $hasFileName("main.go")\n  - name: changes-config-file\n    spec: $hasFileName("config.yml")\n\nworkflows:\n  - name: critical\n    if:\n      - rule: changes-main-file\n    then:\n      - $addLabel("critical")\n  - name: configurations\n    if:\n      - rule: changes-config-file\n    then:\n      - $assignTeamReviewer(["devops"])\n'))}b.isMDXComponent=!0}}]);