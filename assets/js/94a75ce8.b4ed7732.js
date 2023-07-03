"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1417],{50232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={title:"Syntax",id:"syntax",slug:"syntax"},o=void 0,r={unversionedId:"guides/syntax",id:"guides/syntax",title:"Syntax",description:"A Reviewpad configuration file has the following shape:",source:"@site/docs/guides/syntax.md",sourceDirName:"guides",slug:"/guides/syntax",permalink:"/next/guides/syntax",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/syntax.md",tags:[],version:"current",frontMatter:{title:"Syntax",id:"syntax",slug:"syntax"},sidebar:"DocsSidebar",previous:{title:"Security",permalink:"/next/getting-started/security"},next:{title:"Semantics",permalink:"/next/guides/semantics"}},s={},p=[{value:"Metrics on merge",id:"metrics-on-merge",level:2},{value:"Example",id:"example",level:4},{value:"Extends",id:"extends",level:2},{value:"Example",id:"example-1",level:3},{value:"Label",id:"label",level:2},{value:"Example",id:"example-2",level:4},{value:"Group",id:"group",level:2},{value:"Group by enumeration",id:"group-by-enumeration",level:3},{value:"Example",id:"example-3",level:4},{value:"Group by filter",id:"group-by-filter",level:3},{value:"Example",id:"example-4",level:4},{value:"Rule",id:"rule",level:2},{value:"Example",id:"example-5",level:4},{value:"Workflow",id:"workflow",level:2},{value:"<code>run</code>",id:"workflow-run",level:3},{value:"Single action",id:"single-action",level:4},{value:"List of actions",id:"list-of-actions",level:4},{value:"Conditional actions",id:"conditional-actions",level:4},{value:"Nested conditional actions",id:"nested-conditional-actions",level:5},{value:"Example",id:"example-6",level:4},{value:"Pipeline",id:"pipeline",level:2},{value:"Example",id:"example-7",level:4}],d={toc:p},u="wrapper";function m(e){let{components:n,...l}=e;return(0,i.kt)(u,(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Reviewpad configuration file has the following shape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"metrics-on-merge: true | false\n\nextends:\n  - configuration_1\n  - configuration_2\n  ...\n  - configuration_N\n\nlabels:\n  label_1\n  label_2\n  ...\n  label_N\n\ngroups:\n  - group_1\n  - group_2\n  ...\n  - group_N\n\nrules:\n  - rule_1\n  - rule_2\n  ...\n  - rule_N\n\nworkflows:\n  - workflow_1\n  - workflow_2\n  ...\n  - workflow_N\n\npipelines:\n  - pipeline_1\n  - pipeline_2\n  ...\n  - pipeline_N\n")),(0,i.kt)("admonition",{title:"note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can check the latest formal version of the format ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/blob/main/latest/schema.json"},"here"),".")),(0,i.kt)("h2",{id:"metrics-on-merge"},"Metrics on merge"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics-on-merge")," property is a boolean flag that determines whether or not a metrics report should be added when a pull request is merged."),(0,i.kt)("p",null,"This property is optional and can be set to either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"By default, this flag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", so a report will not be added."),(0,i.kt)("p",null,"If the flag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the metrics report will include the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Coding Time"),": the duration between the first commit and the issuance of the pull request;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pickup Time"),": the duration between the issuance of the pull request and its first review;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Review Time"),": the duration between the first review and the merge of the pull request.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reviewpad metrics report",src:t(86537).Z,width:"927",height:"210"})),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"metrics-on-merge: true\n")),(0,i.kt)("h2",{id:"extends"},"Extends"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," property allows you to extend other Reviewpad configurations by using their GitHub blob URLs (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml"),")."),(0,i.kt)("p",null,"This property is optional and can be set to a list of GitHub blob URLs."),(0,i.kt)("p",null,"Note that if the URL isn't a GitHub blob, an error will occur."),(0,i.kt)("p",null,"For more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," mechanism, please visit this ",(0,i.kt)("a",{parentName:"p",href:"/guides/extends"},"page"),"."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"extends:\n  - https://github.com/reviewpad/.github/blob/main/reviewpad-models/common.yml\n")),(0,i.kt)("h2",{id:"label"},"Label"),(0,i.kt)("p",null,"A label specifies a label that can be used as an argument to the label-related functions."),(0,i.kt)("p",null,"The structure of a label is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"LABEL-ID:\n  name: STRING [OPTIONAL]\n  description: STRING [OPTIONAL]\n  color: STRING [OPTIONAL]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," is used to reference the label in other entities, and if no name is provided, the ",(0,i.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," is considered the name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","[OPTIONAL]"," is the name of the label as seen on GitHub."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a short description of the label. Must be 100 characters or fewer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," ","[OPTIONAL]"," is the ",(0,i.kt)("a",{parentName:"li",href:"https://www.color-hex.com/"},"hexadecimal color code")," for the label, with or without the leading ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),".")),(0,i.kt)("p",null,"If the label does not exist in the repository, it will be created."),(0,i.kt)("p",null,"If the label already exists in the repository and the description or the color is set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file, then both the description and the color will be updated based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"labels:\n  small:\n    name: small # optional\n    description: Defines a small pull request # optional\n    color: d2697a # optional\n")),(0,i.kt)("h2",{id:"group"},"Group"),(0,i.kt)("p",null,"A group specifies a list of entities. At the moment, we only support GitHub users."),(0,i.kt)("p",null,"There are two ways to specify a group:"),(0,i.kt)("h3",{id:"group-by-enumeration"},"Group by enumeration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers [OPTIONAL]\n  spec: "[LIST OF GITHUB USERS]"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," ","[OPTIONAL]"," of group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino")," specifications.")),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: seniors\n    description: project seniors # optional\n    kind: developers # optional\n    spec: '[\"peter\"]'\n")),(0,i.kt)("h3",{id:"group-by-filter"},"Group by filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers\n  type: filter\n  param: VARIABLE-NAME\n  where: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," of group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," with filter specifies that we will require a ",(0,i.kt)("em",{parentName:"li"},"param")," and a boolean ",(0,i.kt)("em",{parentName:"li"},"spec"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"param")," declares the name of a variable representing a single developer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"where")," is an ",(0,i.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino")," boolean expression that uses the ",(0,i.kt)("em",{parentName:"li"},"param")," variable to define a condition on which developers should be part of the group.")),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: new-joiners\n    description: Groups of developers that have created less than 10 pull requests # optional\n    kind: developers\n    type: filter\n    param: dev\n    where: $pullRequestCountBy($dev) < 10\n")),(0,i.kt)("h2",{id:"rule"},"Rule"),(0,i.kt)("p",null,"A Reviewpad rule specifies a boolean condition on a pull request or issue."),(0,i.kt)("p",null,"The structure of a rule is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  kind: [patch | author] [OPTIONAL]\n  description: STRING [OPTIONAL]\n  spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a rule is used to reference it in other rules and workflows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," ","[OPTIONAL]"," of a rule can be either ",(0,i.kt)("em",{parentName:"li"},"patch")," or ",(0,i.kt)("em",{parentName:"li"},"author.")," The kind is related to different properties of pull requests that will be used in the evaluation of the ",(0,i.kt)("em",{parentName:"li"},"spec")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is a boolean expression in ",(0,i.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino"),".")),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"rules:\n  - name: small-change\n    kind: patch # optional\n    description: Checks if the pull request size is small # optional\n    spec: $size() < 30\n")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow")," is a specification of a list of actions to be executed if the pull request / issues ",(0,i.kt)("strong",{parentName:"p"},"satisfies")," any of the specified rules."),(0,i.kt)("p",null,"The structure of a workflow is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  on:\n    - [pull_request | issue]\n  run:\n    - ACTION_1\n    - if: REF_TO_RULE_1 | INLINE_RULE_1\n      then: ACTION_2\n      else: ALTERNATIVE_ACTION_2\n    ...\n    - ACTION_N\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the workflows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the workflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"on")," ","[OPTIONAL]"," field is a list of GitHub entity types that should trigger the workflow. By default, the value is ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," field specifies the action or the list of actions to be executed in the workflow:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," field specifies the condition that should be satisfied for the ",(0,i.kt)("inlineCode",{parentName:"li"},"then")," field to run. The ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," field can be a reference to a rule by its name or an inline rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"then")," field defines the ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad action")," or the list of ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to run when ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," evaluates to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"else")," field defines the ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad action")," or the list of ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to run when ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," evaluates to false. This field is optional.")))),(0,i.kt)("h3",{id:"workflow-run"},(0,i.kt)("inlineCode",{parentName:"h3"},"run")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," field can be a single action or a list of actions. An action is an ",(0,i.kt)("a",{parentName:"p",href:"/guides/aladino/specification"},"Aladino")," expression to be executed."),(0,i.kt)("p",null,"We can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"if ... then ... else")," conditional actions to specify a list of actions to run depending on the evaluation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," field."),(0,i.kt)("h4",{id:"single-action"},"Single action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run: $addLabel("bug")\n')),(0,i.kt)("h4",{id:"list-of-actions"},"List of actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n')),(0,i.kt)("h4",{id:"conditional-actions"},"Conditional actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then: $addLabel("small")\n        else: $addLabel("large")\n')),(0,i.kt)("p",null,"The above configuration specifies one workflow called ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," which automatically labels pull requests with ",(0,i.kt)("inlineCode",{parentName:"p"},"bug")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation")," labels. If the pull request size is less than 100 then the ",(0,i.kt)("inlineCode",{parentName:"p"},"small")," label is added. Otherwise, a ",(0,i.kt)("inlineCode",{parentName:"p"},"large")," label is added."),(0,i.kt)("p",null,"For a pull request with size 150, the labels ",(0,i.kt)("inlineCode",{parentName:"p"},"bug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," will be added."),(0,i.kt)("h5",{id:"nested-conditional-actions"},"Nested conditional actions"),(0,i.kt)("p",null,"We can also nest conditional actions by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then: $addLabel("small")\n        else:\n          - if: $size() < 500\n            then: $addLabel("medium")\n            else: $addLabel("large")\n')),(0,i.kt)("p",null,"In the above example, for a pull request with size 150, the labels ",(0,i.kt)("inlineCode",{parentName:"p"},"bug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," will be added."),(0,i.kt)("p",null,"It is also important to note both the ",(0,i.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," fields can have a single action or a list of actions."),(0,i.kt)("h4",{id:"example-6"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then:\n          # Run a list of actions\n          - $addLabel("small")\n          - $info("The pull request size is small")\n        else:\n          # Run a list of actions\n          - $addLabel("large")\n          - if: $size() > 500\n            # Run a single action\n            then: $info("The pull request size is very large")\n          - $assignRandomReviewer()\n')),(0,i.kt)("h2",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"The structure of a pipeline is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  trigger: [STRING | RULE] [OPTIONAL]\n  stages:\n    - actions:\n      - ACTION_1\n      - ACTION_2\n      ...\n      - ACTION_N\n      until: [STRING | RULE] [OPTIONAL]\n    ...\n    - actions:\n      - ACTION_1\n      - ACTION_2\n      ...\n      - ACTION_N\n      until: [STRING | RULE] [OPTIONAL]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trigger")," ","[OPTIONAL]"," field is a rule that if true enables the pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stages")," is a list of stages of the pipeline. Each stage is a list of actions that will execute until the ",(0,i.kt)("inlineCode",{parentName:"li"},"until")," condition is true.")),(0,i.kt)("h4",{id:"example-7"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipelines:\n  - name: security-changes\n    trigger: $hasFilePattern("services/db/migrations/**")\n    stages:\n      - actions:\n          - $assignReviewer(["john"], "reviewpad")\n        until: $reviewerStatus("john") == "APPROVED"\n      - actions:\n          - $assignTeamReviewer(["security"])\n')),(0,i.kt)("p",null,"This configuration specifies one pipeline called ",(0,i.kt)("inlineCode",{parentName:"p"},"security-changes")," which is triggered when there are changes to the files in the database migration. After triggering the pipeline, the first stage will assign the reviewer ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," to the pull request and only when ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," approves the changes, the second stage will be triggered and the security team will be assigned to review the pull request."))}m.isMDXComponent=!0},86537:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/metrics-7b097c0a427104a608bd1bc2aa524417.png"}}]);