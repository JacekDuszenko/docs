"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82073],{58472:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(87462),i=(t(67294),t(3905)),n=t(90814);const o={title:"Manage issues in GitHub projects",id:"manage-issues-github-projects",slug:"/use-cases/manage-issues-github-projects"},u=void 0,c={unversionedId:"use-cases/manage-issues-projects/manage-issues-github-projects",id:"version-3.26.0/use-cases/manage-issues-projects/manage-issues-github-projects",title:"Manage issues in GitHub projects",description:"Reviewpad can be used to automatically manage issues in GitHub projects.",source:"@site/versioned_docs/version-3.26.0/use-cases/manage-issues-projects/index.mdx",sourceDirName:"use-cases/manage-issues-projects",slug:"/use-cases/manage-issues-github-projects",permalink:"/3.26.0/use-cases/manage-issues-github-projects",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/manage-issues-projects/index.mdx",tags:[],version:"3.26.0",frontMatter:{title:"Manage issues in GitHub projects",id:"manage-issues-github-projects",slug:"/use-cases/manage-issues-github-projects"},sidebar:"DocsSidebar",previous:{title:"Enforce conventional commits",permalink:"/3.26.0/use-cases/enforce-conventional-commits"},next:{title:"Reviewer Assignment",permalink:"/3.26.0/use-cases/reviewer-assignment"}},r={},l=[],p={toc:l};function d(e){let{components:s,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reviewpad can be used to automatically manage issues in GitHub projects."),(0,i.kt)("p",null,"For example, the following configuration automatically adds an issue to\na column in the board of GitHub project with a particular title."),(0,i.kt)("p",null,"You can also use Reviewpad to automatically move issues between columns in the board of a GitHub project\nbased on events such as closing or adding a label to the issue."),(0,i.kt)(n.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: manage-issues-in-projects\n    on:\n      - issue\n    if:\n      - rule: \'$state() == "open" && !$isLinkedToProject("PROJECT-TITLE")\'\n        extra-actions:\n          - $addToProject("PROJECT-TITLE", "Todo")\n      - rule: $state() == "closed"\n        extra-actions:\n          - $addToProject("PROJECT-TITLE", "Done")\n'),(0,i.kt)("p",null,"Similarly, you can also use Reviewpad to manage pull requests in GitHub projects.\nJust add the ",(0,i.kt)("inlineCode",{parentName:"p"},"pull_request")," event to the ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," property of the Reviewpad configuration."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./check-issue-description"},"check description")," use case contains an example of a workflow\nthat is applied in both issues and pull requests."))}d.isMDXComponent=!0}}]);