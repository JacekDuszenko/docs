"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49650],{31517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=t(87462),c=(t(67294),t(3905));const s={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},n=void 0,l={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",id:"version-3.7.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The hasCodePattern built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code.",source:"@site/versioned_docs/version-3.7.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/3.7.0/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",tags:[],version:"3.7.0",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/3.7.0/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/3.7.0/use-cases/label-critical-changes-with-semantic-code-annotations"}},o={},r=[],d={toc:r};function h(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"/guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: callsQuicksort\n    kind: patch\n    description: Patch contains the keyword quicksort\n    spec: $hasCodePattern("quicksort")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: callsQuicksort\n    then:\n      - $addLabel("critical")\n')))}h.isMDXComponent=!0}}]);