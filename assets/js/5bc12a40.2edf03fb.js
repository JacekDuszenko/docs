"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[46929],{78666:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(87462),n=(a(67294),a(3905)),l=a(90814);const o={title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},i=void 0,r={unversionedId:"use-cases/automated-labelling/remove-label-based-on-file-paths/remove-label-based-on-file-paths",id:"version-3.11.0/use-cases/automated-labelling/remove-label-based-on-file-paths/remove-label-based-on-file-paths",title:"Remove label based on file paths",description:"Here's an example of a reviewpad.yml configuration that removes a label from a pull request that contains the proper changes based on the file path.",source:"@site/versioned_docs/version-3.11.0/use-cases/automated-labelling/remove-label-based-on-file-paths/index.mdx",sourceDirName:"use-cases/automated-labelling/remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths",permalink:"/use-cases/remove-label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/remove-label-based-on-file-paths/index.mdx",tags:[],version:"3.11.0",frontMatter:{title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Label potential missing changes",permalink:"/use-cases/label-potential-missing-changes"},next:{title:"Attention Set",permalink:"/use-cases/attention-set"}},d={},c=[],p={toc:c};function h(e){let{components:s,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that removes a label from a pull request that contains the proper changes based on the file path."),(0,n.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-tests:\n    description: Change misses the test specification\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: fd5e53\n\nrules:\n  - name: code-changes-without-tests\n    kind: patch\n    description: Changes to src and not to test files\n    spec: \'$hasFilePattern("src/**") && !$hasFilePattern("*_test.go")\'\n\n  - name: code-changes-with-tests\n    kind: patch\n    description: Changes to src and to test files\n    spec: \'$hasFilePattern("src/**") && $hasFilePattern("*_test.go")\'\n\nworkflows:\n  - name: require-tests\n    description: Tests are required\n    if:\n      - rule: code-changes-without-tests\n    then:\n      - \'$addLabel("missing-tests")\'\n\n  - name: clean\n    description: Clean up process\n    if:\n      - rule: code-changes-with-tests\n    then:\n      - \'$removeLabel("missing-tests")\'\n'))}h.isMDXComponent=!0}}]);