"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20783],{21579:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=a(87462),o=(a(67294),a(3905));const s={title:"Enforce branch conventions",id:"enforce-branch-conventions"},r=void 0,c={unversionedId:"use-cases/enforce-branch-conventions",id:"version-3.4.0/use-cases/enforce-branch-conventions",title:"Enforce branch conventions",description:"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.",source:"@site/versioned_docs/version-3.4.0/use-cases/enforce-branch-conventions.md",sourceDirName:"use-cases",slug:"/use-cases/enforce-branch-conventions",permalink:"/3.4.0/use-cases/enforce-branch-conventions",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-branch-conventions.md",tags:[],version:"3.4.0",frontMatter:{title:"Enforce branch conventions",id:"enforce-branch-conventions"},sidebar:"DocsSidebar",previous:{title:"Comment on pull requests",permalink:"/3.4.0/use-cases/comment-on-pull-requests"},next:{title:"Enforce conventional commits",permalink:"/3.4.0/use-cases/enforce-conventional-commits"}},i={},l=[{value:"Enforce branch name and add label based on branches",id:"enforce-branch-name-and-add-label-based-on-branches",level:2}],d={toc:l};function h(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming."),(0,o.kt)("p",null,"Reviewpad can be used enforce a branch naming policy and also automatically add labels based on the branch names."),(0,o.kt)("h2",{id:"enforce-branch-name-and-add-label-based-on-branches"},"Enforce branch name and add label based on branches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  release-minor:\n    name: 'release:minor :hash::arrow_up::hash:'\n    description: Release the changes as a minor\n    color: 'E96F70'\n  release-patch:\n    name: 'release:patch :hash::hash::arrow_up:'\n    description: Release the changes as a patch\n    color: 'FF9085'\n  release-skip:\n    name: 'release:skip :hash::hash::hash:'\n    description: Do not release changes\n    color: 'FFE9DE'\n  type-bugfix:\n    name: 'type:bugfix :beetle:'\n    description: Provides a bug fix\n    color: 'F9B1C9'\n  type-enhancement:\n    name: 'type:enhancement :ok_hand:'\n    description: Provides an enhancement\n    color: '92E7F3'\n  type-feature:\n    name: 'type:feature :rocket:'\n    description: Provides a new feature\n    color: '65ECA3'\n  type-hotfix:\n    name: 'type:hotfix :ninja:'\n    description: Provides a hot fix\n    color: 'BBA7E4'\n  type-support:\n    name: 'type:support :hammer:'\n    description: Provides a misc change\n    color: 'CDDBDC'\n\nworkflows:\n  - name: enforce-branch-naming\n    if:\n      - rule: '$startsWith($head(), \"bugfix/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-bugfix\")'\n      - rule: '$startsWith($head(), \"enhancement/\")'\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-enhancement\")'\n      - rule: '$startsWith($head(), \"feature/\")'\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-feature\")'\n      - rule: '$startsWith($head(), \"hotfix/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-hotfix\")'\n      - rule: '$startsWith($head(), \"support/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-support\")'\n\n  - name: default-policy\n    description: By default it will put a warning\n    if:\n      - 'true'\n    then:\n      - '$addLabel(\"needs-review\")'\n      - '$warn(\"All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.\")'\n\n  - name: require-linear-history\n    always-run: true\n    if:\n      - '!$hasLinearHistory()'\n    then:\n      - '$warn(\"This pull request does not have linear history - please fix this!\")'\n")))}h.isMDXComponent=!0}}]);