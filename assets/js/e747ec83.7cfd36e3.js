"use strict";(self.webpackChunkmio_grimoire=self.webpackChunkmio_grimoire||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"glossary",title:"Glossary",sidebar_label:"Glossary"},s=void 0,u={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"A running list of Raid Guild nomenclature. Always evolving, forever in progress\u2026",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/savedao/docs/glossary",editUrl:"https://github.com/raid-guild/handbook/edit/master/docs/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary",sidebar_label:"Glossary"},sidebar:"howSidebar",previous:{title:"Learn About Web3",permalink:"/savedao/docs/learn-about-web3"},next:{title:"Getting Paid",permalink:"/savedao/docs/requesting-payment"}},d={},c=[{value:"Async",id:"async",level:4},{value:"GuildKick",id:"guildkick",level:4},{value:"Loot",id:"loot",level:4},{value:"Minion",id:"minion",level:4},{value:"pTokens",id:"ptokens",level:4},{value:"Proposal",id:"proposal",level:4},{value:"RageQuit",id:"ragequit",level:4},{value:"Raid",id:"raid",level:4},{value:"Raid Party",id:"raid-party",level:4},{value:"Round Table",id:"round-table",level:4},{value:"Shares",id:"shares",level:4},{value:"Share Value",id:"share-value",level:4},{value:"Spoils",id:"spoils",level:4},{value:"Tavern",id:"tavern",level:4},{value:"War Chest",id:"war-chest",level:4}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A running list of Raid Guild nomenclature. Always evolving, forever in progress\u2026"),(0,o.kt)("h4",{id:"async"},"Async"),(0,o.kt)("p",null,"A conversation to be continued offline following the current discussion. \u201cWe can async on that\u201d"),(0,o.kt)("h4",{id:"guildkick"},"GuildKick"),(0,o.kt)("p",null,"A proposal type to remove members from the DAO. If a GuildKick proposal is successful, the kicked address automatically RageQuits their Shares at the Share Value."),(0,o.kt)("h4",{id:"loot"},"Loot"),(0,o.kt)("p",null,"Non-voting Shares in the DAO. Guilders can ragequit Loot to withdraw proportional amount of assets from the DAO based on current Share Value."),(0,o.kt)("h4",{id:"minion"},"Minion"),(0,o.kt)("p",null,"A smart contract account which can call other smart contracts on behalf of the DAO."),(0,o.kt)("h4",{id:"ptokens"},"pTokens"),(0,o.kt)("p",null,"Personal Tokens. These are tokens which are unique to specific Raiders which can be used to Summon them for a given Raid or feedback on a Proposal. Specific pTokens are Whitelisted by the DAO and stored in the War Chest."),(0,o.kt)("h4",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"A means of requesting something (shares, funding, token whitelists, etc.) from the DAO. All Proposals are made onchain and voted on using Shares by Guilders. Proposals must have more Yes than No votes to pass."),(0,o.kt)("h4",{id:"ragequit"},"RageQuit"),(0,o.kt)("p",null,"The act of exiting shares from the DAO in exchange for a pro-rata share of the underlying capital bank relative to Share Value."),(0,o.kt)("h4",{id:"raid"},"Raid"),(0,o.kt)("p",null,"A project. Raids can be internal or external, such as improving internal operations or building a public good."),(0,o.kt)("h4",{id:"raid-party"},"Raid Party"),(0,o.kt)("p",null,"A team or collective of Guilders working together on a Raid."),(0,o.kt)("h4",{id:"round-table"},"Round Table"),(0,o.kt)("p",null,"Weekly call for Members of the Guild to catchup and discuss goings-on in the realm."),(0,o.kt)("h4",{id:"shares"},"Shares"),(0,o.kt)("p",null,"Voting Shares in the DAO. Members can ragequit Shares to withdraw a proportional amount of assets from the DAO based on current Share Value."),(0,o.kt)("h4",{id:"share-value"},"Share Value"),(0,o.kt)("p",null,"The value of 1 share at any given time. In the case of Raid Guild, Share Value is denominated in wxDAI and can be determined by dividing the outstanding amount of shares by the total amount of WETH (and all other Whitelisted Tokens) in the War Chest."),(0,o.kt)("h4",{id:"spoils"},"Spoils"),(0,o.kt)("p",null,"A portion of funds paid out to a Raid Party (10%) that are required to be tributed back to the Raid Guild War Chest"),(0,o.kt)("h4",{id:"tavern"},"Tavern"),(0,o.kt)("p",null,"A public meeting place for newcomers and veteran adventurers. The tavern is open to all and typically serves as the entry point into the community."),(0,o.kt)("p",null,"Raid Guild contains a Front Tavern for inbound and outbound leads and a Back Tavern to gain technical insight and scope out potential Raids."),(0,o.kt)("h4",{id:"war-chest"},"War Chest"),(0,o.kt)("p",null,"The name of Raid Guild\u2019s DAO smart contract. The War Chest stores all funds for the Guild and can only be distributed if a vote passes with consensus from the DAO."))}h.isMDXComponent=!0}}]);