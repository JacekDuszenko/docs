"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97146],{99211:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(87462),n=(t(67294),t(3905));const o={title:"Check issue description",id:"check-issue-description"},r=void 0,c={unversionedId:"use-cases/check-issue-description",id:"version-3.6.0/use-cases/check-issue-description",title:"Check issue description",description:"Reviewpad can be used for workflows on both issues and pull requests.",source:"@site/versioned_docs/version-3.6.0/use-cases/check-issue-description.md",sourceDirName:"use-cases",slug:"/use-cases/check-issue-description",permalink:"/3.6.0/use-cases/check-issue-description",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/check-issue-description.md",tags:[],version:"3.6.0",frontMatter:{title:"Check issue description",id:"check-issue-description"},sidebar:"DocsSidebar",previous:{title:"Attention Set",permalink:"/3.6.0/use-cases/attention-set"},next:{title:"Comment on pull requests",permalink:"/3.6.0/use-cases/comment-on-pull-requests"}},a={},u=[],d={toc:u};function p(e){let{components:s,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad can be used for workflows on both issues and pull requests."),(0,n.kt)("p",null,"For example, the following configuration adds an error message to an issue or pull request whose description is empty."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: report-empty-description\n    on:\n      - "issue"\n      - "pull_request"\n    always-run: true\n    if:\n      - \'$description() == ""\'\n    then:\n      - \'$error("The description is empty. Please add more information!")\'\n')))}p.isMDXComponent=!0}}]);