"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8219],{99455:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(87462),s=(i(67294),i(3905)),o=i(90814);const r={title:"Blocking Merge",id:"blocking-merge",slug:"/use-cases/blocking-merge"},a=void 0,l={unversionedId:"use-cases/blocking-merge/blocking-merge",id:"version-3.24.0/use-cases/blocking-merge/blocking-merge",title:"Blocking Merge",description:"Reviewpad can be used to ensure pull requests are safely merged and follow the rules of our repository.",source:"@site/versioned_docs/version-3.24.0/use-cases/blocking-merge/index.mdx",sourceDirName:"use-cases/blocking-merge",slug:"/use-cases/blocking-merge",permalink:"/3.24.0/use-cases/blocking-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/blocking-merge/index.mdx",tags:[],version:"3.24.0",frontMatter:{title:"Blocking Merge",id:"blocking-merge",slug:"/use-cases/blocking-merge"},sidebar:"DocsSidebar",previous:{title:"Attention set",permalink:"/3.24.0/use-cases/attention-set"},next:{title:"Check issue description",permalink:"/3.24.0/use-cases/check-issue-description"}},c={},u=[{value:"Example",id:"example",level:2}],g={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Reviewpad can be used to ensure pull requests are safely merged and follow the rules of our repository."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"By taking advantage of ",(0,s.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"},"GitHub branch protection rules")," and status checks we can configure Reviewpad to safely block a pull request from being merged.")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Let's say we want to block merging pull requests that modify the license of our repository."),(0,s.kt)("p",null,"We can achieve this by adding a workflow to our Reviewpad that disables the merge button when the ",(0,s.kt)("inlineCode",{parentName:"p"},"LICENSE")," file is being modified on a pull request."),(0,s.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: unauthorized-license-workflow\n    description: Protect unauthorized modifications to the LICENSE\n    if:\n      - $hasFileName("LICENSE")\n    then:\n      - $disableMerge("Pull Requests should not change the LICENSE")\n'),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"disableMerge")," built-in Reviewpad will fail the check ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad merge gate")," and close the merge gate.")),(0,s.kt)("p",null,"After which we can configure a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"},"branch protection rule")," on our\nGitHub repository and add the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks"},"status check")," ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad merge gate")," to the list of required status checks."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Configure Status Check",src:i(55557).Z,width:"786",height:"641"})),(0,s.kt)("p",null,"With that in place, once a pull request tries to modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"LICENSE")," file in our repository, the merging ability will be blocked."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Merge button blocked",src:i(39670).Z,width:"1108",height:"414"})))}d.isMDXComponent=!0},55557:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/configure-status-check-658e98dbcc35b4f8bef821e5914efd81.png"},39670:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/merge-blocked-ca87b69b3269b8d5c41bf368e7789465.png"}}]);