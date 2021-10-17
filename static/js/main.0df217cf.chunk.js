(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3AHxY",ContactItem:"ContactList_ContactItem__20l8P",contactBtn:"ContactList_contactBtn__1VU2p",phoneNumber:"ContactList_phoneNumber__kBnGP",notification:"ContactList_notification__2OlRd"}},19:function(t,e,n){},20:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__Gk3Sd",filterText:"Filter_filterText__1bhQq",filterInput:"Filter_filterInput__F4fvY"}},37:function(t,e,n){t.exports={Container:"Container_Container__1yed9"}},47:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return I})),n.d(c,"addContact",(function(){return k})),n.d(c,"deleteContact",(function(){return A}));var a={};n.r(a),n.d(a,"getContacts",(function(){return w})),n.d(a,"getFilter",(function(){return B})),n.d(a,"getContactsToShow",(function(){return E})),n.d(a,"getAdded",(function(){return q}));var r=n(0),o=n.n(r),i=n(15),s=n.n(i),u=(n(47),n(19)),l=n.n(u),b=n(26),f=n(4),j=n(41),d=n(12),m=n.n(d),O=n(3),h=Object(O.b)("contacts/fetchContactRequest"),C=Object(O.b)("contacts/fetchContactSuccess"),p=Object(O.b)("contacts/fetchContactError"),_=Object(O.b)("contacts/addContactRequest"),x=Object(O.b)("contacts/addContactSuccess"),v=Object(O.b)("contacts/addContactError"),N=Object(O.b)("contacts/deleteContactRequest"),g=Object(O.b)("contacts/deleteContactSuccess"),L=Object(O.b)("contacts/deleteContactError"),F=Object(O.b)("contacts/changeFilter");m.a.defaults.baseURL="http://localhost:3232";var y,T,I=function(){return function(t){t(h()),m.a.get("/contacts").then((function(e){var n=e.data;return t(C(n))})).catch((function(e){return t(p(e.massage))}))}},k=function(t){var e=t.name,n=t.number;return function(t){if(e&&n){var c={name:e,number:n};t(_()),m.a.post("/contacts",c).then((function(e){var n=e.data;return t(x(n))})).catch((function(e){return t(v(e.massage))}))}}},A=function(t){return function(e){e(N()),m.a.delete("/contacts/".concat(t)).then((function(){return e(g(t))})).catch((function(t){return e(L(t.massage))}))}},S=n(16),w=function(t){return t.contacts.items},B=function(t){return t.contacts.filter},E=Object(S.a)([w,B],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),q=Object(S.a)([w],(function(t){return function(e){return t.map((function(t){return t.name})).includes(e)}})),R=n(8),z=n.n(R),P=(n(69),n(2)),U=function(){var t=Object(r.useState)(""),e=Object(b.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(b.a)(a,2),i=o[0],s=o[1],u=Object(f.c)(w),l=Object(f.b)(),d=function(){c(""),s("")};return Object(P.jsxs)("form",{className:z.a.ContactForm,onSubmit:function(t){t.preventDefault();var e=u.find((function(t){return t.name===n})),c=u.find((function(t){return t.number===i}));if(c){var a=c.name,r=c.number;alert("This number already exists: ".concat(a,": ").concat(r))}else e?alert("".concat(n," is already in contacts")):(l(k(n,i)),d())},children:[Object(P.jsxs)("label",{className:z.a.formLabel,children:[Object(P.jsx)("span",{className:z.a.formText,children:"Name"}),Object(P.jsx)("input",{className:z.a.formInput,type:"text",placeholder:"Enter contact's name",name:"name",value:n,onChange:function(t){var e=t.target,n=e.name,a=e.value;"name"===n?c(a):"number"===n?s(a):alert("Enter the contact data!")},autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(P.jsxs)("label",{className:z.a.formLabel,children:[Object(P.jsx)("span",{className:z.a.formText,children:"Number"}),Object(P.jsx)(j.a,{value:i,name:"number",onChange:s,defaultCountry:"UA",international:!0,autoComplete:"off",pattern:"((\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?)",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10-14 \u0446\u0438\u0444\u0440, \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(P.jsx)("button",{className:z.a.formBtn,type:"submit",children:"Add contact"})]})},J=n(10),Z=n.n(J),D=function(t){var e=t.contact,n=e.id,a=e.name,r=e.number,o=Object(f.b)();return Object(P.jsxs)("li",{className:Z.a.ContactItem,children:[Object(P.jsxs)("span",{children:[a,":",Object(P.jsx)("a",{className:Z.a.phoneNumber,href:"tel:"+r,"aria-label":"Call",children:r})]}),Object(P.jsx)("button",{className:Z.a.contactBtn,onClick:function(){return o(c.deleteContact(n))},children:"Delete"})]})},G=function(){var t=Object(f.b)();Object(r.useEffect)((function(){t(I())}),[t]);var e=Object(f.c)(a.getContacts),n=Object(f.c)(a.getContactsToShow);return 0===e.length?Object(P.jsx)("p",{className:Z.a.notification,children:"Contact book is empty"}):Object(P.jsx)("ul",{className:Z.a.ContactList,children:n.map((function(t){var e=t.id;return Object(P.jsx)(D,{contact:t},e)}))})},M=n(20),V=n.n(M),Y=function(){var t=Object(f.c)(B),e=Object(f.b)();return Object(P.jsxs)("label",{className:V.a.filterLabel,children:[Object(P.jsx)("span",{className:V.a.filterText,children:"Find contacts by name"}),Object(P.jsx)("input",{className:V.a.filterInput,type:"text",placeholder:"Enter contact's name",value:t,onChange:function(t){return e(F(t.currentTarget.value))}})]})},H=n(37),Q=n.n(H),$=function(t){var e=t.children;return Object(P.jsx)("div",{className:Q.a.Container,children:e})},K=function(){return Object(P.jsx)("div",{className:l.a.App,children:Object(P.jsxs)($,{children:[Object(P.jsx)("h1",{className:l.a.title,children:"Phonebook (hook)"}),Object(P.jsx)(U,{}),Object(P.jsx)("h2",{className:l.a.titleContacts,children:"Contacts"}),Object(P.jsx)(Y,{}),Object(P.jsx)(G,{})]})})},W=n(18),X=n(5),tt=n(38),et=Object(O.c)([],(y={},Object(X.a)(y,C,(function(t,e){return e.payload})),Object(X.a)(y,x,(function(t,e){return[e.payload].concat(Object(W.a)(t))})),Object(X.a)(y,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),y)),nt=Object(O.c)("",Object(X.a)({},F,(function(t,e){return e.payload}))),ct=Object(O.c)(!1,(T={},Object(X.a)(T,h,(function(){return!0})),Object(X.a)(T,C,(function(){return!1})),Object(X.a)(T,p,(function(){return!1})),Object(X.a)(T,_,(function(){return!0})),Object(X.a)(T,x,(function(){return!1})),Object(X.a)(T,v,(function(){return!1})),Object(X.a)(T,N,(function(){return!0})),Object(X.a)(T,g,(function(){return!1})),Object(X.a)(T,L,(function(){return!1})),T)),at=Object(tt.a)({items:et,filter:nt,loading:ct}),rt=n(40),ot=n.n(rt),it=[].concat(Object(W.a)(Object(O.d)()),[ot.a]),st=Object(O.a)({reducer:{contacts:at},middleware:it,devTools:!1});s.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(f.a,{store:st,children:Object(P.jsx)(K,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__PVezi",formInput:"ContactForm_formInput__2N1tc",formBtn:"ContactForm_formBtn__3RIhc",formLabel:"ContactForm_formLabel__2_0Rq",formText:"ContactForm_formText__394pU"}}},[[72,1,2]]]);
//# sourceMappingURL=main.0df217cf.chunk.js.map