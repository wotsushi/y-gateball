(this["webpackJsonpy-gateball"]=this["webpackJsonpy-gateball"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(61),a(62),a(21)),j=a(9),s=a(122),d=a(123),b=a(25),u=a(41),m=a(124),x=a(118),p=a(119),h=a(120),o=a(121),O=a(1),f=[[-50,-100,-200],[-300,-400,-500],[-600,-800,-1e3],[-2e3,-3e3,1e3]],y=function(e){var t=e.lp,a=Math.floor(t/80),n=t>4e3?"success":t>2e3?"warning":"danger";return Object(O.jsxs)("div",{className:"lp-parent bg-light text-black",children:[Object(O.jsx)("div",{className:"lp-header",children:"LP"}),Object(O.jsx)(m.a,{variant:n,now:a}),Object(O.jsx)("div",{className:"lp",children:e.lp})]})},v=function(e){return Object(O.jsx)(x.a,{children:f.map((function(t){return Object(O.jsx)(p.a,{style:{padding:10},children:t.map((function(t){return Object(O.jsx)(h.a,{children:Object(O.jsx)(o.a,{variant:"outline-dark",style:{width:"100px",height:"50px"},onClick:function(){return e.addLP(t)},children:(a=t,a>0?"+"+a.toString():a.toString())})});var a}))})}))})},k=function(){var e=c.a.useState({lp:8e3}),t=Object(u.a)(e,2),a=t[0],n=t[1],r=c.a.useState({lp:8e3}),l=Object(u.a)(r,2),i=l[0],j=l[1];return Object(O.jsxs)(x.a,{children:[Object(O.jsxs)(p.a,{children:[Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"player",children:[Object(O.jsx)(y,{lp:a.lp}),Object(O.jsx)("div",{children:"\u5148\u653b"})]})}),Object(O.jsx)(h.a,{children:"[New] [\u2190] [\u2192] [\u5c65\u6b74]"}),Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"player",children:[Object(O.jsx)("div",{children:"\u5f8c\u653b"}),Object(O.jsx)(y,{lp:i.lp})]})})]}),Object(O.jsxs)(p.a,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)(v,{addLP:function(e){return n(Object(b.a)(Object(b.a)({},a),{},{lp:Math.max(0,a.lp+e)}))}})}),Object(O.jsx)(h.a,{children:Object(O.jsx)(v,{addLP:function(e){return j(Object(b.a)(Object(b.a)({},i),{},{lp:Math.max(0,i.lp+e)}))}})})]})]})},g=a(22),F=a.n(g),L=a(103),N=function(e){var t="\u300a".concat(e,"\u300b"),a=t.split("").map((function(e,a){return t.charCodeAt(a)})),n=L.convert(a,"EUCJP"),c=L.urlEncode(n);return Object(O.jsx)("a",{href:"https://yugioh-wiki.net/index.php?cmd=backup&page=".concat(c,"&age=1#content_1_0"),target:"_blank",rel:"noopener noreferrer",children:e})},_=[{name:"\u30ab\u30aa\u30b9\u30fb\u30bd\u30eb\u30b8\u30e3\u30fc \uff0d\u958b\u95e2\u306e\u4f7f\u8005\uff0d",lv:8,attribute:"\u5149",type:"\u6226\u58eb",atk:3e3,def:2500,num:1},{name:"\u4eba\u9020\u4eba\u9593\uff0d\u30b5\u30a4\u30b3\u30fb\u30b7\u30e7\u30c3\u30ab\u30fc",lv:6,attribute:"\u95c7",type:"\u6a5f\u68b0",atk:2400,def:1500,num:1},{name:"\u5929\u7a7a\u9a0e\u58eb\u30d1\u30fc\u30b7\u30a2\u30b9",lv:5,attribute:"\u5149",type:"\u5929\u4f7f",atk:1900,def:1400,num:1},{name:"\u30a4\u30b0\u30b6\u30ea\u30aa\u30f3\u30fb\u30e6\u30cb\u30d0\u30fc\u30b9",lv:4,attribute:"\u95c7",type:"\u7363\u6226\u58eb",atk:1800,effect_atk:1400,def:1900,num:1},{name:"\u970a\u6ec5\u8853\u5e2b \u30ab\u30a4\u30af\u30a6",lv:4,attribute:"\u95c7",type:"\u9b54\u6cd5\u4f7f\u3044",atk:1800,def:700,num:1},{name:"\u9b54\u5c0e\u6226\u58eb \u30d6\u30ec\u30a4\u30ab\u30fc",lv:4,attribute:"\u95c7",type:"\u9b54\u6cd5\u4f7f\u3044",atk:1600,effect_atk:1900,def:1e3,num:1},{name:"\u540c\u65cf\u611f\u67d3\u30a6\u30a3\u30eb\u30b9",lv:4,attribute:"\u6c34",type:"\u6c34",atk:1600,def:1e3,num:1},{name:"\u30d6\u30ec\u30a4\u30c9\u30ca\u30a4\u30c8",lv:4,attribute:"\u5149",type:"\u6226\u58eb",atk:1600,effect_atk:2e3,def:1e3,num:1},{name:"\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a",lv:4,attribute:"\u5730",type:"\u6226\u58eb",atk:1e3,def:1e3,num:1},{name:"\u7570\u6b21\u5143\u306e\u5973\u6226\u58eb",lv:4,attribute:"\u5149",type:"\u6226\u58eb",atk:1500,def:1600,num:3},{name:"\u9996\u9818\u30fb\u30b6\u30eb\u30fc\u30b0",lv:4,attribute:"\u95c7",type:"\u6226\u58eb",atk:1400,def:1500,num:1},{name:"\u30d5\u30a1\u30a4\u30d0\u30fc\u30dd\u30c3\u30c9",lv:3,attribute:"\u5730",type:"\u690d\u7269",atk:500,def:500,num:1},{name:"\u304a\u6ce8\u5c04\u5929\u4f7f\u30ea\u30ea\u30fc",lv:3,attribute:"\u5730",type:"\u9b54\u6cd5\u4f7f\u3044",atk:400,effect_atk:3400,def:1500,num:1},{name:"\u9b42\u3092\u524a\u308b\u6b7b\u970a",lv:3,attribute:"\u95c7",type:"\u30a2\u30f3\u30c7\u30c3\u30c8",atk:300,def:200,num:1},{name:"\u8056\u306a\u308b\u9b54\u8853\u5e2b",lv:1,attribute:"\u5149",type:"\u9b54\u6cd5\u4f7f\u3044",atk:300,def:400,num:2},{name:"\u30ad\u30e9\u30fc\u30fb\u30b9\u30cd\u30fc\u30af",lv:1,attribute:"\u6c34",type:"\u722c\u866b\u985e",atk:300,def:250,num:1}],w=function(e,t){return void 0===e?t.atk:e},C=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:N},{text:"\u30ec\u30d9\u30eb",dataField:"lv",sort:!0},{text:"\u5c5e\u6027",dataField:"attribute",sort:!0},{text:"\u7a2e\u65cf",dataField:"type",sort:!0},{text:"\u653b\u6483\u529b",dataField:"atk",sort:!0},{text:"\u52b9\u679c\u653b\u6483\u529b",dataField:"effect_atk",formatter:w,sort:!0,sortValue:w},{text:"\u5b88\u5099\u529b",dataField:"def",sort:!0},{text:"\u679a\u6570",dataField:"num",sort:!0}],P=function(){return Object(O.jsx)(F.a,{bootstrap4:!0,keyField:"name",data:_,columns:C,defaultSorted:[{dataField:"atk",order:"desc"}]})},S=[{name:"\u62bc\u53ce",type:"\u901a\u5e38",num:1},{name:"\u5f37\u5f15\u306a\u756a\u5175",type:"\u901a\u5e38",num:1},{name:"\u5f37\u6b32\u306a\u58fa",type:"\u901a\u5e38",num:1},{name:"\u82e6\u6e0b\u306e\u9078\u629e",type:"\u901a\u5e38",num:1},{name:"\u5fc3\u5909\u308f\u308a",type:"\u901a\u5e38",num:1},{name:"\u5927\u5d50",type:"\u901a\u5e38",num:1},{name:"\u30e9\u30a4\u30c8\u30cb\u30f3\u30b0\u30fb\u30dc\u30eb\u30c6\u30c3\u30af\u30b9",type:"\u901a\u5e38",num:1},{name:"\u5149\u306e\u8b77\u5c01\u5263",type:"\u901a\u5e38",num:1},{name:"\u62b9\u6bba\u306e\u4f7f\u5f92",type:"\u901a\u5e38",num:1},{name:"\u5897\u63f4",type:"\u901a\u5e38",num:1},{name:"\u5f37\u596a",type:"\u88c5\u5099",num:1},{name:"\u65e9\u3059\u304e\u305f\u57cb\u846c",type:"\u88c5\u5099",num:1},{name:"\u30b9\u30b1\u30fc\u30d7\u30fb\u30b4\u30fc\u30c8",type:"\u901f\u653b",num:1},{name:"\u30b5\u30a4\u30af\u30ed\u30f3",type:"\u901f\u653b",num:1}],M=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:N},{text:"\u7a2e\u985e",dataField:"type"},{text:"\u679a\u6570",dataField:"num"}],B=function(){return Object(O.jsx)(F.a,{bootstrap4:!0,keyField:"name",data:S,columns:M})},E=[{name:"\u7834\u58ca\u8f2a",type:"\u901a\u5e38",num:1},{name:"\u6fc0\u6d41\u846c",type:"\u901a\u5e38",num:1},{name:"\u5948\u843d\u306e\u843d\u3068\u3057\u7a74",type:"\u901a\u5e38",num:1},{name:"\u7802\u5875\u306e\u5927\u7adc\u5dfb",type:"\u901a\u5e38",num:1},{name:"\u70b8\u88c2\u88c5\u7532",type:"\u901a\u5e38",num:2},{name:"\u30ea\u30d3\u30f3\u30b0\u30c7\u30c3\u30c9\u306e\u547c\u3073\u58f0",type:"\u6c38\u7d9a",num:1}],J=[{text:"\u30ab\u30fc\u30c9\u540d",dataField:"name",formatter:N},{text:"\u7a2e\u985e",dataField:"type"},{text:"\u679a\u6570",dataField:"num"}],T=function(){return Object(O.jsx)(F.a,{bootstrap4:!0,keyField:"name",data:E,columns:J})},A=function(){return Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u304a\u4e92\u3044\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f04\u74b0\u5883\u30c7\u30c3\u30ad\u3092\u7528\u3044\u3066\u30c7\u30e5\u30a8\u30eb\u3059\u308b"}),Object(O.jsx)("li",{children:"\u5148\u653b\u5f8c\u653b\u3092\u5165\u308c\u66ff\u3048\u3066\u306e2\u30c7\u30e5\u30a8\u30eb1\u30bb\u30c3\u30c8\u3067\u306e\u5bfe\u6226\u3068\u3059\u308b"}),Object(O.jsx)("li",{children:"\u5148\u653b\u30c9\u30ed\u30fc\u3042\u308a"}),Object(O.jsxs)("li",{children:["\u53ec\u559a\u6210\u529f\u6642\u306b\u512a\u5148\u6a29\u304c\u76f8\u624b\u306b\u79fb\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u512a\u5148\u6a29\u3092\u653e\u68c4\u3059\u308b\u3053\u3068\u306a\u304f\u53ec\u559a\u3057\u305f\u30e2\u30f3\u30b9\u30bf\u30fc\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b",Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"\u4f8b: \u3042\u306a\u305f\u306f\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u53ec\u559a\u306b\u6210\u529f\u3057\u305f\u3002\u305f\u3068\u3048\u76f8\u624b\u304c\u300a\u7834\u58ca\u8f2a\u300b\u3092\u767a\u52d5\u3059\u308b\u610f\u601d\u3092\u6301\u3063\u3066\u3044\u305f\u3068\u3057\u3066\u3082\u3001\u3042\u306a\u305f\u306f\u305d\u308c\u3088\u308a\u5148\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b\u3002"})})]}),Object(O.jsxs)("li",{children:["\u53ec\u559a\u30fb\u53cd\u8ee2\u53ec\u559a\u30fb\u7279\u6b8a\u53ec\u559a\u3092\u7121\u52b9\u306b\u3059\u308b\u30ab\u30fc\u30c9\u306e\u767a\u52d5\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3068\u3057\u3066\u6271\u3046",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u3064\u307e\u308a\u3001\u30e2\u30f3\u30b9\u30bf\u30fc\u306e\u53ec\u559a\u30fb\u53cd\u8ee2\u53ec\u559a\u30fb\u7279\u6b8a\u53ec\u559a\u306f\u5fc5\u305a\u6210\u529f\u3059\u308b\uff08\u305d\u308c\u3089\u3092\u7121\u52b9\u306b\u3059\u308b\u30ab\u30fc\u30c9\u306f\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\uff09"}),Object(O.jsxs)("li",{children:["\u4f8b1: \u3042\u306a\u305f\u306f\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u53ec\u559a\u3059\u308b\u3064\u3082\u308a\u3060\u304c\u3001\u8d77\u52d5\u52b9\u679c\u3092\u76f4\u3061\u306b\u767a\u52d5\u3059\u308b\u610f\u601d\u306f\u306a\u3044\u3068\u3059\u308b\u3002\u3053\u306e\u5834\u5408\u3001\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u5834\u306b\u51fa\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u76f8\u624b\u306b\u300c\u4f55\u304b\u767a\u52d5\u3057\u307e\u3059\u304b\uff1f\u300d\u3068",Object(O.jsx)("b",{children:"\u4e00\u5ea6\u3060\u3051"}),"\u78ba\u8a8d\u3059\u308c\u3070\u5341\u5206\u3067\u3042\u308b\u3002\u8a00\u3044\u63db\u3048\u308b\u3068\u3001\u78ba\u8a8d\u3057\u305f\u5834\u5408\u306f\u53ec\u559a\u6210\u529f\u6642\u306b\u3042\u306a\u305f\u304c\u5148\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u52b9\u679c\u3092\u767a\u52d5\u3067\u304d\u308b\u6a29\u5229\u3092\u653e\u68c4\u3057\u305f\u3053\u3068\u306b\u306a\u308b\u3002"]}),Object(O.jsx)("li",{children:"\u4f8b2: \u3042\u306a\u305f\u304c\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u3092\u5834\u306b\u51fa\u3057\u305f\u3068\u304d\u3001\u76f8\u624b\u306b\u4e00\u5207\u306e\u78ba\u8a8d\u3092\u305b\u305a\u306b\u300a\u306a\u3089\u305a\u8005\u50ad\u5175\u90e8\u968a\u300b\u306e\u8d77\u52d5\u52b9\u679c\u3092\u767a\u52d5\u3057\u3066\u3088\u3044\u3002"})]})]}),Object(O.jsx)("li",{children:"\u300a\u62b9\u6bba\u306e\u4f7f\u5f92\u300b\u306e\u5bfe\u8c61\u3068\u306a\u3063\u305f\u30ab\u30fc\u30c9\u304c\u30ea\u30d0\u30fc\u30b9\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\u3060\u3063\u305f\u5834\u5408\u306b\u884c\u3046\u51e6\u7406\u306e\u4ee3\u308f\u308a\u306b\u3001\u304a\u4e92\u3044\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u3001\u30c7\u30c3\u30ad\u304b\u3089\u540c\u540d\u30ab\u30fc\u30c9\u3092\u3059\u3079\u3066\u30b2\u30fc\u30e0\u304b\u3089\u9664\u5916\u3057\u3001\u30c7\u30c3\u30ad\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u4e0a\u306b\u30bb\u30c3\u30c8\u3055\u308c\u305f\u30ab\u30fc\u30c9\u304a\u3088\u3073\u624b\u672d\u306e\u30ab\u30fc\u30c9\u306e\u540d\u524d\u3068\u305d\u306e\u679a\u6570\u3092\u76f8\u624b\u30d7\u30ec\u30a4\u30e4\u30fc\u306b\u4f1d\u3048\u308b\uff08\u3069\u306e\u30ab\u30fc\u30c9\u304c\u3069\u306e\u4f4d\u7f6e\u306b\u3042\u308b\u306e\u304b\u306f\u4f1d\u3048\u306a\u3044\uff09\u3002"}),Object(O.jsxs)("li",{children:["\u30a8\u30e9\u30c3\u30bf\u3055\u308c\u305f\u4e0b\u8a18\u30ab\u30fc\u30c9\u306b\u3064\u3044\u3066\u3001\u305d\u308c\u3089\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u30a8\u30e9\u30c3\u30bf\u524d\u306e\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u6271\u3046",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u300a\u30ad\u30e9\u30fc\u30fb\u30b9\u30cd\u30fc\u30af\u300b\u306e\u30c6\u30ad\u30b9\u30c8: \u81ea\u5206\u306e\u30b9\u30bf\u30f3\u30d0\u30a4\u30d5\u30a7\u30a4\u30ba\u6642\u306b\u3053\u306e\u30ab\u30fc\u30c9\u304c\u5893\u5730\u306b\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30ab\u30fc\u30c9\u3092\u624b\u672d\u306b\u623b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),Object(O.jsx)("li",{children:"\u300a\u7834\u58ca\u8f2a\u300b\u306e\u30c6\u30ad\u30b9\u30c8: \u30d5\u30a3\u30fc\u30eb\u30c9\u4e0a\u306b\u8868\u5074\u8868\u793a\u3067\u5b58\u5728\u3059\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\uff11\u4f53\u3092\u7834\u58ca\u3057\u3001\u304a\u4e92\u3044\u306b\u305d\u306e\u653b\u6483\u529b\u5206\u306e\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002"})]})]}),Object(O.jsxs)("li",{children:["\u7528\u8a9e\u306e\u5909\u66f4\uff08\u30b2\u30fc\u30e0\u5f71\u97ff\u306a\u3057\uff09",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u30ea\u30ea\u30fc\u30b9 \u2192 \u751f\u3051\u8d04"}),Object(O.jsx)("li",{children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u53ec\u559a \u2192 \u751f\u3051\u8d04\u53ec\u559a"})]})]})]})};a(110);var I=function(){return Object(O.jsx)(i.a,{basename:"/y-gateball",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(s.a,{bg:"light",expand:!0,children:[Object(O.jsx)(s.a.Brand,{as:i.b,to:"/",children:"04\u74b0\u5883"}),Object(O.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(d.a,{className:"mr-auto",children:[Object(O.jsx)(d.a.Link,{as:i.b,to:"/monster",children:"\u30e2\u30f3\u30b9\u30bf\u30fc"}),Object(O.jsx)(d.a.Link,{as:i.b,to:"/spell",children:"\u9b54\u6cd5"}),Object(O.jsx)(d.a.Link,{as:i.b,to:"/trap",children:"\u7f60"}),Object(O.jsx)(d.a.Link,{as:i.b,to:"/rule",children:"\u30eb\u30fc\u30eb"})]})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",exact:!0,children:Object(O.jsx)(k,{})}),Object(O.jsx)(j.a,{path:"/monster",children:Object(O.jsx)(P,{})}),Object(O.jsx)(j.a,{path:"/spell",children:Object(O.jsx)(B,{})}),Object(O.jsx)(j.a,{path:"/trap",children:Object(O.jsx)(T,{})}),Object(O.jsx)(j.a,{path:"/rule",children:Object(O.jsx)(A,{})})]})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),D()},61:function(e,t,a){},62:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.5db4bdb0.chunk.js.map