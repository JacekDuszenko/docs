"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4162],{24991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const r='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: security-changes\n    if:\n      - $hasAnnotation("security")\n    then:\n      - $assignReviewer($team("security"), 1)\n',s={slug:"/guides/built-ins-hasannotation"},l=void 0,p={unversionedId:"guides/built-ins/functions/hasAnnotation/index",id:"version-v4/guides/built-ins/functions/hasAnnotation/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/hasAnnotation/index.mdx",sourceDirName:"guides/built-ins/functions/hasAnnotation",slug:"/guides/built-ins-hasannotation",permalink:"/guides/built-ins-hasannotation",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasAnnotation/index.mdx",tags:[],version:"v4",frontMatter:{slug:"/guides/built-ins-hasannotation"}},d={},m=[],u={toc:m},k="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Verifies if the patch contains a symbol with the provided annotation, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that for this to work a symbol must be annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@reviewpad-an <annotation>")," annotation."),(0,i.kt)("p",{parentName:"admonition"},"For more information annotations, please see ",(0,i.kt)("a",{parentName:"p",href:"./annotations"},"this page"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is not available for issues.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"annotation")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The annotation to look for in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the patch changes a symbol with the provided annotation, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$hasAnnotation("critical")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},r))}h.isMDXComponent=!0}}]);