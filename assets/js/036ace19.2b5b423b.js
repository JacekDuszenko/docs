"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9448],{14617:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=l(87462),n=(l(67294),l(3905)),a=l(90814);const i='workflows:\n  - name: handle-conflicts\n    run:\n      if: $hasGitConflicts()\n      then:\n        - $addLabel("conflicts")\n        - $comment("This pull request has merge conflicts. Please resolve them and then rebase on the base branch.")\n',c={title:"Label when git conflicts",id:"label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts"},o=void 0,r={unversionedId:"use-cases/automated-labelling/label-when-git-conflicts/label-when-git-conflicts",id:"use-cases/automated-labelling/label-when-git-conflicts/label-when-git-conflicts",title:"Label when git conflicts",description:"It can be tiresome to open a pull request and realize that it has Git conflicts.",source:"@site/docs/use-cases/automated-labelling/label-when-git-conflicts/index.mdx",sourceDirName:"use-cases/automated-labelling/label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts",permalink:"/next/use-cases/label-when-git-conflicts",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-when-git-conflicts/index.mdx",tags:[],version:"current",frontMatter:{title:"Label when git conflicts",id:"label-when-git-conflicts",slug:"/use-cases/label-when-git-conflicts"},sidebar:"DocsSidebar",previous:{title:"Label potential missing changes",permalink:"/next/use-cases/label-potential-missing-changes"},next:{title:"Label with size",permalink:"/next/use-cases/label-with-size"}},u={},d=[],h={toc:d},b="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(b,(0,s.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It can be tiresome to open a pull request and realize that it has Git conflicts."),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that labels pull requests that have Git conflicts."),(0,n.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},i))}f.isMDXComponent=!0}}]);