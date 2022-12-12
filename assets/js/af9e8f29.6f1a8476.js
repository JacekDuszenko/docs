"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17394],{52991:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(67294),r=s(86010),n=s(52802),a=s(39960),o=s(13919),l=s(95999);const c="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:s}=e;return i.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},s)}function p(e){let{href:t,icon:s,title:n,description:a}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:n},s," ",n),a&&i.createElement("p",{className:(0,r.Z)("text--truncate",u),title:a},a))}function g(e){let{item:t}=e;const s=(0,n.Wl)(t);return s?i.createElement(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const s=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:s,title:t.label,description:null==r?void 0:r.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(w,{item:t});case"category":return i.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const s=(0,n.jA)();return i.createElement(h,{items:s.items,className:t})}function h(e){const{items:t,className:s}=e;if(!t)return i.createElement(f,e);const a=(0,n.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",s)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}},32034:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=s(87462),r=(s(67294),s(3905)),n=s(52991),a=s(52802);const o={id:"reviewer-assignment",slug:"/use-cases/reviewer-assignment",title:"Reviewer Assignment"},l=void 0,c={unversionedId:"use-cases/reviewer-assignment/reviewer-assignment",id:"version-3.10.0/use-cases/reviewer-assignment/reviewer-assignment",title:"Reviewer Assignment",description:"GitHub already provides code reviewer suggestions and the ability to use CODEOWNERS to automatically assign reviewers.",source:"@site/versioned_docs/version-3.10.0/use-cases/reviewer-assignment/reviewer-assignment.mdx",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/reviewer-assignment",permalink:"/3.10.0/use-cases/reviewer-assignment",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/reviewer-assignment.mdx",tags:[],version:"3.10.0",frontMatter:{id:"reviewer-assignment",slug:"/use-cases/reviewer-assignment",title:"Reviewer Assignment"},sidebar:"DocsSidebar",previous:{title:"Label pull requests with Git conflicts",permalink:"/3.10.0/use-cases/label-pull-requests-with-git-conflicts/label-pull-requests-with-git-conflicts"},next:{title:"Assign review to 3 developers",permalink:"/3.10.0/use-cases/assign-review-to-3-developers"}},m={},u=[],d={toc:u};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GitHub already provides code reviewer suggestions and the ability to use CODEOWNERS to automatically assign reviewers."),(0,r.kt)("p",null,"However, the code reviewer suggestion is still a manual process for developers and the CODEOWNERS feature is very limited:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You associate owners to files. For simple changes in those files or large files, CODEOWNERS can be extremely noisy. ",(0,r.kt)("inlineCode",{parentName:"li"},"reviewpad.yml")," files allow you to specify ownership at the semantic level and also based on the nature of the changes."),(0,r.kt)("li",{parentName:"ol"},"There can only exist a CODEOWNERS file per repository; as opposed, ",(0,r.kt)("inlineCode",{parentName:"li"},"reviewpad.yml")," files will be extensible and you will be able to import central configuration files."),(0,r.kt)("li",{parentName:"ol"},"Rules have precedence, so you need to understand the context of previous rules for a given rule. Reviewpad workflows allow you to specify when a ",(0,r.kt)("a",{parentName:"li",href:"/guides/syntax#workflow"},"workflow should always be")," considered regardless of the context.")),(0,r.kt)("p",null,"Out of the box, Reviewpad supports three actions to assign reviewers, ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},"assignReviewer"),", ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignteamreviewer"},"assignTeamReviewer")," and ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#assignrandomreviewer"},"assignRandomReviewer"),"."),(0,r.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);