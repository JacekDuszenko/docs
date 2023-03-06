"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8703],{74266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),s=a(90814);const l='rules:\n  - name: missing-tests\n    spec: $changed("src/@1.java", "test/@1.java") == false\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: missing-tests\n    then:\n      - $fail("Please include tests for your change")\n',r={},o=void 0,p={unversionedId:"guides/built-ins/actions/fail/index",id:"guides/built-ins/actions/fail/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/fail/index.mdx",sourceDirName:"guides/built-ins/actions/fail",slug:"/guides/built-ins/actions/fail/",permalink:"/next/guides/built-ins/actions/fail/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/fail/index.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],c={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Fails Reviewpad execution with a custom message."),(0,i.kt)("p",null,"The custom message is added to both the Reviewpad status check and the Reviewpad report."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in forces Reviewpad to fail."),(0,i.kt)("p",{parentName:"admonition"},"You will see a \u274c in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad")," status check.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fail_message")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fail message.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$fail("Missing specs")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}k.isMDXComponent=!0}}]);