"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58360],{51712:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=l(87462),n=(l(67294),l(3905)),a=l(90814);const i={title:"Label when git conflicts",id:"label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts"},c=void 0,o={unversionedId:"use-cases/automated-labelling/label-when-git-conflicts/label-when-git-conflicts",id:"version-3.12.0/use-cases/automated-labelling/label-when-git-conflicts/label-when-git-conflicts",title:"Label when git conflicts",description:"It can be tiresome to open a pull request and realize that it has Git conflicts.",source:"@site/versioned_docs/version-3.12.0/use-cases/automated-labelling/label-when-git-conflicts/index.mdx",sourceDirName:"use-cases/automated-labelling/label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts",permalink:"/3.12.0/use-cases/label-when-git-conflicts",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-when-git-conflicts/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Label when git conflicts",id:"label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts"},sidebar:"DocsSidebar",previous:{title:"Label potential missing changes",permalink:"/3.12.0/use-cases/label-potential-missing-changes"},next:{title:"Label with size",permalink:"/3.12.0/use-cases/label-with-size"}},r={},u=[],d={toc:u};function h(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It can be tiresome to open a pull request and realize that it has Git conflicts."),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that labels pull requests that have Git conflicts."),(0,n.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: handle-conflicts\n    if:\n      - $hasGitConflicts()\n    then:\n      - $addLabel("conflicts")\n      - $comment("This pull request has merge conflicts. Please resolve them and then rebase on the base branch.")\n'))}h.isMDXComponent=!0}}]);