"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[1468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Reviewpad Syntax",id:"reviewpad-syntax"},r=void 0,o={unversionedId:"reviewpad-file-specification/reviewpad-syntax",id:"version-3.0.1/reviewpad-file-specification/reviewpad-syntax",title:"Reviewpad Syntax",description:"A Reviewpad configuration file has the following shape:",source:"@site/versioned_docs/version-3.0.1/reviewpad-file-specification/reviewpad-syntax.md",sourceDirName:"reviewpad-file-specification",slug:"/reviewpad-file-specification/reviewpad-syntax",permalink:"/maester/docs/reviewpad-file-specification/reviewpad-syntax",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/reviewpad-file-specification/reviewpad-syntax.md",tags:[],version:"3.0.1",frontMatter:{title:"Reviewpad Syntax",id:"reviewpad-syntax"},sidebar:"DocsSidebar",previous:{title:"Introduction to Reviewpad",permalink:"/maester/docs/reviewpad-file-specification/introduction-to-reviewpad"},next:{title:"Reviewpad Semantics",permalink:"/maester/docs/reviewpad-file-specification/reviewpad-semantics"}},s={},p=[{value:"API Version",id:"api-version",level:2},{value:"Edition",id:"edition",level:2},{value:"Mode",id:"mode",level:2},{value:"Ignore errors",id:"ignore-errors",level:2},{value:"Label",id:"label",level:2},{value:"Group",id:"group",level:2},{value:"Group By Enumeration",id:"group-by-enumeration",level:3},{value:"Group By Filter",id:"group-by-filter",level:3},{value:"Rule",id:"rule",level:2},{value:"Workflow",id:"workflow",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Reviewpad configuration file has the following shape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v2.x\n\nedition: EDITION\nmode: MODE\nignore-errors: IGNORE_ERRORS\n\nlabels:\n label_1\n label_2\n ...\n label_N\n\ngroups:\n  group_1\n  group_2\n  ...\n  group_N\n\nrules:\n  rule_1\n  rule_2\n  ...\n  rule_N\n\nworkflows:\n  - workflow_1\n  - workflow_2\n  ...\n  - workflow_N\n")),(0,i.kt)("p",null,"You can see the latest formal version of the format ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/blob/bf08b1000ca37a941c5d7533499f575be205c2db/latest/schema.json"},"here"),"."),(0,i.kt)("p",null,"If you use VSCode, we recommend that you ",(0,i.kt)("a",{parentName:"p",href:"../tooling/vscode-reviewpad-yaml-schema"},"setup yaml.schemas")," to enjoy syntax checking and auto-completion."),(0,i.kt)("p",null,"The central concept in this specification is the ",(0,i.kt)("strong",{parentName:"p"},"workflow"),". "),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow")," is a specification of a list of actions to be executed if the pull request satisfies any of the rules in its specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example. Automated labelling of pull requests")),(0,i.kt)("p",null,"Consider the following ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    description: Pull requests with less than 90 LOC\n    color: "f15d22"\n\nrules:\n  - name: isSmallPatch\n    kind: patch\n    description: Patch has less than 90 LOC\n    spec: $size() < 90\n\nworkflows:\n  - name: labelSmall\n    description: Label small pull requests\n    if:\n      - rule: isSmallPatch\n    then:\n      - $addLabel("small")\n')),(0,i.kt)("p",null,"This configuration file specifies one workflow called ",(0,i.kt)("inlineCode",{parentName:"p"},"labelSmall")," which automatically labels a pull request with ",(0,i.kt)("em",{parentName:"p"},"small")," if it changes less than 90 lines of code."),(0,i.kt)("h2",{id:"api-version"},"API Version"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"api-version")," property is the version of Reviewpad specification format. The version is necessary so the the format can be evolved, and the field is used for the parser to know how to interpret the content."),(0,i.kt)("h2",{id:"edition"},"Edition"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"edition")," property is a flag that allows you to access different capabilities of Reviewpad. We currently support the ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"professional")," editions. The difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," edition is completely open-source and the ",(0,i.kt)("inlineCode",{parentName:"p"},"professional")," edition contains closed sourced code for certain built-ins. At the moment, they are both free so we recommend the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"professional")," edition by default."),(0,i.kt)("h2",{id:"mode"},"Mode"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," property is a flag that allows you to enable or disable a report of Reviewpad as a pull request comment. By default, Reviewpad runs on ",(0,i.kt)("inlineCode",{parentName:"p"},"silent")," mode. However, you can choose to use ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose")," mode and Reviewpad will comment on the pull request with the execution results."),(0,i.kt)("h2",{id:"ignore-errors"},"Ignore errors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore-errors")," property is a flag that allows you to specify if the GitHub action should ignore execution errors. By default, this flag is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," which means the action will fail if an error is raised."),(0,i.kt)("h2",{id:"label"},"Label"),(0,i.kt)("p",null,"A label specifies a label that can be used as an argument to the label related functions. "),(0,i.kt)("p",null,"The structure of a label is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"LABEL-ID:\n  name: STRING [OPTIONAL]\n  description: STRING [OPTIONAL]\n  color: STRING [OPTIONAL] \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID")," of a label is used to reference it in other entities. If no ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," is provided, then the ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," is considered the ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is the name of the label as seen on GitHub."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," is a short description of the label. Must be 100 characters or fewer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," is the ",(0,i.kt)("a",{parentName:"li",href:"https://www.color-hex.com/"},"hexadecimal color code")," for the label, without the leading #.")),(0,i.kt)("p",null,"If the label does not exist in the repository, it will be created. If it already exists in the repository, no action will be taken."),(0,i.kt)("h2",{id:"group"},"Group"),(0,i.kt)("p",null,"A group specifies a list of entities. At the moment, we only support GitHub users."),(0,i.kt)("p",null,"There are two ways to specify a group:"),(0,i.kt)("h3",{id:"group-by-enumeration"},"Group By Enumeration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n   description: STRING\n   kind: developers\n   spec: '[LIST OF GITHUB USERS]'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," of a group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," is a string that can be used to provide more details about the group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is an ",(0,i.kt)("a",{parentName:"li",href:"./aladino-specification"},"Aladino")," array.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Example. Group by Enumeration ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: groupWithMarcelo\n   description: The group composed of marcelosousa\n   kind: developers\n   spec: '[\"marcelosousa\"]'\n")),(0,i.kt)("h3",{id:"group-by-filter"},"Group By Filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n   description: STRING\n   kind: developers\n   type: filter\n   param: VARIABLE\n   spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," of a group can only be ",(0,i.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," with filter specifies that we will require a ",(0,i.kt)("em",{parentName:"li"},"param")," and a boolean ",(0,i.kt)("em",{parentName:"li"},"spec"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"param")," declares the name of a variable representing a single developer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is an ",(0,i.kt)("a",{parentName:"li",href:"./aladino-specification"},"Aladino")," boolean expression that uses the ",(0,i.kt)("em",{parentName:"li"},"param")," variable to define a condition on which developers should be part of the group.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Example. Group by Filter ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: newJoiners\n   description: Group of devs that have created less than 10 PRs\n   kind: developers\n   type: filter\n   param: dev\n   where: $totalCreatedPRs($dev) < 10\n")),(0,i.kt)("h2",{id:"rule"},"Rule"),(0,i.kt)("p",null,"A Reviewpad rule specifies a boolean condition on a pull request. "),(0,i.kt)("p",null,"The structure of a rule is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n   kind: [patch | author]\n   description: STRING\n   spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," of a rule is used to reference it in other rules and workflow. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind")," of a rule can be either ",(0,i.kt)("em",{parentName:"li"},"patch")," or ",(0,i.kt)("em",{parentName:"li"},"author.")," The kind is related to different properties of pull requests that will be used in the evaluation of the ",(0,i.kt)("em",{parentName:"li"},"spec")," field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," is a string that can be used to provide more details about the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is a boolean expression in ",(0,i.kt)("a",{parentName:"li",href:"./aladino-specification"},"Aladino"),".")),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"The structure of a workflow is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING\n  always-run: BOOLEAN\n  if:\n    - rule: REF_TO_RULE_1\n      extra-actions: [OPTIONAL]\n        - ACTION_1\n        - ACTION_2\n        ...\n        - ACTION_N\n    ...\n    - rule: REF_TO_RULE_N\n  then: [OPTIONAL]\n    - ACTION_1\n    - ACTION_2\n    ...\n    - ACTION_N\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the workflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," is a string that can be used to provide more details about the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"always-run")," field is a boolean that specifies the workflow should always be checked or not. By default, this value is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if")," field specifies which rules should be checked. For each rule, we can also specify a list of ",(0,i.kt)("strong",{parentName:"li"},"extra actions")," that will be executed if this rule is activated by the pull request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"then")," field is a list of ",(0,i.kt)("a",{parentName:"li",href:"./aladino-specification/aladino-built-ins#actions"},"Aladino actions")," that should run.")))}u.isMDXComponent=!0}}]);