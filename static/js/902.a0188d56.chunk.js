"use strict";(self.webpackChunkrent_cars_redux=self.webpackChunkrent_cars_redux||[]).push([[902],{3719:function(e,n,s){s.d(n,{Qi:function(){return a},Tc:function(){return i},Wz:function(){return r},Zp:function(){return c},t6:function(){return t}});var r=function(e){return e.carsList.cars},a=function(e){return e.carsList.isLoading},c=function(e){return e.carsList.page},t=function(e){return e.carsList.completed},i=function(e){return e.favorites.cars}},7272:function(e,n,s){s.d(n,{X:function(){return c}});var r="BigButton_big_button__yZ4XF",a=s(184),c=function(e){var n=e.children,s=e.onClick;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:s,type:"button",className:r,children:n})})}},595:function(e,n,s){s.d(n,{h:function(){return I}});var r=s(9439),a=s(7272),c="CarItem_car_item__GFXfQ",t="CarItem_car_img_box__LiKI9",i="CarItem_car_img__CrWif",o="CarItem_icon_heart__Lo9zC",l="CarItem_icon_heart_full__7BZzf",d="CarItem_car_name__RaY9I",_="CarItem_car_model__qJVJ1",u="CarItem_car_options__ft5Nz",m="CarItem_options_wrap_first__ij44H",h="CarItem_options_wrap_second__ZuP9T",x="CarItem_hr__J6QMX",p=s(2791);var j=s.p+"static/media/sprite.3f89a6f46dbdeb964c1ccba0d8c0bdd1.svg",f="MiddleButton_button__ehmrq",v=s(184),N=function(e){var n=e.children,s=e.onClick;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{onClick:s,type:"button",className:f,children:n})})},C={modal_backdrop:"LernMoreModal_modal_backdrop__BDOU0",modal_container:"LernMoreModal_modal_container__90mVM",close_btn:"LernMoreModal_close_btn__n7+ia",icon_x:"LernMoreModal_icon_x__+XSDa",car_img_box:"LernMoreModal_car_img_box__uabmA",car_img:"LernMoreModal_car_img__b-a+R",car_name:"LernMoreModal_car_name__k6GM5",car_model:"LernMoreModal_car_model__cZZt6",car_options:"LernMoreModal_car_options__73LWw",hr:"LernMoreModal_hr__FgT2r",description:"LernMoreModal_description__iggIs",car_accessories:"LernMoreModal_car_accessories__iXu+C",car_options_bottom:"LernMoreModal_car_options_bottom__MZJCM",features:"LernMoreModal_features__qMArn",conditions_row:"LernMoreModal_conditions_row__N8tV-",conditions_item:"LernMoreModal_conditions_item__Yu32K",customer_data:"LernMoreModal_customer_data__xjKyU"},b=s(1781),g=function(e){var n=e.onClose,s=e.carItem,r=s.img,a=s.make,c=s.model,t=s.year,i=s.type,o=s.id,l=s.address,d=s.fuelConsumption,_=s.engineSize,u=s.description,m=s.rentalConditions,h=s.accessories,x=s.functionalities,f=s.rentalPrice,g=s.mileage,M=(0,p.useCallback)((function(e){27===e.keyCode&&n()}),[n]);(0,p.useEffect)((function(){return document.addEventListener("keydown",M),function(){document.removeEventListener("keydown",M)}}),[M]);var L=l.split(",").slice(1);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:C.modal_backdrop,onClick:n,children:(0,v.jsxs)("div",{className:C.modal_container,onClick:function(e){return e.stopPropagation()},children:[(0,v.jsx)("button",{type:"button",className:C.close_btn,onClick:n,children:(0,v.jsx)("svg",{className:C.icon_x,children:(0,v.jsx)("use",{href:"".concat(j,"#x")})})}),(0,v.jsx)("div",{className:C.car_img_box,children:(0,v.jsx)("img",{className:C.car_img,src:r,alt:"car"})}),(0,v.jsx)("div",{className:C.car_name,children:(0,v.jsxs)("div",{children:[a,(0,v.jsxs)("span",{className:C.car_model,children:[" ",c,", "]}),t]})}),(0,v.jsxs)("ul",{className:C.car_options,children:[(0,v.jsxs)("li",{className:C.options_wrap,children:[(0,v.jsx)("span",{children:L[0]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsx)("span",{children:L[1]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsxs)("span",{children:["Id:",o]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsxs)("span",{children:["Year:",t]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsxs)("span",{children:["Type:",i]})]}),(0,v.jsxs)("li",{className:C.options_wrap,children:[(0,v.jsxs)("span",{children:["Fuel Consumption:",d]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsxs)("span",{children:["Engine Size:",_]})]})]}),(0,v.jsx)("p",{className:C.description,children:u}),(0,v.jsx)("p",{className:C.car_accessories,children:"Accessories and functionalities:"}),(0,v.jsxs)("ul",{className:"".concat(C.car_options," ").concat(C.car_options_bottom),children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("span",{children:h[0]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsx)("span",{children:h[1]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsx)("span",{children:h[2]})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("span",{children:x[0]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsx)("span",{children:x[1]}),(0,v.jsx)("hr",{className:C.hr}),(0,v.jsx)("span",{children:x[2]})]})]}),(0,v.jsx)("p",{className:C.car_accessories,children:"Rental Conditions:"}),(0,v.jsxs)("ul",{className:C.features,children:[(0,v.jsxs)("li",{className:C.conditions_row,children:[(0,v.jsxs)("div",{className:C.conditions_item,children:["Minimum age : ",(0,v.jsx)("span",{className:C.customer_data,children:(0,b.hc)(m)})]}),(0,v.jsx)("div",{className:C.conditions_item,children:(0,b.y8)(m)[1]})]}),(0,v.jsxs)("li",{className:C.conditions_row,children:[(0,v.jsx)("div",{className:C.conditions_item,children:(0,b.y8)(m)[2]}),(0,v.jsxs)("div",{className:C.conditions_item,children:["Mileage : ",(0,v.jsx)("span",{className:C.customer_data,children:(0,b.Wb)(g)})]}),(0,v.jsxs)("div",{className:C.conditions_item,children:["Price : ",(0,v.jsx)("span",{className:C.customer_data,children:f})]})]})]}),(0,v.jsx)(N,{onClick:function(e){e.preventDefault(),document.location.href="tel:+380730000000"},children:"Rental car"})]})})})},M=s(4420),L=s(2648),y=s(3719),k=function(e){var n=e.carItem,s=(0,M.I0)(),f=(0,M.v9)(y.Tc),N=(0,p.useState)(!1),C=(0,r.Z)(N,2),k=C[0],F=C[1],I=n.img,w=n.make,S=n.model,Z=n.year,P=n.rentalCompany,U=n.type,W=n.id,T=n.address,X=n.accessories,z=n.functionalities,A=n.rentalPrice,R=f.find((function(e){return e.id===W})),V=T.split(",").slice(1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("li",{className:c,children:[(0,v.jsxs)("div",{className:t,children:[(0,v.jsx)("button",{type:"button",onClick:function(){s((0,L.m)(n))},children:(0,v.jsx)("svg",{className:R?"".concat(o," ").concat(l):"".concat(o),children:(0,v.jsx)("use",{href:"".concat(j,"#heart")})})}),(0,v.jsx)("img",{className:i,src:I,alt:"car"})]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsxs)("div",{children:[w,(0,v.jsxs)("span",{className:_,children:[" ",S,", "]}),Z]}),(0,v.jsx)("p",{children:A})]}),(0,v.jsxs)("ul",{className:u,children:[(0,v.jsxs)("li",{className:m,children:[(0,v.jsx)("span",{children:V[0]}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:V[1]}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:P}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:(0,b.PU)(Z)})]}),(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("span",{children:U}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:S}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:W}),(0,v.jsx)("hr",{className:x}),(0,v.jsx)("span",{children:(0,b.aI)(X,z)})]})]}),(0,v.jsx)(a.X,{onClick:function(){F(!0),document.body.style.overflow="hidden"},children:"Learn more"})]}),k&&(0,v.jsx)(g,{onClose:function(){F(!1),document.body.style.overflow="auto"},carItem:n,openModal:k})]})},F="CarList_car_list__31CCK",I=function(e){var n=e.cars;return(0,v.jsx)("ul",{className:F,children:null===n||void 0===n?void 0:n.map((function(e){return(0,v.jsx)(k,{carItem:e},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())}))})}},5434:function(e,n,s){s.d(n,{g:function(){return L}});var r=s(3433),a=s(9439),c=s(2791),t="ChooseForm_search_form__AGIS0",i="ChooseForm_search_inputs__lxopA",o="ChooseForm_select_label__ovl1X",l="ChooseForm_form_label__WwQ7a",d="ChooseForm_input_wrap__Oryak",_="ChooseForm_input_place__++g+U",u="ChooseForm_form_input__GmrLZ",m="ChooseForm_second__3I5RN",h="ChooseForm_last_inputs__KsRMA",x="ChooseForm_select__9ddjG",p="ChooseForm_select_price__ViUl-",j="ChooseForm_select_wrap__JG16P",f="ChooseForm_option__ufpUT",v="Button_button__wiIYs",N=s(184),C=function(e){var n=e.children;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("button",{type:"submit",className:v,children:n})})},b=s(4420),g=s(3719),M=s(1781),L=function(e){var n=e.onSubmit,s=(0,b.v9)(g.Wz),v=(0,c.useState)(""),L=(0,a.Z)(v,2),y=L[0],k=L[1],F=(0,c.useState)(""),I=(0,a.Z)(F,2),w=I[0],S=I[1],Z=s.map((function(e){return e.make})),P=(0,r.Z)(new Set(Z)).map((function(e){return{value:e.toLowerCase(),label:e}})),U=s.map((function(e){return e.rentalPrice.replace("$","")})),W=Math.max.apply(Math,(0,r.Z)(U)),T=(0,M.Dd)(W).map((function(e){return{value:e,label:e}}));return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{children:(0,N.jsx)("form",{className:t,onSubmit:function(e){e.preventDefault();var s=e.target,r=s.elements.cars.value,a=s.elements.price.value,c=s.elements.from.value,t=s.elements.to.value;n(r,a,c,t),k(""),S(""),s.reset()},children:(0,N.jsxs)("div",{className:i,children:[(0,N.jsxs)("label",{className:o,children:["Car brand",(0,N.jsxs)("select",{className:x,name:"cars",defaultValue:"",children:[P.map((function(e){var n=e.value,s=e.label;return(0,N.jsx)("option",{className:f,value:n,children:s},n)})),(0,N.jsx)("option",{className:f,value:"",children:"Enter the text"},"enter")]})]}),(0,N.jsxs)("label",{className:o,children:["Price/ 1 hour",(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("div",{className:_,children:"To"}),(0,N.jsxs)("select",{className:"".concat(x," ").concat(p),name:"price",defaultValue:"",children:[T.map((function(e){var n=e.value,s=e.label;return(0,N.jsx)("option",{className:f,value:n,children:"".concat(s,"$")},n)})),(0,N.jsx)("option",{className:f,value:"",children:"   $"},"to")]})]})]}),(0,N.jsxs)("div",{className:h,children:[(0,N.jsxs)("label",{className:l,children:["\u0421ar mileage / km",(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("div",{className:_,children:"From"}),(0,N.jsx)("input",{className:u,type:"text",name:"from",value:y,onChange:function(e){var n=e.target.value.replace(/,/g,"");k((0,M.Wb)(n))}})]})]}),(0,N.jsx)("label",{className:l,children:(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("div",{className:_,children:"To"}),(0,N.jsx)("input",{className:"".concat(u," ").concat(m),type:"text",name:"to",value:w,onChange:function(e){var n=e.target.value.replace(/,/g,"");S((0,M.Wb)(n))}})]})})]}),(0,N.jsx)(C,{type:"submit",children:"Search"})]})})})})}},1781:function(e,n,s){function r(e){return e.split("\n")}function a(e){return e.split("\n")[0].split(": ")[1]}function c(e,n){var s=null===e||void 0===e?void 0:e.filter((function(e){return e.split(" ")}));if(0!==(null===s||void 0===s?void 0:s.length))return s[Math.floor(Math.random()*(null===s||void 0===s?void 0:s.length))];var r=null===n||void 0===n?void 0:n.filter((function(e){return e.split(" ")}));return r.length>0?r[Math.floor(Math.random()*r.length)]:null}function t(e,n){return e>2007?"Premium":""}function i(e){return e.toString().split("").length<=3?e:(e/1e3).toFixed(3).replace(".",",")}function o(e){for(var n=[],s=10;s<=e;s+=10)n.push(s);return n}s.d(n,{Dd:function(){return o},PU:function(){return t},Wb:function(){return i},aI:function(){return c},hc:function(){return a},y8:function(){return r}})}}]);
//# sourceMappingURL=902.a0188d56.chunk.js.map