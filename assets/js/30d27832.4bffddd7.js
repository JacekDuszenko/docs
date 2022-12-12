"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53650],{86107:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=o(87462),i=(o(67294),o(3905)),a=o(90814),r=o(97379);const l={title:"Configuration",id:"configuration",slug:"configuration"},s=void 0,d={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"Now that you have installed Reviewpad it's time to configure it.",source:"@site/docs/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/next/getting-started/configuration",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/configuration.mdx",tags:[],version:"current",frontMatter:{title:"Configuration",id:"configuration",slug:"configuration"},sidebar:"DocsSidebar",previous:{title:"Installation",permalink:"/next/getting-started/installation"},next:{title:"Playground",permalink:"/next/getting-started/playground"}},p={},u=[{value:"Add <code>reviewpad.yml</code> to the root of your repository",id:"add-reviewpadyml-to-the-root-of-your-repository",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:u};function g(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that you have installed Reviewpad it's time to configure it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Reviewpad configuration is a YAML file that defines the workflows that to follow to automate your pull request process.")),(0,i.kt)("p",null,"In this example we will create a configuration that checks the size of a pull request and adds a label with the size."),(0,i.kt)("h2",{id:"add-reviewpadyml-to-the-root-of-your-repository"},"Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,i.kt)("p",null,"Reviewpad will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file in the root of your repository and follow the workflows defined in it."),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," in the root of your repository and add the following content:"),(0,i.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},r.Z),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reviewpad Installation - Step 3",src:o(65148).Z,width:"1515",height:"1056"})),(0,i.kt)("p",null,"That's it! \ud83c\udf89"),(0,i.kt)("p",null,"Reviewpad will run on every pull request and follow the workflows defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc49 Don't forget to commit and push the ",(0,i.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Now that you have configured Reviewpad you can start using it to automate your pull request process."),(0,i.kt)("p",null,"Have a look at the ",(0,i.kt)("a",{parentName:"p",href:"../use-cases"},"use cases")," to see how Reviewpad can help you."),(0,i.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,i.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}g.isMDXComponent=!0},97379:(e,t,o)=>{o.d(t,{Z:()=>n});const n='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},65148:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/step3-e20ffc2932a0b20f804730c828e3b02e.gif"}}]);