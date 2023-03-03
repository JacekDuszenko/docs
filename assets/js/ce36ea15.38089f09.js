"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{89389:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=i(87462),n=(i(67294),i(3905)),c=i(90814);const o='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: report-empty-description\n    on:\n      - issue\n      - pull_request\n    always-run: true\n    if:\n      - $description() == ""\n    then:\n      - $error("The description is empty. Please add more information!")\n',r={title:"Check issue description",id:"check-issue-description",slug:"/use-cases/check-issue-description"},u=void 0,d={unversionedId:"use-cases/check-issue-description/check-issue-description",id:"version-v4/use-cases/check-issue-description/check-issue-description",title:"Check issue description",description:"Reviewpad can be used for workflows on both issues and pull requests.",source:"@site/versioned_docs/version-v4/use-cases/check-issue-description/index.mdx",sourceDirName:"use-cases/check-issue-description",slug:"/use-cases/check-issue-description",permalink:"/use-cases/check-issue-description",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/check-issue-description/index.mdx",tags:[],version:"v4",frontMatter:{title:"Check issue description",id:"check-issue-description",slug:"/use-cases/check-issue-description"},sidebar:"DocsSidebar",previous:{title:"Blocking Merge",permalink:"/use-cases/blocking-merge"},next:{title:"Comment on pull requests",permalink:"/use-cases/comment-on-pull-requests"}},a={},p=[],l={toc:p},k="wrapper";function m(e){let{components:s,...i}=e;return(0,n.kt)(k,(0,t.Z)({},l,i,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad can be used for workflows on both issues and pull requests."),(0,n.kt)("p",null,"For example, the following configuration adds an error message to an issue or a pull request whose description is empty."),(0,n.kt)(c.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}m.isMDXComponent=!0}}]);