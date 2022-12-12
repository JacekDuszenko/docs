"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60109],{49962:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),t=a(90814);const o={title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},i=void 0,r={unversionedId:"use-cases/automated-labelling/remove-label-based-on-file-paths/remove-label-based-on-file-paths",id:"version-3.16.0/use-cases/automated-labelling/remove-label-based-on-file-paths/remove-label-based-on-file-paths",title:"Remove label based on file paths",description:"Here's an example of a reviewpad.yml configuration that removes a label from a pull request that contains the proper changes based on the file path.",source:"@site/versioned_docs/version-3.16.0/use-cases/automated-labelling/remove-label-based-on-file-paths/index.mdx",sourceDirName:"use-cases/automated-labelling/remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths",permalink:"/3.16.0/use-cases/remove-label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/remove-label-based-on-file-paths/index.mdx",tags:[],version:"3.16.0",frontMatter:{title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Label with size",permalink:"/3.16.0/use-cases/label-with-size"},next:{title:"Attention set",permalink:"/3.16.0/use-cases/attention-set"}},c={},p=[],d={toc:p};function m(e){let{components:s,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:s,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Here's an example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that removes a label from a pull request that contains the proper changes based on the file path."),(0,l.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-specs:\n    description: Likely missing specs\n    color: 294b69\n\nrules:\n  - name: changes_contain_specs\n    spec: $changed("src/@1.java", "spec/@1.java")\n  - name: changes_miss_specs\n    spec: $rule("changes_contain_specs") == false\n\nworkflows:\n  - name: check_for_specs\n    if:\n      - rule: changes_miss_specs\n        extra-actions:\n          - $addLabel("missing-specs")\n      - rule: changes_contain_specs\n        extra-actions:\n          - $removeLabel("missing-specs")\n'))}m.isMDXComponent=!0}}]);