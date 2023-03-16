"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[725],{77724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const r='workflows:\n  - name: trivial-changes\n    if:\n      - $hasFileExtensions([".md"])\n    then:\n      - $approve("LGTM")\n',p={slug:"/guides/built-ins-approve"},o=void 0,l={unversionedId:"guides/built-ins/actions/approve/index",id:"version-v4/guides/built-ins/actions/approve/index",title:"index",description:"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.",source:"@site/versioned_docs/version-v4/guides/built-ins/actions/approve/index.mdx",sourceDirName:"guides/built-ins/actions/approve",slug:"/guides/built-ins-approve",permalink:"/guides/built-ins-approve",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/approve/index.mdx",tags:[],version:"v4",frontMatter:{slug:"/guides/built-ins-approve"}},d={},u=[],m={toc:u},k="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is unavailable for issues. Reviewpad will ignore it when running on issues.")),(0,a.kt)("admonition",{title:"note",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This built-in is a shortcut to the ",(0,a.kt)("a",{parentName:"p",href:"./built-ins#review"},(0,a.kt)("inlineCode",{parentName:"a"},"review"))," built-in.\nIt is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},'$review("APPROVE", <MESSAGE>)'),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Submits a pull request review marked as approved."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")," (optional)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message to write as a comment.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$approve()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}g.isMDXComponent=!0}}]);