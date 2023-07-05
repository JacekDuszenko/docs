"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9590],{58739:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294);function i(e){let{url:a}=e;return n.createElement("div",{style:{position:"relative",paddingBottom:"62.5%",height:0}},n.createElement("iframe",{src:a,frameBorder:0,allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}))}},57670:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(87462),i=(t(67294),t(3905)),l=t(58739);const o={title:"YAML Syntax",id:"syntax",slug:"syntax"},r=void 0,s={unversionedId:"guides/syntax",id:"guides/syntax",title:"YAML Syntax",description:"A Reviewpad configuration file has the following shape:",source:"@site/docs/guides/syntax.mdx",sourceDirName:"guides",slug:"/guides/syntax",permalink:"/next/guides/syntax",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/syntax.mdx",tags:[],version:"current",frontMatter:{title:"YAML Syntax",id:"syntax",slug:"syntax"},sidebar:"DocsSidebar",previous:{title:"Security",permalink:"/next/getting-started/security"},next:{title:"Aladino Language",permalink:"/next/guides/aladino-language"}},p={},d=[{value:"Metrics on merge",id:"metrics-on-merge",level:2},{value:"Example",id:"example",level:4},{value:"Extends",id:"extends",level:2},{value:"Example",id:"example-1",level:3},{value:"Label",id:"label",level:2},{value:"Example",id:"example-2",level:4},{value:"Group",id:"group",level:2},{value:"Group by enumeration",id:"group-by-enumeration",level:3},{value:"Example",id:"example-3",level:4},{value:"Group by filter",id:"group-by-filter",level:3},{value:"Example",id:"example-4",level:4},{value:"Dictionary",id:"dictionary",level:2},{value:"Example with Aladino string values",id:"example-with-aladino-string-values",level:4},{value:"Example with Aladino array values",id:"example-with-aladino-array-values",level:4},{value:"Rule",id:"rule",level:2},{value:"Example",id:"example-5",level:4},{value:"Workflow",id:"workflow",level:2},{value:"<code>run</code>",id:"workflow-run",level:3},{value:"Single action",id:"single-action",level:4},{value:"List of actions",id:"list-of-actions",level:4},{value:"Conditional actions",id:"conditional-actions",level:4},{value:"Nested conditional actions",id:"nested-conditional-actions",level:5},{value:"Example",id:"example-6",level:4},{value:"Loop over a group",id:"loop-over-a-group",level:4},{value:"Loop over a dictionary",id:"loop-over-a-dictionary",level:4},{value:"VSCode Reviewpad YAML schema",id:"vscode-reviewpad-yaml-schema",level:2}],u={toc:d},m="wrapper";function c(e){let{components:a,...o}=e;return(0,i.kt)(m,(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Reviewpad configuration file has the following shape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"metrics-on-merge: true | false\n\nextends:\n  - configuration_1\n  - configuration_2\n  ...\n  - configuration_N\n\nlabels:\n  label_1\n  label_2\n  ...\n  label_N\n\ngroups:\n  - group_1\n  - group_2\n  ...\n  - group_N\n\ndictionaries:\n  - dictionary_1\n  - dictionary_2\n  ...\n  - dictionary_N\n\nrules:\n  - rule_1\n  - rule_2\n  ...\n  - rule_N\n\nworkflows:\n  - workflow_1\n  - workflow_2\n  ...\n  - workflow_N\n")),(0,i.kt)("admonition",{title:"note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can check the latest formal version of the format ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/blob/main/latest/schema.json"},"here"),".")),(0,i.kt)("h2",{id:"metrics-on-merge"},"Metrics on merge"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics-on-merge")," property is a boolean flag that determines whether or not a metrics report should be added when a pull request is merged."),(0,i.kt)("p",null,"This property is optional and can be set to either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"By default, this flag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", so a report will not be added."),(0,i.kt)("p",null,"If the flag is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the metrics report will include the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Coding Time"),": the duration between the first commit and the issuance of the pull request;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pickup Time"),": the duration between the issuance of the pull request and its first review;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Review Time"),": the duration between the first review and the merge of the pull request.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reviewpad metrics report",src:t(86537).Z,width:"927",height:"210"})),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"metrics-on-merge: true\n")),(0,i.kt)("h2",{id:"extends"},"Extends"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," property allows you to extend other Reviewpad configurations by using their GitHub blob URLs (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml"),")."),(0,i.kt)("p",null,"This property is optional and can be set to a list of GitHub blob URLs."),(0,i.kt)("p",null,"Note that if the URL isn't a GitHub blob, an error will occur."),(0,i.kt)("p",null,"For more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," mechanism, please visit this ",(0,i.kt)("a",{parentName:"p",href:"/guides/extends"},"page"),"."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"extends:\n  - https://github.com/reviewpad/.github/blob/main/reviewpad-models/common.yml\n")),(0,i.kt)("h2",{id:"label"},"Label"),(0,i.kt)("p",null,"A label specifies a label that can be used as an argument to the label-related functions."),(0,i.kt)("p",null,"The structure of a label is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"LABEL-ID:\n  name: STRING [OPTIONAL]\n  description: STRING [OPTIONAL]\n  color: STRING [OPTIONAL]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," is used to reference the label in other entities, and if no name is provided, the ",(0,i.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," is considered the name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","[OPTIONAL]"," is the name of the label as seen on GitHub."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a short description of the label. Must be 100 characters or fewer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," ","[OPTIONAL]"," is the ",(0,i.kt)("a",{parentName:"li",href:"https://www.color-hex.com/"},"hexadecimal color code")," for the label, with or without the leading ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),".")),(0,i.kt)("p",null,"If the label does not exist in the repository, it will be created."),(0,i.kt)("p",null,"If the label already exists in the repository and the description or the color is set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file, then both the description and the color will be updated based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"labels:\n  small:\n    name: small # optional\n    description: Defines a small pull request # optional\n    color: d2697a # optional\n")),(0,i.kt)("h2",{id:"group"},"Group"),(0,i.kt)("p",null,"A group specifies a list of entities. At the moment, we only support GitHub users."),(0,i.kt)("p",null,"There are two ways to specify a group:"),(0,i.kt)("h3",{id:"group-by-enumeration"},"Group by enumeration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers [OPTIONAL]\n  spec: "[LIST OF GITHUB USERS]"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," ","[OPTIONAL]"," of group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"aladino-language"},"Aladino")," specifications.")),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: seniors\n    description: project seniors # optional\n    kind: developers # optional\n    spec: '[\"peter\"]'\n")),(0,i.kt)("h3",{id:"group-by-filter"},"Group by filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers\n  type: filter\n  param: VARIABLE-NAME\n  where: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," of group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," with filter specifies that we will require a ",(0,i.kt)("em",{parentName:"li"},"param")," and a boolean ",(0,i.kt)("em",{parentName:"li"},"spec"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"param")," declares the name of a variable representing a single developer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"where")," is an ",(0,i.kt)("a",{parentName:"li",href:"aladino-language"},"Aladino")," boolean expression that uses the ",(0,i.kt)("em",{parentName:"li"},"param")," variable to define a condition on which developers should be part of the group.")),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: new-joiners\n    description: Groups of developers that have created less than 10 pull requests # optional\n    kind: developers\n    type: filter\n    param: dev\n    where: $pullRequestCountBy($dev) < 10\n")),(0,i.kt)("h2",{id:"dictionary"},"Dictionary"),(0,i.kt)("p",null,"A dictionary represents a structured list of key/value pairs, specified as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  spec:\n    key1: value1\n    key2: value2\n    ...\n    keyn: valuen\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a dictionary is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is a list of YAML key/value pairs. Each key and value should be enclosed in single quotes, and the value should be an Aladino expression, typically either a string or an array.")),(0,i.kt)("h4",{id:"example-with-aladino-string-values"},"Example with Aladino string values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dictionaries:\n  - name: label-per-file-path\n    description: Labels to apply based on the path of the touched files # optional\n    spec:\n      '**/authentication/**': '\"authentication\"'\n      '**/order/**': '\"order\"'\n      '**/api/**': '\"api\"'\n      'LICENSE': '\"license\"'\n      '.github/workflow/**': '\"ops\"'\n")),(0,i.kt)("admonition",{title:"note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using Aladino string values in dictionaries, ensure values are enclosed in both double quotes and single quotes..")),(0,i.kt)("h4",{id:"example-with-aladino-array-values"},"Example with Aladino array values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dictionaries:\n  - name: reviewing-teams-per-file-path\n    description: Teams to involve in the review process based on the path of the touched files # optional\n    spec:\n      '**/authentication/**': '[\"security-team\", \"developers\"]'\n      '**/db/**': '[\"dba-team\", \"developers\"]'\n      '.github/workflow/**': '[\"devops-team\"]'\n")),(0,i.kt)("h2",{id:"rule"},"Rule"),(0,i.kt)("p",null,"A Reviewpad rule specifies a boolean condition on a pull request or issue."),(0,i.kt)("p",null,"The structure of a rule is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  kind: [patch | author] [OPTIONAL]\n  description: STRING [OPTIONAL]\n  spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a rule is used to reference it in other rules and workflows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," ","[OPTIONAL]"," of a rule can be either ",(0,i.kt)("em",{parentName:"li"},"patch")," or ",(0,i.kt)("em",{parentName:"li"},"author.")," The kind is related to different properties of pull requests that will be used in the evaluation of the ",(0,i.kt)("em",{parentName:"li"},"spec")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is a boolean expression in ",(0,i.kt)("a",{parentName:"li",href:"aladino-language"},"Aladino"),".")),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"rules:\n  - name: small-change\n    kind: patch # optional\n    description: Checks if the pull request size is small # optional\n    spec: $size() < 30\n")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow")," is a specification of a list of actions to be executed if the pull request / issues ",(0,i.kt)("strong",{parentName:"p"},"satisfies")," any of the specified rules."),(0,i.kt)("p",null,"The structure of a workflow is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  on:\n    - [pull_request | issue]\n  run:\n    - ACTION_1\n    ...\n    - if: REF_TO_RULE_1 | INLINE_RULE_1\n      then: ACTION_2\n      else: ALTERNATIVE_ACTION_2\n    ...\n    - forEach:\n        key: KEY_IDENTIFIER [ONLY WITH DICTIONARY]\n        value: VALUE_IDENTIFIER\n        in: REF_TO_GROUP | REF_TO_DICTIONARY\n        do: ACTION_3\n    ...\n    - ACTION_N\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the workflows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the workflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"on")," ","[OPTIONAL]"," field is a list of GitHub entity types that should trigger the workflow. By default, the value is ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," field specifies the action or the list of actions to be executed in the workflow:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," field specifies the condition that should be satisfied for the ",(0,i.kt)("inlineCode",{parentName:"li"},"then")," field to run. The ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," field can be a reference to a rule by its name or an inline rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"then")," field defines the ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad action")," or the list of ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to run when ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," evaluates to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"else")," field defines the ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad action")," or the list of ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to run when ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," evaluates to false. This field is optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"forEach")," field initiates a loop over either a group or a dictionary, as defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"in")," field.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," field specifies the Aladino identifer that can used within the nested ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to access the key of the current key/value pair. This field should be specified only when iterating over a dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," field specifies the Aladino identifer that can used withing the nested ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to access to value of the current element."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in")," field specifies the reference to the group or dictionary over which iteration occurs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"do")," field defines the ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad action")," or the list of ",(0,i.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," to be executed for each element of the group or dictionary.")))))),(0,i.kt)("h3",{id:"workflow-run"},(0,i.kt)("inlineCode",{parentName:"h3"},"run")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," field can be a single action or a list of actions. An action is an ",(0,i.kt)("a",{parentName:"p",href:"aladino-language"},"Aladino")," expression to be executed."),(0,i.kt)("p",null,"We can also use the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"if ... then ... else")," conditional actions to specify a list of actions to run depending on the evaluation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," field."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"forEach ... key ... value ... in ... do")," loop structure to iterate over a list of elements withing a group or dictionary, defining a list of actions to perform on each individual element.")),(0,i.kt)("h4",{id:"single-action"},"Single action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run: $addLabel("bug")\n')),(0,i.kt)("h4",{id:"list-of-actions"},"List of actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n')),(0,i.kt)("h4",{id:"conditional-actions"},"Conditional actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then: $addLabel("small")\n        else: $addLabel("large")\n')),(0,i.kt)("p",null,"The above configuration specifies one workflow called ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," which automatically labels pull requests with ",(0,i.kt)("inlineCode",{parentName:"p"},"bug")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation")," labels. If the pull request size is less than 100 then the ",(0,i.kt)("inlineCode",{parentName:"p"},"small")," label is added. Otherwise, a ",(0,i.kt)("inlineCode",{parentName:"p"},"large")," label is added."),(0,i.kt)("p",null,"For a pull request with size 150, the labels ",(0,i.kt)("inlineCode",{parentName:"p"},"bug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," will be added."),(0,i.kt)("h5",{id:"nested-conditional-actions"},"Nested conditional actions"),(0,i.kt)("p",null,"We can also nest conditional actions by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then: $addLabel("small")\n        else:\n          - if: $size() < 500\n            then: $addLabel("medium")\n            else: $addLabel("large")\n')),(0,i.kt)("p",null,"In the above example, for a pull request with size 150, the labels ",(0,i.kt)("inlineCode",{parentName:"p"},"bug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"documentation"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," will be added."),(0,i.kt)("p",null,"It is also important to note both the ",(0,i.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," fields can have a single action or a list of actions."),(0,i.kt)("h4",{id:"example-6"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'workflows:\n  - name: label\n    run:\n      - $addLabel("bug")\n      - $addLabel("documentation")\n      - if: $size() < 100\n        then:\n          # Run a list of actions\n          - $addLabel("small")\n          - $info("The pull request size is small")\n        else:\n          # Run a list of actions\n          - $addLabel("large")\n          - if: $size() > 500\n            # Run a single action\n            then: $info("The pull request size is very large")\n          - $assignRandomReviewer()\n')),(0,i.kt)("h4",{id:"loop-over-a-group"},"Loop over a group"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'groups:\n  - name: teams\n    spec: \'["team1", "team2", "team3"]\'\n\nworkflows:\n  - name: assign to the team of the author for review\n    run:\n      - if: \'!$isDraft()\'\n        then:\n          - forEach:\n              value: $team\n              in: $group("teams")\n              do:\n                - if: $isElementOf($author(), $team($team))\n                  then:\n                    - $addLabel($team)\n                    - $assignTeamReviewer([$team])\n')),(0,i.kt)("p",null,"The above configuration outlines a workflow that automatically assigns a pull request for review, selecting a reviewer from the same team as the author of the pull request. Concurrently, it applies the team's label."),(0,i.kt)("h4",{id:"loop-over-a-dictionary"},"Loop over a dictionary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"dictionaries:\n  - name: approval-team-per-file-path\n    spec:\n      '**/authentication/**': '\"security\"'\n      '**/db/**': '\"dba\"'\n      '.github/workflows/**': '\"devops\"'\n\nworkflows:\n  - name: assign for review based on touched files\n    run:\n      - if: '!$isDraft()'\n        then:\n          - forEach:\n              key: $filePattern\n              value: $team\n              in: $dictionary(\"approval-team-per-file-path\")\n              do:\n                - if: $hasFilePattern($filePattern)\n                  then:\n                    - $assignTeamReviewer([$team])\n")),(0,i.kt)("p",null,"The above configuration outlines a workflow that automatically assigns pull requests for review to certain teams based on the part of the code that has been modified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When database migration scripts are modified, the workflow involves the DBA team."),(0,i.kt)("li",{parentName:"ul"},"When the authentication layer is modified, the workflow involves the Security team."),(0,i.kt)("li",{parentName:"ul"},"When GitHub workflows configuration is modified, the workflow involves the OPS team.")),(0,i.kt)("h2",{id:"vscode-reviewpad-yaml-schema"},"VSCode Reviewpad YAML schema"),(0,i.kt)("p",null,"To minimize errors when editing Reviewpad files, you can set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," schema on VSCode."),(0,i.kt)("p",null,"You just need to download the latest JSON schema from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/tree/main"},"schemas/reviewpad")," and add the following settings to your VSCode workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Associate Reviewpad schema to reviewpad.(yml|yaml) files\n    "yaml.schemas": {\n        "https://raw.githubusercontent.com/reviewpad/schemas/main/latest/schema.json": [\n            "reviewpad.yml",\n            "reviewpad.yaml",\n        ]\n    },\n}\n')),(0,i.kt)("p",null,"Now, when you are editing you will be able to check if your Reviewpad file is syntactically correct, access the documentation and get auto-completion of certain fields."),(0,i.kt)(l.Z,{url:"https://www.loom.com/embed/5d10b9b6f9f4483b9820614da2f190ef",mdxType:"LoomVideo"}))}c.isMDXComponent=!0},86537:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/metrics-7b097c0a427104a608bd1bc2aa524417.png"}}]);