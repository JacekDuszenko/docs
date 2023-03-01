"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[202],{44823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=i(87462),n=(i(67294),i(3905)),a=i(90814);const s='api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: long-live\n    if:\n      # Verify if the pull request was created more than 10 days ago\n      - $createdAt() < 10 days ago\n    then:\n      - $info("This pull request is old. Please consider closing it.")\n',o='api-version: reviewpad.com/v3.x\n\nmode: verbose\n\nworkflows:\n  - name: validate-linked-issue\n    always-run: true\n    if:\n      - $hasLinkedIssues() == false\n    then:\n      - $info("This pull request does not have a linked issue")\n\n  - name: validate-description\n    always-run: true\n    if:\n      - $description() == ""\n    then:\n      - $warn("The description is empty. Please add more information!")\n      - $fail("Empty description")\n',l={title:"Reports",id:"reports",slug:"/guides/reports"},p=void 0,d={unversionedId:"guides/reports/reports",id:"version-Legacy/guides/reports/reports",title:"Reports",description:"Reviewpad provides reporting capabilities to help you create awareness around your pull requests and insights into the pull requests life cycle.",source:"@site/versioned_docs/version-Legacy/guides/reports/index.mdx",sourceDirName:"guides/reports",slug:"/guides/reports",permalink:"/Legacy/guides/reports",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/reports/index.mdx",tags:[],version:"Legacy",frontMatter:{title:"Reports",id:"reports",slug:"/guides/reports"},sidebar:"DocsSidebar",previous:{title:"Migrations",permalink:"/Legacy/guides/migrations"},next:{title:"Use cases",permalink:"/Legacy/use-cases"}},u={},c=[{value:"User-generated report",id:"user-generated-report",level:2},{value:"Example",id:"example",level:3},{value:"Executed actions report",id:"executed-actions-report",level:2},{value:"Example",id:"example-1",level:3},{value:"Metrics report",id:"metrics-report",level:2},{value:"Example",id:"example-2",level:3}],m={toc:c},h="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(h,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad provides reporting capabilities to help you create awareness around your pull requests and insights into the pull requests life cycle."),(0,n.kt)("p",null,"It offers different types of reports described below."),(0,n.kt)("h2",{id:"user-generated-report"},"User-generated report"),(0,n.kt)("p",null,"The first kind of report is the user-generated report created when using the built-ins ",(0,n.kt)("a",{parentName:"p",href:"./built-ins#info"},"info"),", ",(0,n.kt)("a",{parentName:"p",href:"./built-ins#warn"},"warn"),", and ",(0,n.kt)("a",{parentName:"p",href:"./built-ins#error"},"error")," in your Reviewpad file."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Here is an example of a Reviewpad file and the report generated when the pull request gets old."),(0,n.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad Info Report",src:i(82251).Z,width:"919",height:"190"})),(0,n.kt)("h2",{id:"executed-actions-report"},"Executed actions report"),(0,n.kt)("p",null,"The second type of report is the report generated by Reviewpad with the executed actions."),(0,n.kt)("p",null,"When Reviewpad runs, for each workflow it evaluates the workflow conditions and if the conditions are met it will execute the actions provided in the workflow and append the executed actions to the report. At the end of the run, Reviewpad will generate a report with all the executed actions."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This report is only generated if the ",(0,n.kt)("a",{parentName:"p",href:"./syntax/#mode"},"mode")," configuration in your Reviewpad file is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"verbose"))),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("p",null,"Here is an example of a Reviewpad file and the executed actions report generated if all the conditions are met."),(0,n.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},o),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad Executed Actions Report",src:i(95232).Z,width:"923",height:"495"})),(0,n.kt)("h2",{id:"metrics-report"},"Metrics report"),(0,n.kt)("p",null,"The last type of report is the metrics report, which is generated when a pull request is merged."),(0,n.kt)("p",null,"This report provides insights into the pull requests life cycle from the moment coding begins up to the time the pull request is merged."),(0,n.kt)("p",null,"This report contains the following metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Coding time"),": the time elapsed between the first commit and the creation of the pull request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pickup time"),": the time elapsed between the creation of the pull request and the submission of the first review."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Review time"),": the time elapsed between the submission of the first review and the merge of the pull request.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This report is only generated if the ",(0,n.kt)("a",{parentName:"p",href:"./syntax/#metrics-on-merge"},"metrics-on-merge")," property in your Reviewpad file is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("p",null,"Here is an example of a metrics report generated by Reviewpad when a pull request is merged."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad metrics report",src:i(86537).Z,width:"927",height:"210"})))}g.isMDXComponent=!0},95232:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/executed_actions-58c0f508c660e7d8915b050cd2966a4a.png"},82251:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/info-296c57d3d917a799ae9ed1971421e84f.png"},86537:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/metrics-7b097c0a427104a608bd1bc2aa524417.png"}}]);