(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{2647:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/equip/[codequip]",function(){return t(7359)}])},9117:function(e,n,t){"use strict";var a=t(5893),o=(t(7294),t(508)),i={maintainAspectRatio:!0,scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[3,3]}}},plugins:{legend:{display:!1}}},r={maintainAspectRatio:!0,scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[3,3]},reverse:!0}},plugins:{legend:{display:!1}}};n.Z=function(e){return(0,a.jsx)(o.x1,{data:e.data,options:e.reverse?r:i})}},2844:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(5666),o=t.n(a),i=t(5893),r=t(1163),c=t(7294),s=t(8527),l=JSON.parse('{"L":"cf915bb","h":"2022-06-27T16:18:36.550Z"}');function u(e,n,t,a,o,i,r){try{var c=e[i](r),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(a,o)}var d=function(){var e,n,t=(0,r.useRouter)(),a=(n=o().mark((function n(){var i,r,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=function(e){return fetch(e).then((function(e){return e.json()}))},clearTimeout(e),console.log("Checking for updates..."),n.next=5,i("/info.json?v="+(new Date).getTime());case 5:r=n.sent,console.log(l.h+" vs "+r.date),l.h!==r.date&&(console.log("Update found, reload page!"),c=window.location.pathname+"?reload="+(new Date).getTime(),t.push(c)),e=setTimeout((function(){a()}),1e4);case 9:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,o){var i=n.apply(e,t);function r(e){u(i,a,o,r,c,"next",e)}function c(e){u(i,a,o,r,c,"throw",e)}r(void 0)}))}),d=(0,c.useState)(!1);d[0],d[1];return(0,c.useEffect)((function(){a()}),[]),(0,i.jsx)(s.xu,{w:"100%",borderTop:"1px solid #c0c0c0",pt:"20px",children:(0,i.jsx)(s.xu,{w:"100%",maxW:"62.5rem",mx:"auto",children:(0,i.jsx)(s.xu,{w:"100%",mx:"auto",textAlign:"center",children:(0,i.jsxs)(s.xv,{className:"footerText",children:["(C) Agust\xed - GNU License - Rev. ",l.L," - Build ",l.h]})})})})}},1338:function(e,n,t){"use strict";var a=t(5893),o=(t(7294),t(8527));n.C=function(e){return(0,a.jsx)(o.xu,{w:"100%",h:[e.mobile?e.mobile:e.desktop,e.tablet?e.tablet:e.desktop,e.desktop],backgroundColor:e.bgcolor?e.bgcolor:"transparent"})}},3952:function(e,n,t){"use strict";var a=t(5893),o=(t(7294),t(8527)),i=t(949),r=t(1604),c=t(1664);function s(e){var n=null!==e&&void 0!==e?e:"0000-00-00 00:00:00";return n.substr(8,2)+"-"+n.substr(5,2)+"-"+n.substr(2,2)}function l(e){var n=null!==e&&void 0!==e?e:"0000-00-00 00:00:00";return n.substr(11,2)+":"+n.substr(14,2)}n.Z=function(e){var n,t,u=e.codacta,d=e.local,f=e.visitant,x=e.resultat,h=e.data,m=e.estat,p=(e.nextFetch,e.nomCompeticio);return(0,a.jsx)(o.M5,{w:"100%",children:(0,a.jsxs)(o.xu,{maxW:{base:"sm",md:"95%"},w:{base:"sm",md:"95%"},children:[p&&(0,a.jsx)(o.xu,{w:"100%",textAlign:"center",bg:(0,i.ff)(x+".100",x+".900"),children:p}),(0,a.jsxs)(o.kC,{p:3,h:"100px",mx:"auto",mb:2,bg:(0,i.ff)(x+".100",x+".900"),shadow:"lg",rounded:"lg",overflow:"hidden",children:[(0,a.jsx)(c.default,{href:"/equip/".concat(d.codequip),children:(0,a.jsxs)(o.xu,{w:4/11,d:{base:"block",md:"flex"},children:[(0,a.jsx)(o.xu,{bgSize:"cover",style:{backgroundImage:"url('/imatges/sheilds/".concat(null!==(n=d.escut)&&void 0!==n?n:"shield_blank.svg","')"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPositionX:"center"},h:{base:"60%",md:"100%"},w:{base:"100%",md:"20%"}}),(0,a.jsx)(o.kC,{m:"auto",textAlign:"center",h:{base:"40%",md:"100%"},children:(0,a.jsx)(o.xu,{m:"auto",fontSize:{base:"small",md:"2xl"},children:d.nom})})]})}),4==m&&(0,a.jsx)(c.default,{href:"/acta/".concat(u),children:(0,a.jsxs)(o.xu,{w:3/11,children:[(0,a.jsxs)(r.m$.h1,{pt:2,fontSize:"4xl",fontWeight:"bold",color:(0,i.ff)("gray.800","white"),children:[d.gols," - ",f.gols]}),h&&(0,a.jsx)(o.M5,{children:(0,a.jsxs)(o.xu,{fontSize:"xs",children:[s(h)," - ",l(h)]})})]})})||(0,a.jsxs)(o.xu,{w:3/11,textAlign:"center",children:[(0,a.jsx)(r.m$.h2,{pt:2,fontSize:{base:"xl",md:"2xl"},fontWeight:"bold",children:s(h)}),(0,a.jsx)(r.m$.h3,{fontSize:{base:"lg",md:"xl"},children:l(h)})]}),(0,a.jsx)(c.default,{href:"/equip/".concat(f.codequip),children:(0,a.jsxs)(o.xu,{w:4/11,d:{base:"block",md:"flex"},children:[(0,a.jsx)(o.xu,{d:{base:"none",md:"block"},w:{base:"100%",md:"80%"},h:"auto",m:"auto",textAlign:"center",fontSize:"2xl",children:f.nom}),(0,a.jsx)(o.xu,{bgSize:"cover",style:{backgroundImage:"url('/imatges/sheilds/".concat(null!==(t=f.escut)&&void 0!==t?t:"shield_blank.svg","')"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPositionX:"center"},h:{base:"60%",md:"100%"},w:{base:"100%",md:"20%"}}),(0,a.jsx)(o.kC,{m:"auto",textAlign:"center",h:{base:"40%",md:"100%"},d:{base:"flex",md:"none"},children:(0,a.jsx)(o.xu,{m:"auto",fontSize:{base:"small",md:"2xl"},children:f.nom})})]})})]})]})})}},8586:function(e,n,t){"use strict";var a=t(5893),o=(t(7294),t(3952));n.Z=function(e){var n=e.data;return(0,a.jsx)(a.Fragment,{children:n.map((function(e){return(0,a.jsx)(o.Z,{codacta:e.codacta,local:{escut:e.escut_casa,nom:e.equip_casa,gols:e.gols_casa,codequip:e.codequip_casa},visitant:{escut:e.escut_fora,nom:e.equip_fora,gols:e.gols_fora,codequip:e.codequip_fora},resultat:e.resultat,estat:e.estat,data:e.data,nextFetch:e.nextFetch,nomCompeticio:e.nom_competicio},e.codacta)}))})}},9575:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.playerMenu=n.teamMenu=n.mainMenu=n.followTeamsMenu=n.alevinsMenu=void 0;var t=function(){return[{label:"Alev\xed A",href:"/classificacio/41327323"},{label:"Alev\xed B",href:"/classificacio/41527092"},{label:"Alev\xed C",href:"/classificacio/41528608"},{label:"Alev\xed D",href:"/classificacio/42205315"},{label:"Alev\xed E",href:"/classificacio/42203031"}]};n.alevinsMenu=t;var a=function(e){return e.map((function(e){return{label:e.nom_equip_menu,href:"/classificacio/".concat(e.codgrupo)}}))};n.followTeamsMenu=a;var o=function(e,n){return[{label:"Classificaci\xf3",href:"/classificacio/".concat(e.toString())},{label:"Jornada",href:"/jornada-actual/".concat(e.toString())},{label:"Pitxitxi",href:"/pitxitxi/".concat(e.toString())},{label:"Atac",href:"/millor-atac/".concat(e.toString())},{label:"Defensa",href:"/millor-defensa/".concat(e.toString())}].concat(n)};n.mainMenu=o;var i=function(e){return[{label:"Resultat",href:"/equip/".concat(e)},{label:"Titulars",href:"/equip-jugadors/".concat(e)},{label:"Golejadors",href:"/equip-golejadors/".concat(e)},{label:"Minuts dels Gols",href:"/equip-golejadors-minut/".concat(e)}]},r=function(e,n,t){var a=o(e,t),r=i(n);return r.push({label:"Competici\xf3",children:a}),r};n.teamMenu=r;var c=function(e,n,t,a){var r=o(n,a),c=i(t),s=function(e){return[{label:"Jugador",href:"/equip/".concat(e)}]}(e);return s.push({label:"Equip",children:c}),s.push({label:"Competici\xf3",children:r}),s};n.playerMenu=c,e.exports={alevinsMenu:t,followTeamsMenu:a,mainMenu:o,teamMenu:r,playerMenu:c}},7359:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f}});var a=t(5893),o=(t(7294),t(949)),i=t(8527),r=t(1338),c=t(2844),s=t(9117),l=t(9575),u=t(4276),d=t(8586),f=!0;n.default=function(e){var n=e.data,t=e.codequip,f=e.codgroup,x=e.dataAcumulada,h=e.menuFollowTeams,m=((0,o.ff)("gray.800","white"),(0,l.teamMenu)(f.toString(),t,h));return(0,a.jsxs)(i.xu,{className:"container",children:[(0,a.jsx)(u.w,{navMenu:m}),(0,a.jsx)(i.xu,{pt:1,fontSize:"3xl",children:n.length>0&&n[0].nom_equip||""}),(0,a.jsx)(i.xu,{padding:["10px 10%","10px 10%","10px 25%"],children:(0,a.jsx)(s.Z,{data:x})}),(0,a.jsx)(r.C,{desktop:"20px"}),(0,a.jsx)(d.Z,{data:n}),(0,a.jsx)(r.C,{desktop:"35px"}),(0,a.jsx)(c.Z,{})]})}}},function(e){e.O(0,[570,552,608,485,81,276,774,888,179],(function(){return n=2647,e(e.s=n);var n}));var n=e.O();_N_E=n}]);