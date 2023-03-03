"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4918],{74843:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=i(87462),o=(i(67294),i(3905)),n=i(90814),p=i(10996);const s={id:"migrations",slug:"/guides/migrations",title:"Migrations"},r="Migrations",l={unversionedId:"guides/migrations",id:"version-v3/guides/migrations",title:"Migrations",description:"Migrate from the GitHub Action to the GitHub App",source:"@site/versioned_docs/version-v3/guides/migrations.mdx",sourceDirName:"guides",slug:"/guides/migrations",permalink:"/v3/guides/migrations",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/migrations.mdx",tags:[],version:"v3",frontMatter:{id:"migrations",slug:"/guides/migrations",title:"Migrations"},sidebar:"DocsSidebar",previous:{title:"Extends",permalink:"/v3/guides/extends"},next:{title:"Reports",permalink:"/v3/guides/reports"}},d={},u=[{value:"Migrate from the GitHub Action to the GitHub App",id:"migrate-from-the-github-action-to-the-github-app",level:2},{value:"Why?",id:"why",level:3},{value:"Step 1. Navigate to the Reviewpad GitHub App page",id:"step-1-navigate-to-the-reviewpad-github-app-page",level:3},{value:"Step 2. Choose which repositories to install Reviewpad on",id:"step-2-choose-which-repositories-to-install-reviewpad-on",level:3},{value:"Step 3. Configure Reviewpad",id:"step-3-configure-reviewpad",level:3},{value:"Step 4. Disable Reviewpad action",id:"step-4-disable-reviewpad-action",level:3}],h={toc:u},c="wrapper";function g(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrations"},"Migrations"),(0,o.kt)("h2",{id:"migrate-from-the-github-action-to-the-github-app"},"Migrate from the GitHub Action to the GitHub App"),(0,o.kt)("h3",{id:"why"},"Why?"),(0,o.kt)("p",null,"Using Reviewpad action is a great way to get started with Reviewpad. However, it has some limitations."),(0,o.kt)("p",null,"To overcome these limitations, you should migrate to the Reviewpad GitHub App. The migration is a simple process that can be completed in a few steps."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App"),", you need to be an ",(0,o.kt)("strong",{parentName:"p"},"admin")," of the GitHub organization where you want to install it."),(0,o.kt)("p",{parentName:"admonition"},"If you are not an admin, you can ask your admin to install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App"),".")),(0,o.kt)("h3",{id:"step-1-navigate-to-the-reviewpad-github-app-page"},"Step 1. Navigate to the Reviewpad GitHub App page"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App page")," and click the green button ",(0,o.kt)("inlineCode",{parentName:"p"},"Install"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reviewpad Installation - Step 1",src:i(20221).Z,width:"1653",height:"924"})),(0,o.kt)("h3",{id:"step-2-choose-which-repositories-to-install-reviewpad-on"},"Step 2. Choose which repositories to install Reviewpad on"),(0,o.kt)("p",null,"You can choose to install Reviewpad on all repositories or select specific repositories."),(0,o.kt)("p",null,"Once you have selected the option you want, click the green button ",(0,o.kt)("inlineCode",{parentName:"p"},"Install"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reviewpad Installation - Step 2",src:i(34430).Z,width:"1663",height:"1323"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After you click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Install")," button you will be redirected to Reviewpad documentation. You can close it and continue with this migration.")),(0,o.kt)("h3",{id:"step-3-configure-reviewpad"},"Step 3. Configure Reviewpad"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you already have a Reviewpad configuration file, you can ",(0,o.kt)("a",{parentName:"p",href:"#step-4-delete-reviewpad-action"},"skip this step"),".")),(0,o.kt)("p",null,"If you don't have a Reviewpad configuration file, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," in the root of your repository and add the following content:"),(0,o.kt)(n.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},p.Z),(0,o.kt)("h3",{id:"step-4-disable-reviewpad-action"},"Step 4. Disable Reviewpad action"),(0,o.kt)("p",null,"Finally, disable the Reviewpad action from your repository. You can do this by removing the workflow file, that executes the Reviewpad action, from your repository."),(0,o.kt)("p",null,"If you followed our ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation-action-tokenized"},"configuration guide"),", you can find the workflow file in ",(0,o.kt)("inlineCode",{parentName:"p"},".github > workflows > reviewpad.yml"),"."),(0,o.kt)("p",null,"Remove it and you're done."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reviewpad Delete Action",src:i(94033).Z,width:"1024",height:"768"})))}g.isMDXComponent=!0},10996:(e,t,i)=>{i.d(t,{Z:()=>a});const a='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},20221:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/step1-38760e5b89117f3fa624f048c034663e.png"},34430:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/step2-326bfedad3d72a63b01681ad90f0da98.png"},94033:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/delete-action-d0212b03654dad1b9a4500b84e7086f2.gif"}}]);