"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[18432],{11574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Installation",slug:"installation"},r=void 0,l={unversionedId:"getting-started/installation",id:"version-3.7.0/getting-started/installation",title:"Installation",description:"This guide describes how to install Reviewpad",source:"@site/versioned_docs/version-3.7.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/3.7.0/getting-started/installation",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation.md",tags:[],version:"3.7.0",frontMatter:{title:"Installation",slug:"installation"},sidebar:"DocsSidebar",previous:{title:"Introduction",permalink:"/3.7.0/"},next:{title:"Security",permalink:"/3.7.0/getting-started/security"}},s={},p=[{value:"Step 1. Open the GitHub project on your IDE",id:"step-1-open-the-github-project-on-your-ide",level:2},{value:"Step 2. Add <code>Reviewpad Action</code> workflow file",id:"step-2-add-reviewpad-action-workflow-file",level:2},{value:"Step 3. Add <code>reviewpad.yml</code> to the root of your repository",id:"step-3-add-reviewpadyml-to-the-root-of-your-repository",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide describes how to install Reviewpad \u26a1"),(0,a.kt)("admonition",{title:"INFO",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Some actions require a GitHub token \ud83d\udd11"),(0,a.kt)("p",{parentName:"admonition"},"To install Reviewpad with a GitHub token please ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"follow this tutorial"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reviewpad runs as a GitHub action")," at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it."),(0,a.kt)("p",null,"To install Reviewpad on a repository, please follow the following steps."),(0,a.kt)("h2",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,a.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,a.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,a.kt)("h2",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,a.kt)("p",null,"At the root of your repository navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},".github > workflows")," (This is where your project GitHub actions live. If you don't have these folders, please create them)."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570617-9dab7df4-35e2-41f2-8dd3-b2823b822813.png",alt:"root of the repo"}),(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570760-4a8f72f8-09d5-4e88-97bb-860c40d6364f.png",alt:"workspcase folder"})),(0,a.kt)("p",null,"Add the file ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," and copy the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        uses: reviewpad/action@v3.x\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570845-52bf0570-567d-48eb-8855-019b2c2de54f.png",alt:"file inside workspace folder"}),(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571129-83c04a46-85ea-46fb-8199-b3ead06f55f5.png",alt:"reviewpad action"})),(0,a.kt)("h2",{id:"step-3-add-reviewpadyml-to-the-root-of-your-repository"},"Step 3. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,a.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,a.kt)("p",null,"On the root of your repository create the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    color: "294b69"\n  medium:\n    color: "a8c3f7"\n  large:\n    color: "8a2138"\n\nworkflows:\n  - name: label-pull-request-with-size\n    if:\n      - rule: $size() <= 30\n        extra-actions:\n          - $addLabel("small")\n      - rule: $size() > 30 && $size() <= 100\n        extra-actions:\n          - $addLabel("medium")\n      - rule: $size() > 100\n        extra-actions:\n          - $addLabel("large")\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571053-7221fe45-205a-44cb-a199-9e5963e277b5.png",alt:"reviewpad file in root folder"}),(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571269-368f57f1-f16d-47d4-91c1-485f5531fe7f.png",alt:"reviewpad config"})),(0,a.kt)("p",null,"This particular configuration will label the pull requests based on their size."),(0,a.kt)("p",null,"You can do much more with Reviewpad. Start by looking at some of Reviewpad ",(0,a.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),"."),(0,a.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By running this action you're agreeing with ",(0,a.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}u.isMDXComponent=!0}}]);