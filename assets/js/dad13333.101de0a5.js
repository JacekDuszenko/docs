"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2875],{23849:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var o=a(87462),t=(a(67294),a(3905)),s=a(90814);const r='labels:\n  type-bugfix:\n    name: \'type:bugfix :beetle:\'\n    description: Provides a bug fix\n    color: F9B1C9\n  type-feature:\n    name: \'type:feature :rocket:\'\n    description: Provides a new feature\n    color: 65ECA3\n  type-support:\n    name: \'type:support :hammer:\'\n    description: Provides a misc change\n    color: CDDBDC\n\nworkflows:\n  - name: enforce-branch-naming\n    run:\n      - if: $startsWith($head(), "bugfix/")\n        then: $addLabel("type-bugfix")\n      - if: $startsWith($head(), "feature/")\n        then: $addLabel("type-feature")\n      - if: $startsWith($head(), "support/")\n        then: $addLabel("type-support")\n\n  - name: default-policy\n    description: By default it will put a warning\n    run:\n      - $addLabel("needs-review")\n      # The expression is wrapped in quotes to avoid YAML parsing errors\n      - \'$warn("All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.")\'\n\n  - name: require-linear-history\n    run:\n      if: $hasLinearHistory() == false\n      then: $warn("This pull request does not have linear history - please fix this!")\n',c={title:"Enforce branch conventions",id:"enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions"},i=void 0,d={unversionedId:"use-cases/enforce-branch-conventions/enforce-branch-conventions",id:"use-cases/enforce-branch-conventions/enforce-branch-conventions",title:"Enforce branch conventions",description:"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.",source:"@site/docs/use-cases/enforce-branch-conventions/index.mdx",sourceDirName:"use-cases/enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions",permalink:"/next/use-cases/enforce-branch-conventions",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-branch-conventions/index.mdx",tags:[],version:"current",frontMatter:{title:"Enforce branch conventions",id:"enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions"},sidebar:"DocsSidebar",previous:{title:"Comment on pull requests",permalink:"/next/use-cases/comment-on-pull-requests"},next:{title:"Enforce conventional commits",permalink:"/next/use-cases/enforce-conventional-commits"}},l={},u=[{value:"Enforce branch name and add label based on branches",id:"enforce-branch-name-and-add-label-based-on-branches",level:2}],f={toc:u},p="wrapper";function b(e){let{components:n,...a}=e;return(0,t.kt)(p,(0,o.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming."),(0,t.kt)("p",null,"Reviewpad can be used to enforce a branch naming policy and also automatically add labels based on the branch names."),(0,t.kt)("h2",{id:"enforce-branch-name-and-add-label-based-on-branches"},"Enforce branch name and add label based on branches"),(0,t.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}b.isMDXComponent=!0}}]);