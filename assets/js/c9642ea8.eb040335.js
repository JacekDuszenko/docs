"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1256],{16942:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),t=n(90814);const l='labels:\n  missing-specs:\n    description: Likely missing specs\n    color: 294b69\n\nrules:\n  - name: code-changes-imply-spec-changes\n    spec: $changed("src/@1.java", "spec/@1.java") == false\n\nworkflows:\n  - name: check-for-specs\n    if:\n      - rule: code-changes-imply-spec-changes\n    then:\n      - $addLabel("missing-specs")\n',c={title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},o=void 0,g={unversionedId:"use-cases/automated-labelling/label-potential-missing-changes/label-potential-missing-changes",id:"version-v4/use-cases/automated-labelling/label-potential-missing-changes/label-potential-missing-changes",title:"Label potential missing changes",description:"It is fairly common that changes in some files imply changes in other files.",source:"@site/versioned_docs/version-v4/use-cases/automated-labelling/label-potential-missing-changes/index.mdx",sourceDirName:"use-cases/automated-labelling/label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes",permalink:"/use-cases/label-potential-missing-changes",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-potential-missing-changes/index.mdx",tags:[],version:"v4",frontMatter:{title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with semantic code annotations",permalink:"/use-cases/label-critical-changes-with-semantic-code-annotations"},next:{title:"Label when git conflicts",permalink:"/use-cases/label-when-git-conflicts"}},m={},p=[],r={toc:p},d="wrapper";function h(e){let{components:s,...n}=e;return(0,i.kt)(d,(0,a.Z)({},r,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is fairly common that changes in some files imply changes in other files."),(0,i.kt)("p",null,"As an example, modifying files in the ",(0,i.kt)("em",{parentName:"p"},"src")," directory might need changes in the ",(0,i.kt)("em",{parentName:"p"},"docs")," directory."),(0,i.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}h.isMDXComponent=!0}}]);