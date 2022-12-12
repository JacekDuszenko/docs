"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63491],{49226:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var t=i(87462),n=(i(67294),i(3905)),o=i(90814);const c={title:"Check issue description",id:"check-issue-description",slug:"/use-cases/check-issue-description"},r=void 0,u={unversionedId:"use-cases/check-issue-description/check-issue-description",id:"version-3.14.0/use-cases/check-issue-description/check-issue-description",title:"Check issue description",description:"Reviewpad can be used for workflows on both issues and pull requests.",source:"@site/versioned_docs/version-3.14.0/use-cases/check-issue-description/index.mdx",sourceDirName:"use-cases/check-issue-description",slug:"/use-cases/check-issue-description",permalink:"/3.14.0/use-cases/check-issue-description",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/check-issue-description/index.mdx",tags:[],version:"3.14.0",frontMatter:{title:"Check issue description",id:"check-issue-description",slug:"/use-cases/check-issue-description"},sidebar:"DocsSidebar",previous:{title:"Attention set",permalink:"/3.14.0/use-cases/attention-set"},next:{title:"Comment on pull requests",permalink:"/3.14.0/use-cases/comment-on-pull-requests"}},d={},a=[],p={toc:a};function l(e){let{components:s,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,i,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad can be used for workflows on both issues and pull requests."),(0,n.kt)("p",null,"For example, the following configuration adds an error message to an issue or a pull request whose description is empty."),(0,n.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: report-empty-description\n    on:\n      - issue\n      - pull_request\n    always-run: true\n    if:\n      - $description() == ""\n    then:\n      - $error("The description is empty. Please add more information!")\n'))}l.isMDXComponent=!0}}]);