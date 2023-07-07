"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9499],{91344:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={title:"Merge Protection",id:"merge-protection",slug:"merge-protection"},s="Merge Protection",r={unversionedId:"guides/merge-protection",id:"guides/merge-protection",title:"Merge Protection",description:"Reviewpad provides a robust merge protection mechanism. This mechanism essentially allows you to prevent the merging of a Pull Request under certain conditions. For instance:",source:"@site/docs/guides/merge-protection.md",sourceDirName:"guides",slug:"/guides/merge-protection",permalink:"/next/guides/merge-protection",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/merge-protection.md",tags:[],version:"current",frontMatter:{title:"Merge Protection",id:"merge-protection",slug:"merge-protection"},sidebar:"DocsSidebar",previous:{title:"Extends",permalink:"/next/guides/extends"},next:{title:"Message Report",permalink:"/next/guides/message-report"}},c={},l=[{value:"Configuration",id:"configuration",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge-protection"},"Merge Protection"),(0,a.kt)("p",null,"Reviewpad provides a robust merge protection mechanism. This mechanism essentially allows you to prevent the merging of a Pull Request under certain conditions. For instance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A database migration script has been modified but lacks approval from the DBA team."),(0,a.kt)("li",{parentName:"ul"},"The commit messages do not adhere to the conventional commits specification."),(0,a.kt)("li",{parentName:"ul"},"A 'critical' annotated class has been modified but lacks approval from the tech lead."),(0,a.kt)("li",{parentName:"ul"},"The author of the PR is an external contributor and doesn't have approval from the 'safety' team.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure this merge protection mechanism, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up a GitHub branch protection rule to prevent merging as long as the Reviewpad status is not passed (green).\n",(0,a.kt)("img",{alt:"Configure Status Check",src:i(55557).Z,width:"786",height:"641"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Invoke the ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins/#failCheckStatus"},(0,a.kt)("inlineCode",{parentName:"a"},"failCheckStatus"))," built-in to turn the Reviewpad status to failed (red). Note that this built-in doesn't halt the execution of Reviewpad and can be invoked multiple times to accumulate reasons for blocking the merge.\nFor instance, this is how to fail the Reviewpad status when the head branch name doesn't comply with a naming convention:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  - name: Merge Protection when the branch name doesn\'t comply with naming convention\n    run:\n      - if: $matchString("(fix|feat|docs)/.+", $head()) == false\n        then: $failCheckStatus($sprintf("The head branch %s must start either with fix/, feat/ or docs/", [$head()]))\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'After Reviewpad execution completes, if the Reviewpad status is red, the merge button is disabled and the reasons for failure can be accessed by clicking on the "Details" link:')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Merge Protection",src:i(88879).Z,width:"1988",height:"652"}),"\n",(0,a.kt)("img",{alt:"Reviewpad Failure Details",src:i(15290).Z,width:"1842",height:"296"})),(0,a.kt)("p",null,"Once you have this configuration set up, you can use the ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins/#failCheckStatus"},(0,a.kt)("inlineCode",{parentName:"a"},"failCheckStatus"))," built-in in any workflow to establish comprehensive merge protection."))}u.isMDXComponent=!0},55557:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/configure-status-check-7788fc5e69c3517ccd0ae4523c48ec0c.png"},88879:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/merge-protection-5f95fc471bcd0c1502709061cefeb232.png"},15290:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/reviewpad-failed-453d0da4511322f9ec8b9b1838e03f5a.png"}}]);