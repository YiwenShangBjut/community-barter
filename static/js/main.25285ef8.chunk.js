(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(24),l=a.n(c),r=a(158),s=a(13),o=a(7),d=a(148),j=a(345),b=a(341),u=a(368),x=a(329),h=a(330),O=a(45),p=a.n(O),g=(a(139),a(343)),f=a(350),m=a(355),v=a(356),y=a(347),S=a(149),C=a.n(S),w="http://server-dev.eu-west-2.elasticbeanstalk.com",k=a(49),P=a.p+"static/media/logo_white.13f98ca8.png",R=a(2);var W=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),l=Object(o.a)(c,2),r=l[0],s=l[1],O=Object(i.useState)(1),S=Object(o.a)(O,2),W=S[0],I=S[1],N=Object(i.useState)(50),D=Object(o.a)(N,2),B=D[0],L=D[1],T=Object(i.useState)(3),z=Object(o.a)(T,2),A=z[0],q=z[1],E=Object(i.useState)(""),M=Object(o.a)(E,2),_=M[0],V=M[1],Y={color:"white","& .Mui-checked":{color:"#ec5990"}},G=Object(d.a)(),F=G.handleSubmit,H=G.formState.errors,J=function(){n(!1),s(""),I(1),L(50),q(3),V("")},X=Object(k.a)();return Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(R.jsx)(j.a,{variant:"text",onClick:function(){X.replace({pathname:"/user",state:{}}),X.go(0)},children:Object(R.jsxs)("div",{style:{color:"white",display:"flex",alignItems:"center"},children:[Object(R.jsx)(C.a,{sx:{color:"white",fontSize:"25px"}}),Object(R.jsx)("div",{style:{color:"white",fontSize:"20px",marginLeft:"5px"},children:" Back to barter history"})]})}),Object(R.jsx)(j.a,{type:"text",style:{paddingRight:"20px"},onClick:function(){localStorage.clear(),X.replace({pathname:"/",state:{}}),X.go(0)},children:Object(R.jsx)("div",{style:{color:"white",fontSize:"20px"},children:" Logout"})})]}),Object(R.jsx)("div",{className:"title",children:Object(R.jsx)("img",{style:{width:"500px",margin:"30px"},src:P,alt:""})}),Object(R.jsxs)("form",{id:"form",onSubmit:F((function(){var e={name:r,category:W,condition_cat:B,price:A,description:_,user_id:localStorage.getItem("userId"),status:0};console.log("Submit: ",e),p.a.post(w+"/create",e).then((function(){n(!0)}))})),style:{marginTop:"30px"},children:[Object(R.jsx)("label",{children:"Name"}),Object(R.jsx)("input",{required:!0,placeholder:"Name of the item",value:r,onChange:function(e){s(e.target.value)}}),H.name&&Object(R.jsx)("p",{children:"This field is required"}),Object(R.jsx)("label",{children:"Category"}),Object(R.jsxs)(f.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"category",defaultValue:W,value:W,onChange:function(e){I(e.target.value)},children:[Object(R.jsx)(m.a,{value:1,control:Object(R.jsx)(g.a,{sx:Y}),label:"Clothing"}),Object(R.jsx)(m.a,{value:2,control:Object(R.jsx)(g.a,{sx:Y}),label:"Electronics"}),Object(R.jsx)(m.a,{value:3,control:Object(R.jsx)(g.a,{sx:Y}),label:"Books"}),Object(R.jsx)(m.a,{value:4,control:Object(R.jsx)(g.a,{sx:Y}),label:"Others"})]}),Object(R.jsx)("label",{children:"Condition"}),Object(R.jsx)(v.a,{sx:{width:300},children:Object(R.jsx)(y.a,{defaultValue:75,valueLabelDisplay:"off",step:25,marks:[{value:25,label:"Fair"},{value:50,label:"Good"},{value:75,label:"Very Good"},{value:100,label:"Never Worn"}],className:"condition-slder",sx:{color:"#ec5990","& .MuiSlider-markLabel":{color:"white",width:"30px"}},min:25,max:100})}),Object(R.jsx)("label",{children:"Price at time of purchase"}),Object(R.jsxs)("div",{className:"price",children:[Object(R.jsx)("input",{defaultValue:A,value:A,type:"number",min:"1",max:"100",className:"price-input",required:!0,onChange:function(e){q(e.target.value)}}),Object(R.jsx)("span",{className:"pound",children:"\xa3"})]}),Object(R.jsx)("label",{children:"Description"}),Object(R.jsx)("textarea",{defaultValue:_,value:_,placeholder:"",onChange:function(e){V(e.target.value)}}),Object(R.jsx)("button",{type:"submit",children:"Submit"})]}),Object(R.jsxs)(b.a,{open:a,onClose:J,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{height:"100px"},children:[Object(R.jsx)(u.a,{id:"alert-dialog-title",children:"New barter create successful"}),Object(R.jsx)(x.a,{children:"Please wait for the review to pass, it will take about 24 hours"}),Object(R.jsx)(h.a,{children:Object(R.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(R.jsx)(j.a,{type:"text",onClick:J,children:"Create a new"}),Object(R.jsx)(j.a,{type:"text",onClick:function(){n(!1)},children:"Close"})]})})]})]})},I=a(102),N=a(325),D=a(363),B=a(364),L=a(359),T=a(362),z=a(357),A=a(339),q=a(358),E=a(351),M=a(360),_=a(354),V=a(353),Y=a(361),G=a(338),F=a(352),H=a(337),J=a(366),X=a(367),U=a(365),K=a(105),Q=a.n(K),Z=a(328),$=a(156),ee=a.n($),te=a(155),ae=a.n(te),ie=a(344),ne=a(333),ce=a.p+"static/media/logo_black.e90eca9d.png",le=["Pending","Approved","Listed","Sold","Refused"],re=["Clothing","Electronics","Books","Others"],se=["","Fair","Good","Very good","Never Worn"];function oe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function de(e,t){return"desc"===e?function(e,a){return oe(e,a,t)}:function(e,a){return-oe(e,a,t)}}function je(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var i=t(e[0],a[0]);return 0!==i?i:e[1]-a[1]})),a.map((function(e){return e[0]}))}var be=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"status",numeric:!0,disablePadding:!1,label:"Status"},{id:"details",numeric:!0,disablePadding:!1,label:"Details"},{id:"action",numeric:!0,disablePadding:!1,label:"Action"}];function ue(e){e.onSelectAllClick;var t=e.order,a=e.orderBy,i=(e.numSelected,e.rowCount,e.onRequestSort);return Object(R.jsx)(z.a,{children:Object(R.jsxs)(q.a,{children:[Object(R.jsx)(L.a,{padding:"checkbox"}),be.map((function(e){return Object(R.jsx)(L.a,{align:"left",padding:"16px",sortDirection:a===e.id&&t,children:Object(R.jsxs)(E.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(n=e.id,function(e){i(e,n)}),children:[e.label,a===e.id?Object(R.jsx)(v.a,{component:"span",sx:Z.a,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})}function xe(e){var t=e.numSelected,a=Object(k.a)();return Object(R.jsxs)(M.a,{sx:Object(I.a)({pl:{sm:2},pr:{xs:1,sm:1}},t>0&&{bgcolor:function(e){return Object(N.a)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{style:{width:"300px",margin:"10px"},src:ce,alt:""})}),Object(R.jsx)(G.a,{title:"Create new barter",children:Object(R.jsx)(Y.a,{size:"large",sx:{padding:"1px"},onClick:function(){a.replace({pathname:"/create",state:{}}),a.go(0)},children:Object(R.jsx)(Q.a,{className:"addButton"})})})]})}function he(){var e=n.a.useState("asc"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=n.a.useState("calories"),r=Object(o.a)(l,2),s=r[0],d=r[1],j=n.a.useState([]),b=Object(o.a)(j,2),u=b[0],x=b[1],h=n.a.useState(0),O=Object(o.a)(h,2),g=O[0],f=O[1],m=n.a.useState(!1),y=Object(o.a)(m,2),S=y[0],C=(y[1],n.a.useState(5)),k=Object(o.a)(C,2),P=k[0],W=k[1],I=n.a.useState([]),N=Object(o.a)(I,2),z=N[0],E=N[1],M=n.a.useState(!1),Y=Object(o.a)(M,2),G=Y[0],K=Y[1],Q=n.a.useState([]),Z=Object(o.a)(Q,2),$=Z[0],te=Z[1],ce=n.a.useState(0),oe=Object(o.a)(ce,2),be=oe[0],he=oe[1],Oe=n.a.useState(!1),pe=Object(o.a)(Oe,2),ge=pe[0],fe=pe[1],me=n.a.useState(!1),ve=Object(o.a)(me,2),ye=ve[0],Se=ve[1],Ce=n.a.useState(!1),we=Object(o.a)(Ce,2),ke=we[0],Pe=we[1];Object(i.useEffect)((function(){Re()}),[]);var Re=function(){p.a.get(w+"/barter").then((function(e){E(e.data);var t=[];e.data.map((function(e,a){t.push(e.id)})),te(t)}))},We=g>0?Math.max(0,(1+g)*P-z.length):0,Ie=function(e,t){he($.indexOf(t)),fe(!0),Se(e)},Ne=function(e){return Object(R.jsx)(F.a,{onClick:function(t){return a=e.id,console.log("id is",a),console.log("rowIdList:",$),he($.indexOf(a)),void K(!0);var a},children:"See detials"})},De=function(e){return Object(R.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(R.jsx)(V.a,{onClick:function(){return Ie(!0,e.id)},style:{backgroundColor:"#90b28d",width:"70px",height:"25px",padding:"5px",borderRadius:"10px",marginRight:"10px"},children:Object(R.jsx)("div",{style:{color:"white",fontSize:"10px"},children:" Approve"})}),Object(R.jsx)(V.a,{onClick:function(){return Ie(!1,e.id)},style:{backgroundColor:"#c85863",width:"70px",height:"25px",padding:"5px",borderRadius:"10px"},children:Object(R.jsx)("div",{style:{color:"white",fontSize:"10px"},children:" Reject"})})]})},Be=function(){Pe(!0),setTimeout((function(){Pe(!1)}),3e3)},Le={display:"flex",flexDirection:"row",margin:"20px"},Te={marginRight:"10px",fontWeight:"bold"};return Object(R.jsxs)(v.a,{sx:{width:"100%",paddingTop:"20px"},children:[ke?Object(R.jsx)(ne.a,{direction:"left",in:ke,mountOnEnter:!0,unmountOnExit:!0,children:Object(R.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(R.jsx)(ie.a,{sx:{width:"20%",mb:2,marginButton:"30px"},severity:"success",children:"You successfully update the status of item"})})}):Object(R.jsx)("div",{style:{height:"45px",width:"100%"}}),Object(R.jsxs)(_.a,{sx:{width:"50%",mb:2,margin:"0 auto"},children:[Object(R.jsx)(xe,{numSelected:u.length}),Object(R.jsx)(T.a,{children:Object(R.jsxs)(D.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:S?"small":"medium",children:[Object(R.jsx)(ue,{numSelected:u.length,order:a,orderBy:s,onSelectAllClick:function(e){if(e.target.checked){var t=z.map((function(e){return e.name}));x(t)}else x([])},onRequestSort:function(e,t){c(s===t&&"asc"===a?"desc":"asc"),d(t)},rowCount:z.length}),Object(R.jsxs)(B.a,{sx:{paddingX:"20px"},children:[je(z,de(a,s)).slice(g*P,g*P+P).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(R.jsxs)(q.a,{children:[Object(R.jsx)(L.a,{}),Object(R.jsx)(L.a,{component:"th",id:a,scope:"row",padding:"none",align:"left",children:e.name}),Object(R.jsx)(L.a,{align:"left",children:le[e.status]}),Object(R.jsx)(L.a,{align:"left",children:Ne(e)}),Object(R.jsx)(L.a,{align:"center",children:De(e)})]})})),We>0&&Object(R.jsx)(q.a,{style:{height:(S?33:53)*We},children:Object(R.jsx)(L.a,{colSpan:6})})]})]})}),Object(R.jsx)(A.a,{rowsPerPageOptions:[5,10,25],component:"div",count:z.length,rowsPerPage:P,page:g,onPageChange:function(e,t){f(t)},onRowsPerPageChange:function(e){W(parseInt(e.target.value,10)),f(0)}})]}),Object(R.jsxs)(U.a,{open:G,onClose:function(){return K(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)(H.a,{id:"alert-dialog-title",children:"Details"}),Object(R.jsx)(J.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Name:"})," ",z[be]?z[be].name:""]}),Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Stauts:"})," ",z[be]?le[z[be].status]:""]}),Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Category:"})," ",z[be]?re[z[be].category]:""]}),Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Condition:"}),z[be]?se[z[be].condition_cat/25]:""]}),Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Price:"})," ",z[be]?z[be].price:""]}),Object(R.jsxs)("div",{style:Le,children:[Object(R.jsx)("div",{style:Te,children:"Description:"})," ",z[be]?z[be].description:""]})]})}),Object(R.jsx)(X.a,{children:function(e){if(z[e])return 0==z[e].status?Object(R.jsx)("div",{style:{display:"flex",flexDirection:"row",margin:"30px"},children:Object(R.jsx)(V.a,{type:"text",onClick:function(){K(!1)},children:"Close"})}):void 0}(be)})]}),Object(R.jsxs)(U.a,{open:ge,onClose:function(){return fe(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)(H.a,{id:"alert-dialog-title",children:"Please confirm"}),Object(R.jsx)(J.a,{children:Object(R.jsxs)("div",{sytle:{fontSize:"15px",display:"flex",flexDirection:"row"},children:[ye?Object(R.jsx)(ae.a,{fontSize:"small",sx:{marginRight:"8px",color:"#90b28d"}}):Object(R.jsx)(ee.a,{fontSize:"small",sx:{marginRight:"8px",color:"#c85863"}}),ye?"You are going to approve this item to be listed.":"You are going to refuse this item to be listed"]})}),Object(R.jsxs)(X.a,{children:[Object(R.jsx)(V.a,{sx:{marginLeft:"20px"},onClick:function(){ye?p.a.put(w+"/update/barter",{id:z[be].id,status:1}).then((function(e){fe(!1),Re(),Be()})):p.a.put(w+"/update/barter",{id:z[be].id,status:4}).then((function(e){fe(!1),Re(),Be()}))},children:Object(R.jsx)("div",{style:{color:"#ec5990"},children:" Yes"})}),Object(R.jsx)(V.a,{type:"text",onClick:function(){fe(!1)},children:"Close"})]})]})]})}var Oe=a(342);var pe=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(k.a)();return Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"title",children:Object(R.jsx)("img",{style:{width:"500px",margin:"30px"},src:P,alt:""})}),Object(R.jsx)(Oe.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(R.jsx)(Oe.a,{p:2,boxShadow:2,borderRadius:16,children:Object(R.jsx)("form",{onSubmit:function(e){e.preventDefault(),p.a.get(w+"/user/"+a).then((function(e){localStorage.setItem("points",e.data[0].points),localStorage.setItem("userId",e.data[0].id)})),c.replace({pathname:"/user",state:{}}),c.go(0)},children:Object(R.jsxs)(Oe.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[Object(R.jsx)("input",{required:!0,placeholder:"Username",onChange:function(e){n(e.target.value)}}),Object(R.jsx)("input",{required:!0,type:"password",placeholder:"Password",style:{marginTop:"30px"}}),Object(R.jsx)(j.a,{variant:"contained",color:"primary",type:"submit",children:" Login "})]})})})})]})},ge=a(273),fe=a(157),me=a.n(fe),ve=["Pending","Approved","Listed","Sold","Refused"],ye=["Clothing","Electronics","Books","Others"],Se=["","Fair","Good","Very good","Never Worn"];function Ce(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function we(e,t){return"desc"===e?function(e,a){return Ce(e,a,t)}:function(e,a){return-Ce(e,a,t)}}function ke(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var i=t(e[0],a[0]);return 0!==i?i:e[1]-a[1]})),a.map((function(e){return e[0]}))}var Pe=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"status",numeric:!0,disablePadding:!0,label:"Status"},{id:"category",numeric:!0,disablePadding:!0,label:"Category"},{id:"condition",numeric:!0,disablePadding:!0,label:"Condition"},{id:"oiginal_price",numeric:!0,disablePadding:!0,label:"Original Price (\xa3)"}];function Re(e){e.onSelectAllClick;var t=e.order,a=e.orderBy,i=(e.numSelected,e.rowCount,e.onRequestSort);return Object(R.jsx)(z.a,{children:Object(R.jsxs)(q.a,{children:[Object(R.jsx)(L.a,{padding:"checkbox"}),Pe.map((function(e){return Object(R.jsx)(L.a,{align:"left",padding:"16px",sortDirection:a===e.id&&t,children:Object(R.jsxs)(E.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(n=e.id,function(e){i(e,n)}),children:[e.label,a===e.id?Object(R.jsx)(v.a,{component:"span",sx:Z.a,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})}function We(e){var t=e.numSelected,a=Object(k.a)();return Object(R.jsxs)(M.a,{sx:Object(I.a)({pl:{sm:2},pr:{xs:1,sm:1}},t>0&&{bgcolor:function(e){return Object(N.a)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:[Object(R.jsx)(ge.a,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Barter items"}),Object(R.jsx)(V.a,{onClick:function(){a.replace({pathname:"/create",state:{}}),a.go(0)},style:{backgroundColor:"#ec5990",width:"330px",height:"50px",padding:"15px",borderRadius:"5px",marginRight:"10px"},children:Object(R.jsxs)("div",{style:{color:"white",display:"flex",alignItems:"center"},children:[Object(R.jsx)(Q.a,{sx:{color:"white"}}),Object(R.jsx)("div",{style:{marginLeft:"10px"},children:" Create new barter"})]})})]})}function Ie(){var e=n.a.useState("asc"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=n.a.useState("calories"),r=Object(o.a)(l,2),s=r[0],d=r[1],j=n.a.useState([]),b=Object(o.a)(j,2),u=b[0],x=b[1],h=n.a.useState(0),O=Object(o.a)(h,2),g=O[0],f=O[1],m=n.a.useState(!1),y=Object(o.a)(m,2),S=y[0],C=(y[1],n.a.useState(5)),W=Object(o.a)(C,2),I=W[0],N=W[1],z=n.a.useState([]),E=Object(o.a)(z,2),M=E[0],Y=E[1],G=n.a.useState(!1),F=Object(o.a)(G,2),K=F[0],Q=F[1],Z=Object(k.a)();Object(i.useEffect)((function(){$(),p.a.get(w+"/barter/"+localStorage.getItem("userId")).then((function(e){Y(e.data);var t=[];e.data.map((function(e,a){t.push(e.id)}))}))}),[]);var $=function(){var e=document.getElementById("counter_canvas").getContext("2d"),t=150;e.beginPath(),e.arc(t,75,44,0,2*Math.PI),e.fillStyle="#28124b",e.fill(),e.closePath(),e.font="12px Microsoft YaHei",e.fillStyle="#fff";var a="Points",i=e.measureText(a);e.fillText(a,(300-i.width)/2,58),e.font="18px Microsoft YaHei",e.fillStyle="#e24464";var n=localStorage.getItem("points");i=e.measureText(n);e.fillText(n,(300-i.width)/2,85);var c={ctx:e,x:t,y:75,radius:65,lineWidth:22,startAngle:0,endAngle:2*Math.PI},l=e.createRadialGradient(t,75,75,t,75,30);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(1,"rgba(255,255,255,0.3)"),c.color=l,ee(c);var r=44;c.radius=r,c.lineWidth=2,c.color="#720d77",ee(c),c.lineWidth=2,r+=c.lineWidth,c.radius=r,c.color="rgba(255,255,255,0)",ee(c),c.lineWidth=3,r+=c.lineWidth,c.radius=r,c.color="#3aa8db",ee(c),c.lineWidth=3,r+=c.lineWidth,c.radius=r,c.color="rgba(255,255,255,0.1)",ee(c),e.setLineDash([4,2]),c.lineWidth=2,r+=c.lineWidth,c.radius=r,c.color="#3aa8db",ee(c),e.setLineDash([4,4]),c.lineWidth=5,r+=c.lineWidth,c.radius=r,c.color="rgba(58,168,219,0.3)",ee(c)},ee=function(e){var t=e.ctx;t.beginPath(),t.arc(e.x,e.y,e.radius,e.startAngle,e.endAngle,!1),t.lineWidth=e.lineWidth,t.strokeStyle=e.color,t.stroke(),t.closePath()},te=g>0?Math.max(0,(1+g)*I-M.length):0;return Object(R.jsxs)(v.a,{sx:{width:"100%",paddingTop:"20px"},children:[Object(R.jsx)("div",{style:{display:"flex",justifyContent:"right"},children:Object(R.jsx)(V.a,{type:"text",style:{paddingRight:"20px"},onClick:function(){localStorage.clear(),Z.replace({pathname:"/",state:{}}),Z.go(0)},children:Object(R.jsx)("div",{style:{color:"white",fontSize:"20px"},children:" Logout"})})}),Object(R.jsx)("div",{className:"title",children:Object(R.jsx)("img",{style:{width:"500px",margin:"30px"},src:P,alt:""})}),Object(R.jsx)("div",{id:"counter",style:{display:"flex",justifyContent:"center"},children:Object(R.jsx)("canvas",{style:{width:"600px"},id:"counter_canvas"})}),Object(R.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(R.jsx)(V.a,{type:"submit",sx:{marginBottom:"40px"},onClick:function(){Q(!0)},children:Object(R.jsx)("div",{style:{color:"white"},children:" Barcode"})})}),Object(R.jsxs)(_.a,{sx:{width:"50%",mb:2,margin:"0 auto"},children:[Object(R.jsx)(We,{numSelected:u.length}),Object(R.jsx)(T.a,{children:Object(R.jsxs)(D.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:S?"small":"medium",children:[Object(R.jsx)(Re,{numSelected:u.length,order:a,orderBy:s,onSelectAllClick:function(e){if(e.target.checked){var t=M.map((function(e){return e.name}));x(t)}else x([])},onRequestSort:function(e,t){c(s===t&&"asc"===a?"desc":"asc"),d(t)},rowCount:M.length}),Object(R.jsxs)(B.a,{sx:{paddingX:"20px"},children:[ke(M,we(a,s)).slice(g*I,g*I+I).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(R.jsxs)(q.a,{children:[Object(R.jsx)(L.a,{}),Object(R.jsx)(L.a,{component:"th",id:a,scope:"row",padding:"none",align:"left",children:Object(R.jsx)(v.a,{sx:{fontWeight:"bold"},children:e.name})}),Object(R.jsx)(L.a,{align:"left",children:ve[e.status]}),Object(R.jsx)(L.a,{align:"left",children:ye[e.category]}),Object(R.jsx)(L.a,{align:"left",children:Se[e.condition_cat/25]}),Object(R.jsx)(L.a,{align:"center",children:e.price})]})})),te>0&&Object(R.jsx)(q.a,{style:{height:(S?33:53)*te},children:Object(R.jsx)(L.a,{colSpan:6})})]})]})}),Object(R.jsx)(A.a,{rowsPerPageOptions:[5,10,25],component:"div",count:M.length,rowsPerPage:I,page:g,onPageChange:function(e,t){f(t)},onRowsPerPageChange:function(e){N(parseInt(e.target.value,10)),f(0)}})]}),Object(R.jsxs)(U.a,{open:K,onClose:function(){return Q(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)(H.a,{id:"alert-dialog-title",children:"Here is your barcode"}),Object(R.jsx)(J.a,{children:K?Object(R.jsx)(me.a,{value:K?function(){var e=localStorage.getItem("points");return"00".concat(e)}():"",displayValue:!1}):null}),Object(R.jsx)(X.a,{children:Object(R.jsx)(V.a,{type:"text",onClick:function(){Q(!1)},children:"Close"})})]})]})}var Ne=function(){return Object(R.jsx)("div",{children:Object(R.jsx)(r.a,{children:Object(R.jsxs)(s.c,{children:[Object(R.jsx)(s.a,{path:"/",exact:!0,element:Object(R.jsx)(pe,{})}),Object(R.jsx)(s.a,{path:"/user",exact:!0,element:Object(R.jsx)(Ie,{})}),Object(R.jsx)(s.a,{path:"/create",exact:!0,element:Object(R.jsx)(W,{})}),Object(R.jsx)(s.a,{path:"/admin",element:Object(R.jsx)(he,{})})]})})})};l.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(Ne,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.25285ef8.chunk.js.map