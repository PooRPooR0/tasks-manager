(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={card_custom:"CardBs_card_custom__14G2W",card_custom_title:"CardBs_card_custom_title__1JrCh",card_custom_button:"CardBs_card_custom_button__2coyX",card_custom_status:"CardBs_card_custom_status__JGPHn",card_custom_indicate:"CardBs_card_custom_indicate__3kYDD",card_custom_indicate_red:"CardBs_card_custom_indicate_red__l9BGr",card_custom_indicate_yellow:"CardBs_card_custom_indicate_yellow__38vMo",card_custom_indicate_green:"CardBs_card_custom_indicate_green__Yogx3"}},35:function(e,t,a){e.exports={card_custom:"CardBsGroup_card_custom__1ARoH",card_custom_title:"CardBsGroup_card_custom_title__2e0wF",card_custom_button:"CardBsGroup_card_custom_button__bqU8D"}},40:function(e,t,a){e.exports={modal_custom:"ModalBs_modal_custom__d06z8"}},41:function(e,t,a){e.exports=a(62)},48:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/Montserrat-VariableFont_wght.a3fcdff0.ttf"},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(46),a(67)),u=a(66),s=a(56),m=(a(48),a(2)),i=a(13),d=a(6),_=a(3),E=a(69),f=a(14),p=a.n(f),g=a(71),v=a(65),b=a(23),h=function(e){var t=e.task,a=e.remove,n=e.statusUp,c=e.statusDown,l=new Date(t.dedline),o=l.getHours();o<10&&(o="0"+o);var u=l.getMinutes();u<10&&(u="0"+u);var s,m=o+":"+u,i=[p.a.card_custom_indicate];switch(t.status){case 0:s="\u041d\u0435 \u043d\u0430\u0447\u0430\u0442\u043e",i.push(p.a.card_custom_indicate_red);break;case 1:s="\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f",i.push(p.a.card_custom_indicate_yellow);break;case 2:s="\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",i.push(p.a.card_custom_indicate_green)}return r.a.createElement(g.a,{className:p.a.card_custom},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,{className:p.a.card_custom_title},t.title),r.a.createElement(g.a.Subtitle,{className:"mb-3 text-muted d-flex justify-content-between"},r.a.createElement("span",null,t.group.name),r.a.createElement("span",null,m," ",l.toLocaleDateString())),r.a.createElement(g.a.Text,null,t.content)),r.a.createElement(g.a.Footer,{className:"text-muted d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"d-flex justify-content-start gap-1"},r.a.createElement(v.a,{className:p.a.card_custom_button,variant:"primary",onClick:function(){return n(t)}},r.a.createElement(b.b,null)),r.a.createElement(v.a,{className:p.a.card_custom_button,variant:"primary",onClick:function(){return c(t)}},r.a.createElement(b.a,null)),r.a.createElement(v.a,{className:p.a.card_custom_button,variant:"danger",onClick:function(){return a(t)}},r.a.createElement(b.c,null))),r.a.createElement("div",{className:"d-flex align-items-center gap-2"},r.a.createElement("span",{className:p.a.card_custom_status},s),r.a.createElement("div",{className:i.join(" ")}))))},j=function(e){var t=e.tasks,a=e.remove,n=e.statusUp,c=e.statusDown;Object(_.a)(e,["tasks","remove","statusUp","statusDown"]);return t.length?r.a.createElement("div",null,r.a.createElement(E.a,{variant:"light"},r.a.createElement("h5",null,"\u0417\u0430\u0434\u0430\u0447\u0438")),r.a.createElement("hr",null),t.map(function(e){return r.a.createElement(h,{key:e.id,remove:a,task:e,statusUp:n,statusDown:c})})):r.a.createElement("div",{className:""},r.a.createElement(E.a,{variant:"light"},r.a.createElement("h5",null,"\u0417\u0430\u0434\u0430\u0447\u0438")),r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"info"},"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"))},w=function(e,t,a,r){var c=function(e){return Object(n.useMemo)(function(){return Object(i.a)(e).sort(function(e,t){return e.dedline-t.dedline})},[e])}(e);return Object(n.useMemo)(function(){return c.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())&&e.group.id==a.id&&(e.status==r||-1==r)})},[t,c,a,r])},N=a(35),C=a.n(N),O=function(e){var t=e.group,a=e.remove;return r.a.createElement(g.a,{className:C.a.card_custom},r.a.createElement(g.a.Body,{className:"d-flex justify-content-between align-content-center p-2"},r.a.createElement(g.a.Text,{className:C.a.card_custom_title},t.name),r.a.createElement(v.a,{className:C.a.card_custom_button,variant:"danger",onClick:function(){return a(t)}},r.a.createElement(b.c,null))))},y=function(e){var t=e.groups,a=e.remove,n=(Object(_.a)(e,["groups","remove"]),t.filter(function(e){return 0!=e.id}));return n.length?r.a.createElement("div",null,r.a.createElement(E.a,{variant:"light"},r.a.createElement("h5",null,"\u0413\u0440\u0443\u043f\u043f\u044b")),r.a.createElement("hr",null),n.map(function(e){return r.a.createElement(O,{key:e.id,remove:a,group:e})})):r.a.createElement("div",null,r.a.createElement(E.a,{variant:"light"},r.a.createElement("h5",null,"\u0413\u0440\u0443\u043f\u043f\u044b")),r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"info"},"\u0413\u0440\u0443\u043f\u043f \u043d\u0435\u0442"))},k=a(72),x=a(70),D=function(e){var t=e.filter,a=e.setFilter,n=e.groups;return r.a.createElement(k.a,{direction:"horizontal",className:"w-100",gap:2},r.a.createElement(s.a,{md:6},r.a.createElement(x.a.Control,{placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t.query,onChange:function(e){return a(Object(m.a)({},t,{query:e.target.value}))}})),r.a.createElement(x.a.Select,{value:t.group.id,onChange:function(e){return a(Object(m.a)({},t,{group:n.find(function(t){return t.id==e.target.value})}))}},n.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),r.a.createElement(x.a.Select,{value:t.status,onChange:function(e){return a(Object(m.a)({},t,{status:e.target.value}))}},r.a.createElement("option",{value:-1},"\u041b\u044e\u0431\u043e\u0439"),r.a.createElement("option",{value:0},"\u041d\u0435 \u043d\u0430\u0447\u0430\u0442\u043e"),r.a.createElement("option",{value:1},"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f"),r.a.createElement("option",{value:2},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e")))},G=(a(57),function(e){var t=e.create,a=e.groups,c=Object(n.useState)({title:"",group:a[0],dedline:Date.now(),content:"",status:0}),l=Object(d.a)(c,2),o=l[0],i=l[1];return r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"formTitle"},r.a.createElement(x.a.Label,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(x.a.Control,{name:"formTitle",type:"text",placeholder:"\u041f\u043e\u043f\u0438\u0442\u044c \u043a\u043e\u0444\u0435",value:o.title,onChange:function(e){return i(Object(m.a)({},o,{title:e.target.value}))}})),r.a.createElement(u.a,{className:"mb-3"},r.a.createElement(x.a.Group,{as:s.a,controlId:"formGroup"},r.a.createElement(x.a.Label,null,"\u0413\u0440\u0443\u043f\u043f\u0430"),r.a.createElement(x.a.Select,{name:"formGroup",value:o.group.id,onChange:function(e){return i(Object(m.a)({},o,{group:a.find(function(t){return t.id==e.target.value})}))}},a.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement(x.a.Group,{as:s.a,controlId:"formDate"},r.a.createElement(x.a.Label,null,"\u0421\u0440\u043e\u043a"),r.a.createElement(x.a.Control,{name:"formDate",type:"datetime-local",value:function(){var e=new Date(o.dedline),t=function(e){return(e<10?"0":"")+e};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())}(),onChange:function(e){return i(Object(m.a)({},o,{dedline:new Date(e.target.value)}))}}))),r.a.createElement(x.a.Group,{className:"mb-3",controlId:"formDesc"},r.a.createElement(x.a.Label,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement(x.a.Control,{name:"formDesc",type:"text",placeholder:"\u041a\u043e\u0444\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u043a\u0443\u0441\u043d\u044b\u043c",value:o.content,onChange:function(e){return i(Object(m.a)({},o,{content:e.target.value}))}})),r.a.createElement(v.a,{className:"w-100 mt-2",onClick:function(e){e.preventDefault();var a=Object(m.a)({},o,{id:Date.now()});t(a),i({title:"",group:0,dedline:Date.now(),content:"",status:0})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"))}),B=function(e){var t=e.create,a=Object(n.useState)({name:""}),c=Object(d.a)(a,2),l=c[0],o=c[1];return r.a.createElement(x.a,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"formTitle"},r.a.createElement(x.a.Label,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(x.a.Control,{name:"formTitle",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043d\u043e\u043c\u0435\u0440 1",value:l.name,onChange:function(e){return o(Object(m.a)({},l,{name:e.target.value}))}})),r.a.createElement(v.a,{className:"w-100 mt-2",onClick:function(e){e.preventDefault();var a=Object(m.a)({},l,{id:Date.now()});t(a),o({name:""})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443"))},T=a(68),M=a(40),S=a.n(M),H=function(e){var t=e.show,a=e.onHide,n=e.title,c=e.children;return r.a.createElement(T.a,{contentClassName:S.a.modal_custom,show:t,onHide:a,centered:!0},r.a.createElement(T.a.Header,{closeButton:!0},r.a.createElement(T.a.Title,null,n)),r.a.createElement(T.a.Body,null,c))},F=function(e){var t=e.filter,a=e.setFilter,n=e.groups,c=e.setModalTask,l=e.setModalGroup,m=e.createGroup,i=e.createTask,d=e.modalTask,_=e.modalGroup;return r.a.createElement("div",{className:"sub_nav d-flex align-content-center"},r.a.createElement(o.a,{className:"mt-auto mb-auto"},r.a.createElement(u.a,null,r.a.createElement(s.a,{lg:8,className:"d-flex align-content-center"},r.a.createElement(D,{filter:t,setFilter:a,groups:n})),r.a.createElement(s.a,{className:"d-flex align-content-center mt-2 mt-lg-0 justify-content-center justify-content-lg-end gap-3"},r.a.createElement(v.a,{onClick:function(){return c(!0)}},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"),r.a.createElement(H,{show:d,onHide:function(){return c(!1)},title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"},r.a.createElement(G,{create:i,groups:n})),r.a.createElement(v.a,{onClick:function(){return l(!0)}},"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"),r.a.createElement(H,{show:_,onHide:function(){return l(!1)},title:"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"},r.a.createElement(B,{create:m}))))))},L=function(){var e=Object(n.useState)([{name:"\u0411\u0435\u0437 \u0433\u0440\u0443\u043f\u043f\u044b",id:0}]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),_=Object(d.a)(l,2),E=_[0],f=_[1],p=Object(n.useState)(!1),g=Object(d.a)(p,2),v=g[0],b=g[1],h=Object(n.useState)(!1),N=Object(d.a)(h,2),C=N[0],O=N[1],k=Object(n.useState)({query:"",group:a[0],status:-1}),x=Object(d.a)(k,2),D=x[0],G=x[1],B=w(E,D.query,D.group,D.status);return r.a.createElement("div",{className:"tasks-page"},r.a.createElement(F,{filter:D,setFilter:G,groups:a,setModalGroup:O,setModalTask:b,createGroup:function(e){c([].concat(Object(i.a)(a),[e])),O(!1)},createTask:function(e){f([].concat(Object(i.a)(E),[e])),b(!1)},modalTask:v,modalGroup:C}),r.a.createElement(o.a,{className:"content"},r.a.createElement(u.a,null,r.a.createElement(s.a,{md:8},r.a.createElement(j,{tasks:B,remove:function(e){f(E.filter(function(t){return t.id!==e.id}))},statusUp:function(e){2!=e.status&&(e.status=e.status+1,f(Object(i.a)(E)))},statusDown:function(e){0!=e.status&&(e.status=e.status-1,f(Object(i.a)(E)))}})),r.a.createElement(s.a,null,r.a.createElement(y,{groups:a,remove:function(e){c(a.filter(function(t){return t.id!==e.id})),G(Object(m.a)({},D,{group:a[0]})),f(E.filter(function(t){return t.group.id!=e.id}))}})))))};var I=function(){return r.a.createElement("div",{className:"h-100 d-flex flex-column justify-content-between"},r.a.createElement("div",{className:"wrapper-top"},r.a.createElement("header",{className:"d-flex align-content-center"},r.a.createElement(o.a,{className:"mt-auto mb-auto"},r.a.createElement(u.a,null,r.a.createElement(s.a,{md:4,className:"d-flex align-content-center"},r.a.createElement("span",{className:"logo mb-auto mt-auto"},"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0437\u0430\u0434\u0430\u0447"))))),r.a.createElement(L,null)),r.a.createElement("div",{className:"footer"},r.a.createElement(o.a,null,r.a.createElement("p",{className:"text-end text-light"},r.a.createElement("em",null,"Design by PooRPooR")))))};a(60),a(61);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.e12ba24e.chunk.js.map