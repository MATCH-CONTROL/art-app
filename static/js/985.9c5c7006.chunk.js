"use strict";(self.webpackChunkmatch_control_ui=self.webpackChunkmatch_control_ui||[]).push([[985],{39354:function(e,n,i){i.d(n,{Z:function(){return h}});var s=i(1413),r=i(29439),t=i(97215),l=i(47313),a=i(60731),c=i.n(a),o={defaultColDef:{editable:!1,sortable:!0,filter:!0,resizable:!0}},d=(0,s.Z)((0,s.Z)({},o),{},{headerHeight:32,rowHeight:28}),u=c().namespace("agGrid/Settings"),x=(i(10421),i(46417)),h=(0,l.forwardRef)((function(e,n){var i=e.id,a=e.gridId,c=e.className,h=e.gridOptions,Z=e.isLoading,j=e.rowData,m=e.context,p=e.isCondensed,f=e.gridHeight,g=void 0===f?500:f,v=(0,l.useState)(),y=(0,r.Z)(v,2),C=y[0],w=y[1],z=(0,l.useCallback)((function(e){var n=e.api,i=e.columnApi,s=u.get(a);if(s){var r=s.columnState,t=s.columnGroupState;r&&i.applyColumnState({state:r,applyOrder:!0}),t&&i.setColumnGroupState(t)}else n.sizeColumnsToFit()}),[a]),P=(0,l.useMemo)((function(){return(0,s.Z)((0,s.Z)({},p?d:o),h)}),[h,p]),b=(0,l.useCallback)((function(e){var n=e.columnApi,i={columnState:n.getColumnState(),columnGroupState:n.getColumnGroupState()};u.set(a,i)}),[a]),S=(0,l.useMemo)((function(){return(0,s.Z)({onGridReady:function(e){var n=e.api,i=e.columnApi;a?z({api:n,columnApi:i}):n.sizeColumnsToFit(),w({api:n,columnApi:i})},onGridSizeChanged:function(e){var n=e.api;e.columnApi;a||n.sizeColumnsToFit()}},a?{onColumnResized:b,onColumnVisible:b,onColumnPinned:b,onColumnMoved:b,onColumnValueChanged:b,onColumnPivotChanged:b,onColumnPivotModeChanged:b,onColumnRowGroupChanged:b}:{})}),[a,b,z]);return(0,l.useEffect)((function(){n&&("function"===typeof n?n(C):n.current=C)}),[n,C]),(0,l.useEffect)((function(){Z?null===C||void 0===C||C.api.showLoadingOverlay():null!==j&&void 0!==j&&j.length?null===C||void 0===C||C.api.hideOverlay():null===C||void 0===C||C.api.showNoRowsOverlay()}),[Z,j,C]),(0,l.useEffect)((function(){var e=function(){null===C||void 0===C||C.api.sizeColumnsToFit()};return window.addEventListener("resize",e,!0),function(){window.removeEventListener("resize",e,!0)}}),[C]),(0,x.jsx)("div",{className:"ag-theme-material ".concat(c||""),style:{height:g,minHeight:"250px"},id:i,children:(0,x.jsx)(t.AgGridReact,(0,s.Z)((0,s.Z)({},P),{},{rowData:j,context:m},S))})}))},20985:function(e,n,i){i.r(n),i.d(n,{default:function(){return V}});var s=i(74165),r=i(1413),t=i(15861),l=i(29439),a=i(42669),c=i(67598),o=i(51987),d=i(32415),u=i(16157),x=i(86360),h=i(39354),Z=i(47313),j=i(45987),m=i(73477),p=i(62463),f=i(2040),g=i(91210),v=i(71207),y=i(35192),C=i(46417),w=["children"];function z(e){var n=e.children,i=(0,j.Z)(e,w);return(0,C.jsx)(m.Z,(0,r.Z)((0,r.Z)({},i),{},{fullWidth:!0,size:"small",children:(0,C.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:n})}))}var P=function(e){var n=e.createOrEdit,i=e.viewRule;return(0,C.jsxs)(p.Z,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[(0,C.jsxs)(z,{color:"primary",onClick:function(){return n("create")},children:[(0,C.jsx)(f.Z,{fontSize:"medium"}),"Create"]}),(0,C.jsxs)(z,{color:"secondary",onClick:function(){return i(!0)},children:[(0,C.jsx)(g.Z,{fontSize:"medium"}),"View"]}),(0,C.jsxs)(z,{color:"warning",onClick:function(){return n("edit")},children:[(0,C.jsx)(v.Z,{fontSize:"medium"}),"Edit"]}),(0,C.jsxs)(z,{color:"error",children:[(0,C.jsx)(y.Z,{fontSize:"medium"}),"Delete"]})]})},b=i(8586),S=i(18104),k=i(34940),A=i(35672),M=i(58698),E=i(82937);var R=function(e){var n=e.setOpen;return(0,C.jsxs)(u.Z,{sx:{width:"75vw"},display:"flex",flexDirection:"column",children:[(0,C.jsxs)(u.Z,{display:"flex",flexDirection:"column",children:[(0,C.jsxs)(u.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,C.jsx)(a.Z,{variant:"h5",noWrap:!0,children:"RULE"}),(0,C.jsx)(S.Z,{size:"small",onClick:function(){return n(!1)},children:(0,C.jsx)(b.Z,{})})]}),(0,C.jsx)(k.Z,{}),(0,C.jsxs)(A.Z,{sx:{py:0,backgroundColor:"#fafafb"},children:[(0,C.jsx)(M.ZP,{children:(0,C.jsxs)(E.ZP,{container:!0,spacing:3,children:[(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Message status"}),(0,C.jsx)(a.Z,{children:"Not Expected Deals"})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Message type"}),(0,C.jsx)(a.Z,{children:"300"})]})})]})}),(0,C.jsx)(M.ZP,{children:(0,C.jsxs)(E.ZP,{container:!0,spacing:3,children:[(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Party A"}),(0,C.jsx)(a.Z,{children:"XXXXXXXXXXX"})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Party B"}),(0,C.jsx)(a.Z,{children:"YYYYYYYYYYY"})]})})]})}),(0,C.jsx)(M.ZP,{children:(0,C.jsxs)(E.ZP,{container:!0,spacing:3,children:[(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Created by"}),(0,C.jsx)(a.Z,{children:"demo"})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:12,md:6,children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Validated by"}),(0,C.jsx)(a.Z,{children:"validator"})]})})]})})]})]}),(0,C.jsx)(k.Z,{}),(0,C.jsx)(u.Z,{flexGrow:1,sx:{p:2,height:"calc(100vh - 295px)",overflowY:"auto"},children:(0,C.jsxs)(p.Z,{spacing:.5,children:[(0,C.jsx)(a.Z,{color:"secondary",children:"Rules"}),(0,C.jsxs)("table",{style:{width:"100%"},children:[(0,C.jsxs)("colgroup",{children:[(0,C.jsx)("col",{width:"35%"}),(0,C.jsx)("col",{width:"auto"})]}),(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{style:{textAlign:"left"},children:"PartyA ABIC"}),(0,C.jsx)("td",{children:"456123"})]})]})]})}),(0,C.jsx)(k.Z,{}),(0,C.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,C.jsx)(m.Z,{variant:"text",color:"secondary",onClick:function(){return n(!1)},children:"Close"}),(0,C.jsxs)(p.Z,{direction:"row",spacing:1,children:[(0,C.jsx)(m.Z,{variant:"contained",color:"success",onClick:function(){return n(!1)},children:"Approve"}),(0,C.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){return n(!1)},children:"Reject"})]})]})]})},D=i(59864),G=i(58467),N=i(2135),O=i(29611),Y=i(91294),I=i(10383),W=i(12119),X=i(67881);var B=function(e){var n=e.setOpen,i=e.action;return(0,C.jsxs)(u.Z,{sx:{width:800},display:"flex",flexDirection:"column",children:[(0,C.jsx)(u.Z,{display:"flex",flexDirection:"column",sx:{borderBottom:1,borderColor:"divider"},children:(0,C.jsxs)(u.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,C.jsxs)(a.Z,{variant:"h5",noWrap:!0,children:["edit"===i?"Edit":"Create"," action rule"]}),(0,C.jsx)(S.Z,{size:"small",onClick:function(){return n(!1)},children:(0,C.jsx)(b.Z,{})})]})}),(0,C.jsx)(u.Z,{flexGrow:1,sx:{p:2,height:"calc(100vh - 105px)",overflowY:"auto"},children:(0,C.jsxs)(E.ZP,{container:!0,spacing:2.5,children:[(0,C.jsx)(E.ZP,{item:!0,xs:6,children:(0,C.jsxs)(p.Z,{spacing:1,children:[(0,C.jsx)(Y.Z,{children:"Message Type"}),(0,C.jsx)(I.Z,{fullWidth:!0,sx:{m:1},children:(0,C.jsx)(W.Z,{id:"messageType",name:"messageType",displayEmpty:!0,size:"small"})})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:6,children:(0,C.jsxs)(p.Z,{spacing:1,children:[(0,C.jsx)(Y.Z,{children:"Message status"}),(0,C.jsx)(I.Z,{fullWidth:!0,sx:{m:1},children:(0,C.jsx)(W.Z,{id:"messageStatus",name:"messageStatus",displayEmpty:!0,size:"small"})})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:6,children:(0,C.jsxs)(p.Z,{spacing:1,children:[(0,C.jsx)(Y.Z,{children:"Party A"}),(0,C.jsx)(I.Z,{fullWidth:!0,sx:{m:1},children:(0,C.jsx)(X.Z,{id:"partyA",name:"partyA",size:"small"})})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:6,children:(0,C.jsxs)(p.Z,{spacing:1,children:[(0,C.jsx)(Y.Z,{children:"Party B"}),(0,C.jsx)(I.Z,{fullWidth:!0,sx:{m:1},children:(0,C.jsx)(X.Z,{id:"partyB",name:"partyB",size:"small"})})]})}),(0,C.jsx)(E.ZP,{item:!0,xs:12,children:(0,C.jsxs)(p.Z,{spacing:1,children:[(0,C.jsx)(Y.Z,{children:"Rules"}),(0,C.jsxs)(p.Z,{spacing:1,direction:"row",children:[(0,C.jsx)(I.Z,{fullWidth:!0,children:(0,C.jsx)(W.Z,{id:"messageStatus",name:"messageStatus",displayEmpty:!0,size:"small"})}),(0,C.jsx)(I.Z,{fullWidth:!0,children:(0,C.jsx)(X.Z,{id:"rule",name:"rule",size:"small"})}),(0,C.jsx)(S.Z,{color:"error",children:(0,C.jsx)(y.Z,{})})]}),(0,C.jsxs)(p.Z,{spacing:1,direction:"row",children:[(0,C.jsx)(I.Z,{fullWidth:!0,children:(0,C.jsx)(W.Z,{id:"messageStatus",name:"messageStatus",displayEmpty:!0,size:"small"})}),(0,C.jsx)(I.Z,{fullWidth:!0,children:(0,C.jsx)(X.Z,{id:"rule",name:"rule",size:"small"})}),(0,C.jsx)(S.Z,{color:"error",children:(0,C.jsx)(y.Z,{})})]})]})})]})}),(0,C.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:1,borderTop:1,borderColor:"divider"},children:[(0,C.jsx)(m.Z,{variant:"contained",color:"info",children:"Add Rule"}),(0,C.jsxs)(p.Z,{direction:"row",spacing:1,children:[(0,C.jsx)(m.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"}),(0,C.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){return n(!1)},children:"edit"===i?"Update":"Create"})]})]})]})},V=function(){var e=(0,G.UO)().status,n=0;switch(e){case"pending":n=1;break;case"archived":n=2;break;default:n=0}var i=(0,Z.useState)(!1),j=(0,l.Z)(i,2),m=j[0],p=j[1],f=(0,Z.useState)(n),g=(0,l.Z)(f,2),v=g[0],y=g[1],w=(0,Z.useState)({loading:!0}),z=(0,l.Z)(w,2),b=z[0],S=z[1],k=(0,Z.useState)({show:!1,action:"edit"}),A=(0,l.Z)(k,2),M=A[0],E=A[1],Y=(0,Z.useRef)();(0,Z.useEffect)((function(){var n=function(){var n=(0,t.Z)((0,s.Z)().mark((function n(){var i;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.Z.get("/api/action-rules",{params:{status:e||"active"}});case 2:i=n.sent,S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,data:(null===i||void 0===i?void 0:i.data)||[]})}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var I={columnDefs:[{headerName:"Id",field:"id"},{headerName:"Message type",field:"messageType"},{headerName:"Party A",field:"partyA"},{headerName:"Party B",field:"partyB"},{headerName:"Rule status",field:"ruleStatus"},{headerName:"Message status",field:"messageStatus"},{headerName:"Created by",field:"createdBy"},{headerName:"Validated by",field:"validatedBy"},{headerName:"Created date",field:"createdDate"}],rowSelection:"single",onRowDoubleClicked:function(){p(!0)}};if(b.loading)return null;var W=function(){E((function(e){return(0,r.Z)((0,r.Z)({},e),{},{show:!1})}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(a.Z,{variant:"h4",sx:{mb:1},display:"flex",alignItems:"center",children:[(0,C.jsx)(O.Z,{fontSize:"medium",sx:{mr:1}})," Manage action rules"]}),(0,C.jsx)(c.Z,{value:v,onChange:function(e,n){return y(n)},children:[{key:"active",title:"Active"},{key:"pending",title:"Pending"},{key:"archived",title:"Archived"}].map((function(e,n){return(0,C.jsx)(o.Z,{component:N.rU,label:e.title,to:"".concat("/admin/action-rules","/").concat(e.key)},e.key)}))}),(0,C.jsx)(d.Z,{elevation:1,children:(0,C.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,C.jsx)(u.Z,{component:"main",sx:{flexGrow:1},children:(0,C.jsx)(h.Z,{gridOptions:I,rowData:b.data,isCondensed:!0,gridId:Y,id:"action",gridHeight:"calc(100vh - 270px)"})}),(0,C.jsx)(u.Z,{component:"main",sx:{flexGrow:0,width:100,backgroundColor:"#f0f0f0",p:1},children:(0,C.jsx)(P,{createOrEdit:function(e){E({show:!0,action:e})},viewRule:p})})]})}),(0,C.jsx)(x.ZP,{anchor:"right",open:m,onClose:function(){return p((function(e){return!e}))},children:(0,C.jsx)(R,{setOpen:p})}),(0,C.jsx)(x.ZP,{anchor:"right",open:M.show,onClose:W,children:(0,C.jsx)(B,{setOpen:W,action:M.action})})]})}},2040:function(e,n,i){var s=i(25700),r=i(46417);n.Z=(0,s.Z)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},8586:function(e,n,i){var s=i(25700),r=i(46417);n.Z=(0,s.Z)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},35192:function(e,n,i){var s=i(25700),r=i(46417);n.Z=(0,s.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},71207:function(e,n,i){var s=i(25700),r=i(46417);n.Z=(0,s.Z)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},91210:function(e,n,i){var s=i(25700),r=i(46417);n.Z=(0,s.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")}}]);