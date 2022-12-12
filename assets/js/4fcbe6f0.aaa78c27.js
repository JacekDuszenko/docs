"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37358],{53497:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=s(87462),l=(s(67294),s(3905)),n=s(90814);const a={title:"Label pull requests with Git conflicts",id:"label-pull-requests-with-git-conflicts",slug:"/use-cases/label-pull-requests-with-git-conflicts"},c=void 0,o={unversionedId:"use-cases/label-pull-requests-with-git-conflicts/label-pull-requests-with-git-conflicts",id:"version-3.11.0/use-cases/label-pull-requests-with-git-conflicts/label-pull-requests-with-git-conflicts",title:"Label pull requests with Git conflicts",description:"It can be tiresome to open a pull request and realize that it has Git conflicts.",source:"@site/versioned_docs/version-3.11.0/use-cases/label-pull-requests-with-git-conflicts/index.mdx",sourceDirName:"use-cases/label-pull-requests-with-git-conflicts",slug:"/use-cases/label-pull-requests-with-git-conflicts",permalink:"/3.11.0/use-cases/label-pull-requests-with-git-conflicts",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/label-pull-requests-with-git-conflicts/index.mdx",tags:[],version:"3.11.0",frontMatter:{title:"Label pull requests with Git conflicts",id:"label-pull-requests-with-git-conflicts",slug:"/use-cases/label-pull-requests-with-git-conflicts"},sidebar:"DocsSidebar",previous:{title:"Enforce conventional commits",permalink:"/3.11.0/use-cases/enforce-conventional-commits"},next:{title:"Reviewer Assignment",permalink:"/3.11.0/use-cases/reviewer-assignment"}},r={},u=[{value:"Reviewpad Action",id:"reviewpad-action",level:2}],p={toc:u};function d(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It can be tiresome to open a pull request and realize that it has Git conflicts."),(0,l.kt)("p",null,"Here's an example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that labels pull requests that have Git conflicts."),(0,l.kt)(n.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-pull-requests-with-git-conflicts\n    if:\n      - '$hasGitConflicts()'\n    then:\n      - '$addLabel(\"conflicts\")'\n"),(0,l.kt)("h2",{id:"reviewpad-action"},"Reviewpad Action"),(0,l.kt)("p",null,"In order to have the automation for the labelling of pull requests that have Git conflicts we can use the following ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/reviewpad-action"},"reviewpad action")," configuration that will be triggered whenever there is a push to the ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},"name: Reviewpad\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Reviewpad\n        uses: reviewpad/action@v3.x\n")))}d.isMDXComponent=!0}}]);