(this["webpackJsonpts-animation"]=this["webpackJsonpts-animation"]||[]).push([[0],{113:function(n,t,e){"use strict";e.r(t);var i=e(5),o=e(0),c=e.n(o),r=e(43),a=e.n(r),l=e(85),d=e(4),s=e(26),h=e(11),b=e(18),j="afd07a29753271380c387af2799cf64e",u="https://api.themoviedb.org/3";function p(){return fetch("".concat(u,"/trending/all/week?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}function g(){return fetch("".concat(u,"/movie/popular?api_key=").concat(j,"&language=ko-KR&page=2")).then((function(n){return n.json()}))}function v(){return fetch("".concat(u,"/movie/top_rated?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}function x(){return fetch("".concat(u,"/movie/upcoming?api_key=").concat(j,"&language=ko-KR&page=5")).then((function(n){return n.json()}))}function O(){return fetch("".concat(u,"/tv/airing_today?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}function f(){return fetch("".concat(u,"/tv/popular?api_key=").concat(j,"&language=ko-KR&page=4")).then((function(n){return n.json()}))}function m(){return fetch("".concat(u,"/tv/top_rated?api_key=").concat(j,"&language=ko-KR&page=2")).then((function(n){return n.json()}))}function y(n,t){return"https://image.tmdb.org/t/p/".concat(t||"original").concat(n)}var k,w,z,_,I,C,S,P,L,R,M,H,K,Q,q,F,T,E,W,Y,B,X,D,J,U,A,N,V,G,Z,$,nn,tn,en,on,cn,rn,an,ln,dn,sn,hn,bn,jn,un,pn,gn,vn,xn,On,fn,mn,yn,kn,wn,zn,_n,In,Cn,Sn,Pn,Ln,Rn,Mn,Hn,Kn,Qn,qn,Fn,Tn,En=e(119),Wn=e(121),Yn=e(120),Bn=e.p+"static/media/noPosterSmall.ea2ad102.png",Xn=e(1),Dn=d.c.div(k||(k=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: ",";\n  gap: 10px;\n  padding: 20px;\n"])),(function(n){return n.theme.black.darker})),Jn=Object(d.c)(En.a.div)(w||(w=Object(i.a)(["\n  height: 200px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  border-radius: 5px;\n  position: relative;\n  &:nth-child(odd) {\n    transform-origin: center left;\n  }\n  &:nth-child(even) {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),Un=d.c.h2(z||(z=Object(i.a)(["\n  padding: 20px;\n  font-weight: bold;\n  font-size: 20px;\n"]))),An=Object(d.c)(En.a.div)(_||(_=Object(i.a)(["\n  padding: 20px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.black.darker})),Nn={normal:{scale:1},hover:{scale:1.2,y:-30,zIndex:99,transition:{delay:.5,duration:.3,type:"tween"}}},Vn={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},Gn=function(){var n=Object(h.h)(),t=n.movieId,e=n.tvId,i=Object(b.useQuery)(["movie","similar"],(function(){return t?function(n){return fetch("".concat(u,"/movie/").concat(n,"/similar?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}(t):function(n){return fetch("".concat(u,"/tv/").concat(n,"/similar?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}(e)})),o=i.data,c=i.isLoading;return Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)(Un,{children:"\ube44\uc2b7\ud55c \ucf58\ud150\uce20"}),Object(Xn.jsx)(Dn,{children:c?"loading,,,":null===o||void 0===o?void 0:o.results.map((function(n){return Object(Xn.jsx)(Jn,{variants:Nn,initial:"normal",whileHover:"hover",transition:{type:"tween"},bgPhoto:n.backdrop_path?y(n.backdrop_path,"w500"):Bn,children:Object(Xn.jsx)(An,{variants:Vn,children:Object(Xn.jsx)("h4",{children:n.title?n.title:n.name})})},n.id)}))})]})},Zn=d.c.div(I||(I=Object(i.a)(["\n  border-radius: 20px;\n"]))),$n=d.c.div(C||(C=Object(i.a)(["\n  width: 100%;\n  height: 500px;\n  background-position: center top;\n  background-size: cover;\n"]))),nt=d.c.div(S||(S=Object(i.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),tt=d.c.div(P||(P=Object(i.a)(["\n  padding: 20px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: -60px;\n"]))),et=d.c.h3(L||(L=Object(i.a)(["\n  font-size: 30px;\n  color: ",";\n"])),(function(n){return n.theme.white.lighter})),it=d.c.div(R||(R=Object(i.a)(["\n  font-size: 15px;\n  font-weight: bold;\n  color: red;\n"]))),ot=d.c.p(M||(M=Object(i.a)(["\n  padding: 20px;\n  position: relative;\n  top: -80px;\n  font-size: 14px;\n  color: ",";\n"])),(function(n){return n.theme.white.lighter})),ct=d.c.span(H||(H=Object(i.a)(["\n  margin: 20px;\n  padding: 5px 5px;\n  position: relative;\n  border-radius: 5px;\n  font-weight: bold;\n  top: -80px;\n  color: ",";\n  background-color: #fbc531;\n"])),(function(n){return n.theme.white.lighter})),rt=d.c.ul(K||(K=Object(i.a)(["\n  display: flex;\n  position: relative;\n  top: -80px;\n  padding: 20px;\n"]))),at=d.c.li(Q||(Q=Object(i.a)(["\n  margin-right: 10px;\n  background-color: red;\n  font-size: 17px;\n  font-weight: bold;\n  border-radius: 5px;\n  padding: 5px 5px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  &:hover {\n    color: black;\n    background-color: white;\n  }\n"]))),lt=d.c.div(q||(q=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 20px;\n  width: 100%;\n"]))),dt=d.c.div(F||(F=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: darkgray;\n  border-radius: 10px;\n"]))),st=d.c.div(T||(T=Object(i.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 5px 0px;\n"])),(function(n){return n.bgPhoto})),ht=d.c.span(E||(E=Object(i.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n"]))),bt=d.c.span(W||(W=Object(i.a)(["\n  font-size: 18px;\n  color: white;\n  border-radius: 5px;\n  margin: 0px 20px;\n  padding: 5px 5px;\n  background-color: #269251;\n  font-weight: bold;\n"]))),jt=function(){var n,t=Object(h.h)(),e=t.movieId,i=t.tvId,o=Object(b.useQuery)(["movie","Detail"],(function(){return e?function(n){return fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}(e):function(n){return fetch("".concat(u,"/tv/").concat(n,"?api_key=").concat(j,"&language=ko-KR")).then((function(n){return n.json()}))}(i)})),c=o.data,r=o.isLoading,a=null===c||void 0===c?void 0:c.runtime,l=a&&Math.floor(a/60),d=a&&a%60,s=r;return Object(Xn.jsx)(Zn,{children:s?Object(Xn.jsx)(nt,{children:"Loading..."}):Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)($n,{style:{backgroundImage:"linear-gradient(to top,black, transparent), url(".concat(y(c?null===c||void 0===c?void 0:c.poster_path:Bn),")")}}),Object(Xn.jsxs)(tt,{children:[Object(Xn.jsx)(et,{children:e?null===c||void 0===c?void 0:c.title:null===c||void 0===c?void 0:c.name}),Object(Xn.jsx)(it,{children:"\u2b50\ufe0f ".concat(c&&(null===c||void 0===c?void 0:c.vote_average))})]}),Object(Xn.jsx)(ot,{children:c&&(null===c||void 0===c?void 0:c.overview)}),Object(Xn.jsx)(ct,{children:e?"".concat(l,"\uc2dc\uac04 ").concat(d,"\ubd84"):"\uc2dc\uc98c: ".concat(null===c||void 0===c?void 0:c.number_of_seasons)}),Object(Xn.jsx)(rt,{children:c&&(null===c||void 0===c?void 0:c.genres.map((function(n){return Object(Xn.jsx)(at,{children:n.name},n.id)})))}),Object(Xn.jsx)(bt,{children:"\uc81c\uc791\uc0ac"}),Object(Xn.jsx)(lt,{children:c&&(null===c||void 0===c||null===(n=c.production_companies)||void 0===n?void 0:n.map((function(n,t){return Object(Xn.jsxs)(dt,{children:[Object(Xn.jsx)(st,{bgPhoto:n.logo_path?y(n.logo_path,"w500"):Bn},t),Object(Xn.jsx)(ht,{children:n.name})]})})))}),Object(Xn.jsx)(Gn,{})]})})},ut=d.c.div(Y||(Y=Object(i.a)(["\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  padding-top: 30px;\n  position: relative;\n  overflow: hidden;\n"]))),pt=d.c.div(B||(B=Object(i.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),gt=d.c.div(X||(X=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 7px;\n  width: 80vw;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n"]))),vt=Object(d.c)(En.a.div)(D||(D=Object(i.a)(["\n  height: 200px;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 10px;\n\n  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);\n  &:first-child,\n  :nth-child(3),\n  :nth-child(5),\n  :nth-child(8),\n  :last-child {\n    grid-column: span 2;\n  }\n  cursor: pointer;\n  &:first-child,\n  :nth-child(4),\n  :nth-child(8) {\n    transform-origin: center left;\n  }\n  &:nth-child(3),\n  :nth-child(7),\n  :last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),xt=Object(d.c)(En.a.div)(J||(J=Object(i.a)(["\n  padding: 20px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n\n  h4 {\n    text-align: center;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.black.darker})),Ot=Object(d.c)(En.a.div)(U||(U=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),ft=Object(d.c)(En.a.div)(A||(A=Object(i.a)(["\n  position: absolute;\n  width: 50vw;\n  height: 80vh;\n  background-color: ",";\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  overflow-y: scroll;\n"])),(function(n){return n.theme.black.darker})),mt={normal:{scale:1},hover:{scale:1.3,y:-30,borderRadius:15,zIndex:99,overflow:"hidden",transition:{delay:.5,duration:.3,type:"tween"}}},yt={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},kt=function(){var n=Object(h.g)(),t=Object(h.f)("/movie/:movieId"),e=Object(h.f)("/tv/:tvId"),i=Object(Wn.a)().scrollY,o=Object(b.useQuery)("trend",p),c=o.data,r=o.isLoading,a=function(){return n("/")};return Object(Xn.jsx)(ut,{children:r?Object(Xn.jsx)(pt,{children:"Loading..."}):Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)(gt,{children:Object(Xn.jsx)(Yn.a,{children:null===c||void 0===c?void 0:c.results.slice(0,10).map((function(t){return Object(Xn.jsx)(vt,{variants:mt,whileHover:"hover",initial:"normal",transition:{type:"tween"},style:{top:i.get()+100,bottom:i.get()+100},onClick:function(){return e=t.id,i=t.media_type,void n("movie"===i?"/movie/".concat(e):"/tv/".concat(e));var e,i},bgPhoto:y(t.backdrop_path),layoutId:t.id+"",children:Object(Xn.jsx)(xt,{variants:yt,children:Object(Xn.jsx)("h4",{children:t.title?t.title:t.name})})},t.id)}))})}),Object(Xn.jsxs)(Yn.a,{children:[t?Object(Xn.jsx)(Ot,{onClick:a,exit:{opacity:0},animate:{opacity:1},children:Object(Xn.jsx)(ft,{style:{top:i.get()+100,bottom:i.get()+100},layoutId:t.params.movieId,children:Object(Xn.jsx)(jt,{})})}):null,e?Object(Xn.jsx)(Ot,{onClick:a,exit:{opacity:0},animate:{opacity:1},children:Object(Xn.jsx)(ft,{style:{top:i.get()+100,bottom:i.get()+100},layoutId:e.params.tvId,children:Object(Xn.jsx)(jt,{})})}):null]})]})})},wt=e(7),zt=e(40),_t=d.c.div(N||(N=Object(i.a)(["\n  background-color: black;\n  padding-bottom: 300px;\n  overflow: hidden;\n"]))),It=d.c.div(V||(V=Object(i.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ct=d.c.div(G||(G=Object(i.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),St=d.c.h2(Z||(Z=Object(i.a)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n"]))),Pt=d.c.p($||($=Object(i.a)(["\n  font-size: 18px;\n  width: 50%;\n"]))),Lt=d.c.div(nn||(nn=Object(i.a)(["\n  position: relative;\n  top: -100px;\n"]))),Rt=d.c.div(tn||(tn=Object(i.a)(["\n  margin-top: 200px;\n  position: relative;\n"]))),Mt=d.c.div(en||(en=Object(i.a)(["\n  margin-top: 300px;\n  position: relative;\n"]))),Ht=Object(d.c)(En.a.div)(on||(on=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 5px;\n  position: absolute;\n  width: 100%;\n"]))),Kt=Object(d.c)(En.a.div)(cn||(cn=Object(i.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),Qt=Object(d.c)(En.a.div)(rn||(rn=Object(i.a)(["\n  padding: 20px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.black.darker})),qt=d.c.div(an||(an=Object(i.a)(["\n  width: 50px;\n  height: 200px;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n"]))),Ft=Object(d.c)(En.a.div)(ln||(ln=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Tt=Object(d.c)(En.a.div)(dn||(dn=Object(i.a)(["\n  position: absolute;\n  width: 50vw;\n  height: 80vh;\n  background-color: ",";\n\n  overflow-y: scroll;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n"])),(function(n){return n.theme.black.darker})),Et={hidden:{x:window.outerWidth-5},visible:{x:0},exit:{x:5-window.outerWidth}},Wt={normal:{scale:1},hover:{scale:1.3,y:-50,borderRadius:15,overflow:"hidden",transition:{delay:.5,duration:.3,type:"tween"}}},Yt={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},Bt=function(){var n,t,e=Object(b.useQuery)(["tv","today"],O),i=e.data,c=e.isLoading,r=Object(b.useQuery)(["tv","popular"],f),a=r.data,l=r.isLoading,d=Object(b.useQuery)(["tv","topRate"],m),s=d.data,j=d.isLoading,u=Object(h.g)(),p=Object(h.f)("/tv/show/:tvId"),g=Object(Wn.a)().scrollY,v=Object(o.useState)(0),x=Object(wt.a)(v,2),k=x[0],w=x[1],z=Object(o.useState)(0),_=Object(wt.a)(z,2),I=_[0],C=_[1],S=Object(o.useState)(0),P=Object(wt.a)(S,2),L=P[0],R=P[1],M=Object(o.useState)(!1),H=Object(wt.a)(M,2),K=H[0],Q=H[1],q=function(){return Q((function(n){return!n}))},F=function(n){u("/tv/show/".concat(n))},T=c||l||j;return Object(Xn.jsx)(_t,{children:T?Object(Xn.jsx)(It,{children:"Loading..."}):Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsxs)(Ct,{bgPhoto:y((null===i||void 0===i?void 0:i.results[0].backdrop_path)||""),children:[Object(Xn.jsx)(St,{children:null===i||void 0===i||null===(n=i.results[0])||void 0===n?void 0:n.name}),Object(Xn.jsx)(Pt,{children:null===i||void 0===i||null===(t=i.results[0])||void 0===t?void 0:t.overview})]}),Object(Xn.jsxs)(Lt,{children:[Object(Xn.jsx)("h1",{children:"Today Tv Shows (".concat(6*k+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(Ht,{variants:Et,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===i||void 0===i?void 0:i.results.slice(1).slice(6*k,6*k+6).map((function(n){return Object(Xn.jsx)(Kt,{whileHover:"hover",layoutId:String(n.id),initial:"normal",onClick:function(){return F(n.id)},variants:Wt,transition:{type:"tween"},bgPhoto:n.backdrop_path?y(n.backdrop_path,"w500"):y(n.poster_path,"w500"),children:Object(Xn.jsx)(Qt,{variants:Yt,children:Object(Xn.jsx)("h4",{children:n.name})})},n.id)}))},k)}),Object(Xn.jsx)(qt,{onClick:function(){if(i){if(K)return;q();var n=(null===i||void 0===i?void 0:i.results.length)-2,t=Math.floor(n/6)-1;w((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsxs)(Rt,{children:[Object(Xn.jsx)("h1",{children:"Popular Tv Shows (".concat(6*I+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(Ht,{variants:Et,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===a||void 0===a?void 0:a.results.slice(2).slice(6*I,6*I+6).map((function(n){return Object(Xn.jsx)(Kt,{layoutId:String(n.id),whileHover:"hover",initial:"normal",variants:Wt,transition:{type:"tween"},onClick:function(){return F(n.id)},bgPhoto:n.backdrop_path?y(n.backdrop_path,"w500"):Bn,children:Object(Xn.jsx)(Qt,{variants:Yt,children:Object(Xn.jsx)("h4",{children:n.name})})},n.id)}))},I)}),Object(Xn.jsx)(qt,{onClick:function(){if(a){if(K)return;q();var n=(null===a||void 0===a?void 0:a.results.length)-2,t=Math.floor(n/6)-1;C((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsxs)(Mt,{children:[Object(Xn.jsx)("h1",{children:"TopRated Tv Shows (".concat(6*L+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(Ht,{variants:Et,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===s||void 0===s?void 0:s.results.slice(2).slice(6*L,6*L+6).map((function(n){return Object(Xn.jsx)(Kt,{layoutId:String(n.id),whileHover:"hover",initial:"normal",variants:Wt,transition:{type:"tween"},onClick:function(){return F(n.id)},bgPhoto:n.backdrop_path?y(n.backdrop_path,"w500"):Bn,children:Object(Xn.jsx)(Qt,{variants:Yt,children:Object(Xn.jsx)("h4",{children:n.name})})},n.id)}))},L)}),Object(Xn.jsx)(qt,{onClick:function(){if(s){if(K)return;q();var n=(null===s||void 0===s?void 0:s.results.length)-2,t=Math.floor(n/6)-1;R((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsx)(Yn.a,{children:p?Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)(Ft,{onClick:function(){u(-1)},exit:{opacity:0},animate:{opacity:1}}),Object(Xn.jsx)(Tt,{style:{top:g.get()+100,bottom:g.get()+100},layoutId:p.params.tvId,children:Object(Xn.jsx)(jt,{})})]}):null})]})})},Xt=d.c.div(sn||(sn=Object(i.a)(["\n  background-color: black;\n  margin: 100px 0px;\n  width: 100%;\n"]))),Dt=d.c.div(hn||(hn=Object(i.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Jt=d.c.div(bn||(bn=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 60px;\n"]))),Ut=Object(d.c)(En.a.div)(jn||(jn=Object(i.a)(["\n  width: 300px;\n  height: 200px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  margin-bottom: 20px;\n\n  &:nth-child(4n-3) {\n    transform-origin: center left;\n  }\n\n  &:nth-child(4n) {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),At=d.c.div(un||(un=Object(i.a)(["\n  background-color: red;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    color: white;\n    font-size: 12px;\n    font-weight: bold;\n  }\n"]))),Nt=Object(d.c)(En.a.div)(pn||(pn=Object(i.a)(["\n  padding: 20px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 300px;\n  bottom: 0;\n\n  h4 {\n    text-align: center;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.black.darker})),Vt=Object(d.c)(En.a.div)(gn||(gn=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Gt=Object(d.c)(En.a.div)(vn||(vn=Object(i.a)(["\n  position: absolute;\n  width: 50vw;\n  height: 80vh;\n  background-color: ",";\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  overflow-y: scroll;\n"])),(function(n){return n.theme.black.darker})),Zt={normal:{scale:1},hover:{scale:1.3,y:-30,transition:{delay:.5,duration:.3,type:"tween"}}},$t={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},ne=function(){var n=Object(h.g)(),t=Object(h.f)("/search/movies/:movieId");console.log(t);var e=Object(h.f)("/search/tv/:tvId");console.log(e);var i=Object(Wn.a)().scrollY,o=Object(h.e)(),c=new URLSearchParams(o.search).get("keyword"),r=Object(b.useQuery)(["search",c],(function(){return function(n){return fetch("".concat(u,"/search/multi?api_key=").concat(j,"&language=ko-KR&query=").concat(n)).then((function(n){return n.json()}))}(c)})),a=r.data,l=r.isLoading,d=function(){n(-1)};return Object(Xn.jsx)(Xt,{children:l?Object(Xn.jsx)(Dt,{children:"Loading..."}):Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)(Jt,{children:null===a||void 0===a?void 0:a.results.map((function(t){return Object(Xn.jsx)(Yn.a,{children:Object(Xn.jsxs)(Ut,{initial:"normal",whileHover:"hover",variants:Zt,onClick:function(){return e=t.media_type,i=t.id,console.log(e),void n("movie"===e?"/search/movies/".concat(i):"/search/tv/".concat(i));var e,i},bgPhoto:t.backdrop_path?y(t.backdrop_path,"w500"):Bn,children:[Object(Xn.jsxs)(At,{children:[" ",Object(Xn.jsx)("span",{children:t.media_type})]}),Object(Xn.jsx)(Nt,{variants:$t,children:Object(Xn.jsx)("h4",{children:t.title?t.title:t.name})})]},t.id)})}))}),Object(Xn.jsxs)(Yn.a,{children:[t?Object(Xn.jsx)(Vt,{onClick:d,exit:{opacity:0},animate:{opacity:1},children:Object(Xn.jsx)(Gt,{style:{top:i.get()+100,bottom:i.get()+100},layoutId:t.params.movieId,children:Object(Xn.jsx)(jt,{})})}):null,e?Object(Xn.jsx)(Vt,{onClick:d,exit:{opacity:0},animate:{opacity:1},children:Object(Xn.jsx)(Gt,{style:{top:i.get()+100,bottom:i.get()+100},layoutId:e.params.tvId,children:Object(Xn.jsx)(jt,{})})}):null]})]})})},te=e(13),ee=e(122),ie=e(84),oe=Object(d.c)(En.a.nav)(xn||(xn=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n  font-size: 13px;\n  padding: 20px 60px;\n  color: white;\n"]))),ce=d.c.div(On||(On=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),re=Object(d.c)(En.a.svg)(fn||(fn=Object(i.a)(["\n  margin-right: 50px;\n  width: 95px;\n  height: 25px;\n  fill: ",";\n  path {\n    stroke-width: 6px;\n    stroke: white;\n  }\n"])),(function(n){return n.theme.red})),ae=d.c.ul(mn||(mn=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),le=d.c.li(yn||(yn=Object(i.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),de=d.c.form(kn||(kn=Object(i.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),se=Object(d.c)(En.a.span)(wn||(wn=Object(i.a)(["\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 4px;\n  bottom: -6px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.red})),he=Object(d.c)(En.a.input)(zn||(zn=Object(i.a)(["\n  transform-origin: right center;\n  position: absolute;\n  right: 0px;\n  padding: 5px 10px;\n  padding-left: 40px;\n  color: white;\n  z-index: -1;\n  font-size: 16px;\n  background-color: transparent;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),be={start:{stroke:"white",strokeWidth:2,fill:"rgba(255,255,255,0)",pathLength:0},end:{fill:"rgb(253, 6, 6)",pathLength:1}},je={top:{backgroundColor:"rgba(0,0,0,0)"},scroll:{backgroundColor:"rgba(0,0,0,1)"}},ue=function(){var n=Object(o.useState)(!1),t=Object(wt.a)(n,2),e=t[0],i=t[1],c=Object(h.f)("/"),r=Object(h.f)("/movies"),a=Object(h.f)("/tv"),l=Object(ee.a)(),d=Object(Wn.a)().scrollY,b=Object(ee.a)();Object(o.useEffect)((function(){d.onChange((function(){d.get()>80?b.start("scroll"):b.start("top")}))}),[d,b]);var j=Object(h.g)(),u=Object(ie.a)(),p=u.register,g=u.setValue,v=u.handleSubmit;return Object(Xn.jsxs)(oe,{variants:je,animate:b,initial:"top",children:[Object(Xn.jsxs)(ce,{children:[Object(Xn.jsx)(re,{whileHover:"active",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(Xn.jsx)(En.a.path,{variants:be,initial:"start",animate:"end",transition:{default:{duration:5},fill:{duration:1,delay:3}},d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(Xn.jsxs)(ae,{children:[Object(Xn.jsx)(le,{children:Object(Xn.jsxs)(s.b,{to:"/",children:[" ","Home ","/"===(null===c||void 0===c?void 0:c.pathname)&&Object(Xn.jsx)(se,{layoutId:"circle"})]})}),Object(Xn.jsx)(le,{children:Object(Xn.jsxs)(s.b,{to:"/movies",children:[" ","Movie"," ","/movies"===(null===r||void 0===r?void 0:r.pathname)&&Object(Xn.jsx)(se,{layoutId:"circle"})]})}),Object(Xn.jsx)(le,{children:Object(Xn.jsxs)(s.b,{to:"/tv",children:[" ","Tv Shows ",a&&Object(Xn.jsx)(se,{layoutId:"circle"})," "]})})]})]}),Object(Xn.jsx)(ce,{children:Object(Xn.jsxs)(de,{onSubmit:v((function(n){j("/search?keyword=".concat(n.keyword)),g("keyword","")})),children:[Object(Xn.jsx)(En.a.svg,{onClick:function(){e?l.start({scaleX:0}):l.start({scaleX:1}),i((function(n){return!n}))},transition:{type:"linear"},animate:{x:e?-185:0},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(Xn.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(Xn.jsx)(he,Object(te.a)(Object(te.a)({},p("keyword",{required:!0,minLength:2})),{},{animate:l,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search Movie or TvShow"}))]})})]})},pe=d.c.div(_n||(_n=Object(i.a)(["\n  background-color: black;\n  padding-bottom: 300px;\n  overflow: hidden;\n"]))),ge=d.c.div(In||(In=Object(i.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ve=d.c.div(Cn||(Cn=Object(i.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),xe=d.c.h2(Sn||(Sn=Object(i.a)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n"]))),Oe=d.c.p(Pn||(Pn=Object(i.a)(["\n  font-size: 18px;\n  width: 50%;\n"]))),fe=d.c.div(Ln||(Ln=Object(i.a)(["\n  position: relative;\n  top: -100px;\n"]))),me=d.c.div(Rn||(Rn=Object(i.a)(["\n  margin-top: 200px;\n  position: relative;\n"]))),ye=d.c.div(Mn||(Mn=Object(i.a)(["\n  margin-top: 300px;\n  position: relative;\n"]))),ke=Object(d.c)(En.a.div)(Hn||(Hn=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 5px;\n  position: absolute;\n  width: 100%;\n"]))),we=Object(d.c)(En.a.div)(Kn||(Kn=Object(i.a)(["\n  background-color: white;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),ze=Object(d.c)(En.a.div)(Qn||(Qn=Object(i.a)(["\n  padding: 20px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.black.darker})),_e=Object(d.c)(En.a.div)(qn||(qn=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Ie=Object(d.c)(En.a.div)(Fn||(Fn=Object(i.a)(["\n  position: absolute;\n  width: 50vw;\n  height: 80vh;\n  background-color: ",";\n\n  overflow-y: scroll;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n"])),(function(n){return n.theme.black.darker})),Ce=d.c.div(Tn||(Tn=Object(i.a)(["\n  width: 50px;\n  height: 200px;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n"]))),Se={hidden:{x:window.outerWidth-5},visible:{x:0},exit:{x:5-window.outerWidth}},Pe={normal:{scale:1},hover:{scale:1.3,y:-50,borderRadius:15,overflow:"hidden",transition:{delay:.5,duration:.3,type:"tween"}}},Le={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},Re=function(){var n,t,e=Object(h.g)(),i=Object(h.f)("/movies/:movieId"),c=Object(Wn.a)().scrollY,r=Object(b.useQuery)(["movies","nowPlaying"],g),a=r.data,l=r.isLoading,d=Object(b.useQuery)(["movie","topMovie"],v),s=d.data,j=d.isLoading,u=Object(b.useQuery)(["movie","upcoming"],x),p=u.data,O=u.isLoading,f=Object(o.useState)(0),m=Object(wt.a)(f,2),k=m[0],w=m[1],z=Object(o.useState)(0),_=Object(wt.a)(z,2),I=_[0],C=_[1],S=Object(o.useState)(0),P=Object(wt.a)(S,2),L=P[0],R=P[1],M=Object(o.useState)(!1),H=Object(wt.a)(M,2),K=H[0],Q=H[1],q=function(){return Q((function(n){return!n}))},F=function(n){e("/movies/".concat(n))},T=l||j||O;return Object(Xn.jsx)(pe,{children:T?Object(Xn.jsx)(ge,{children:"Loading...."}):Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsxs)(ve,{bgPhoto:y((null===a||void 0===a?void 0:a.results[0].backdrop_path)||""),children:[Object(Xn.jsx)(xe,{children:null===a||void 0===a||null===(n=a.results[0])||void 0===n?void 0:n.title}),Object(Xn.jsx)(Oe,{children:null===a||void 0===a||null===(t=a.results[0])||void 0===t?void 0:t.overview})]}),Object(Xn.jsxs)(fe,{children:[Object(Xn.jsx)("h1",{children:"Now Playing Movie (".concat(6*k+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(ke,{variants:Se,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===a||void 0===a?void 0:a.results.slice(1).slice(6*k,6*k+6).map((function(n){return Object(Xn.jsx)(we,{layoutId:String(n.id),whileHover:"hover",initial:"normal",variants:Pe,transition:{type:"tween"},onClick:function(){return F(n.id)},bgPhoto:y(n.backdrop_path,"w500"),children:Object(Xn.jsx)(ze,{variants:Le,children:Object(Xn.jsx)("h4",{children:n.title})})},n.id)}))},k)}),Object(Xn.jsx)(Ce,{onClick:function(){if(a){if(K)return;q();var n=(null===a||void 0===a?void 0:a.results.length)-2,t=Math.floor(n/6)-1;w((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsxs)(me,{children:[Object(Xn.jsx)("h1",{children:"UP-coming Movie (".concat(6*L+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(ke,{variants:Se,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===p||void 0===p?void 0:p.results.slice(2).slice(6*L,6*L+6).map((function(n){return Object(Xn.jsx)(we,{layoutId:String(n.id),whileHover:"hover",initial:"normal",variants:Pe,transition:{type:"tween"},onClick:function(){return F(n.id)},bgPhoto:n.backdrop_path?y(n.backdrop_path,"w500"):Bn,children:Object(Xn.jsx)(ze,{variants:Le,children:Object(Xn.jsx)("h4",{children:n.title})})},n.id)}))},L)}),Object(Xn.jsx)(Ce,{onClick:function(){if(p){if(K)return;q();var n=(null===p||void 0===p?void 0:p.results.length)-2,t=Math.floor(n/6)-1;R((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsxs)(ye,{children:[Object(Xn.jsx)("h1",{children:"TOP Rated Movie (".concat(6*I+6,")")}),Object(Xn.jsx)(Yn.a,{initial:!1,onExitComplete:q,children:Object(Xn.jsx)(ke,{variants:Se,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===s||void 0===s?void 0:s.results.slice(2).slice(6*I,6*I+6).map((function(n){return Object(Xn.jsx)(we,{layoutId:String(n.id),whileHover:"hover",initial:"normal",variants:Pe,transition:{type:"tween"},onClick:function(){return F(n.id)},bgPhoto:y(n.backdrop_path,"w500"),children:Object(Xn.jsx)(ze,{variants:Le,children:Object(Xn.jsx)("h4",{children:n.title})})},n.id)}))},I)}),Object(Xn.jsx)(Ce,{onClick:function(){if(s){if(K)return;q();var n=(null===s||void 0===s?void 0:s.results.length)-2,t=Math.floor(n/6)-1;C((function(n){return n===t?0:n+1}))}},children:Object(Xn.jsx)(zt.a,{style:{fontSize:30}})})]}),Object(Xn.jsx)(Yn.a,{children:i?Object(Xn.jsxs)(Xn.Fragment,{children:[Object(Xn.jsx)(_e,{onClick:function(){return e(-1)},exit:{opacity:0},animate:{opacity:1}}),Object(Xn.jsx)(Ie,{style:{top:c.get()+100,bottom:c.get()+100},layoutId:i.params.movieId,children:Object(Xn.jsx)(jt,{})})]}):null})]})})};var Me,He=function(){return Object(Xn.jsxs)(s.a,{basename:"/ts-animation",children:[Object(Xn.jsx)(ue,{}),Object(Xn.jsx)(h.c,{children:Object(Xn.jsx)(h.a,{path:"/movies",element:Object(Xn.jsx)(Re,{}),children:Object(Xn.jsx)(h.a,{path:"/movies/:movieId",element:Object(Xn.jsx)(jt,{})})})}),Object(Xn.jsx)(h.c,{children:Object(Xn.jsx)(h.a,{path:"/tv",element:Object(Xn.jsx)(Bt,{}),children:Object(Xn.jsx)(h.a,{path:"/tv/show/:tvId",element:Object(Xn.jsx)(jt,{})})})}),Object(Xn.jsx)(h.c,{children:Object(Xn.jsxs)(h.a,{path:"/search",element:Object(Xn.jsx)(ne,{}),children:[Object(Xn.jsx)(h.a,{path:"/search/movies/:movieId",element:Object(Xn.jsx)(jt,{})}),Object(Xn.jsx)(h.a,{path:"/search/tv/:tvId",element:Object(Xn.jsx)(jt,{})})]})}),Object(Xn.jsx)(h.c,{children:Object(Xn.jsxs)(h.a,{path:"/",element:Object(Xn.jsx)(kt,{}),children:[Object(Xn.jsx)(h.a,{path:"/movie/:movieId",element:Object(Xn.jsx)(jt,{})}),Object(Xn.jsx)(h.a,{path:"/tv/:tvId",element:Object(Xn.jsx)(jt,{})})]})})]})},Ke=Object(d.b)(Me||(Me=Object(i.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Oswald', sans-serif;\n  color:",";\n  line-height: 1.2;\n background-color: black;\n  \n}\na {\n  text-decoration:none;\n  color: inherit;\n}\n\n\n"])),(function(n){return n.theme.white.darker})),Qe=new b.QueryClient;a.a.render(Object(Xn.jsx)(c.a.StrictMode,{children:Object(Xn.jsx)(l.a,{children:Object(Xn.jsx)(b.QueryClientProvider,{client:Qe,children:Object(Xn.jsxs)(d.a,{theme:{red:"#E51013",black:{veryDark:"#040714",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(Xn.jsx)(Ke,{}),Object(Xn.jsx)(He,{})]})})})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.f8fcb30d.chunk.js.map