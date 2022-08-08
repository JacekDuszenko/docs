"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"Reviewpad Semantics",id:"reviewpad-semantics"},o=void 0,l={unversionedId:"reviewpad-file-specification/reviewpad-semantics",id:"reviewpad-file-specification/reviewpad-semantics",title:"Reviewpad Semantics",description:"A Reviewpad configuration file goes through a series of syntactic checks.",source:"@site/docs/reviewpad-file-specification/reviewpad-semantics.md",sourceDirName:"reviewpad-file-specification",slug:"/reviewpad-file-specification/reviewpad-semantics",permalink:"/maester/docs/next/reviewpad-file-specification/reviewpad-semantics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reviewpad-file-specification/reviewpad-semantics.md",tags:[],version:"current",frontMatter:{title:"Reviewpad Semantics",id:"reviewpad-semantics"},sidebar:"DocsSidebar",previous:{title:"Reviewpad Syntax",permalink:"/maester/docs/next/reviewpad-file-specification/reviewpad-syntax"},next:{title:"Aladino Specification",permalink:"/maester/docs/next/reviewpad-file-specification/aladino-specification/"}},s={},c=[{value:"Syntactic checks",id:"syntactic-checks",level:2},{value:"Unused rule",id:"unused-rule",level:3},{value:"Reference to undefined rule",id:"reference-to-undefined-rule",level:3},{value:"Interpreter",id:"interpreter",level:2},{value:"Environment",id:"environment",level:3},{value:"Design decisions",id:"design-decisions",level:3},{value:"Program generation",id:"program-generation",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Reviewpad configuration file goes through a series of syntactic checks."),(0,r.kt)("h2",{id:"syntactic-checks"},"Syntactic checks"),(0,r.kt)("h3",{id:"unused-rule"},"Unused rule"),(0,r.kt)("p",null,"Each rule specified in the ",(0,r.kt)("em",{parentName:"p"},"rules")," section must be used in a ",(0,r.kt)("em",{parentName:"p"},"workflow"),". The following file is not valid since ",(0,r.kt)("inlineCode",{parentName:"p"},"dummyRule")," is not used in any workflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  fastTrack:\n    name: "fast track"\n    description: Fast track mode\n    color: "76dbbe"\n\nrules:\n  - name: changesOneFile\n    kind: patch\n    description: Patch has more one file\n    spec: $fileCount == 1\n\n  - name: dummyRule\n    kind: patch\n    description: Simple dummy rule\n    spec: 1 == 1\n\nworkflows:\n  - name: fastTrack\n    description: Fast track of pull requests\n    if:\n      - rule: changesOneFile\n    then:\n      - $addLabel("fastTrack")\n')),(0,r.kt)("h3",{id:"reference-to-undefined-rule"},"Reference to undefined rule"),(0,r.kt)("p",null,"Each rule referenced in a ",(0,r.kt)("em",{parentName:"p"},"workflow")," must be defined in the rules section. The following file is not valid as ",(0,r.kt)("inlineCode",{parentName:"p"},"changesOneFile")," is not defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  fastTrack:\n    description: Fast track mode\n    color: "76dbbe"\n\nrules:\n\nworkflows:\n  - name: fastTrack\n    description: Fast track of pull requests\n    if:\n      - rule: changesOneFile\n    then:\n      - $addLabel("fastTrack")\n')),(0,r.kt)("h2",{id:"interpreter"},"Interpreter"),(0,r.kt)("p",null,"If a Reviewpad configuration file is syntactically valid, then it will be passed to the interpreter. "),(0,r.kt)("p",null,"This interpreter receives the file and an environment as input and if no error is found during the interpretation, it outputs an Aladino program to be executed."),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"The environment used by the interpreter is specified in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action/blob/main/action.yml"},"reviewpad/action"),": "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"GitHub repository (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"google/guava"),");"),(0,r.kt)("li",{parentName:"ol"},"Pull request number (e.g. for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/guava/pull/5929"},"https://github.com/google/guava/pull/5929")," it would be ",(0,r.kt)("inlineCode",{parentName:"li"},"5929"),");"),(0,r.kt)("li",{parentName:"ol"},"Access token. By default, it uses automatic token authentication. For more information read ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"),".")),(0,r.kt)("h3",{id:"design-decisions"},"Design decisions"),(0,r.kt)("p",null,"The task of the interpreter is to traverse the workflow list to find which (if any) workflow is enabled in the environment."),(0,r.kt)("p",null,"The workflows that are enabled and subsequently which program will be executed respect the following rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A workflow is enabled if and only if any of its rules evaluates to ",(0,r.kt)("strong",{parentName:"li"},"true.")),(0,r.kt)("li",{parentName:"ol"},"The order in which the workflows are specified determines the evaluation order."),(0,r.kt)("li",{parentName:"ol"},"The final program is built by iterating over all workflows in the specified list."),(0,r.kt)("li",{parentName:"ol"},"Only one workflow with ",(0,r.kt)("inlineCode",{parentName:"li"},"always-run: false")," is enabled per execution."),(0,r.kt)("li",{parentName:"ol"},"The evaluation of workflow is lazy, i.e. as soon as a workflow is activated, all the others are disregarded unless they have ",(0,r.kt)("inlineCode",{parentName:"li"},"alwaysRun: true"),".")),(0,r.kt)("p",null,"For example, consider the following pseudo Reviewpad file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v2.x\n\nrules:\n rule_1\n rule_2\n\nworkflows:\n  - name: workflow_1\n    description: Workflow 1\n    if:\n      - rule: rule_1\n    then:\n      - action_1\n\n  - name: workflow_2\n    description: Workflow 2\n    if:\n      - rule: rule_1\n      - rule: rule_2\n    then:\n      - action_2\n")),(0,r.kt)("p",null,"The interpreter starts by evaluating the rules of ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_1")," and only if all the rules are false it will go evaluate the rules of ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_2"),". At the moment, there is no caching between rules. "),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_1")," is true, then ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_1")," would be active. As a consequence ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_2")," would never be evaluated and therefore ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_2"),"."),(0,r.kt)("p",null,"The specification of the rules only contains read-only actions."),(0,r.kt)("h3",{id:"program-generation"},"Program generation"),(0,r.kt)("p",null,"As we mentioned, the interpreter will produce an ",(0,r.kt)("a",{parentName:"p",href:"./aladino-specification"},"Aladino")," program that will be executed.",(0,r.kt)("br",{parentName:"p"}),"\n","This program is simply a sequence of actions. "),(0,r.kt)("p",null,"We will use an example to illustrate how this program is generated. Assume that we have the following workflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: workflow_X\n    description: Active workflow\n    if:\n      - rule: rule_1\n        extra-actions:\n          - rule_1_action_1\n          - rule_1_action_2\n      - rule: rule_2\n        extra-actions:\n          - rule_2_action_1\n      - rule: rule_3\n      - rule: rule_4\n        extra-actions:\n          - rule_4_action_1\n    then:\n      - gen_action_1\n      - gen_action_2\n")),(0,r.kt)("p",null,"Assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_4")," evaluate to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rule_2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"It follows that ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_X")," is active. The final program is generated by concatenating the general actions of the workflow with the extra actions of each enabled rule."),(0,r.kt)("p",null,"In this case this would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"gen_action_1\ngen_action_2\nrule_1_action_1\nrule_1_action_2\nrule_4_action_1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The order in which both workflow and rules are specified matters. This is similar to any programming language where the order of statements matters.")))}u.isMDXComponent=!0}}]);