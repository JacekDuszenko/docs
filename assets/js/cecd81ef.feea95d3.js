"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7490],{82049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),r=a(90814);const l='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: configuration-changes\n    if:\n      - $hasFileName("Dockerfile")\n    then:\n      - $assignTeamReviewer(["devops"])\n      - $addLabel("devops")\n',s={},o=void 0,p={unversionedId:"guides/built-ins/functions/hasFileName/index",id:"version-Latest/guides/built-ins/functions/hasFileName/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-Latest/guides/built-ins/functions/hasFileName/index.mdx",sourceDirName:"guides/built-ins/functions/hasFileName",slug:"/guides/built-ins/functions/hasFileName/",permalink:"/guides/built-ins/functions/hasFileName/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasFileName/index.mdx",tags:[],version:"Latest",frontMatter:{}},d={},m=[],u={toc:m},k="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Determines whether the provided filename is among the files in the patch, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filename")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The filename to look for in the patch - case sensitive.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the patch has a file with the provided filename, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise. The provided filename and the filename on the patch need to be exactly the same in order to get a positive result.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasFileName("placeBet.js")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}h.isMDXComponent=!0}}]);