(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{34:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(28),r=c.n(s),i=(c(34),c(10)),o=c.n(i),l=c(12),j=c(4),u=c(9),b=c(2),d=c(13),m=c.n(d),h=c(17),O=c(0),p=function(e){var t,c=Object(n.useState)("blank"),a=Object(j.a)(c,2),s=a[0],r=a[1],i=function(){var t=Object(l.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.name,"/"));case 3:c=t.sent,r(c.data.sprites.front_default),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()})),Object(O.jsxs)(u.b,(t={to:"/single/".concat(e.name),className:"poke-sprite"},Object(h.a)(t,"className","col-11 col-md-4 col-lg-3 p-1 flex justify-content-center align-items-center"),Object(h.a)(t,"children",[Object(O.jsx)("p",{className:"text-center m-0",children:e.name}),"blank"!==s&&Object(O.jsx)("img",{src:s,alt:"Sprite of pokemon",className:"poke-sprite-img"})]),t))},x=function(e){var t=e.pokemon,c=e.handleChange,n=e.resetSearch;return t?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{className:"text-center",children:"Home"}),Object(O.jsx)("div",{className:"my-2",children:Object(O.jsxs)("form",{onSubmit:n,className:"search",children:[Object(O.jsx)("input",{type:"text",onChange:c,placeholder:"Search"}),Object(O.jsx)("button",{type:"submit",value:"Reset",children:"Reset"})]})}),Object(O.jsx)("div",{className:"poke-field row",children:t.map((function(e,t){return Object(O.jsx)(p,{name:e.name},t)}))})]}):Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Pokemon failed to load"})})},f=Object(b.g)((function(e){var t=e.favorites;return t?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Favorites"}),Object(O.jsx)("div",{className:"poke-field row",children:t.map((function(e,t){return Object(O.jsx)(p,{name:e},t)}))})]}):Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"No favorites"})})})),v=Object(b.g)((function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),i=Object(j.a)(r,2),u=i[0],b=i[1],d=Object(n.useState)(0),h=Object(j.a)(d,2),p=h[0],x=h[1],f=Object(n.useState)([]),v=Object(j.a)(f,2),g=v[0],N=v[1],k=Object(n.useState)([]),S=Object(j.a)(k,2),y=S[0],w=S[1],F=Object(n.useState)("blank"),C=Object(j.a)(F,2),I=C[0],T=C[1],E=Object(n.useState)(!1),J=Object(j.a)(E,2),P=J[0],A=J[1],H=function(){var t=Object(l.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.match.params.pokemon,"/"));case 3:c=t.sent,console.log(c.data),s(c.data.name),b(c.data.abilities),x(c.data.height),N(c.data.stats),w(c.data.types),T(c.data.sprites.front_default),e.favorites.filter((function(e){return c.data.name===e})).length>0&&A(!0),t.next=19;break;case 15:return t.prev=15,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",null);case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){H()}),{});var R=function(t){e.toggleFavorite(t),e.history.push("/home")};return a?Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"dex-body ",children:[Object(O.jsxs)("div",{className:"row d-flex justify-content-between",children:[Object(O.jsxs)("div",{className:"col-12 col-md-5 info-body d-flex flex-column justify-content-between p-2",children:[Object(O.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center justify-content-between",children:[Object(O.jsx)("h2",{className:"no-marg",children:e.match.params.pokemon}),Object(O.jsxs)("p",{className:"no-marg",children:["Height: ",p,"'"]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Types:"}),Object(O.jsx)("div",{className:"row",children:y.map((function(e,t){return Object(O.jsx)("span",{className:"col-12 col-md-6 text-center",children:Object(O.jsx)("div",{className:e.type.name,children:e.type.name})},t)}))})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Abilities:"}),Object(O.jsx)("div",{className:"row",children:u.map((function(e,t){return Object(O.jsx)("span",{className:"col-12 col-md-6 text-center",children:Object(O.jsx)("div",{className:"dark",children:e.ability.name})},t)}))})]}),P&&Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("span",{children:"This is one of your favorites."}),Object(O.jsx)("button",{className:"butn",id:"btn2",onClick:function(){return R(a)},children:"Remove?"})]}),!P&&Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{className:"butn",id:"btn2",onClick:function(){return R(a)},children:"Add To Favorites?"})})]}),Object(O.jsx)("div",{className:"img-wrapper col-12 col-md-5",children:Object(O.jsx)("div",{className:"img-field",children:Object(O.jsx)("img",{src:I,alt:"Sprite of Pokemon"})})})]}),Object(O.jsx)("div",{className:"stats mt-3",children:Object(O.jsxs)("table",{children:[Object(O.jsx)("tr",{className:"row text-center",children:g.map((function(e){return Object(O.jsx)("th",{className:"col-2",children:e.stat.name})}))}),Object(O.jsx)("tr",{className:"row text-center",children:g.map((function(e){return Object(O.jsx)("th",{className:"col-2",children:e.base_stat})}))})]})})]})}):Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"No result"})})})),g=function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("span",{children:Object(O.jsx)(u.b,{to:"/home",className:"mr-3",children:"Kanto"})}),Object(O.jsx)("span",{children:Object(O.jsx)(u.b,{to:"/favorites",children:"Favorites"})})]})},N=(c(63),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],d=r[1],h=Object(n.useState)([]),p=Object(j.a)(h,2),N=p[0],k=p[1],S=function(e){var t=e.target.value,n=c.filter((function(e){return e.name.includes(t)}));k(n)},y=function e(t){e(c)},w=function(e){if(i.includes(e)){var t=i.filter((function(t){return t!==e}));d(t),localStorage.setItem("favorites",t)}else{var c=i;c.push(e),console.log(c),d(c),localStorage.setItem("favorites",c)}},F=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://pokeapi.co/api/v2/pokemon/?limit=150");case 3:t=e.sent,a(t.data.results),k(t.data.results),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F(),function(){var e=JSON.stringify(["ivysaur","squirtle"]);localStorage.setItem("favorites",e);var t=localStorage.getItem("favorites"),c=JSON.parse(t);d(c)}()}),[]),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/Home",render:function(){return Object(O.jsx)(x,{pokemon:N,handleChange:S,resetSearch:y})}}),Object(O.jsx)(b.b,{exact:!0,path:"/favorites",render:function(){return Object(O.jsx)(f,{favorites:i})}}),Object(O.jsx)(b.b,{path:"/single/:pokemon",render:function(){return Object(O.jsx)(v,{favorites:i,toggleFavorite:w})}}),Object(O.jsx)(b.a,{to:"/home"})]})]})})}),k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.c71aab36.chunk.js.map