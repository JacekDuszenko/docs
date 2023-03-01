"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5686],{6704:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>m,toc:()=>l});var t=o(7462),i=(o(7294),o(3905)),s=o(814);const c={title:"Enforce conventional commits",id:"enforce-conventional-commits",slug:"/use-cases/enforce-conventional-commits"},a=void 0,m={unversionedId:"use-cases/enforce-conventional-commits/enforce-conventional-commits",id:"version-v3/use-cases/enforce-conventional-commits/enforce-conventional-commits",title:"Enforce conventional commits",description:"Conventional commits is a specification for adding human and machine readable meaning to commit messages.",source:"@site/versioned_docs/version-v3/use-cases/enforce-conventional-commits/index.mdx",sourceDirName:"use-cases/enforce-conventional-commits",slug:"/use-cases/enforce-conventional-commits",permalink:"/use-cases/enforce-conventional-commits",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-conventional-commits/index.mdx",tags:[],version:"v3",frontMatter:{title:"Enforce conventional commits",id:"enforce-conventional-commits",slug:"/use-cases/enforce-conventional-commits"},sidebar:"DocsSidebar",previous:{title:"Enforce branch conventions",permalink:"/use-cases/enforce-branch-conventions"},next:{title:"Manage issues in GitHub projects",permalink:"/use-cases/manage-issues-github-projects"}},r={},l=[],d={toc:l};function u(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional commits")," is a specification for adding human and machine readable meaning to commit messages."),(0,i.kt)("p",null,"Reviewpad can be used to check and provide an error message if a commit in a pull request does not comply with the conventional commits specification."),(0,i.kt)("p",null,"Here's an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that checks the pull request's commits whenever the action runs."),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: lint-commits\n    if:\n      - $description() != ""\n    then:\n      - $commitLint()\n'))}u.isMDXComponent=!0}}]);