"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[101],{92257:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=t(87462),i=(t(67294),t(3905)),c=t(90814);const o='labels:\n  critical:\n    description: Critical code\n    color: fd5e53\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    run:\n      if: $hasAnnotation("critical")\n      then: $addLabel("critical")\n',s={title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations"},l=void 0,r={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations/label-critical-changes-with-semantic-code-annotations",id:"use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations/label-critical-changes-with-semantic-code-annotations",title:"Label critical changes with semantic code annotations",description:"The hasAnnotation built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks.",source:"@site/docs/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations/index.mdx",sourceDirName:"use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations",permalink:"/next/use-cases/label-critical-changes-with-semantic-code-annotations",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations/index.mdx",tags:[],version:"current",frontMatter:{title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with code pattern",permalink:"/next/use-cases/label-critical-changes-with-code-pattern"},next:{title:"Label potential missing changes",permalink:"/next/use-cases/label-potential-missing-changes"}},d={},h=[],u={toc:h},m="wrapper";function p(e){let{components:a,...t}=e;return(0,i.kt)(m,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},"hasAnnotation")," built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks."),(0,i.kt)("p",null,"To use the annotation in ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," files, you need to annotate functions of interest with the comment ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad-an: critical"),". For example, consider the following Go function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// reviewpad-an: critical\nfunc quicksort(a []int) []int {\n    if len(a) < 2 {\n        return a\n    }\n\n    left, right := 0, len(a)-1\n\n    pivot := rand.Int() % len(a)\n\n    a[pivot], a[right] = a[right], a[pivot]\n\n    for i := range a {\n        if a[i] < a[right] {\n            a[left], a[i] = a[i], a[left]\n            left++\n        }\n    }\n\n    a[left], a[right] = a[right], a[left]\n\n    quicksort(a[:left])\n    quicksort(a[left+1:])\n\n    return a\n}\n")),(0,i.kt)("p",null,"From now on, we can automatically label PRs that modify the content of this function:"),(0,i.kt)(c.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o),(0,i.kt)("p",null,"In a future version, we plan to allow such specifications in configuration files, for developers that do not want to add such annotations to the source code. Effectively, Reviewpad allows to implement a much more advanced version of CODEOWNERS."))}p.isMDXComponent=!0}}]);