"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[57991],{77161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const p={},l=void 0,s={unversionedId:"guides/built-ins/functions/append/index",id:"version-3.14.0/guides/built-ins/functions/append/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.14.0/guides/built-ins/functions/append/index.mdx",sourceDirName:"guides/built-ins/functions/append",slug:"/guides/built-ins/functions/append/",permalink:"/3.14.0/guides/built-ins/functions/append/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/append/index.mdx",tags:[],version:"3.14.0",frontMatter:{}},d={},o=[],m={toc:o};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Appends elements to the end of a slice and retrieves the updated slice."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"slice")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slice that will have elements appended to it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"elements")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The elements to be added to the end of the slice.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A new slice by appending the slices passed to it.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$append(["a", "b"], ["c"]) # ["a", "b", "c"]\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\ngroups:\n  - name: all-devs\n    kind: developers\n    spec: $append($team("frontend"), $team("backend"))\n\nworkflows:\n  - name: reviewer-assignment\n    if:\n      - $description() != ""\n    then:\n      - $assignReviewer($group("all-devs"), 1)\n\n'))}k.isMDXComponent=!0}}]);