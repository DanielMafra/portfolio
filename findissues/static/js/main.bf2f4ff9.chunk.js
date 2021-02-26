(this.webpackJsonpfindissues=this.webpackJsonpfindissues||[]).push([[0],{38:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(32),c=t.n(o),i=t(10),u=t(1),l=t(8),s=t.n(l),p=t(37),f=t(14),d=t(6),b=t(9),m=t(2),x=t(3);function g(){var n=Object(m.a)(["\nbackground: transparent;\ncolor: #fff;\nborder: 0;\npadding: 8px 7px;\noutline: 0;\nborder-radius: 4px;\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\nlist-style: none;\nmargin-top: 20px;\n\n  li{\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n      & + li{\n        border-top: 1px solid #eee;\n      }\n\n      a{\n        color: #fff;\n        text-decoration: none;\n      }\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(m.a)(["\n      svg{\n        animation: "," 2s linear infinite;\n      }\n    "]);return h=function(){return n},n}function j(){var n=Object(m.a)(["\nbackground: #2ea44f;\nborder: 0;\nborder-radius: 4px;\nmargin-left: 10px;\npadding: 0 15px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n  &[disabled]{\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  ","\n"]);return j=function(){return n},n}function E(){var n=Object(m.a)(["\n  from{\n    transform: rotate(0deg);\n  }\n\n  to{\n    transform: rotate(360deg);\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(m.a)(["\nmargin-top: 30px;\ndisplay: flex;\nflex-direction: row;\n\n  input{\n    flex: 1;\n    border: 1px solid ",";\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 17px;\n    color: #fff;\n    background: #3f4448;\n  }\n"]);return O=function(){return n},n}function y(){var n=Object(m.a)(["\nmax-width: 700px;\nbackground: #24292e;\nborder-radius: 4px;\nbox-shadow: 0 0 20px rgba(0,0,0,0.2);\npadding: 30px;\nmargin: 80px auto;\n\n  h1{\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n\n    svg{\n      margin-right: 10px;\n    }\n  }\n}\n"]);return y=function(){return n},n}var w=x.c.div(y()),k=x.c.form(O(),(function(n){return n.error?"#cb2431":"#3f4448"})),S=Object(x.d)(E()),z=x.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(j(),(function(n){return n.loading&&Object(x.b)(h(),S)})),C=x.c.ul(v()),I=x.c.button.attrs({type:"button"})(g()),R=t(36),_=t.n(R).a.create({baseURL:"https://api.github.com"});function J(){var n=Object(r.useState)(""),e=Object(d.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),u=Object(d.a)(c,2),l=u[0],m=u[1],x=Object(r.useState)(!1),g=Object(d.a)(x,2),v=g[0],h=g[1],j=Object(r.useState)(null),E=Object(d.a)(j,2),O=E[0],y=E[1];Object(r.useEffect)((function(){var n=localStorage.getItem("repos");n&&m(JSON.parse(n))}),[]),Object(r.useEffect)((function(){localStorage.setItem("repos",JSON.stringify(l))}),[l]);var S=Object(r.useCallback)((function(n){function e(){return(e=Object(f.a)(s.a.mark((function n(){var e,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h(!0),y(null),n.prev=2,""!==t){n.next=5;break}throw new Error("You need to indicate a repository.");case 5:return n.next=7,_.get("repos/".concat(t));case 7:if(e=n.sent,!l.find((function(n){return n.name===t}))){n.next=11;break}throw new Error("Duplicate repository.");case 11:r={name:e.data.full_name},m([].concat(Object(p.a)(l),[r])),o(""),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(2),y(!0),console.log(n.t0);case 20:return n.prev=20,h(!1),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[2,16,20,23]])})))).apply(this,arguments)}n.preventDefault(),function(){e.apply(this,arguments)}()}),[t,l]);var R=Object(r.useCallback)((function(n){var e=l.filter((function(e){return e.name!==n}));m(e)}),[l]);return a.a.createElement(w,null,a.a.createElement("h1",null,a.a.createElement(b.c,{size:25}),"My Repositories"),a.a.createElement(k,{onSubmit:S,error:O},a.a.createElement("input",{type:"text",placeholder:"Add Repositories",value:t,onChange:function(n){o(n.target.value),y(null)}}),a.a.createElement(z,{loading:v?1:0},v?a.a.createElement(b.e,{color:"#fff",size:14}):a.a.createElement(b.d,{color:"#fff",size:14}))),a.a.createElement(C,null,l.map((function(n){return a.a.createElement("li",{key:n.name},a.a.createElement("span",null,a.a.createElement(I,{onClick:function(){return R(n.name)}},a.a.createElement(b.f,{size:14})),n.name),a.a.createElement(i.b,{to:"/repository/".concat(encodeURIComponent(n.name))},a.a.createElement(b.b,{size:20})))}))))}function U(){var n=Object(m.a)(["\nmargin: 15px 0;\n\n  button{\n    outline: 0;\n    border: 0;\n    padding: 8px;\n    border-radius: 4px;\n    margin: 0 3px;\n    background: rgba(46,163,63,0.4);\n\n    &:nth-child(","){\n      background: #2ea44f;\n      color: #fff;\n    }\n  }\n"]);return U=function(){return n},n}function A(){var n=Object(m.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n\n  button{\n    outline: 0;\n    border: 0;\n    background: #2ea44f;\n    color: #fff;\n    padding: 5px 10px;\n    border-radius: 4px;\n\n    &:disabled{\n      cursor: not-allowed;\n      opacity: 0.4;\n    }\n  }\n"]);return A=function(){return n},n}function N(){var n=Object(m.a)(["\nmargin-top: 30px;\npadding-top: 30px;\nborder-top: 1px solid #eee;\nlist-style: none;\n\n  li{\n    display: flex;\n    padding: 15px 10px;\n\n    & + li{\n      margin-top: 12px;\n    }\n\n    img{\n      width: 36px;\n      height: 36px;\n      border-radius: 50%;\n      border: 2px solid #0d2636;\n    }\n\n    div{\n      flex: 1;\n      margin-left: 12px;\n\n      p{\n        margin-top: 10px;\n        font-size: 12px;\n        color: #000;\n      }\n    }\n\n    strong{\n      font-size: 15px;\n\n      a{\n        text-decoration: none;\n        color: #222;\n        transform: 0.3s;\n\n        &:hover{\n          color: #0071db;\n        }\n      }\n\n      span{\n        background: #222;\n        color: #fff;\n        border-radius: 4px;\n        font-size: 12px;\n        font-weight: 600;\n        padding: 5px 7px;\n        margin-left: 10px;\n      }\n    }\n  }\n"]);return N=function(){return n},n}function B(){var n=Object(m.a)(["\nborder: 0;\noutline: 0;\nbackground: transparent;\n"]);return B=function(){return n},n}function D(){var n=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\n  img{\n    width: 150px;\n    border-radius: 20%;\n    margin: 20px 0;\n  }\n\n  h1{\n    font-size: 30px;\n    color: #0d2636;\n  }\n\n  p{\n    margin-top: 5px;\n    font-size: 14px;\n    color: #000;\n    text-align: center;\n    line-height: 1.4;\n    max-width: 400px;\n  }\n"]);return D=function(){return n},n}function L(){var n=Object(m.a)(["\nmax-width: 700px;\nbackground: #fff;\nborder-radius: 4px;\nbox-shadow: 0 0 20px rgba(0,0,0,0.2);\npadding: 30px;\nmargin: 80px auto;\n"]);return L=function(){return n},n}function M(){var n=Object(m.a)(["\ncolor: #fff;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\n"]);return M=function(){return n},n}var P=x.c.div(M()),W=x.c.div(L()),F=x.c.header(D()),H=Object(x.c)(i.b)(B()),Y=x.c.ul(N()),$=x.c.div(A()),q=x.c.div(U(),(function(n){return n.active+1}));function G(n){var e=n.match,t=Object(r.useState)({}),o=Object(d.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)([]),l=Object(d.a)(u,2),p=l[0],m=l[1],x=Object(r.useState)(!0),g=Object(d.a)(x,2),v=g[0],h=g[1],j=Object(r.useState)(1),E=Object(d.a)(j,2),O=E[0],y=E[1],w=Object(r.useState)([{state:"all",label:"All",active:!0},{state:"open",label:"Open",active:!1},{state:"closed",label:"Closed",active:!1}]),k=Object(d.a)(w,2),S=k[0],z=(k[1],Object(r.useState)(0)),C=Object(d.a)(z,2),I=C[0],R=C[1];function J(n){y("back"===n?O-1:O+1)}return Object(r.useEffect)((function(){function n(){return(n=Object(f.a)(s.a.mark((function n(){var t,r,a,o,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=decodeURIComponent(e.params.repository),n.next=3,Promise.all([_.get("/repos/".concat(t)),_.get("/repos/".concat(t,"/issues"),{params:{state:S.find((function(n){return n.active})).state,per_page:5}})]);case 3:r=n.sent,a=Object(d.a)(r,2),o=a[0],c=a[1],i(o.data),m(c.data),h(!1);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e.params.repository]),Object(r.useEffect)((function(){function n(){return(n=Object(f.a)(s.a.mark((function n(){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=decodeURIComponent(e.params.repository),n.next=3,_.get("/repos/".concat(t,"/issues"),{params:{state:S[I].state,page:O,per_page:5}});case 3:r=n.sent,m(r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[I,S,e.params.repository,O]),v?a.a.createElement(P,null,a.a.createElement("h1",null,"Loading...")):a.a.createElement(W,null,a.a.createElement(H,{to:"/"},a.a.createElement(b.a,{color:"#0071db",size:25})),a.a.createElement(F,null,a.a.createElement("img",{src:c.owner.avatar_url,alt:c.owner.login}),a.a.createElement("h1",null,c.name),a.a.createElement("p",null,c.description)),a.a.createElement(q,{active:I},S.map((function(n,e){return a.a.createElement("button",{type:"button",key:n.label,onClick:function(){return function(n){R(n)}(e)}},n.label)}))),a.a.createElement(Y,null,p.map((function(n){return a.a.createElement("li",{key:String(n.id)},a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.login}),a.a.createElement("div",null,a.a.createElement("strong",null,a.a.createElement("a",{href:n.html_url},n.title),n.labels.map((function(n){return a.a.createElement("span",{key:String(n.id)},n.name)}))),a.a.createElement("p",null,n.user.login)))}))),a.a.createElement($,null,a.a.createElement("button",{type:"button",onClick:function(){return J("back")},disabled:O<2},"Previous"),a.a.createElement("button",{type:"button",onClick:function(){return J("next")}},"Next")))}function K(){return a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:J}),a.a.createElement(u.a,{exact:!0,path:"/repository/:repository",component:G})))}function Q(){var n=Object(m.a)(["\n*{\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, #root{\n  min-height: 100%;\n}\n\nbody{\n  background: #fff;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased !important;\n}\n\nbody, input, button{\n  color: #fff;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton{\n  cursor: pointer;\n}\n"]);return Q=function(){return n},n}var T=Object(x.a)(Q());var V=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.bf2f4ff9.chunk.js.map