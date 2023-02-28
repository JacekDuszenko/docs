"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3650],{3681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905)),a=n(814);const o={title:"Configuration",id:"configuration",slug:"configuration"},s=void 0,l={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"",source:"@site/docs/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/next/getting-started/configuration",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/configuration.mdx",tags:[],version:"current",frontMatter:{title:"Configuration",id:"configuration",slug:"configuration"},sidebar:"DocsSidebar",previous:{title:"Installation",permalink:"/next/getting-started/installation"},next:{title:"Playground",permalink:"/next/getting-started/playground"}},u={},d=[{value:"Add <code>reviewpad.yml</code> to the root of your repository",id:"add-reviewpadyml-to-the-root-of-your-repository",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you have selected the installation option ",(0,i.kt)("inlineCode",{parentName:"p"},"Only select repositories")," you don't need to follow this guide. Reviewpad will automatically create a pull request in the select repositories with the configuration file. ",(0,i.kt)("strong",{parentName:"p"},"You will need to merge the pull request to start using Reviewpad."))),(0,i.kt)("p",null,"Now that you have installed Reviewpad it's time to configure it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Reviewpad configuration is a YAML file that defines the workflows that automate your pull request process.")),(0,i.kt)("p",null,"In this example we will add a configuration with some of the best practices for pull request reviews."),(0,i.kt)("h2",{id:"add-reviewpadyml-to-the-root-of-your-repository"},"Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that you will need to ",(0,i.kt)("strong",{parentName:"p"},"add a ",(0,i.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to each repository")," where you want to use Reviewpad.")),(0,i.kt)("p",null,"Reviewpad will look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file in the root of your repository and follow the workflows defined in it."),(0,i.kt)("p",null,"Create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," in the root of your repository and add the following content:"),(0,i.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'# This file is used to configure Reviewpad.\r\n# The configuration is a proposal to help you get started.\r\n# You can use it as a starting point and customize it to your needs.\r\n# For more details see https://docs.reviewpad.com/guides/syntax.\r\n\r\n# Define the version of Reviewpad to be used.\r\napi-version: reviewpad.com/v3.x\r\n\r\n# Define the list of labels to be used by Reviewpad.\r\n# For more details see https://docs.reviewpad.com/guides/syntax#label.\r\nlabels:\r\n  small:\r\n    description: Pull request is small\r\n    color: "#76dbbe"\r\n  medium:\r\n    description: Pull request is medium\r\n    color: "#2986cc"\r\n  large:\r\n    description: Pull request is large\r\n    color: "#c90076"\r\n\r\n# Define the list of workflows to be run by Reviewpad.\r\n# A workflow is a list of actions that will be executed based on the defined rules.\r\n# For more details see https://docs.reviewpad.com/guides/syntax#workflow.\r\nworkflows:\r\n  # This workflow praises contributors on their pull request contributions.\r\n  # This helps contributors feel appreciated.\r\n  - name: praise-contributors-on-milestones\r\n    description: Praise contributors based on their contributions\r\n    always-run: true\r\n    if:\r\n      # Praise contributors on their first pull request.\r\n      - rule: $pullRequestCountBy($author()) == 1\r\n        extra-actions:\r\n          - $commentOnce($sprintf("Thank you @%s for this first contribution!", [$author()]))\r\n      # Praise contributors on their 100th pull request.\r\n      - rule: $pullRequestCountBy($author()) == 100\r\n        extra-actions:\r\n          - $commentOnce($sprintf("Way to go \ud83c\udf89 This is your 100th pull request!", [$author()]))\r\n\r\n  # This workflow validates that pull requests follow the conventional commits specification.\r\n  # This helps developers automatically generate changelogs.\r\n  # For more details, see https://www.conventionalcommits.org/en/v1.0.0/.\r\n  - name: check-conventional-commits\r\n    description: Validate that pull requests follow the conventional commits\r\n    always-run: true\r\n    if:\r\n      - rule: $isDraft() == false\r\n    then:\r\n      # Check commits messages against the conventional commits specification\r\n      - $commitLint()\r\n      # Check pull request title against the conventional commits specification.\r\n      - $titleLint()\r\n\r\n  # This workflow validates best practices for pull request management.\r\n  # This helps developers follow best practices.\r\n  - name: best-practices\r\n    description: Validate best practices for pull request management\r\n    always-run: true\r\n    if:\r\n      # Warn pull requests that do not have an associated GitHub issue.\r\n      - rule: $hasLinkedIssues() == false\r\n        extra-actions:\r\n          - $warn("Please link an issue to the pull request")\r\n      # Warn pull requests if their description is empty.\r\n      - rule: $description() == ""\r\n        extra-actions:\r\n          - $warn("Please provide a description for the pull request")\r\n      # Warn pull request do not have a clean linear history.\r\n      - rule: $hasLinearHistory() == false\r\n        extra-actions:\r\n          - $warn("Please rebase your pull request on the latest changes")\r\n\r\n  # This workflow labels pull requests based on the total number of lines changed.\r\n  # This helps pick pull requests based on their size and to incentivize small pull requests.\r\n  - name: size-labeling\r\n    description: Label pull request based on the number of lines changed\r\n    always-run: true\r\n    if:\r\n      - rule: $size() < 100\r\n        extra-actions:\r\n          - $removeLabels(["medium", "large"])\r\n          - $addLabel("small")\r\n      - rule: $size() >= 100 && $size() < 300\r\n        extra-actions:\r\n          - $removeLabels(["small", "large"])\r\n          - $addLabel("medium")\r\n      - rule: $size() >= 300\r\n        extra-actions:\r\n          - $removeLabels(["small", "medium"])\r\n          - $addLabel("large")\r\n\r\n  # This workflow assigns a random reviewer to pull requests.\r\n  # This helps guarantee that most pull requests are reviewed by at least one person.\r\n  - name: reviewer-assignment\r\n    description: Assign a reviewer to pull requests\r\n    always-run: true\r\n    if:\r\n      # Automatically assign a random reviewer when the pull request is ready for review;\r\n      - rule: $isDraft() == false\r\n        extra-actions:\r\n          - $assignRandomReviewer()\r\n\r\n  # This workflow signals pull requests waiting for reviews.\r\n  # This helps guarantee that pull requests are reviewed and approved by at least one person.\r\n  - name: check-approvals\r\n    description: Check that pull requests have the required number of approvals\r\n    always-run: true\r\n    if:\r\n      # Label pull requests with `waiting-for-review` if there are no approvals;\r\n      - rule: $isDraft() == false && $approvalsCount() < 1\r\n        extra-actions:\r\n          - $addLabel("waiting-for-review")\r\n\r\n  # This workflow labels pull requests based on the pull request change type.\r\n  # This helps pick pull requests based on their change type.\r\n  - name: change-type-labelling\r\n    description: Label pull requests based on the type of changes\r\n    always-run: true\r\n    if:\r\n      # Label pull requests with `docs` if they only modify Markdown or txt files.\r\n      - rule: $hasFileExtensions([".md", ".txt"])\r\n        extra-actions:\r\n          - $addLabel("docs")\r\n      # Label pull requests with `infra` if they modify Terraform files.\r\n      - rule: $hasFileExtensions([".tf"])\r\n        extra-actions:\r\n          - $addLabel("infra")\r\n      # Label pull requests with `dependencies` if they only modify `package.json` and `package.lock` files.\r\n      - rule: $hasFileExtensions(["package.json", "package-lock.json"])\r\n        extra-actions:\r\n          - $addLabel("dependencies")\r\n\r\n  # This workflow validates that pull requests do not contain changes to the license.\r\n  # This helps avoid unwanted license modifications.\r\n  - name: license-validation\r\n    description: Validate that licenses are not modified\r\n    always-run: true\r\n    if:\r\n      # Fail Reviewpad check on pull requests that modify any LICENSE;\r\n      - rule: $hasFilePattern("**/LICENSE*")\r\n        extra-actions:\r\n          - $fail("License files cannot be modified")\r\n'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reviewpad Installation - Step 3",src:n(5148).Z,width:"2048",height:"1536"})),(0,i.kt)("p",null,"That's it! \ud83c\udf89"),(0,i.kt)("p",null,"Reviewpad will run on every pull request and follow the workflows defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc49 Don't forget to commit and push the ",(0,i.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Now that you have configured Reviewpad you can start using it to automate your pull request process."),(0,i.kt)("p",null,"Have a look at the ",(0,i.kt)("a",{parentName:"p",href:"../use-cases"},"use cases")," to see how Reviewpad can help you."),(0,i.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,i.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}c.isMDXComponent=!0},5148:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/step3-e76e0a638105cbcc5b0ed1856c7dda65.gif"}}]);