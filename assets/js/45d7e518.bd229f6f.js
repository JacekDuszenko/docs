"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{2926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={title:"Semantics",id:"semantics",slug:"semantics"},o=void 0,r={unversionedId:"guides/semantics",id:"version-v4/guides/semantics",title:"Semantics",description:"A Reviewpad configuration file goes through a series of syntactic checks.",source:"@site/versioned_docs/version-v4/guides/semantics.md",sourceDirName:"guides",slug:"/guides/semantics",permalink:"/guides/semantics",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/semantics.md",tags:[],version:"v4",frontMatter:{title:"Semantics",id:"semantics",slug:"semantics"},sidebar:"DocsSidebar",previous:{title:"Syntax",permalink:"/guides/syntax"},next:{title:"Built-ins",permalink:"/guides/built-ins"}},s={},p=[{value:"Syntactic checks",id:"syntactic-checks",level:2},{value:"Unused rule",id:"unused-rule",level:3},{value:"Reference to undefined rule",id:"reference-to-undefined-rule",level:3},{value:"Interpreter",id:"interpreter",level:2},{value:"Environment",id:"environment",level:3},{value:"Design decisions",id:"design-decisions",level:3},{value:"Program generation",id:"program-generation",level:3},{value:"Difference between <code>Workflows</code> and <code>Pipelines</code>",id:"difference-between-workflows-and-pipelines",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Reviewpad configuration file goes through a series of syntactic checks."),(0,a.kt)("h2",{id:"syntactic-checks"},"Syntactic checks"),(0,a.kt)("h3",{id:"unused-rule"},"Unused rule"),(0,a.kt)("p",null,"Each rule specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," section must be used in a ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow"),"."),(0,a.kt)("p",null,"The following file is not valid since ",(0,a.kt)("inlineCode",{parentName:"p"},"dummy-rule")," is not used in any workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n    fast-track:\n        color: 76dbbe\n\nrules:\n    - name: dummy-rule\n    spec: 1 == 1\n\nworkflows:\n    - name: fast-track\n    if:\n        - rule: $fileCount == 1\n    then:\n        - $addLabel("fast-track")\n')),(0,a.kt)("h3",{id:"reference-to-undefined-rule"},"Reference to undefined rule"),(0,a.kt)("p",null,"Each rule referenced in a ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," must be defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," section."),(0,a.kt)("p",null,"The following file is not valid as ",(0,a.kt)("inlineCode",{parentName:"p"},"changes-one-file")," is not defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n    fast-track:\n        color: 76dbbe\n\nrules:\n\nworkflows:\n    - name: fast-track\n    if:\n        - rule: changes-one-file\n    then:\n        - $addLabel("fast-track")\n')),(0,a.kt)("h2",{id:"interpreter"},"Interpreter"),(0,a.kt)("p",null,"If a Reviewpad configuration file is syntactically valid, then it will be passed to the interpreter."),(0,a.kt)("p",null,"This interpreter receives the file and an environment as input and, if no error is found during the interpretation, it outputs the program to be executed."),(0,a.kt)("h3",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The environment used by the interpreter is composed of the following elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GitHub repository (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"google/guava"),");"),(0,a.kt)("li",{parentName:"ol"},"The event that triggers the current run of Reviewpad;"),(0,a.kt)("li",{parentName:"ol"},"A pull request or issue that is impacted by the trigger event;"),(0,a.kt)("li",{parentName:"ol"},"Access token provided by GitHub App.")),(0,a.kt)("h3",{id:"design-decisions"},"Design decisions"),(0,a.kt)("p",null,"The task of the interpreter is to traverse the workflow list to find which (if any) ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," is enabled in the environment."),(0,a.kt)("p",null,"The program that will be executed respects the following rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow")," is enabled if and only if any of its rules evaluates to ",(0,a.kt)("strong",{parentName:"li"},"true.")),(0,a.kt)("li",{parentName:"ol"},"The order in which the workflows are specified determines the evaluation order."),(0,a.kt)("li",{parentName:"ol"},"The final program is built by iterating over all workflows in the specified list."),(0,a.kt)("li",{parentName:"ol"},"Only one ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"always-run: false")," is enabled per execution."),(0,a.kt)("li",{parentName:"ol"},"The evaluation of ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow")," is lazy, i.e. as soon as a ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow")," is activated, all the others are disregarded unless they have ",(0,a.kt)("inlineCode",{parentName:"li"},"always-run: true"),"."),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline")," is enabled if and only if the ",(0,a.kt)("inlineCode",{parentName:"li"},"trigger")," evaluates to ",(0,a.kt)("strong",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ol"},"Only the actions of one ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline")," will be executed.")),(0,a.kt)("p",null,"For example, consider the following pseudo Reviewpad file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rules:\n    rule_1\n    rule_2\n    ...\n    rule_5\n\nworkflows:\n    - name: workflow_1\n    description: Workflow 1 # optional\n    on: # optional\n        - pull_request\n    if:\n        - rule: rule_1\n    then:\n        - action_1\n\n    - name: workflow_2\n    description: Workflow 2 # optional\n    on: # optional\n        - issue\n        - pull_request\n    if:\n        - rule: rule_1\n        - rule: rule_2\n    then:\n        - action_2\n\npipelines:\n    - name: pipeline_1\n    description: Pipeline 1 # optional\n    trigger: rule_3 # optional\n    stages:\n        - actions:\n                - action_3\n                - action_4\n            until: rule_4 # optional\n        - actions:\n                - action_5\n            until: rule_5 # optional\n")),(0,a.kt)("p",null,"The interpreter starts by evaluating the rules of ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_1")," and only if all the rules are false it will go evaluate the rules of ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_2"),". At the moment, there is no caching between rules."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_1")," is true, then ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_1")," would be active. As a consequence, ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_2")," would never be evaluated and therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_2"),"."),(0,a.kt)("p",null,"The specification of the rules only contains read-only actions."),(0,a.kt)("p",null,"After evaluating the workflows, the interpreter moves to the evaluation of the pipelines."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_3")," is true, then ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline_1")," would be active. The interpreter then starts to evaluate the conditions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"until")," field for each stage sequentially until the evaluation of any of them is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"program-generation"},"Program generation"),(0,a.kt)("p",null,"As we mentioned, the interpreter will produce an ",(0,a.kt)("a",{parentName:"p",href:"./aladino/specification"},"Aladino")," program that will be executed.\nThis program is simply a sequence of actions."),(0,a.kt)("p",null,"We will use an example to illustrate how this program is generated. Assume that we have the following specification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rules:\n    rule_1\n    rule_2\n    ...\n    rule_5\n\nworkflows:\n    - name: workflow_X\n    if:\n        - rule: rule_1\n            extra-actions:\n                - rule_1_action_1\n                - rule_1_action_2\n        - rule: rule_2\n            extra-actions:\n                - rule_2_action_1\n        - rule: rule_3\n        - rule: rule_4\n            extra-actions:\n                - rule_4_action_1\n    then:\n        - gen_action_1\n        - gen_action_2\n\npipelines:\n    - name: pipeline_Y\n    trigger: rule_5\n    stages:\n        - actions:\n                - stage_1_action_1\n                - stage_2_action_2\n            until: rule_6\n        - actions:\n                - stage_2_action_1\n            until: rule_7\n")),(0,a.kt)("p",null,"Assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_5")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_6")," evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_7")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"It follows that ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline_Y")," are active."),(0,a.kt)("p",null,"The program is generated by concatenating the general actions of the workflow with the extra actions of each enabled rule\ntogether with the actions of the stage which the ",(0,a.kt)("inlineCode",{parentName:"p"},"until")," clause evaluates to false."),(0,a.kt)("p",null,"In this case, this would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"gen_action_1\ngen_action_2\nrule_1_action_1\nrule_1_action_2\nrule_4_action_1\nstage_2_action_1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: The order in which workflow, rules and pipelines are specified matters. This is similar to any programming language where the order of statements matters.")),(0,a.kt)("h3",{id:"difference-between-workflows-and-pipelines"},"Difference between ",(0,a.kt)("inlineCode",{parentName:"h3"},"Workflows")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"Pipelines")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," specify different behaviours."),(0,a.kt)("p",null,"While a ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," encodes a ",(0,a.kt)("inlineCode",{parentName:"p"},"if-then")," statement, a ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," encodes a choice."),(0,a.kt)("p",null,"In theory, we could specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," with just workflows where each ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," stage is one ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"pipelines:\n    - name: pipeline_1\n    trigger: initial-condition\n    stages:\n        - actions:\n                - ACTION_1\n            until: RULE_1\n        - actions:\n                - ACTION_2\n            until: RULE_2\n")),(0,a.kt)("p",null,"Could be encoded as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n    - name: pipeline_1_stage_1\n    always-run: true\n    if: initial-condition && !RULE_1\n    then:\n        - ACTION_1\n\n    - name: pipeline_1_stage_2\n    always-run: true\n    if: initial-condition && RULE_1 && !RULE_2\n    then:\n        - ACTION_2\n")),(0,a.kt)("p",null,"However there are two major disadvantages of this approach:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As the number of stages increases, the conditions become more and more unnecessary;"),(0,a.kt)("li",{parentName:"ol"},"Since the evaluation of rules is not cached it is possible for two stages to be enabled.\nIn the example above, assume that while we are evaluating ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline_1_stage_1"),", the ",(0,a.kt)("inlineCode",{parentName:"li"},"RULE_1")," is false.\nThis means that ",(0,a.kt)("inlineCode",{parentName:"li"},"ACTION_1")," will be added to the program; as we move to the second stage it could be\nthat the state of the issue/pull request changes in the code host in such a way that in the second\nevaluation of ",(0,a.kt)("inlineCode",{parentName:"li"},"RULE_1")," it is now true.")))}c.isMDXComponent=!0}}]);