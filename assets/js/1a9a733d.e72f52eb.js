"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27779],{39678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(90814),l=n(97379);const r={title:"Installation as GitHub action with a GitHub Token",id:"installation-action-tokenized",slug:"installation-action-tokenized"},s=void 0,d={unversionedId:"getting-started/installation-action-tokenized",id:"getting-started/installation-action-tokenized",title:"Installation as GitHub action with a GitHub Token",description:"To get the most out of Reviewpad we advise installing the GitHub App. This will allow you to use all Reviewpad features.",source:"@site/docs/getting-started/installation-action-tokenized.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation-action-tokenized",permalink:"/next/getting-started/installation-action-tokenized",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation-action-tokenized.mdx",tags:[],version:"current",frontMatter:{title:"Installation as GitHub action with a GitHub Token",id:"installation-action-tokenized",slug:"installation-action-tokenized"}},p={},u=[{value:"Why?",id:"why",level:3},{value:"Step 1. Generate a GitHub token",id:"step-1-generate-a-github-token",level:2},{value:"Step 2. Add the generated GitHub token to Actions Secrets",id:"step-2-add-the-generated-github-token-to-actions-secrets",level:2},{value:"Step 3. Open the GitHub project on your IDE",id:"step-3-open-the-github-project-on-your-ide",level:2},{value:"Step 4. Add <code>Reviewpad Action</code> workflow file",id:"step-4-add-reviewpad-action-workflow-file",level:2},{value:"Step 5. Add <code>reviewpad.yml</code> to the root of the repository",id:"step-5-add-reviewpadyml-to-the-root-of-the-repository",level:2},{value:"Bonus: Checkout Reviewpad use cases",id:"bonus-checkout-reviewpad-use-cases",level:2}],k={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"GitHub App",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To get the most out of Reviewpad we advise ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation"},"installing the GitHub App"),". This will allow you to use all Reviewpad features."),(0,i.kt)("p",{parentName:"admonition"},"If you are not able to install the GitHub App, you can continue with this GitHub Action installation."),(0,i.kt)("p",{parentName:"admonition"},"Unfortunately, the following use cases will ",(0,i.kt)("strong",{parentName:"p"},"not")," work:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/use-cases/attention-set"},"Attention set")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/use-cases/auto-merge"},"Auto-merge")))),(0,i.kt)("admonition",{title:"GitHub Token",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The installation requires a GitHub Token to be configured in your repository secrets. This token will be used by Reviewpad to execute the defined actions. ",(0,i.kt)("strong",{parentName:"p"},"This means, that the actions will appear as if they were executed by the user who created the token"),"."),(0,i.kt)("p",{parentName:"admonition"},"We advise to create a dedicated GitHub user for this purpose and to use a token generated for this user."),(0,i.kt)("p",{parentName:"admonition"},"If you wish to execute Reviewpad without a GitHub Token, you can install ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-action"},"Reviewpad as GitHub Action"),". Please note that you won't be able to use all built-ins.")),(0,i.kt)("p",null,"This guide describes how to install Reviewpad with a GitHub Token."),(0,i.kt)("h3",{id:"why"},"Why?"),(0,i.kt)("p",null,"Reviewpad runs as a GitHub Action and by default a GitHub Action runs with an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"automatic token")," generated and provided by GitHub."),(0,i.kt)("p",null,"Although this generated token is enough to run most of Reviewpad functions, there are functions that need more permissions to run."),(0,i.kt)("p",null,"Therefore, in order to setup Reviewpad Action with a GitHub Token, follow the following steps:"),(0,i.kt)("h2",{id:"step-1-generate-a-github-token"},"Step 1. Generate a GitHub token"),(0,i.kt)("p",null,"Navigate to the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Fined-grained access")," in your ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens?type=beta"},"GitHub Developer Settings")," and click the button ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate new token"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Fined-grained access",src:n(99907).Z,width:"2612",height:"1998"})),(0,i.kt)("p",null,"Fill the form with the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Token name: ",(0,i.kt)("inlineCode",{parentName:"p"},"Reviewpad Token"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expiration: ",(0,i.kt)("inlineCode",{parentName:"p"},"90 days"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Description: ",(0,i.kt)("inlineCode",{parentName:"p"},"Token to be used by Reviewpad"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Repository access: ",(0,i.kt)("inlineCode",{parentName:"p"},"All repositories")," (or select the repositories you want to use Reviewpad with)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Permissions: Make sure to select the following permissions for ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository permissions")),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Access"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Actions"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Administration"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Code scanning alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Commit statuses"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contents"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dependabot alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Deployments"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Issues"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Merge queues"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,i.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pull requests"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Webhooks"),(0,i.kt)("td",{parentName:"tr",align:null},"Read and write")))))),(0,i.kt)("p",null,"Once you have filled the form, click the green button ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate token")," and copy the generated token."),(0,i.kt)("h2",{id:"step-2-add-the-generated-github-token-to-actions-secrets"},"Step 2. Add the generated GitHub token to Actions Secrets"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to your GitHub project (the project where you want the Reviewpad Action to run)."),(0,i.kt)("li",{parentName:"ol"},"Select the tab ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,i.kt)("li",{parentName:"ol"},"On the left, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Actions")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"Secrets")," section."),(0,i.kt)("li",{parentName:"ol"},"Click the button ",(0,i.kt)("inlineCode",{parentName:"li"},"New repository secret"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the new secret and then click on green button ",(0,i.kt)("inlineCode",{parentName:"li"},"Add secret"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"GH_TOKEN")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("em",{parentName:"li"},"THE_GENERATED_TOKEN_ON_STEP_1"))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub add token",src:n(57954).Z,width:"1462",height:"1118"})),(0,i.kt)("h2",{id:"step-3-open-the-github-project-on-your-ide"},"Step 3. Open the GitHub project on your IDE"),(0,i.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,i.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,i.kt)("h2",{id:"step-4-add-reviewpad-action-workflow-file"},"Step 4. Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,i.kt)("p",null,"At the root of your repository navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},".github > workflows")," (this is where your project's GitHub actions live; if you don't have these folders, please create them)."),(0,i.kt)("p",null,"Add the file ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\n\non:\n    - issues\n    - pull_request\n\njobs:\n    reviewpad-action:\n        runs-on: ubuntu-latest\n        steps:\n            - name: Running reviewpad action\n              uses: reviewpad/action@v3.x\n              with:\n                  token: ${{ secrets.GH_TOKEN }}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub add workflow",src:n(43907).Z,width:"1515",height:"1056"})),(0,i.kt)("h2",{id:"step-5-add-reviewpadyml-to-the-root-of-the-repository"},"Step 5. Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of the repository"),(0,i.kt)("p",null,"In order for Reviewpad to run, you need to add a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," to the root of your repository."),(0,i.kt)("p",null,"This file contains the configuration for Reviewpad."),(0,i.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,i.kt)("p",null,"On the root of your repository create the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,i.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},l.Z),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reviewpad add configuration",src:n(62975).Z,width:"1515",height:"1056"})),(0,i.kt)("p",null,"This particular configuration will label every pull requests based on their size."),(0,i.kt)("p",null,"That's it! \ud83c\udf89"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't forget to commit and push the ",(0,i.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,i.kt)("p",null,"Reviewpad will run on every pull request and follow the configuration you have set."),(0,i.kt)("h2",{id:"bonus-checkout-reviewpad-use-cases"},"Bonus: Checkout Reviewpad use cases"),(0,i.kt)("p",null,"You can do much more with Reviewpad."),(0,i.kt)("p",null,"Start by looking at some of Reviewpad ",(0,i.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),"."),(0,i.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,i.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}m.isMDXComponent=!0},97379:(e,t,n)=>{n.d(t,{Z:()=>a});const a='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},99907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step1-efafc13245b3a7804e5e848146826641.gif"},57954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step2-45a6d5ed4a3ffffd53b28f62f2c26bec.gif"},43907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step3-f55f11234c09d1065c0a54ff9c00dad7.gif"},62975:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step4-49e95e8adb360e3d5ab77d1ec68862f0.gif"}}]);