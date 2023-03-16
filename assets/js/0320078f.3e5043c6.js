"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3298],{52991:(e,t,a)=>{a.d(t,{Z:()=>h});var s=a(67294),i=a(86010),n=a(52802),r=a(39960),m=a(13919),l=a(95999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:a}=e;return s.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",o.cardContainer)},a)}function p(e){let{href:t,icon:a,title:n,description:r}=e;return s.createElement(c,{href:t},s.createElement("h2",{className:(0,i.Z)("text--truncate",o.cardTitle),title:n},a," ",n),r&&s.createElement("p",{className:(0,i.Z)("text--truncate",o.cardDescription),title:r},r))}function u(e){let{item:t}=e;const a=(0,n.Wl)(t);return a?s.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const a=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:a,title:t.label,description:i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(d,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,n.jA)();return s.createElement(h,{items:a.items,className:t})}function h(e){const{items:t,className:a}=e;if(!t)return s.createElement(g,e);const r=(0,n.MN)(t);return s.createElement("section",{className:(0,i.Z)("row",a)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(k,{item:e})))))}},93436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>m,metadata:()=>o,toc:()=>p});var s=a(87462),i=(a(67294),a(3905)),n=a(52991),r=a(52802);const m={title:"Timestamps",id:"timestamps",slug:"/use-cases/timestamps"},l=void 0,o={unversionedId:"use-cases/timestamps/timestamps",id:"version-v4/use-cases/timestamps/timestamps",title:"Timestamps",description:"Reviewpad timestamps allow us to trigger workflows based on time.",source:"@site/versioned_docs/version-v4/use-cases/timestamps/timestamps.mdx",sourceDirName:"use-cases/timestamps",slug:"/use-cases/timestamps",permalink:"/use-cases/timestamps",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/timestamps.mdx",tags:[],version:"v4",frontMatter:{title:"Timestamps",id:"timestamps",slug:"/use-cases/timestamps"},sidebar:"DocsSidebar",previous:{title:"Ship/Show/Ask",permalink:"/use-cases/ship-show-ask"},next:{title:"Label on change freeze",permalink:"/use-cases/label-on-change-freeze"}},c={},p=[{value:"RFC3339 and similar Timestamps",id:"rfc3339-and-similar-timestamps",level:3},{value:"Relative Timestamps",id:"relative-timestamps",level:3}],u={toc:p},d="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reviewpad timestamps allow us to trigger workflows based on time."),(0,i.kt)("p",null,"We are able to use ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#pkg-constants"},"RFC3339 timestamps")," or relative timestamps."),(0,i.kt)("h3",{id:"rfc3339-and-similar-timestamps"},"RFC3339 and similar Timestamps"),(0,i.kt)("p",null,"Here we can use a timestamp in a similar ",(0,i.kt)("inlineCode",{parentName:"p"},"RFC3339")," format:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYYMMDD")," - e.g. 20220405"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYY-MM-DD")," - e.g. 2022-04-05"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYYMMDDTHH:MM:SS")," - e.g. 20220405T22:01:50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYY-MM-DDTHH:MM:SS")," - e.g. 2022-04-05T22:01:50")),(0,i.kt)("h3",{id:"relative-timestamps"},"Relative Timestamps"),(0,i.kt)("p",null,"Use time as expression ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TIME year|month|day|week|hour|minute ago")),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"15 days ago"),(0,i.kt)("li",{parentName:"ul"},"3 months ago"),(0,i.kt)("li",{parentName:"ul"},"1 hour ago")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Aladino Syntax"),(0,i.kt)("p",{parentName:"blockquote"},"Check ",(0,i.kt)("a",{parentName:"p",href:"../guides/aladino/syntax"},"Aladino Syntax")," for more details about timestamps.")),(0,i.kt)("h3",{id:""}),(0,i.kt)(n.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);