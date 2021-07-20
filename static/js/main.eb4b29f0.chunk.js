(this["webpackJsonpy-gateball"]=this["webpackJsonpy-gateball"]||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),i=a.n(r),l=(a(83),a(84),a(29)),j=a(10),s=a(144),d=a(145),b=a(63),o=a(9),u=a(16),h=a(146),m=a(139),O=a(140),x=a(141),p=a(142),f=a(143),y=a(147),v=a(74),k=a(1),g=function(e){return e>0?"+"+e.toString():e.toString()},F=function(e){var t=Math.floor(e/1e3);if(t<60)return"".concat(t,"\u79d2");var a=Math.floor(t/60);return"".concat(a,"\u5206")},C=[[-50,-100,-200],[-300,-400,-500],[-600,-800,-1e3],[-2e3,-3e3,1e3]],w=function(){return(Math.random()>.5?["\u5148\u653b","\u5f8c\u653b"]:["\u5f8c\u653b","\u5148\u653b"]).map((function(e){return{lp:8e3,turn:e}}))},L=function(e){var t=e.name,a=e.lp,n=Math.floor(a/80),c=a>4e3?"success":a>2e3?"warning":"danger";return Object(k.jsxs)("div",{className:"lp-parent bg-light text-black",children:[Object(k.jsx)("div",{className:"lp-header",children:t}),Object(k.jsx)(h.a,{variant:c,now:n}),Object(k.jsx)("div",{className:"lp",children:e.lp})]})},N=function(e){return Object(k.jsx)(m.a,{children:C.map((function(t){return Object(k.jsx)(O.a,{style:{padding:10},children:t.map((function(t){return Object(k.jsx)(x.a,{children:Object(k.jsx)(p.a,{variant:"outline-dark",style:{width:"100px",height:"50px"},onClick:function(){return e.addLP(t)},children:g(t)})})}))})}))})},M=w(),S=Object(v.a)({playerA:M[0],playerB:M[1],history:{logs:[],head:-1}}).useGlobalState,_=function(){var e=S("playerA"),t=Object(u.a)(e,2),a=t[0],n=t[1],r=S("playerB"),i=Object(u.a)(r,2),l=i[0],j=i[1],s=S("history"),d=Object(u.a)(s,2),h=d[0],v=d[1],C=function(e){var t=c.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1];return[function(){return Object(k.jsxs)(f.a,{show:n,children:[Object(k.jsx)(f.a.Header,{children:"New Game?"}),Object(k.jsxs)(f.a.Body,{children:["\u65b0\u3057\u3044\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",Object(k.jsx)("br",{}),"\u73fe\u5728\u306e\u30b2\u30fc\u30e0\u306f\u7d42\u4e86\u3055\u308c\u307e\u3059\u3002"]}),Object(k.jsxs)(f.a.Footer,{children:[Object(k.jsx)(p.a,{onClick:function(){e(),r(!1)},children:"\u306f\u3044"}),Object(k.jsx)(p.a,{variant:"secondary",onClick:function(){return r(!1)},children:"\u3044\u3044\u3048"})]})]})},function(){return r(!0)}]}((function(){var e=w();n(e[0]),j(e[1]),v({logs:[],head:-1})})),M=Object(u.a)(C,2),_=M[0],B=M[1],P=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return[function(e){var t=e.history,c=t.head,r=Date.now(),i=t.logs.map((function(e,t){var a=e.time,n=e.name,i=e.from,l=e.to;return Object(k.jsxs)(y.a.Item,{variant:t===c?"dark":"",children:[F(r-a),"\u524d: ",n," ",i," \u2192 ",l," (",g(l-i),")"]})})),l=function(){var e=t.logs.length,a=e-c-1;return c<=5?i.slice(0,10):a<=4?i.slice(Math.max(0,e-10)):i.slice(c-5,c+5)}().reverse();return Object(k.jsxs)(f.a,{show:a,children:[Object(k.jsx)(f.a.Header,{children:"\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8\u5909\u52d5\u30ed\u30b0"}),Object(k.jsx)(f.a.Body,{children:Object(k.jsx)(y.a,{children:l})}),Object(k.jsx)(f.a.Footer,{children:Object(k.jsx)(p.a,{onClick:function(){n(!1)},children:"\u9589\u3058\u308b"})})]})},function(){return n(!0)}]}(),A=Object(u.a)(P,2),D=A[0],E=A[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(m.a,{children:[Object(k.jsxs)(O.a,{children:[Object(k.jsx)(x.a,{children:Object(k.jsxs)("div",{className:"player",children:[Object(k.jsx)(L,{name:"\u897f",lp:a.lp}),Object(k.jsx)("div",{children:a.turn})]})}),Object(k.jsxs)(x.a,{children:[Object(k.jsx)(p.a,{onClick:B,children:"New"})," ",Object(k.jsx)(p.a,{onClick:function(){if(!(h.head<0)){var e=h.logs[h.head];"\u897f"===e.name?n(Object(o.a)(Object(o.a)({},a),{},{lp:e.from})):j(Object(o.a)(Object(o.a)({},l),{},{lp:e.from})),v(Object(o.a)(Object(o.a)({},h),{},{head:h.head-1}))}},disabled:h.head<0,children:"Undo"})," ",Object(k.jsx)(p.a,{onClick:function(){if(!(h.head>=h.logs.length-1)){var e=h.logs[h.head+1];"\u897f"===e.name?n(Object(o.a)(Object(o.a)({},a),{},{lp:e.to})):j(Object(o.a)(Object(o.a)({},l),{},{lp:e.to})),v(Object(o.a)(Object(o.a)({},h),{},{head:h.head+1}))}},disabled:h.head>=h.logs.length-1,children:"Redo"})," ",Object(k.jsx)(p.a,{onClick:E,children:"\u30ed\u30b0"})]}),Object(k.jsx)(x.a,{children:Object(k.jsxs)("div",{className:"player",children:[Object(k.jsx)("div",{children:l.turn}),Object(k.jsx)(L,{name:"\u6771",lp:l.lp})]})})]}),Object(k.jsxs)(O.a,{children:[Object(k.jsx)(x.a,{children:Object(k.jsx)(N,{addLP:function(e){var t=Math.max(0,a.lp+e);v({logs:[].concat(Object(b.a)(h.logs.slice(0,h.head+1)),[{time:Date.now(),name:"\u897f",from:a.lp,to:t}]),head:h.head+1}),n(Object(o.a)(Object(o.a)({},a),{},{lp:t}))}})}),Object(k.jsx)(x.a,{children:Object(k.jsx)(N,{addLP:function(e){var t=Math.max(0,l.lp+e);v({logs:[].concat(Object(b.a)(h.logs.slice(0,h.head+1)),[{time:Date.now(),name:"\u6771",from:l.lp,to:t}]),head:h.head+1}),j(Object(o.a)(Object(o.a)({},l),{},{lp:t}))}})})]})]}),Object(k.jsx)(_,{}),Object(k.jsx)(D,{history:h})]})},B=a(30),P=a.n(B),A=a(125),D=function(e){var t="\u300a".concat(e,"\u300b"),a=t.split("").map((function(e,a){return t.charCodeAt(a)})),n=A.convert(a,"EUCJP"),c=A.urlEncode(n);return Object(k.jsx)("a",{href:"https://yugioh-wiki.net/index.php?cmd=backup&page=".concat(c,"&age=1#content_1_0"),target:"_blank",rel:"noopener noreferrer",children:e})},E=[{name:"\u30ab\u30aa\u30b9\u30fb\u30bd\u30eb\u30b8\u30e3\u30fc \uff0d\u958b\u95e2\u306e\u4f7f\u8005\uff0d",lv:8,attribute:"\u5149",type:"\u6226\u58eb",atk:3e3,def:2500,num:1},{name:"\u4eba\u9020\u4eba\u9593\uff0d\u30b5\u30a4\u30b3\u30fb\u30b7\u30e7\u30c3\u30ab\u30fc",lv:6,attribute:"\u95c7",type:"\u6a5f\u68b0",atk:2400,def:1500,num:1},{name:"\u5929\u7a7a\u9a0e\u58eb\u30d1\u30fc\u30b7\u30a2\u30b9",lv:5,attribute:"\u5149",type:"\u5929\u4f7f",atk:1900,def:1400,num:1},{name:"\u30a4\u30b0\u30b6\u30ea\u30aa\u30f3\u30fb\u30e6\u30cb\u30d0\u30fc\u30b9",lv:4,attribute:"\u95c7",type:"\u7363\u6226\u58eb",atk:1800,effect_atk:1400,def:1900,num:1},{name:"\u970a\u6ec5\u8853\u5e2b \u30ab\u30a4\u30af\u30a6",lv:4,attribute:"\u95c7",type:"\u9b54\u6cd5\u4f7f\u3044",atk:1800,def:700,num:1},{name:"\u9b54\u5c0e\u6226\u58eb \u30d6\u30ec\u30a4\u30ab\u30fc",lv:4,attribute:"\u95c7",type:"\u9b54\u6cd5\u4f7f\u3044",atk:1600,effect_atk:1900,def:1e3,num:1},{name:"\u540c\u65cf\u611f\u67d3\u30a6\u30a3\u30eb\u30b9",lv:4,attribute:"\u6c34",type:"\u6c34",atk:1600,def:1e3,num:1},{name:"\u30d6\u30ec\u30a4\u30c9\u30ca\u30a4\u30c8",lv:4,attribute:"\u5149",type:"\u6226\u58eb",atk:1600,effect_atk:2e3,def:1e3,num:1},{name:"\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a",lv:4,attribute:"\u5730",type:"\u6226\u58eb",atk:1e3,def:1e3,num:1},{name:"\u7570\u6b21\u5143\u306e\u5973\u6226\u58eb",lv:4,attribute:"\u5149",type:"\u6226\u58eb",atk:1500,def:1600,num:3},{name:"\u9996\u9818\u30fb\u30b6\u30eb\u30fc\u30b0",lv:4,attribute:"\u95c7",type:"\u6226\u58eb",atk:1400,def:1500,num:1},{name:"\u30d5\u30a1\u30a4\u30d0\u30fc\u30dd\u30c3\u30c9",lv:3,attribute:"\u5730",type:"\u690d\u7269",atk:500,def:500,num:1},{name:"\u304a\u6ce8\u5c04\u5929\u4f7f\u30ea\u30ea\u30fc",lv:3,attribute:"\u5730",type:"\u9b54\u6cd5\u4f7f\u3044",atk:400,effect_atk:3400,def:1500,num:1},{name:"\u9b42\u3092\u524a\u308b\u6b7b\u970a",lv:3,attribute:"\u95c7",type:"\u30a2\u30f3\u30c7\u30c3\u30c8",atk:300,def:200,num:1},{name:"\u8056\u306a\u308b\u9b54\u8853\u5e2b",lv:1,attribute:"\u5149",type:"\u9b54\u6cd5\u4f7f\u3044",atk:300,def:400,num:2},{name:"\u30ad\u30e9\u30fc\u30fb\u30b9\u30cd\u30fc\u30af",lv:1,attribute:"\u6c34",type:"\u722c\u866b\u985e",atk:300,def:250,num:1}],I=function(e,t){return void 0===e?t.atk:e},J=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:D},{text:"\u30ec\u30d9\u30eb",dataField:"lv",sort:!0},{text:"\u5c5e\u6027",dataField:"attribute",sort:!0},{text:"\u7a2e\u65cf",dataField:"type",sort:!0},{text:"\u653b\u6483\u529b",dataField:"atk",sort:!0},{text:"\u52b9\u679c\u653b\u6483\u529b",dataField:"effect_atk",formatter:I,sort:!0,sortValue:I},{text:"\u5b88\u5099\u529b",dataField:"def",sort:!0},{text:"\u679a\u6570",dataField:"num",sort:!0}],T=function(){return Object(k.jsx)(P.a,{bootstrap4:!0,keyField:"name",data:E,columns:J,defaultSorted:[{dataField:"atk",order:"desc"}]})},q=[{name:"\u62bc\u53ce",type:"\u901a\u5e38",num:1},{name:"\u5f37\u5f15\u306a\u756a\u5175",type:"\u901a\u5e38",num:1},{name:"\u5f37\u6b32\u306a\u58fa",type:"\u901a\u5e38",num:1},{name:"\u82e6\u6e0b\u306e\u9078\u629e",type:"\u901a\u5e38",num:1},{name:"\u5fc3\u5909\u308f\u308a",type:"\u901a\u5e38",num:1},{name:"\u5927\u5d50",type:"\u901a\u5e38",num:1},{name:"\u30e9\u30a4\u30c8\u30cb\u30f3\u30b0\u30fb\u30dc\u30eb\u30c6\u30c3\u30af\u30b9",type:"\u901a\u5e38",num:1},{name:"\u5149\u306e\u8b77\u5c01\u5263",type:"\u901a\u5e38",num:1},{name:"\u62b9\u6bba\u306e\u4f7f\u5f92",type:"\u901a\u5e38",num:1},{name:"\u5897\u63f4",type:"\u901a\u5e38",num:1},{name:"\u5f37\u596a",type:"\u88c5\u5099",num:1},{name:"\u65e9\u3059\u304e\u305f\u57cb\u846c",type:"\u88c5\u5099",num:1},{name:"\u30b9\u30b1\u30fc\u30d7\u30fb\u30b4\u30fc\u30c8",type:"\u901f\u653b",num:1},{name:"\u30b5\u30a4\u30af\u30ed\u30f3",type:"\u901f\u653b",num:1}],G=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:D},{text:"\u7a2e\u985e",dataField:"type"},{text:"\u679a\u6570",dataField:"num"}],H=function(){return Object(k.jsx)(P.a,{bootstrap4:!0,keyField:"name",data:q,columns:G})},U=[{name:"\u7834\u58ca\u8f2a",type:"\u901a\u5e38",num:1},{name:"\u6fc0\u6d41\u846c",type:"\u901a\u5e38",num:1},{name:"\u5948\u843d\u306e\u843d\u3068\u3057\u7a74",type:"\u901a\u5e38",num:1},{name:"\u7802\u5875\u306e\u5927\u7adc\u5dfb",type:"\u901a\u5e38",num:1},{name:"\u70b8\u88c2\u88c5\u7532",type:"\u901a\u5e38",num:2},{name:"\u30ea\u30d3\u30f3\u30b0\u30c7\u30c3\u30c9\u306e\u547c\u3073\u58f0",type:"\u6c38\u7d9a",num:1}],Q=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:D},{text:"\u7a2e\u985e",dataField:"type"},{text:"\u679a\u6570",dataField:"num"}],R=function(){return Object(k.jsx)(P.a,{bootstrap4:!0,keyField:"name",data:U,columns:Q})},V=function(){return Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"\u304a\u4e92\u3044\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f04\u74b0\u5883\u30c7\u30c3\u30ad\u3092\u7528\u3044\u3066\u30c7\u30e5\u30a8\u30eb\u3059\u308b"}),Object(k.jsx)("li",{children:"\u5148\u653b\u5f8c\u653b\u3092\u5165\u308c\u66ff\u3048\u3066\u306e2\u30c7\u30e5\u30a8\u30eb1\u30bb\u30c3\u30c8\u3067\u306e\u5bfe\u6226\u3068\u3059\u308b"}),Object(k.jsx)("li",{children:"\u5148\u653b\u30c9\u30ed\u30fc\u3042\u308a"}),Object(k.jsxs)("li",{children:["\u53ec\u559a\u6210\u529f\u6642\u306b\u512a\u5148\u6a29\u304c\u76f8\u624b\u306b\u79fb\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u512a\u5148\u6a29\u3092\u653e\u68c4\u3059\u308b\u3053\u3068\u306a\u304f\u53ec\u559a\u3057\u305f\u30e2\u30f3\u30b9\u30bf\u30fc\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b",Object(k.jsx)("ul",{children:Object(k.jsx)("li",{children:"\u4f8b: \u3042\u306a\u305f\u306f\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u53ec\u559a\u306b\u6210\u529f\u3057\u305f\u3002\u305f\u3068\u3048\u76f8\u624b\u304c\u300a\u7834\u58ca\u8f2a\u300b\u3092\u767a\u52d5\u3059\u308b\u610f\u601d\u3092\u6301\u3063\u3066\u3044\u305f\u3068\u3057\u3066\u3082\u3001\u3042\u306a\u305f\u306f\u305d\u308c\u3088\u308a\u5148\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b\u3002"})})]}),Object(k.jsxs)("li",{children:["\u53ec\u559a\u30fb\u53cd\u8ee2\u53ec\u559a\u30fb\u7279\u6b8a\u53ec\u559a\u3092\u7121\u52b9\u306b\u3059\u308b\u30ab\u30fc\u30c9\u306e\u767a\u52d5\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3068\u3057\u3066\u6271\u3046",Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"\u3064\u307e\u308a\u3001\u30e2\u30f3\u30b9\u30bf\u30fc\u306e\u53ec\u559a\u30fb\u53cd\u8ee2\u53ec\u559a\u30fb\u7279\u6b8a\u53ec\u559a\u306f\u5fc5\u305a\u6210\u529f\u3059\u308b\uff08\u305d\u308c\u3089\u3092\u7121\u52b9\u306b\u3059\u308b\u30ab\u30fc\u30c9\u306f\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\uff09"}),Object(k.jsxs)("li",{children:["\u4f8b1: \u3042\u306a\u305f\u306f\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u53ec\u559a\u3059\u308b\u3064\u3082\u308a\u3060\u304c\u3001\u8d77\u52d5\u52b9\u679c\u3092\u76f4\u3061\u306b\u767a\u52d5\u3059\u308b\u610f\u601d\u306f\u306a\u3044\u3068\u3059\u308b\u3002\u3053\u306e\u5834\u5408\u3001\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u5834\u306b\u51fa\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u76f8\u624b\u306b\u300c\u4f55\u304b\u767a\u52d5\u3057\u307e\u3059\u304b\uff1f\u300d\u3068",Object(k.jsx)("b",{children:"\u4e00\u5ea6\u3060\u3051"}),"\u78ba\u8a8d\u3059\u308c\u3070\u5341\u5206\u3067\u3042\u308b\u3002\u8a00\u3044\u63db\u3048\u308b\u3068\u3001\u78ba\u8a8d\u3057\u305f\u5834\u5408\u306f\u53ec\u559a\u6210\u529f\u6642\u306b\u3042\u306a\u305f\u304c\u5148\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b\u6a29\u5229\u3092\u653e\u68c4\u3057\u305f\u3053\u3068\u306b\u306a\u308b\u3002"]}),Object(k.jsx)("li",{children:"\u4f8b2: \u3042\u306a\u305f\u304c\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u5834\u306b\u51fa\u3057\u305f\u3068\u304d\u3001\u76f8\u624b\u306b\u4e00\u5207\u306e\u78ba\u8a8d\u3092\u305b\u305a\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3057\u3066\u3088\u3044\u3002"})]})]}),Object(k.jsx)("li",{children:"\u300a\u62b9\u6bba\u306e\u4f7f\u5f92\u300b\u306e\u5bfe\u8c61\u3068\u306a\u3063\u305f\u30ab\u30fc\u30c9\u304c\u30ea\u30d0\u30fc\u30b9\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\u3060\u3063\u305f\u5834\u5408\u306b\u884c\u3046\u51e6\u7406\u306e\u4ee3\u308f\u308a\u306b\u3001\u304a\u4e92\u3044\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u3001\u30c7\u30c3\u30ad\u304b\u3089\u540c\u540d\u30ab\u30fc\u30c9\u3092\u3059\u3079\u3066\u30b2\u30fc\u30e0\u304b\u3089\u9664\u5916\u3057\u3001\u30c7\u30c3\u30ad\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u4e0a\u306b\u30bb\u30c3\u30c8\u3055\u308c\u305f\u30ab\u30fc\u30c9\u304a\u3088\u3073\u624b\u672d\u306e\u30ab\u30fc\u30c9\u306e\u540d\u524d\u3068\u305d\u306e\u679a\u6570\u3092\u76f8\u624b\u30d7\u30ec\u30a4\u30e4\u30fc\u306b\u4f1d\u3048\u308b\uff08\u3069\u306e\u30ab\u30fc\u30c9\u304c\u3069\u306e\u4f4d\u7f6e\u306b\u3042\u308b\u306e\u304b\u306f\u4f1d\u3048\u306a\u3044\uff09\u3002"}),Object(k.jsxs)("li",{children:["\u30a8\u30e9\u30c3\u30bf\u3055\u308c\u305f\u4e0b\u8a18\u30ab\u30fc\u30c9\u306b\u3064\u3044\u3066\u3001\u305d\u308c\u3089\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u30a8\u30e9\u30c3\u30bf\u524d\u306e\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u6271\u3046",Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"\u300a\u30ad\u30e9\u30fc\u30fb\u30b9\u30cd\u30fc\u30af\u300b\u306e\u30c6\u30ad\u30b9\u30c8: \u81ea\u5206\u306e\u30b9\u30bf\u30f3\u30d0\u30a4\u30d5\u30a7\u30a4\u30ba\u6642\u306b\u3053\u306e\u30ab\u30fc\u30c9\u304c\u5893\u5730\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30ab\u30fc\u30c9\u3092\u624b\u672d\u306b\u623b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),Object(k.jsx)("li",{children:"\u300a\u7834\u58ca\u8f2a\u300b\u306e\u30c6\u30ad\u30b9\u30c8: \u30d5\u30a3\u30fc\u30eb\u30c9\u4e0a\u306b\u8868\u5074\u8868\u793a\u3067\u5b58\u5728\u3059\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\uff11\u4f53\u3092\u7834\u58ca\u3057\u3001\u304a\u4e92\u3044\u306b\u305d\u306e\u653b\u6483\u529b\u5206\u306e\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002"})]})]}),Object(k.jsxs)("li",{children:["\u7528\u8a9e\u306e\u5909\u66f4\uff08\u30b2\u30fc\u30e0\u5f71\u97ff\u306a\u3057\uff09",Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"\u30ea\u30ea\u30fc\u30b9 \u2192 \u751f\u3051\u8d04"}),Object(k.jsx)("li",{children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u53ec\u559a \u2192 \u751f\u3051\u8d04\u53ec\u559a"})]})]})]})},z=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"\u30ab\u30aa\u30b9\u30fb\u30bd\u30eb\u30b8\u30e3\u30fc \uff0d\u958b\u95e2\u306e\u4f7f\u8005\uff0d"}),Object(k.jsx)("h2",{children:"\u4eba\u9020\u4eba\u9593\uff0d\u30b5\u30a4\u30b3\u30fb\u30b7\u30e7\u30c3\u30ab\u30fc"})]})};a(132);var K=function(){return Object(k.jsx)(l.a,{basename:"/y-gateball",children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)(s.a,{bg:"light",expand:!0,children:[Object(k.jsx)(s.a.Brand,{as:l.b,to:"/",children:"04\u74b0\u5883"}),Object(k.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(d.a,{className:"mr-auto",children:[Object(k.jsx)(d.a.Link,{as:l.b,to:"/monster",children:"\u30e2\u30f3\u30b9\u30bf\u30fc"}),Object(k.jsx)(d.a.Link,{as:l.b,to:"/spell",children:"\u9b54\u6cd5"}),Object(k.jsx)(d.a.Link,{as:l.b,to:"/trap",children:"\u7f60"}),Object(k.jsx)(d.a.Link,{as:l.b,to:"/rule",children:"\u30eb\u30fc\u30eb"}),Object(k.jsx)(d.a.Link,{as:l.b,to:"/faq",children:"FAQ"})]})})]}),Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{path:"/",exact:!0,children:Object(k.jsx)(_,{})}),Object(k.jsx)(j.a,{path:"/monster",children:Object(k.jsx)(T,{})}),Object(k.jsx)(j.a,{path:"/spell",children:Object(k.jsx)(H,{})}),Object(k.jsx)(j.a,{path:"/trap",children:Object(k.jsx)(R,{})}),Object(k.jsx)(j.a,{path:"/rule",children:Object(k.jsx)(V,{})}),Object(k.jsx)(j.a,{path:"/faq",children:Object(k.jsx)(z,{})})]})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(K,{})}),document.getElementById("root")),W()},83:function(e,t,a){},84:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.eb4b29f0.chunk.js.map