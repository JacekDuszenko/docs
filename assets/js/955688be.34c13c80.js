"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47540],{39661:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(87462),n=(a(67294),a(3905));const l={title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},o=void 0,i={unversionedId:"use-cases/automated-labelling/remove-label-based-on-file-paths",id:"version-3.3.1/use-cases/automated-labelling/remove-label-based-on-file-paths",title:"Remove label based on file paths",description:"Here's an example of a reviewpad.yml configuration that removes a label from a pull request that contains the proper changes based on the file path.",source:"@site/versioned_docs/version-3.3.1/use-cases/automated-labelling/remove-label-based-on-file-paths.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/remove-label-based-on-file-paths",permalink:"/3.3.1/use-cases/remove-label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/remove-label-based-on-file-paths.md",tags:[],version:"3.3.1",frontMatter:{title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with semantic code annotations",permalink:"/3.3.1/use-cases/label-critical-changes-with-semantic-code-annotations"},next:{title:"Reviewer Assignment",permalink:"/3.3.1/use-cases/reviewer-assignment"}},r={},c=[],d={toc:c};function p(e){let{components:s,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,a,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that removes a label from a pull request that contains the proper changes based on the file path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-tests:\n    description: Change misses the test specification\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: codeChangesWithoutTests\n    kind: patch\n    description: Changes to src and not to test files\n    spec: $hasFilePattern("src/**") && !$hasFilePattern("*_test.go")\n  - name: codeChangesWithTests\n    kind: patch\n    description: Changes to src and to test files\n    spec: $hasFilePattern("src/**") && $hasFilePattern("*_test.go")\n\nworkflows:\n  - name: requireTests\n    description: Tests are required\n    if:\n      - rule: codeChangesWithoutTests\n    then:\n      - $addLabel("missing-tests")\n  - name: clean\n    description: Clean up process\n    if:\n      - rule: codeChangesWithTests\n    then:\n      - $removeLabel("missing-tests")\n')))}p.isMDXComponent=!0}}]);