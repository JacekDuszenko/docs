"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[485],{9749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const o={id:"5-minutes-tutorial",slug:"/",title:"5 Minutes Tutorial"},l=void 0,r={unversionedId:"5-minutes-tutorial",id:"5-minutes-tutorial",title:"5 Minutes Tutorial",description:"Welcome to Reviewpad!",source:"@site/docs/5-minutes-tutorial.md",sourceDirName:".",slug:"/",permalink:"/next/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/5-minutes-tutorial.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5-minutes-tutorial",slug:"/",title:"5 Minutes Tutorial"},sidebar:"DocsSidebar",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"YAML Syntax",permalink:"/next/guides/syntax"}},s={},u=[{value:"Welcome to Reviewpad!",id:"welcome-to-reviewpad",level:2},{value:"Install Reviewpad",id:"install-reviewpad",level:2},{value:"Policy-as-Code",id:"policy-as-code",level:2},{value:"First Workflow",id:"first-workflow",level:2},{value:"Second Worflow: Trigger Actions when Specific Code Sections are Modified",id:"second-worflow-trigger-actions-when-specific-code-sections-are-modified",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Playground",id:"playground",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"welcome-to-reviewpad"},"Welcome to Reviewpad!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u26a1 Reviewpad is an application to speed up, secure, and automate your code review process on GitHub.")),(0,n.kt)("p",null,"Many actions surrounding pull requests such as reviewer assignment, labeling, and attention drawing differ for each pull request. In most cases, these actions are performed manually. However, we believe that most of these actions follow an implicit team policy that can be explicitly defined and automated."),(0,n.kt)("h2",{id:"install-reviewpad"},"Install Reviewpad"),(0,n.kt)("p",null,"If you've navigated to this '5 Minutes Tutorial', you've likely already enabled Reviewpad for one of your GitHub repositories. If not, begin by following the ",(0,n.kt)("a",{parentName:"p",href:"installation"},"installation instructions"),"."),(0,n.kt)("h2",{id:"policy-as-code"},"Policy-as-Code"),(0,n.kt)("p",null,"Reviewpad is a GitHub App that responds to all events on pull requests and issues based on instructions contained in a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file. This ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file should be located at the root of each repository on which Reviewpad is enabled. Without a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file, Reviewpad will not take any action."),(0,n.kt)("h2",{id:"first-workflow"},"First Workflow"),(0,n.kt)("p",null,"Your ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file primarily consists of a series of ",(0,n.kt)("strong",{parentName:"p"},"workflows"),". By using basic ",(0,n.kt)("inlineCode",{parentName:"p"},"if ... then ... else")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"forEach ... do")," logic statements, you can devise a workflow that enforces a complete process."),(0,n.kt)("p",null,"Let's start by creating a workflow that adds the label ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," to every pull request, regardless of the actions taken with this pull request."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the ",(0,n.kt)("inlineCode",{parentName:"li"},"reviewpad.yml")," configuration file at the root of your repository"),(0,n.kt)("li",{parentName:"ol"},"Define the following content:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  - name: My First Reviewpad Workflow\n    run:\n      - $addLabel("foo")\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Commit your changes and merge them into the main branch"),(0,n.kt)("li",{parentName:"ol"},"Create a new Pull Request"),(0,n.kt)("li",{parentName:"ol"},"After a few seconds, Reviewpad will decorate this Pull Request with the ",(0,n.kt)("inlineCode",{parentName:"li"},"foo")," label.")),(0,n.kt)("p",null,"Congratulations! You've completed your first Reviewpad workflow."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},'$addLabel("foo")')," is what we call a built-in. Each call to a built-in should start with a ",(0,n.kt)("inlineCode",{parentName:"p"},"$")," sign. Visit the ",(0,n.kt)("a",{parentName:"p",href:"guides/built-ins"},"Built-ins")," page for a complete list of available built-ins.")),(0,n.kt)("h2",{id:"second-worflow-trigger-actions-when-specific-code-sections-are-modified"},"Second Worflow: Trigger Actions when Specific Code Sections are Modified"),(0,n.kt)("p",null,"Let's say you want to implement the following workflow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Whenever a source file located in the ",(0,n.kt)("inlineCode",{parentName:"li"},"authentication")," directory is modified:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add the ",(0,n.kt)("inlineCode",{parentName:"li"},"security")," label."),(0,n.kt)("li",{parentName:"ul"},"Assign for review to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Security")," team."),(0,n.kt)("li",{parentName:"ul"},"Post a comment to alert the author of the Pull Request.")))),(0,n.kt)("p",null,"You can implement this second workflow with Reviewpad as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  - name: My First Reviewpad Workflow\n    run:\n      - $addLabel("foo")\n\n  - name: Security Process When Modifying Authentication Layer\n    run:\n      - if: $hasFilePattern("**/authentication/**")\n        then:\n          - $addLabel("security")\n          - $assignTeamReviewer(["Security"]) # This \'Security\' team must exist in your GitHub Repository\n          - $commentOnce("The Security team has been involved because the authentication layer is touched")\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We recommend you review the documentation for the following built-ins used in this second workflow:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"guides/built-ins/#hasfilepattern"},(0,n.kt)("inlineCode",{parentName:"a"},"$hasFilePattern"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"guides/built-ins/#addlabel"},(0,n.kt)("inlineCode",{parentName:"a"},"$addLabel"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"guides/built-ins/#assignteamreviewer"},(0,n.kt)("inlineCode",{parentName:"a"},"$assignTeamReviewer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"guides/built-ins/#commentonce"},(0,n.kt)("inlineCode",{parentName:"a"},"$commentOnce"))))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"Now that you are familiar with Reviewpad, you can start tailoring it to suit your specific needs."),(0,n.kt)("p",null,"Browse through our ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),", ",(0,n.kt)("a",{parentName:"p",href:"https://reviewpad.com/code-automation"},"use cases"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://reviewpad.com/automated-code-policies"},"common policies")," to discover how Reviewpad can assist you."),(0,n.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,n.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")),(0,n.kt)("h2",{id:"playground"},"Playground"),(0,n.kt)("p",null,"We have designed a playground for you to ",(0,n.kt)("strong",{parentName:"p"},"play with Reviewpad")," and get a feel of how it works without having to push any changes to your repository."),(0,n.kt)("p",null,"You will find the following major components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Use cases")," - These are some scenarios you can try. Each use case has a proposed Reviewpad configuration and a pull request to run the configuration against."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Configuration")," - This is the Reviewpad configuration defined to represent the use case. You can edit and see the results by running Reviewpad against the selected pull request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Pull request")," - This is the pull request that Reviewpad will run against. You can edit the pull request and see the results by running Reviewpad against it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sharable link")," - This action generates an unique URL that contains all the configuration details (use case, configuration and pull request) you have selected in the playground allowing you to share these with others without them having to go through the same process of configuring everything from scratch."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Output")," - This is the output of Reviewpad when it runs against the selected pull request with the selected configuration. Please note that Reviewpad will run in dry-run mode, so it will not make any changes to the pull request.")),(0,n.kt)("center",null,(0,n.kt)("h1",null,(0,n.kt)("a",{href:"https://reviewpad.com/playground",target:"_blank"},"Let's play \ud83e\udd84"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad playground",src:a(6597).Z,width:"3482",height:"1932"})))}c.isMDXComponent=!0},6597:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/playground-preview-4c45c307e0c601db233a43f471dbfa86.png"}}]);