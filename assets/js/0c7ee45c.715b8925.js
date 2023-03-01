"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6918],{5317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),o=a(90814),l=a(73531);const s={title:"Installation Reviewpad as a GitHub action",id:"installation-action",slug:"installation-action"},r=void 0,p={unversionedId:"getting-started/installation-action",id:"version-Legacy/getting-started/installation-action",title:"Installation Reviewpad as a GitHub action",description:"The installation of Reviewpad as a GitHub action is deprecated.",source:"@site/versioned_docs/version-Legacy/getting-started/installation-action.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation-action",permalink:"/Legacy/getting-started/installation-action",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation-action.mdx",tags:[],version:"Legacy",frontMatter:{title:"Installation Reviewpad as a GitHub action",id:"installation-action",slug:"installation-action"}},d={},u=[{value:"Step 1. Open the GitHub project on your IDE",id:"step-1-open-the-github-project-on-your-ide",level:2},{value:"Step 2. Add <code>Reviewpad Action</code> workflow file",id:"step-2-add-reviewpad-action-workflow-file",level:2},{value:"Step 3. Add <code>reviewpad.yml</code> to the root of your repository",id:"step-3-add-reviewpadyml-to-the-root-of-your-repository",level:2}],c={toc:u},w="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(w,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"deprecated",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"The installation of Reviewpad as a GitHub action is deprecated"),"."),(0,n.kt)("p",{parentName:"admonition"},"We strongly advise you to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation"},"install Reviewpad as a GitHub App"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are not able to ",(0,n.kt)("a",{parentName:"p",href:"installation"},"install Reviewpad as GitHub App"),", we suggest to ",(0,n.kt)("a",{parentName:"p",href:"installation-action-tokenized"},"install Reviewpad as a GitHub action with a GitHub token")," instead."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Please be aware that installing Reviewpad as a GitHub action without a GitHub token will limit the action execution to PUBLIC REPOSITORIES ONLY.")),(0,n.kt)("p",{parentName:"admonition"},"Also, some of the features of Reviewpad will not be available.")),(0,n.kt)("p",null,"You can install Reviewpad as a GitHub action \u26a1"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reviewpad runs as a GitHub action")," at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it."),(0,n.kt)("p",null,"To install Reviewpad on a repository, please follow the following steps."),(0,n.kt)("h2",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,n.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,n.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,n.kt)("h2",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,n.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,n.kt)("p",null,"At the root of your repository navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},".github > workflows")," (this is where your project's GitHub actions live; if you don't have these folders, please create them)."),(0,n.kt)("p",null,"Add the file ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," and copy the following content:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\n\non:\n    - issues\n    - pull_request\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Reviewpad\n        uses: reviewpad/action@v3.x\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad action installation - Step 2",src:a(49502).Z,width:"1515",height:"1056"})),(0,n.kt)("h2",{id:"step-3-add-reviewpadyml-to-the-root-of-your-repository"},"Step 3. Add ",(0,n.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,n.kt)("p",null,"For Reviewpad to run, you need to add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," to the root of your repository."),(0,n.kt)("p",null,"This file contains the configuration for Reviewpad."),(0,n.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,n.kt)("p",null,"On the root of your repository create the ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,n.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l.Z),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad action installation - Step 3",src:a(31398).Z,width:"1515",height:"1056"})),(0,n.kt)("p",null,"This particular configuration will label every pull request based on its size."),(0,n.kt)("p",null,"That's it! \ud83c\udf89"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Don't forget to commit and push the ",(0,n.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,n.kt)("p",null,"Reviewpad will run on every pull request and follow the configuration you have set."))}m.isMDXComponent=!0},73531:(e,t,a)=>{a.d(t,{Z:()=>i});const i='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},49502:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/step2-ff9cfbc8dac867b8ab24ae5908c23841.gif"},31398:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/step3-ee9ce3ac9bb60c3ad47a4e22d6b589aa.gif"}}]);