(this["webpackJsonpsimple-phone-book"]=this["webpackJsonpsimple-phone-book"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(34),o=n.n(i),r=n(167),s=n(172),l=n(171),u=n(13),j=n(14),d=n(29),b=function(e,t){switch(t.type){case"ADD_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:[].concat(Object(j.a)(e.contacts),[t.payload.contact]),dateAdded:new Date});default:return e}},O=n(55),f=n.n(O),m=n(2),x={contacts:[{id:f()(),firstName:"Luis",lastName:"Azocar",fullName:"Luis Azocar",phone:1134837364}],dateAdded:new Date},h=Object(a.createContext)({}),p=function(e){var t=e.children,n=Object(a.useReducer)(b,x),c=Object(u.a)(n,2),i=c[0],o=c[1];return Object(m.jsx)(h.Provider,{value:{state:i,addNewContact:function(e){o({type:"ADD_CONTACT",payload:{contact:e}})}},children:t})},N=n(168),g=n(173),v=n(174),C=n(163),y=n(175),F=n(166),w=n(176),k=n(157),S=n(177),A=n(169),L=n(165),D=n(170),T=n(83),E=n.n(T),W=function(e){var t=e.onDebounce,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=Object(a.useState)(e),c=Object(u.a)(n,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){return clearTimeout(n)}})),{debounceValue:i}}(i).debounceValue;return Object(a.useEffect)((function(){t(r)}),[r]),Object(m.jsx)(N.a,{sx:{width:"100%"},children:Object(m.jsx)(A.a,{variant:"filled",sx:{width:"100%"},children:Object(m.jsx)(L.a,{fullWidth:!0,type:"text",startAdornment:Object(m.jsx)(D.a,{position:"end",children:Object(m.jsx)(E.a,{})}),placeholder:"Search...",value:i,onChange:function(e){return o(e.target.value)}})})})},B=n(159),P=n(84),I=n.n(P),M=n(85),z=n.n(M),J=Object(B.a)({container:{}}),V=function(){var e=J(),t=function(){var e=Object(a.useContext)(h).state.contacts,t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(e),r=Object(u.a)(o,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){i(!0),setTimeout((function(){l(e),i(!1)}),2e3)}),[s,e]),{isFetching:c,contactList:s}}(),n=t.contactList,i=t.isFetching,o=Object(a.useState)(""),r=Object(u.a)(o,2),j=r[0],d=r[1],b=Object(a.useState)(n),O=Object(u.a)(b,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){0===j.length&&x(n)}),[n]),Object(a.useEffect)((function(){if(0===j.length)return x(n);if(isNaN(Number(j)))x(n.filter((function(e){return e.fullName.toLocaleLowerCase().includes(j.toLocaleLowerCase())})));else{var e=n.find((function(e){return e.id===j}));x(e?[e]:[])}}),[j]),Object(m.jsxs)(s.a,{maxWidth:"sm",className:e.container,children:[Object(m.jsx)(l.a,{variant:"h5",gutterBottom:!0,component:"div",children:"Contacts"}),Object(m.jsx)(W,{onDebounce:d}),i?Object(m.jsx)(N.a,{sx:{display:"flex",flex:1,justifyContent:"center"},mt:5,children:Object(m.jsx)(g.a,{})}):Object(m.jsx)(v.a,{sx:{width:"100%"},children:f.map((function(e){return Object(m.jsxs)(C.a,{alignItems:"flex-start",sx:{backgroundColor:"#193c56",color:"#FFF",margin:"1rem 0"},children:[Object(m.jsx)(y.a,{children:Object(m.jsx)(F.a,{alt:e.firstName,src:"/static/images/avatar/1.jpg"})}),Object(m.jsx)(w.a,{primary:"".concat(e.firstName," ").concat(e.lastName),secondary:Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)(l.a,{sx:{display:"inline",color:"#FFF"},component:"span",variant:"body2",children:e.phone})})}),Object(m.jsxs)(k.a,{direction:"row",spacing:1,mt:1,children:[Object(m.jsx)(S.a,{sx:{color:"#FFF"},"aria-label":"delete",children:Object(m.jsx)(I.a,{})}),Object(m.jsx)(S.a,{sx:{color:"#FFF"},"aria-label":"delete",children:Object(m.jsx)(z.a,{})})]})]},e.id)})).reverse()})]})},_=n(5),R=n(178),q=n(161),G=n(160),H=n(86),K=n.n(H),Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},U=function(){var e=Object(a.useContext)(h).addNewContact,t=X(),n=f.a.time(),c=Object(a.useState)({id:n,firstName:"",lastName:"",fullName:"",phone:0}),i=Object(u.a)(c,2),o=i[0],j=i[1],b=Object(a.useState)(!1),O=Object(u.a)(b,2),x=O[0],p=O[1],g=function(){return p(!1)},v=function(e,t){j(Object(d.a)(Object(d.a)({},o),{},Object(_.a)({},t,e)))};return Object(a.useEffect)((function(){j(Object(d.a)({},o))}),[]),Object(m.jsxs)(s.a,{maxWidth:"sm",children:[Object(m.jsx)(r.a,{sx:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)(R.a,{variant:"contained",size:"large",onClick:function(){return p(!0)},className:t.button,endIcon:Object(m.jsx)(K.a,{}),children:"Add Contact"})}),Object(m.jsx)(q.a,{keepMounted:!0,open:x,onClose:g,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:Object(m.jsxs)(N.a,{sx:Q,component:"form",className:t.container,children:[Object(m.jsx)(l.a,{variant:"h5",gutterBottom:!0,component:"div",children:"New Contact"}),Object(m.jsx)(G.a,{fullWidth:!0,type:"text",className:t.input,id:"outlined-basic",label:"Firts Name",variant:"outlined",value:o.firstName,onChange:function(e){return v(e.target.value,"firstName")}}),Object(m.jsx)(G.a,{fullWidth:!0,type:"text",className:t.input,id:"outlined-basic",label:"Last Name",variant:"outlined",value:o.lastName,onChange:function(e){return v(e.target.value,"lastName")}}),Object(m.jsx)(G.a,{fullWidth:!0,type:"number",className:t.input,id:"outlined-basic",label:"Phone Number",variant:"outlined",value:o.phone,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:function(e){return v(Number(e.target.value),"phone")}}),Object(m.jsx)(R.a,{onClick:function(){e(Object(d.a)(Object(d.a)({},o),{},{fullName:"".concat(o.firstName," ").concat(o.lastName)})),j({id:n,firstName:"",lastName:"",fullName:"",phone:0}),g()},children:"Add new contact"})]})})]})},X=Object(B.a)({container:{display:"flex",justifyContent:"center",flexDirection:"column"},input:{margin:"0.5rem 0"},button:{backgroundColor:"#414141",margin:"0.5rem 0"}}),Y=function(){return Object(m.jsx)(p,{children:Object(m.jsxs)(r.a,{container:!0,children:[Object(m.jsx)(r.a,{item:!0,xs:12,mt:2,children:Object(m.jsx)(s.a,{maxWidth:"sm",children:Object(m.jsx)(l.a,{variant:"h2",gutterBottom:!0,component:"div",align:"center",children:"My Phone Book"})})}),Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(U,{})}),Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(V,{})})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[110,1,2]]]);
//# sourceMappingURL=main.16b086ff.chunk.js.map