/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
window.__qc=function(d){if(d.__qc)return d.__qc;var ma="a ce cm dst enc fpa fpan je ns ogl rf tzo sr".split(" "),u=d.document,C=d.navigator,X="4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d".split(" "),na=!1,oa=!1,Y=0,Z=[],Ma=[],M=[],Na={tcYgbCswcTSeq:1,"01-0VIaSjnOLg":1,aD1qr93XuF6aC:1,"56WJ0KtIxWJ_2":1,T1nhLcmCjVzQS:1,zddNYNtUkUhdQ:1,"59TntzuqummDw":1,P7x87XHnVfbWr:1,HGAVM7nQJ_sep:1,
"w9vzus-GKCA0U":1,"00TsOkvHvnsZU":1,effSsmMYCbAck:1,PFW5FesqXn206:1,"0dYLvhSGGqUWo":1,c1rF4kxgLUzNc:1,"5brKQLtleyIQU":1,"mEzuYq24VEJ-3":1,"57OGVHgSOoedo":1,"e7wR0qsM6-pDa":1,"8tgFhCTDYhV2V":1,"82MbSinIaQJw2":1,buQ2dAnrdTGCS:1,"49SVsgIZlUqPk":1,eeFYJkotb1rUU:1,EzVU5HfAMVqEV:1,"45nh8QKbsf2Xk":1,sLJ2v5QaN4z2Y:1,"5cvC4NOeGmtNA":1,"573scDfDoUH6o":1,"915Y6SMHQQJHI":1,z0zMG4nCgXzzj:1,"124BfeS-bwiSE":1,"ZzStSGgW6hG-4":1,KUMT4fYgcdEeg:1,fug7wP0GuN1h6:1,cd12aNCzw_ZaB:1,"51zXP5Cc9sxvQ":1,"4dIM5nVs2rFio":1,"8fZNjMQsH1Ews":1,
C6W3aFrWFMS7m:1,N7ekbgK3G3jrt:1,dfQGRefil9mes:1,"9axVJDmh4EHIM":1,NPcfSf1E0V1T1:1,"72V4-XKpaKDrE":1,"8cV3w6ZJH0sXI":1,sHwqAaPHqVjee:1,b15U9CAASyBMc:1,"32B7jMG1UAajk":1},F=[],A={},N=0,G=[],D=null,aa={},v={},pa=null,q,ba=[].slice,qa,ca,O,p,z,da,P,ra,sa,ta,H,ea,Q,R,ua,va,I,wa,xa,ya,za,r,Aa,B,Ba,S,Ca,Da,fa,Ea,Fa,ga,w,Ga,J,Ha,T,Ia,Ja,U,Ka,ha,ia,La,ja,E,V,K,L,ka,la,W,t=function(a){try{return{init:R,hash:Q,push:ua,rules:Ia,hasRules:U,defaults:La,__qc:function(){return!0}}[a].apply(null,ba.call(arguments,
1))}catch(b){return!1}};t.evts=0;t.v=2;t.SD=X;t.qpixelsent=[];T=function(a){var b=a?a.length||0:0,c;for(c=0;c<b;c++)if(!a[c])return!1;return!0};ia=function(a){(a=a||d._qacct)&&(ga(F,a)||F.push(a))};ga=function(a,b){var c=a.length,e;for(e=0;e<c;e++)if(a[e]===b)return!0;return!1};J=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};Ha=function(a){var b,c;b=J(a);if("array"===b)return a.slice(0);if("object"===b){b={};for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}return"string"===
b?""+a:a};ua=function(a,b){r(a,b)};U=function(a){return ga(M,a)};La=function(a,b){var c;a&&((c=aa[a])&&(b=L(b,c)),b.qacct&&delete b.qacct,aa[a]=b)};ja=function(a){var b,c;if(p(a))for(b in a)if("string"==typeof a[b]){b=a.event||"load";c=a.media||"webpage";"rule"!==b&&"load"!==b||"webpage"!==c&&"ad"!==c?r(a):(c=a.qacct||d._qacct,a.qacct=c,b=(b=v[c])?L(b,a):a,v[c]=b);ia(a.qacct);break}else"object"==typeof a[b]&&null!=a[b]&&ja(a[b])};L=function(a,b){var c={};c.qacct=a.qacct||b.qacct;c.event="load"===
a.event||"load"===b.event?"load":a.event&&b.event?a.event||b.event:null;c.media=null;c.media="webpage"===a.media||"webpage"===b.media?"webpage":"ad"===a.media||"ad"===b.media?"ad":a.media||b.media;fa(c,a,b);fa(c,b,a);c.event||delete c.event;c.media||delete c.media;return c};fa=function(a,b,c){var e,d,g,l,n,k;for(e in b)b.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&(d=b[e],g=c[e],l="",n=!!d&&"string"==typeof d,k=!!g&&"string"==typeof g,n&&(l=d),n&&k&&(l+=","),k&&(l+=g),a[e]=l)};E=function(){var a=[],
b,c;if(!(0<N)){Ga();for(b in v)v.hasOwnProperty(b)&&v[b]&&(c=v[b],a.push(c),delete v[b]);1==a.length&&r(a[0]);1<a.length&&r(a)}};V=function(){var a=[],b,c,e;e=F.slice(0);for(b=0;b<e.length;b++)c=e[b],Na.hasOwnProperty(c.substring(2))?A[c]=5:U(c)||a.push(c);if(0===a.length)E();else for(b=0;b<a.length;b++)c=a[b],M.push(c),Ea(c)};Fa=function(){for(var a;G[0]&&("loaded"==G[0].readyState||"complete"==G[0].readyState);)a=G.shift(),a.onreadystatechange=null,D.parentNode.insertBefore(a,D),K()};Ea=function(a){var b,
c;b=("https:"===u.location.protocol?"https://":"http://")+"rules.quantcount.com/rules-"+a+".js";D=D||u.scripts[0];N++;c=u.createElement("script");"async"in c?(c.src=b,c.async=!1,c.onload=function(){A[a]=0;K()},c.onerror=function(){A[a]=1;K()},D.parentNode.insertBefore(c,D)):c.readyState?(A[a]=2,G.push(c),c.onreadystatechange=Fa,c.src=b):(A[a]=4,K())};K=function(){N-=0<N?1:0;E()};Ia=function(){var a=!0,b,c,e;if(arguments.length){e=function(b){a?ja(b):r(b,!0)};for(b=0;b<arguments.length;b++)c=ba.call(arguments[b],
0),c.splice(1,0,e),Ja.apply(null,c);a=!1;na&&E()}};Ja=function(a,b){var c=[],e=[],d=b||r,g,l,n,k,m;if((g=ba.call(arguments,2))&&g.length){l=g[0]||T;n=g[1];k=g[2];g=k.length;for(m=0;m<g;m++)c.push(!1),e.push(null);c={p:a,f:c,r:l,c:k,a:n,v:e};U(a)||M.push(a);Ma.push(c);Ka(c,d)}else M.push(a),A[a]=6};Ka=function(a,b){var c=a?a.c?a.c.length:0:0,e;for(e=0;e<c;e++)(function(c){var e,d;try{e=a.c[c][0],d=a.c[c].slice(1),d.splice(0,0,function(e){a.f[c]=!0;a.v[c]=e;ha(a,b)}),e.apply(null,d)}catch(n){a.f[c]=
!0,a.v[c]=!1,ha(a,b)}})(e)};ha=function(a,b){var c=a.a,e=a.v,d=a.r||T,g,l,n,k,m,f;(g=T(a.f))&&(g=g&&d(e));if(g)for(e=0;e<c.length;e++)try{l=c[e][0];n=1<c[e].length?c[e].slice(1):[];n=n.concat(a.v);k=l.apply(null,n);m={qacct:a.p,event:"rule"};for(f in k)k.hasOwnProperty(f)&&"qacct"!==f&&(m[f]=k[f]);b(m)}catch(Oa){}};qa=function(){return ca(0)!==ca(6)?1:0};ca=function(a){a=new Date(2E3,a,1,0,0,0,0);var b=a.toGMTString(),b=new Date(b.substring(0,b.lastIndexOf(" ")-1));return a-b};O=function(a){return a.replace(/\./g,
"%2E").replace(/,/g,"%2C")};z="function"===typeof encodeURIComponent?encodeURIComponent:O;p=function(a){return"undefined"!=typeof a&&null!=a};da=function(){return Math.round(2147483647*Math.random())};P=function(a){var b="",c=u.cookie,e;if(!c)return b;e=c.indexOf(a+"=");a=e+a.length+1;-1<e&&(b=c.indexOf(";",a),0>b&&(b=c.length),b=c.substring(a,b));return b};ra=function(){var a="",b=H(),c,e,d;if(1===Y)return";fpan=u;fpa=";c=Q(b);for(e=0;e<X.length;e++)if(X[e]===c)return";fpan=u;fpa=";c=new Date;e=
P("__qca");if(0<e.length){try{d=+e.split("-")[2],338688E5<c-d&&(u.cookie=["__qca=",e,"; expires=",(new Date(d+338688E5)).toGMTString(),"; path=/; domain=",b].join(""))}catch(g){}a+=";fpan=0;fpa="+e}0===P("__qca").length&&(e="P0-"+da()+"-"+c.getTime(),u.cookie=["__qca=",e,"; expires=",(new Date(c.getTime()+338688E5)).toGMTString(),"; path=/; domain=",b].join(""),e=P("__qca"),a=0<e.length?a+(";fpan=1;fpa="+e):a+";fpan=u;fpa=");return a};sa=function(a){u.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+
H()};H=function(){var a,b,c,d;a=u.domain;"www."===a.substring(0,4)&&(a=a.substring(4,a.length));b=a.split(".");d=b.length;if(3>d)return a;c=b[d-1];return 3>c.length?a:a=b[d-2]+"."+c};ea=function(a,b){var c;for(c=0;c<b.length;c++)a^=b.charCodeAt(c),a+=(a<<1)+(a<<4)+(a<<7)+(a<<8)+(a<<24);return a};Q=function(a){var b;b=ea(2166136261,a);a=ea(3386659096,a);return Math.round(Math.abs(b*a)/65536).toString(16)};Ca=function(a){var b,c;if(a&&"object"===J(a))for(c=0;c<ma.length;c++)b=ma[c],a.hasOwnProperty(b)&&
a[b]&&delete a[b]};S=function(a,b,c){var e={},h,g=null,l="webpage",n="load",k={},m,f;h=b?b.qacct||d._qacct:d._qacct;m=v[h];b?m&&(b=L(b,m)):b=m;h&&delete v[h];Ca(b);if(null!=b)for(f in b)k[f]=!0,b.hasOwnProperty(f)&&"string"===typeof f&&"string"===typeof b[f]&&("uid"===f||"uh"===f?(va()||(g=Q(b[f])),delete b[f]):"qacct"!==f&&(0<b[f].length?e[f+a]=z(b[f]):k[f]=!1,"media"===f&&(l=b[f]),"event"===f&&(n=b[f])));if("string"!==typeof h){if(!p(d._qacct)||0===d._qacct.length)return null;h=d._qacct}if(h){if(m=
aa[h])for(f in m)"string"===typeof f&&m.hasOwnProperty(f)&&!k[f]&&(e[f+a]=z(m[f]),"media"===f&&(l=m[f]),"event"===f&&(n=m[f]))}else return null;k=A[h];p(k)||(k=3);e["rf"+a]=""+k;"string"===typeof g&&(b.uh=g,e["uh"+a]=z(g));if("webpage"===l&&"load"===n){for(b=0;b<t.qpixelsent.length;b++)if(t.qpixelsent[b]===h&&!c)return null;t.qpixelsent.push(h)}"ad"===l&&(Y=1);e["a"+a]=h;return e};Ba=function(a){var b=[],c;for(c in a)a[c]&&a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return b.join(";")};Da=function(){var a=
u.getElementsByTagName("meta"),b="",c,d,h,g;for(c=0;c<a.length;c++){h=a[c];if(1E3<=b.length)return b;p(h)&&p(h.attributes)&&p(h.attributes.property)&&p(h.attributes.property.value)&&p(h.content)&&(d=h.attributes.property.value,h=h.content,3<d.length&&"og:"===d.substring(0,3)&&(0<b.length&&(b+=","),g=80<h.length?80:h.length,b+=O(d.substring(3,d.length))+"."+O(h.substring(0,g))))}return z(b)};ta=function(a){return"object"===typeof a?["p","approved"===a.consent?"a":"d","asserted"===a.source?"e":"i"].join(""):
""};va=function(){var a=!1;p(d.external)&&(a=d.external,a="function"===typeof a.InPrivateFilteringEnabled&&!0===a.InPrivateFilteringEnabled());return a||"1"==C.doNotTrack||"yes"===C.doNotTrack||"1"==C.msDoNotTrack};r=function(a,b){var c="function"===typeof encodeURIComponent?"n":"s",e=da(),h="",g="",l="",n="",k="",m="u",f="1",r=[],x,y,q,v,w;Y=0;p(t.qpixelsent)||(t.qpixelsent=[]);if(p(a))if(x=J(a),"object"===x)y=S("",a,b);else{if("array"===x)for(x=0;x<a.length;x++)q=S("."+(x+1),a[x],b),y=0===x?q:L(y,
q)}else"string"===typeof _qacct&&(y=S("",null,b));y&&(x=C.cookieEnabled?"1":"0","undefined"!=typeof C.javaEnabled&&(m=C.javaEnabled()?"1":"0"),p(d._qmeta)&&(g=";m="+z(d._qmeta),d._qmeta=null),self.screen&&(h=screen.width+"x"+screen.height+"x"+screen.colorDepth),q=new Date,v=qa(),w=ra(),d.location&&d.location.href&&(l=z(d.location.href)),u&&u.referrer&&(k=z(u.referrer)),d.self===d.top&&(f="0"),y.url?n=l:y.url=l,y.ref||(y.ref=k||""),l=Da(),k=Ba(y),r.push("/pixel;r="+e+";"+k+w+";ns="+f+";ce="+x),r.push((y.ref?
"":";ref=")+";je="+m+";sr="+h+";enc="+c+";dst="+v+";et="+q.getTime()+";tzo="+q.getTimezoneOffset()+(n?";ourl="+n:"")+g+";ogl="+l),Z.push(r),B())};Aa=function(a){var b=new Image;a=[d.location.protocol,"//pixel.",wa(q)?"quantserve.com":"quantcount.com",a[0],";cm=",ta(q),a[1]].join("");b.alt="";b.src=a;b.onload=function(){b&&"number"==typeof b.width&&3===b.width&&sa("__qca")}};B=function(){if(q)for(;Z.length;)Aa(Z.shift());else za()};wa=function(a){return!0===a||1===a||1===a||p(a)&&"approved"===a.consent?
!0:!1};za=function(){if(!p(q)){if(d.top===d.self){if("object"===typeof PrivacyManagerAPI&&"function"===typeof PrivacyManagerAPI.callApi){xa("getConsent","advertising");return}}else if(d.postMessage&&"object"===typeof JSON){ya("getConsent","advertising");return}q=1}B()};xa=function(a,b){q=PrivacyManagerAPI.callApi(a,"quantserve.com",H(),"truste.com",b);B()};ya=function(a,b){var c={PrivacyManagerAPI:{timestamp:(new Date).getTime(),action:a,self:"quantserve.com",domain:H(),authority:"truste.com",type:b}};
if(d.addEventListener)d.addEventListener("message",I,!1);else if(d.attachEvent)d.attachEvent("onmessage",I);else{q=!0;B();return}try{d.top.postMessage(JSON.stringify(c),"*")}catch(e){}pa=setTimeout(function(){p(q)||(q=!0,B())},25)};I=function(a){var b=null;if(a.source===window.top){try{b="object"===typeof JSON&&JSON.parse(a.data)}catch(c){}b&&"object"===typeof b.PrivacyManagerAPI&&(clearTimeout(pa),d.removeEventListener?window.removeEventListener("message",I,!1):d.detachEvent&&window.detachEvent("onmessage",
I),q=b.PrivacyManagerAPI,B())}};ka=function(){var a=arguments,b,c;w([].slice.call(a));for(c=0;c<a.length;c++)b=a[c],r(b);F.length?V():E()};w=function(a){var b=J(a);if("array"===b)for(b=0;b<a.length;b++)w(a[b]);else"object"===b&&ia(a.qacct||d._qacct)};Ga=function(){var a;oa||d._qevents.length||d.ezt.length||"undefined"===typeof _qacct||(r({qacct:d._qacct}),oa=!0);if(!t.evts){for(a in d._qevents)d._qevents.hasOwnProperty(a)&&r(d._qevents[a]);for(a in d.ezt)d.ezt.hasOwnProperty(a)&&r(d.ezt[a]);d._qevents=
{push:ka};d.ezt.push=function(){var a=arguments,c;if(p(d.queueManager))for(c=0;c<a.length;c++)d.queueManager.push(a[c]);else ka.apply(this,arguments)};t.evts=1}};W=function(a){var b;a&&(b=Ha(a),w(a),d._qevents.push(b))};la=function(a){a.push=function(){w([].slice.call(arguments));V();return[].push.apply(a,arguments)}};R=function(){p(d._qevents)||(d._qevents=[]);p(d.ezt)||(d.ezt=[]);W(d._qoptions);W(d.qcdata);W(d.smarttagdata);t.evts||(la(d._qevents),la(d.ezt));w(d.ezt);w(d._qevents);w({qacct:d._qacct});
d._qoptions=null;F.length?V():E();na=!0};d.quantserve=d.quantserve||R;t.quantserve=R;return t}(window);quantserve();
