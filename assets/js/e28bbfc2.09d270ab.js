"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89026],{59575:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>n,metadata:()=>u,toc:()=>d});var s=o(87462),t=(o(67294),o(3905)),r=o(90814);const n={title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},l=void 0,u={unversionedId:"use-cases/automated-labelling/label-based-on-author-groups/label-based-on-author-groups",id:"version-3.13.0/use-cases/automated-labelling/label-based-on-author-groups/label-based-on-author-groups",title:"Label based on author groups",description:"Here's an example of a reviewpad.yml configuration that labels pull requests authored by a member of a group of developers.",source:"@site/versioned_docs/version-3.13.0/use-cases/automated-labelling/label-based-on-author-groups/index.mdx",sourceDirName:"use-cases/automated-labelling/label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups",permalink:"/3.13.0/use-cases/label-based-on-author-groups",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-based-on-author-groups/index.mdx",tags:[],version:"3.13.0",frontMatter:{title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},sidebar:"DocsSidebar",previous:{title:"Automated Labelling",permalink:"/3.13.0/use-cases/automated-labelling"},next:{title:"Label based on file paths",permalink:"/3.13.0/use-cases/label-based-on-file-paths"}},i={},d=[],p={toc:d};function b(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,s.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Here's an example of a ",(0,t.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that labels pull requests authored by a member of a group of developers."),(0,t.kt)("p",null,"Suppose that, as Spotify, you consider developers ",(0,t.kt)("em",{parentName:"p"},"new joiner")," until they create/merge their ",(0,t.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/blog/measuring-backstage-success-at-spotify/"},"10th pull request"),".\nEach time a ",(0,t.kt)("em",{parentName:"p"},"new joiner")," creates a pull request, you want to label it in order to be able to perform a dedicated code review process.\nUsing Reviewpad groups you can easily do such labeling."),(0,t.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  new-joiner:\n    description: Pull requests created by new joiners\n    color: 294b69\n\ngroups:\n  - name: new-joiners\n    description: Group of developers that have created less than 10 pull requests\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer, "all") < 10\n\nrules:\n  - name: authored-by-new-joiner\n    spec: $isElementOf($author(), $group("new-joiners"))\n\nworkflows:\n  - name: critical\n    description: Modifications by new joiners require careful review\n    if:\n      - rule: authored-by-new-joiner\n    then:\n      - $addLabel("new-joiner")\n'))}b.isMDXComponent=!0}}]);