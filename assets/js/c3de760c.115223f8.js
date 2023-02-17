"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73565],{5151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s={},o=void 0,p={unversionedId:"guides/built-ins/functions/group/index",id:"version-3.26.0/guides/built-ins/functions/group/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.26.0/guides/built-ins/functions/group/index.mdx",sourceDirName:"guides/built-ins/functions/group",slug:"/guides/built-ins/functions/group/",permalink:"/guides/built-ins/functions/group/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/group/index.mdx",tags:[],version:"3.26.0",frontMatter:{}},l={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Lists all the members that belong to the provided group. This group needs to be defined in the same ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"group")," is a way to refer to a defined set of users in a short way."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"group_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The group name to list all the members from.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"All the members from the group.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$group("techLeads")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\ngroups:\n  - name: tech-leads\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: \'["john", "maria", "arthur"]\'\n  - name: juniors\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer, "all") < 10\n  - name: ignore_paths\n    # The expression is wrapped in quotes to avoid YAML parsing errors\n    spec: \'["engine/**", "*.yaml"]\'\n\nworkflows:\n  - name: label-with-size\n    if:\n      - $size($group("ignore_paths")) < 10\n    then:\n      - $addLabel("small")\n  - name: review-juniors-changes\n    if:\n      - $isElementOf($author(), $group("juniors"))\n    then:\n      - $assignReviewer($group("tech-leads"), 1)\n'))}m.isMDXComponent=!0}}]);