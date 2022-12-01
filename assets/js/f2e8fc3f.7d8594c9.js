"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[76486],{32138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const o={},l=void 0,s={unversionedId:"guides/built-ins/functions/organization/index",id:"version-3.15.0/guides/built-ins/functions/organization/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/functions/organization/index.mdx",sourceDirName:"guides/built-ins/functions/organization",slug:"/guides/built-ins/functions/organization/",permalink:"/3.15.0/guides/built-ins/functions/organization/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/organization/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Lists all the members of the organization that own the pull request."),(0,i.kt)("p",null,"If the authenticated user is an owner of the organization, this will return both concealed and public members, otherwise it will only return public members."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of all the members of the organization to where the pull request is running against.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$organization()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: external-contributor\n    spec: $isElementOf($author(), $organization()) == false\n\nworkflows:\n  - name: external-contributions\n    if:\n      - rule: external-contributor\n    then:\n      - $assignTeamReviewer(["core"])\n      - $addLabel("external-contributor")\n      - $commentOnce("Thank you for your contribution!")\n'))}d.isMDXComponent=!0}}]);