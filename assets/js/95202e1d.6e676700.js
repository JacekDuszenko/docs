"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57450],{82720:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var l=s(87462),a=(s(67294),s(3905)),t=s(90814),n=s(52976);const o={title:"Label with size",id:"label-with-size",slug:"/use-cases/label-with-size"},r=void 0,u={unversionedId:"use-cases/automated-labelling/label-with-size/label-with-size",id:"version-3.24.0/use-cases/automated-labelling/label-with-size/label-with-size",title:"Label with size",description:"The size of a pull request is a good indicator of how much work is involved in reviewing it.",source:"@site/versioned_docs/version-3.24.0/use-cases/automated-labelling/label-with-size/index.mdx",sourceDirName:"use-cases/automated-labelling/label-with-size",slug:"/use-cases/label-with-size",permalink:"/use-cases/label-with-size",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-with-size/index.mdx",tags:[],version:"3.24.0",frontMatter:{title:"Label with size",id:"label-with-size",slug:"/use-cases/label-with-size"},sidebar:"DocsSidebar",previous:{title:"Label when git conflicts",permalink:"/use-cases/label-when-git-conflicts"},next:{title:"Remove label based on file paths",permalink:"/use-cases/remove-label-based-on-file-paths"}},d={},c=[],b={toc:c};function h(e){let{components:i,...s}=e;return(0,a.kt)("wrapper",(0,l.Z)({},b,s,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The size of a pull request is a good indicator of how much work is involved in reviewing it."),(0,a.kt)("p",null,"To help reviewers gauge the size of a pull request, you can add a label to it."),(0,a.kt)("p",null,"This is especially useful when the list of pull requests is big and you want to quickly see which one better fits your schedule."),(0,a.kt)(t.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},n.Z))}h.isMDXComponent=!0},52976:(e,i,s)=>{s.d(i,{Z:()=>l});const l='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'}}]);