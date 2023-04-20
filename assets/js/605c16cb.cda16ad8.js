"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7025],{82779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l='workflows:\n  - name: merge\n    run:\n      # Filter the list of reviewers to only those who are in the maintainers team\n      # and check that there is at least one reviewer in the list.\n      # The expression is wrapped in quotes to avoid YAML parsing errors.\n      if: \'$length($filter($reviewers(), ($r: String => $isElementOf($r, $team("maintainers"))))) == 0\'\n      then: $info("No maintainer has reviewed the pull request yet")\n',s={},o=void 0,p={unversionedId:"guides/built-ins/functions/filter/index",id:"version-v4/guides/built-ins/functions/filter/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-v4/guides/built-ins/functions/filter/index.mdx",sourceDirName:"guides/built-ins/functions/filter",slug:"/guides/built-ins/functions/filter/",permalink:"/guides/built-ins/functions/filter/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/filter/index.mdx",tags:[],version:"v4",frontMatter:{}},d={},m=[],u={toc:m},k="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Filters the elements in the slice based on whether they satisfy a given predicate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"slice")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slice of strings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"predicate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(string => boolean)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The predicate over string.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The elements of the slice that satisfy the given predicate.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'\'$filter(["aa", "ab", "bb", "cc"], ($e: String => $startsWith($e, "a")))\' # ["aa", "ab"]\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l))}c.isMDXComponent=!0}}]);