"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3534],{54401:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const o='workflows:\n  - name: external-contributions\n    run:\n      if: $isElementOf($author(), $organization()) == false\n      then:\n        - $assignTeamReviewer(["core"])\n        - $addLabel("external-contributor")\n        - $commentOnce("Thank you for your contribution!")\n',l={},s=void 0,u={unversionedId:"guides/built-ins/functions/organization/index",id:"guides/built-ins/functions/organization/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/organization/index.mdx",sourceDirName:"guides/built-ins/functions/organization",slug:"/guides/built-ins/functions/organization/",permalink:"/next/guides/built-ins/functions/organization/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/organization/index.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},c="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Lists all the members of the organization that own the pull request / issue."),(0,a.kt)("p",null,"If the authenticated user is an owner of the organization, this will return both concealed and public members, otherwise it will only return public members."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of all the members of the organization to where the pull request / issue is running against.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$organization()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o))}g.isMDXComponent=!0}}]);