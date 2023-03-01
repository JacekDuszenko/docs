"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9461],{7082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(7462),o=(t(7294),t(3905)),a=t(814);const s={id:"extends",slug:"/guides/extends",title:"Extends"},r="Extends",l={unversionedId:"guides/extends/extends",id:"guides/extends/extends",title:"Extends",description:"Through the extends property, Reviewpad users can extend the current configuration from other configurations.",source:"@site/docs/guides/extends/index.mdx",sourceDirName:"guides/extends",slug:"/guides/extends",permalink:"/next/guides/extends",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/extends/index.mdx",tags:[],version:"current",frontMatter:{id:"extends",slug:"/guides/extends",title:"Extends"},sidebar:"DocsSidebar",previous:{title:"Commands",permalink:"/next/guides/commands"},next:{title:"Reports",permalink:"/next/guides/reports"}},m={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Tracking Overrides with Logs",id:"tracking-overrides-with-logs",level:2}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extends"},"Extends"),(0,o.kt)("p",null,"Through the ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," property, Reviewpad users can extend the current configuration from other configurations."),(0,o.kt)("p",null,"This allows the ability to share common specifications for all the flags, labels, rules and workflows\nfrom multiple GitHub repositories with the possibility to override the inherited configurations."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"In the Reviewpad configuration, users specify in the ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," property\na list of other Reviewpad configuration files as GitHub blob urls (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml"),")."),(0,o.kt)("p",null,"As an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"api-version: reviewpad.com/v3.x\n\nextends:\n  - https://github.com/baz/foo/blob/main/common.yml\n  - https://github.com/baz/qux/blob/main/team_a.yml\n")),(0,o.kt)("p",null,"These GitHub blob urls can live in different repositories."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that Reviewpad GitHub App (or the underlying token used to run Reviewpad) has to be able to read the contents of these repositories.\nYou can do it by installing the Reviewpad GitHub App in all repositories (or the whole organization) where you which to extend Reviewpad from."),(0,o.kt)("p",{parentName:"admonition"},"In the example above, Reviewpad GitHub App needs to be installed either in the organization ",(0,o.kt)("inlineCode",{parentName:"p"},"baz")," or in both projects ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"qux"),".")),(0,o.kt)("p",null,"The final configuration is computed by concatenating all configurations included in the extends section\n(in the order they are specified) with the contents of the current configuration."),(0,o.kt)("p",null,"If properties have the same name, the one that was defined last overrides the previous ones."),(0,o.kt)("p",null,"For example, consider the following specification:"),(0,o.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nextends:\n  - https://github.com/baz/foo/blob/main/common.yml\n  - https://github.com/baz/qux/blob/main/team_a.yml\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 30\n    then:\n      - $info("this is a small pr")\n'),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"common.yml"),":"),(0,o.kt)(a.Z,{language:"yml",title:"common.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nmetrics-on-merge: true\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 5\n    then:\n      - $info("this is a very small pr")\n\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n      - $assignRandomReviewer()\n'),(0,o.kt)("p",null,"and ",(0,o.kt)("inlineCode",{parentName:"p"},"team_a.yml"),":"),(0,o.kt)(a.Z,{language:"yml",title:"team_a.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 10\n    then:\n      - $info("this is a small pr for team a")\n\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n'),(0,o.kt)("p",null,"The final configuration will be:"),(0,o.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nmetrics-on-merge: true\n\nworkflows:\n  # we first load the "medium-size" workflow from common.yml (the first configuration in the extends section)\n  # then we override it with the "medium-size" workflow from team_a.yml (the second configuration in the extends section)\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n\n  # we first load the "small-size" workflow from common.yml (the first configuration in the extends section)\n  # then we override it with the "small-size" workflow from team_a.yml (the second configuration in the extends section)\n  # and finally we override it with the "small-size" workflow from the current configuration\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 30\n    then:\n      - $info("this is a small pr")\n'),(0,o.kt)("h2",{id:"tracking-overrides-with-logs"},"Tracking Overrides with Logs"),(0,o.kt)("p",null,"During the extension process, the properties that are being overridden are logged on the Reviewpad execution details."),(0,o.kt)("p",null,"For example, taking into account the configurations mentioned above we would have the following logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"[warning] Workflow 'medium-size' has been overridden by https://github.com/baz/foo/blob/main/common.yml\n[warning] Workflow 'small-size' has been overridden by https://github.com/baz/foo/blob/main/common.yml\n[warning] Workflow 'medium-size' has been overridden by https://github.com/baz/qux/blob/main/team_a.yml\n[warning] Workflow 'small-size' has been overridden by https://github.com/baz/qux/blob/main/team_a.yml\n")))}u.isMDXComponent=!0}}]);