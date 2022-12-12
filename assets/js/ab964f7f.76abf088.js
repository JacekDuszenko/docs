"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40328],{52991:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(67294),n=a(86010),i=a(52802),s=a(39960),r=a(13919),o=a(95999);const c="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)("card padding--lg",c)},a)}function p(e){let{href:t,icon:a,title:i,description:s}=e;return l.createElement(m,{href:t},l.createElement("h2",{className:(0,n.Z)("text--truncate",u),title:i},a," ",i),s&&l.createElement("p",{className:(0,n.Z)("text--truncate",d),title:s},s))}function b(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?l.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const a=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return l.createElement(p,{href:t.href,icon:a,title:t.label,description:null==n?void 0:n.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(g,{item:t});case"category":return l.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const a=(0,i.jA)();return l.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return l.createElement(h,e);const s=(0,i.MN)(t);return l.createElement("section",{className:(0,n.Z)("row",a)},s.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(f,{item:e})))))}},69266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=a(87462),n=(a(67294),a(3905)),i=a(52991),s=a(52802);const r={id:"automated-labelling",slug:"automated-labelling",title:"Automated Labelling"},o=void 0,c={unversionedId:"use-cases/automated-labelling/automated-labelling",id:"version-3.10.0/use-cases/automated-labelling/automated-labelling",title:"Automated Labelling",description:"Pull Requests labels are widely used by software developers to communicate certain required actions.",source:"@site/versioned_docs/version-3.10.0/use-cases/automated-labelling/automated-labelling.mdx",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/automated-labelling",permalink:"/3.10.0/use-cases/automated-labelling/automated-labelling",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/automated-labelling.mdx",tags:[],version:"3.10.0",frontMatter:{id:"automated-labelling",slug:"automated-labelling",title:"Automated Labelling"},sidebar:"DocsSidebar",previous:{title:"Auto-merge",permalink:"/3.10.0/use-cases/auto-merge/"},next:{title:"Label based on author groups",permalink:"/3.10.0/use-cases/label-based-on-author-groups"}},u={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pull Requests labels are widely used by software developers to communicate certain required actions."),(0,n.kt)("p",null,"Out of the box, Reviewpad supports the action of ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins#addlabel"},"adding labels to pull requests"),"."),(0,n.kt)("p",null,"Together with the other ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-in capabilities"),", you can automate flexible pull request labelling workflows."),(0,n.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);