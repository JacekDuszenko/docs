"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86597],{13194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),o=n(90814);const s={title:"Configuration",id:"configuration",slug:"configuration"},r=void 0,l={unversionedId:"getting-started/configuration",id:"version-3.24.0/getting-started/configuration",title:"Configuration",description:"If you have selected the installation option Only select repositories you don't need to follow this guide. Reviewpad will automatically create a pull request in the select repositories with the configuration file. You will need to merge the pull request to start using Reviewpad.",source:"@site/versioned_docs/version-3.24.0/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/3.24.0/getting-started/configuration",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/configuration.mdx",tags:[],version:"3.24.0",frontMatter:{title:"Configuration",id:"configuration",slug:"configuration"},sidebar:"DocsSidebar",previous:{title:"Installation",permalink:"/3.24.0/getting-started/installation"},next:{title:"Playground",permalink:"/3.24.0/getting-started/playground"}},u={},d=[{value:"Add <code>reviewpad.yml</code> to the root of your repository",id:"add-reviewpadyml-to-the-root-of-your-repository",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you have selected the installation option ",(0,a.kt)("inlineCode",{parentName:"p"},"Only select repositories")," you don't need to follow this guide. Reviewpad will automatically create a pull request in the select repositories with the configuration file. ",(0,a.kt)("strong",{parentName:"p"},"You will need to merge the pull request to start using Reviewpad."))),(0,a.kt)("p",null,"Now that you have installed Reviewpad it's time to configure it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Reviewpad configuration is a YAML file that defines the workflows that automate your pull request process.")),(0,a.kt)("p",null,"In this example we will add a configuration with some of the best practices for pull request reviews."),(0,a.kt)("h2",{id:"add-reviewpadyml-to-the-root-of-your-repository"},"Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that you will need to ",(0,a.kt)("strong",{parentName:"p"},"add a ",(0,a.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to each repository")," where you want to use Reviewpad.")),(0,a.kt)("p",null,"Reviewpad will look for a ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file in the root of your repository and follow the workflows defined in it."),(0,a.kt)("p",null,"Create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," in the root of your repository and add the following content:"),(0,a.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'# This file is used to configure Reviewpad.\n# The configuration is a proposal to help you get started.\n# You can use it as a starting point and customize it to your needs.\n# For more details see https://docs.reviewpad.com/guides/syntax.\n\n# Define the version of Reviewpad to be used.\napi-version: reviewpad.com/v3.x\n\n# Define the list of labels to be used by Reviewpad.\n# For more details see https://docs.reviewpad.com/guides/syntax#label.\nlabels:\n  small:\n    description: Pull request is small\n    color: "#76dbbe"\n  medium:\n    description: Pull request is medium\n    color: "#2986cc"\n  large:\n    description: Pull request is large\n    color: "#c90076"\n\n# Define the list of workflows to be run by Reviewpad.\n# A workflow is a list of actions that will be executed based on the defined rules.\n# For more details see https://docs.reviewpad.com/guides/syntax#workflow.\nworkflows:\n  # This workflow praises contributors on their pull request contributions.\n  # This helps contributors feel appreciated.\n  - name: praise-contributors-on-milestones\n    description: Praise contributors based on their contributions\n    always-run: true\n    if:\n      # Praise contributors on their first pull request.\n      - rule: $pullRequestCountBy($author()) == 1\n        extra-actions:\n          - $commentOnce($sprintf("Thank you @%s for this first contribution!", [$author()]))\n      # Praise contributors on their 100th pull request.\n      - rule: $pullRequestCountBy($author()) == 100\n        extra-actions:\n          - $commentOnce($sprintf("Way to go \ud83c\udf89 This is your 100th pull request!", [$author()]))\n\n  # This workflow validates that pull requests follow the conventional commits specification.\n  # This helps developers automatically generate changelogs.\n  # For more details, see https://www.conventionalcommits.org/en/v1.0.0/.\n  - name: check-conventional-commits\n    description: Validate that pull requests follow the conventional commits\n    always-run: true\n    if:\n      - rule: $isDraft() == false\n    then:\n      # Check commits messages against the conventional commits specification\n      - $commitLint()\n      # Check pull request title against the conventional commits specification.\n      - $titleLint()\n\n  # This workflow validates best practices for pull request management.\n  # This helps developers follow best practices.\n  - name: best-practices\n    description: Validate best practices for pull request management\n    always-run: true\n    if:\n      # Warn pull requests that do not have an associated GitHub issue.\n      - rule: $hasLinkedIssues() == false\n        extra-actions:\n          - $warn("Please link an issue to the pull request")\n      # Warn pull requests if their description is empty.\n      - rule: $description() == ""\n        extra-actions:\n          - $warn("Please provide a description for the pull request")\n      # Warn pull request do not have a clean linear history.\n      - rule: $hasLinearHistory() == false\n        extra-actions:\n          - $warn("Please rebase your pull request on the latest changes")\n\n  # This workflow labels pull requests based on the total number of lines changed.\n  # This helps pick pull requests based on their size and to incentivize small pull requests.\n  - name: size-labeling\n    description: Label pull request based on the number of lines changed\n    always-run: true\n    if:\n      - rule: $size() < 100\n        extra-actions:\n          - $removeLabels(["medium", "large"])\n          - $addLabel("small")\n      - rule: $size() >= 100 && $size() < 300\n        extra-actions:\n          - $removeLabels(["small", "large"])\n          - $addLabel("medium")\n      - rule: $size() >= 300\n        extra-actions:\n          - $removeLabels(["small", "medium"])\n          - $addLabel("large")\n\n  # This workflow assigns a random reviewer to pull requests.\n  # This helps guarantee that most pull requests are reviewed by at least one person.\n  - name: reviewer-assignment\n    description: Assign a reviewer to pull requests\n    always-run: true\n    if:\n      # Automatically assign a random reviewer when the pull request is ready for review;\n      - rule: $isDraft() == false\n        extra-actions:\n          - $assignRandomReviewer()\n\n  # This workflow signals pull requests waiting for reviews.\n  # This helps guarantee that pull requests are reviewed and approved by at least one person.\n  - name: check-approvals\n    description: Check that pull requests have the required number of approvals\n    always-run: true\n    if:\n      # Label pull requests with `waiting-for-review` if there are no approvals;\n      - rule: $isDraft() == false && $approvalsCount() < 1\n        extra-actions:\n          - $addLabel("waiting-for-review")\n\n  # This workflow labels pull requests based on the pull request change type.\n  # This helps pick pull requests based on their change type.\n  - name: change-type-labelling\n    description: Label pull requests based on the type of changes\n    always-run: true\n    if:\n      # Label pull requests with `docs` if they only modify Markdown or txt files.\n      - rule: $hasFileExtensions([".md", ".txt"])\n        extra-actions:\n          - $addLabel("docs")\n      # Label pull requests with `infra` if they modify Terraform files.\n      - rule: $hasFileExtensions([".tf"])\n        extra-actions:\n          - $addLabel("infra")\n      # Label pull requests with `dependencies` if they only modify `package.json` and `package.lock` files.\n      - rule: $hasFileExtensions(["package.json", "package-lock.json"])\n        extra-actions:\n          - $addLabel("dependencies")\n\n  # This workflow validates that pull requests do not contain changes to the license.\n  # This helps avoid unwanted license modifications.\n  - name: license-validation\n    description: Validate that licenses are not modified\n    always-run: true\n    if:\n      # Fail Reviewpad check on pull requests that modify any LICENSE;\n      - rule: $hasFilePattern("**/LICENSE*")\n        extra-actions:\n          - $fail("License files cannot be modified")\n'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reviewpad Installation - Step 3",src:n(65148).Z,width:"2048",height:"1536"})),(0,a.kt)("p",null,"That's it! \ud83c\udf89"),(0,a.kt)("p",null,"Reviewpad will run on every pull request and follow the workflows defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udc49 Don't forget to commit and push the ",(0,a.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Now that you have configured Reviewpad you can start using it to automate your pull request process."),(0,a.kt)("p",null,"Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"../use-cases"},"use cases")," to see how Reviewpad can help you."),(0,a.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,a.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}c.isMDXComponent=!0},65148:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/step3-e76e0a638105cbcc5b0ed1856c7dda65.gif"}}]);