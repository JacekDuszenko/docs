"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63307],{92428:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var l=i(87462),a=(i(67294),i(3905)),t=i(90814),n=i(34873);const o={title:"Label with size",id:"label-with-size",slug:"/use-cases/label-with-size"},u=void 0,r={unversionedId:"use-cases/automated-labelling/label-with-size/label-with-size",id:"version-3.12.0/use-cases/automated-labelling/label-with-size/label-with-size",title:"Label with size",description:"The size of a pull request is a good indicator of how much work is involved in reviewing it.",source:"@site/versioned_docs/version-3.12.0/use-cases/automated-labelling/label-with-size/index.mdx",sourceDirName:"use-cases/automated-labelling/label-with-size",slug:"/use-cases/label-with-size",permalink:"/3.12.0/use-cases/label-with-size",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-with-size/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Label with size",id:"label-with-size",slug:"/use-cases/label-with-size"},sidebar:"DocsSidebar",previous:{title:"Label when git conflicts",permalink:"/3.12.0/use-cases/label-when-git-conflicts"},next:{title:"Remove label based on file paths",permalink:"/3.12.0/use-cases/remove-label-based-on-file-paths"}},d={},c=[],b={toc:c};function h(e){let{components:s,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},b,i,{components:s,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The size of a pull request is a good indicator of how much work is involved in reviewing it."),(0,a.kt)("p",null,"To help reviewers gauge the size of a pull request, you can add a label to it."),(0,a.kt)("p",null,"This is especially useful when the list of pull requests is big and you want to quickly see which one better fits your schedule."),(0,a.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},n.Z))}h.isMDXComponent=!0},34873:(e,s,i)=>{i.d(s,{Z:()=>l});const l='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'}}]);