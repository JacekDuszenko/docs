"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43698],{6205:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var n=a(87462),t=(a(67294),a(3905));const i={title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},l=void 0,o={unversionedId:"use-cases/automated-labelling/label-potential-missing-changes",id:"version-3.7.0/use-cases/automated-labelling/label-potential-missing-changes",title:"Label potential missing changes",description:"It is fairly common that changes in some files imply changes in other files.",source:"@site/versioned_docs/version-3.7.0/use-cases/automated-labelling/label-potential-missing-changes.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-potential-missing-changes",permalink:"/3.7.0/use-cases/label-potential-missing-changes",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-potential-missing-changes.md",tags:[],version:"3.7.0",frontMatter:{title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with semantic code annotations",permalink:"/3.7.0/use-cases/label-critical-changes-with-semantic-code-annotations"},next:{title:"Remove label based on file paths",permalink:"/3.7.0/use-cases/remove-label-based-on-file-paths"}},c={},r=[],p={toc:r};function m(e){let{components:s,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"It is fairly common that changes in some files imply changes in other files."),(0,t.kt)("p",null,"As an example, modifying files in the ",(0,t.kt)("em",{parentName:"p"},"src")," directory might need changes in the ",(0,t.kt)("em",{parentName:"p"},"docs")," directory."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-specs:\n    description: Likely missing specs\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\nrules:\n  - name: codeChangesImplySpecChanges\n    kind: patch\n    description: Changes to src and not to spec\n    spec: $hasFilePattern("src/**") && !$hasFilePattern("docs/**")\n\nworkflows:\n  - name: check-for-specs\n    description: Check for specs\n    if:\n      - rule: codeChangesImplySpecChanges\n    then:\n      - $addLabel("missing-specs")\n')),(0,t.kt)("p",null,"You can see this policy in the following pull request ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/2"},"reviewpad/action-demo/#2"),"."))}m.isMDXComponent=!0}}]);