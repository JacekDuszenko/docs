"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8013],{1128:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>r,toc:()=>p});var a=t(87462),n=(t(67294),t(3905)),i=t(90814);const o='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: manage-issues-in-projects\n    on:\n      - issue\n    if:\n      - rule: \'$state() == "open" && !$isLinkedToProject("PROJECT-TITLE")\'\n        extra-actions:\n          - $addToProject("PROJECT-TITLE", "Todo")\n      - rule: $state() == "closed"\n        extra-actions:\n          - $addToProject("PROJECT-TITLE", "Done")\n',u={title:"Manage issues in GitHub projects",id:"manage-issues-github-projects",slug:"/use-cases/manage-issues-github-projects"},c=void 0,r={unversionedId:"use-cases/manage-issues-projects/manage-issues-github-projects",id:"use-cases/manage-issues-projects/manage-issues-github-projects",title:"Manage issues in GitHub projects",description:"Reviewpad can be used to automatically manage issues in GitHub projects.",source:"@site/docs/use-cases/manage-issues-projects/index.mdx",sourceDirName:"use-cases/manage-issues-projects",slug:"/use-cases/manage-issues-github-projects",permalink:"/next/use-cases/manage-issues-github-projects",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/manage-issues-projects/index.mdx",tags:[],version:"current",frontMatter:{title:"Manage issues in GitHub projects",id:"manage-issues-github-projects",slug:"/use-cases/manage-issues-github-projects"},sidebar:"DocsSidebar",previous:{title:"Enforce conventional commits",permalink:"/next/use-cases/enforce-conventional-commits"},next:{title:"Reviewer Assignment",permalink:"/next/use-cases/reviewer-assignment"}},l={},p=[],d={toc:p},m="wrapper";function g(e){let{components:s,...t}=e;return(0,n.kt)(m,(0,a.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad can be used to automatically manage issues in GitHub projects."),(0,n.kt)("p",null,"For example, the following configuration automatically adds an issue to\na column in the board of GitHub project with a particular title."),(0,n.kt)("p",null,"You can also use Reviewpad to automatically move issues between columns in the board of a GitHub project\nbased on events such as closing or adding a label to the issue."),(0,n.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o),(0,n.kt)("p",null,"Similarly, you can also use Reviewpad to manage pull requests in GitHub projects.\nJust add the ",(0,n.kt)("inlineCode",{parentName:"p"},"pull_request")," event to the ",(0,n.kt)("inlineCode",{parentName:"p"},"on")," property of the Reviewpad configuration."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"./check-issue-description"},"check description")," use case contains an example of a workflow\nthat is applied in both issues and pull requests."))}g.isMDXComponent=!0}}]);