"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52530],{21502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),o=a(90814),l=a(16741);const s={title:"Installation Reviewpad as a GitHub action",id:"installation-action",slug:"installation-action"},r=void 0,p={unversionedId:"getting-started/installation-action",id:"version-3.26.0/getting-started/installation-action",title:"Installation Reviewpad as a GitHub action",description:"To get the most out of Reviewpad we advise you to install Reviewpad as a GitHub App.",source:"@site/versioned_docs/version-3.26.0/getting-started/installation-action.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation-action",permalink:"/3.26.0/getting-started/installation-action",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation-action.mdx",tags:[],version:"3.26.0",frontMatter:{title:"Installation Reviewpad as a GitHub action",id:"installation-action",slug:"installation-action"}},d={},u=[{value:"Step 1. Open the GitHub project on your IDE",id:"step-1-open-the-github-project-on-your-ide",level:2},{value:"Step 2. Add <code>Reviewpad Action</code> workflow file",id:"step-2-add-reviewpad-action-workflow-file",level:2},{value:"Step 3. Add <code>reviewpad.yml</code> to the root of your repository",id:"step-3-add-reviewpadyml-to-the-root-of-your-repository",level:2},{value:"Bonus: Checkout Reviewpad use cases",id:"bonus-checkout-reviewpad-use-cases",level:2}],c={toc:u};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"To get the most out of Reviewpad we advise you to ",(0,n.kt)("a",{parentName:"strong",href:"/getting-started/installation"},"install Reviewpad as a GitHub App"),"."),"\nThis will allow you to access all Reviewpad features."),(0,n.kt)("p",{parentName:"admonition"},"If you are not able to install the Reviewpad GitHub App, please continue with this installation.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are not able to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation"},"install Reviewpad as GitHub App"),", we suggest to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"install Reviewpad as a GitHub action with a GitHub token")," instead."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Please be aware that installing Reviewpad as a GitHub action without a GitHub token will limit the action execution to PUBLIC REPOSITORIES ONLY.")),(0,n.kt)("p",{parentName:"admonition"},"Also, you will not be able to use the following built-ins:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins#team"},"team")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins#merge"},"merge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/built-ins#setprojectfield"},"setProjectField")))),(0,n.kt)("p",null,"You can install Reviewpad as a GitHub action \u26a1"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reviewpad runs as a GitHub action")," at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it."),(0,n.kt)("p",null,"To install Reviewpad on a repository, please follow the following steps."),(0,n.kt)("h2",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,n.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,n.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,n.kt)("h2",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,n.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,n.kt)("p",null,"At the root of your repository navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},".github > workflows")," (this is where your project's GitHub actions live; if you don't have these folders, please create them)."),(0,n.kt)("p",null,"Add the file ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," and copy the following content:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\n\non:\n    - issues\n    - pull_request\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Reviewpad\n        uses: reviewpad/action@v3.x\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad action installation - Step 2",src:a(49502).Z,width:"1515",height:"1056"})),(0,n.kt)("h2",{id:"step-3-add-reviewpadyml-to-the-root-of-your-repository"},"Step 3. Add ",(0,n.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,n.kt)("p",null,"In order for Reviewpad to run, you need to add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," to the root of your repository."),(0,n.kt)("p",null,"This file contains the configuration for Reviewpad."),(0,n.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,n.kt)("p",null,"On the root of your repository create the ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,n.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},l.Z),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad action installation - Step 3",src:a(31398).Z,width:"1515",height:"1056"})),(0,n.kt)("p",null,"This particular configuration will label every pull requests based on their size."),(0,n.kt)("p",null,"That's it! \ud83c\udf89"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Don't forget to commit and push the ",(0,n.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,n.kt)("p",null,"Reviewpad will run on every pull request and follow the configuration you have set."),(0,n.kt)("h2",{id:"bonus-checkout-reviewpad-use-cases"},"Bonus: Checkout Reviewpad use cases"),(0,n.kt)("p",null,"You can do much more with Reviewpad."),(0,n.kt)("p",null,"Start by looking at some of Reviewpad ",(0,n.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),"."),(0,n.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,n.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}m.isMDXComponent=!0},16741:(e,t,a)=>{a.d(t,{Z:()=>i});const i='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},49502:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/step2-ff9cfbc8dac867b8ab24ae5908c23841.gif"},31398:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/step3-ee9ce3ac9bb60c3ad47a4e22d6b589aa.gif"}}]);