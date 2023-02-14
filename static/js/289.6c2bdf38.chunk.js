"use strict";(self.webpackChunkmatch_control_ui=self.webpackChunkmatch_control_ui||[]).push([[289],{39354:function(e,n,i){i.d(n,{Z:function(){return p}});var t=i(1413),r=i(29439),a=i(97215),l=i(47313),o=i(60731),s=i.n(o),c={defaultColDef:{editable:!1,sortable:!0,filter:!0,resizable:!0}},d=(0,t.Z)((0,t.Z)({},c),{},{headerHeight:32,rowHeight:28}),u=s().namespace("agGrid/Settings"),h=(i(10421),i(46417)),p=(0,l.forwardRef)((function(e,n){var i=e.id,o=e.gridId,s=e.className,p=e.gridOptions,x=e.isLoading,f=e.rowData,m=e.context,Z=e.isCondensed,v=e.gridHeight,j=void 0===v?500:v,g=(0,l.useState)(),C=(0,r.Z)(g,2),y=C[0],w=C[1],z=(0,l.useCallback)((function(e){var n=e.api,i=e.columnApi,t=u.get(o);if(t){var r=t.columnState,a=t.columnGroupState;r&&i.applyColumnState({state:r,applyOrder:!0}),a&&i.setColumnGroupState(a)}else n.sizeColumnsToFit()}),[o]),M=(0,l.useMemo)((function(){return(0,t.Z)((0,t.Z)({},Z?d:c),p)}),[p,Z]),b=(0,l.useCallback)((function(e){var n=e.columnApi,i={columnState:n.getColumnState(),columnGroupState:n.getColumnGroupState()};u.set(o,i)}),[o]),S=(0,l.useMemo)((function(){return(0,t.Z)({onGridReady:function(e){var n=e.api,i=e.columnApi;o?z({api:n,columnApi:i}):n.sizeColumnsToFit(),w({api:n,columnApi:i})},onGridSizeChanged:function(e){var n=e.api;e.columnApi;o||n.sizeColumnsToFit()}},o?{onColumnResized:b,onColumnVisible:b,onColumnPinned:b,onColumnMoved:b,onColumnValueChanged:b,onColumnPivotChanged:b,onColumnPivotModeChanged:b,onColumnRowGroupChanged:b}:{})}),[o,b,z]);return(0,l.useEffect)((function(){n&&("function"===typeof n?n(y):n.current=y)}),[n,y]),(0,l.useEffect)((function(){x?null===y||void 0===y||y.api.showLoadingOverlay():null!==f&&void 0!==f&&f.length?null===y||void 0===y||y.api.hideOverlay():null===y||void 0===y||y.api.showNoRowsOverlay()}),[x,f,y]),(0,l.useEffect)((function(){var e=function(){null===y||void 0===y||y.api.sizeColumnsToFit()};return window.addEventListener("resize",e,!0),function(){window.removeEventListener("resize",e,!0)}}),[y]),(0,h.jsx)("div",{className:"ag-theme-material ".concat(s||""),style:{height:j,minHeight:"250px"},id:i,children:(0,h.jsx)(a.AgGridReact,(0,t.Z)((0,t.Z)({},M),{},{rowData:f,context:m},S))})}))},62289:function(e,n,i){i.r(n),i.d(n,{default:function(){return J}});var t=i(74165),r=i(1413),a=i(15861),l=i(29439),o=i(42669),s=i(67598),c=i(51987),d=i(32415),u=i(16157),h=i(86360),p=i(39354),x=i(47313),f=i(45987),m=i(73477),Z=i(62463),v=i(2040),j=i(91210),g=i(71207),C=i(35192),y=i(46417),w=["children"];function z(e){var n=e.children,i=(0,f.Z)(e,w);return(0,y.jsx)(m.Z,(0,r.Z)((0,r.Z)({},i),{},{fullWidth:!0,size:"small",children:(0,y.jsx)(u.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:n})}))}var M=function(e){var n=e.createRule,i=e.viewOrEditRule;return(0,y.jsxs)(Z.Z,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1,children:[(0,y.jsxs)(z,{color:"primary",onClick:function(){return n(!0)},children:[(0,y.jsx)(v.Z,{fontSize:"medium"}),"Create"]}),(0,y.jsxs)(z,{color:"secondary",onClick:function(){return i("view")},children:[(0,y.jsx)(j.Z,{fontSize:"medium"}),"View"]}),(0,y.jsxs)(z,{color:"warning",onClick:function(){return i("edit")},children:[(0,y.jsx)(g.Z,{fontSize:"medium"}),"Edit"]}),(0,y.jsxs)(z,{color:"error",children:[(0,y.jsx)(C.Z,{fontSize:"medium"}),"Delete"]})]})},b=i(8586),S=i(18104),k=i(34940),R=i(82937),N=i(59864);function T(e){return e.context.isEdit?(0,y.jsxs)("select",{value:e.value,children:[(0,y.jsx)("option",{value:"RED",children:"RED"}),(0,y.jsx)("option",{value:"BLUE",children:"BLUE"}),(0,y.jsx)("option",{value:"GREEN",children:"GREEN"})]}):(0,y.jsx)(u.Z,{sx:{backgroundColor:e.value,color:"#fff",px:1},children:e.value})}var E=i(30183),I=i(97180),D=i(41769);function F(e){return e.context.isEdit?(0,y.jsx)(D.Z,{checked:e.value,size:"small"}):e.value?(0,y.jsx)(E.Z,{fontSize:"small",color:"primary"}):(0,y.jsx)(I.Z,{fontSize:"small",color:"secondary"})}function P(e){return e.context.isEdit?(0,y.jsxs)("select",{value:e.value,children:[(0,y.jsx)("option",{value:"UNMATCH",children:"UNMATCH"}),(0,y.jsx)("option",{value:"MISMATCH",children:"MISMATCH"})]}):e.value}var H=function(e){var n=e.closeDrilldown,i=e.action,s=(0,x.useState)({loading:!0}),c=(0,l.Z)(s,2),d=c[0],h=c[1],f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.Z.get("/api/matching-rules/view");case 2:n=e.sent,h((function(e){var i;return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,data:null===n||void 0===n?void 0:n.data,rule:Object.values((null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.rule)||{})})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,x.useEffect)((function(){f()}),[]);var v={columnDefs:[{headerName:"Match",field:"eligibleForMatching",cellRenderer:F,suppressMenu:!0,suppressSizeToFit:!1,width:80,pinned:"left"},{headerName:"Field",field:"tag",suppressMenu:!0,suppressSizeToFit:!1,width:80,pinned:"left"},{headerName:"Description",field:"fieldName",suppressMenu:!0,suppressSizeToFit:!1,width:250,pinned:"left"},{headerName:"Free Format Match",field:"freeFormatMatch",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Match If Host Missing",field:"matchIfHostMissing",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Match If Client Missing",field:"matchIfClientMissing",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Priority Field",field:"priorityField",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Eight Character Match",field:"eightCharacterMatch",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Status If Different",suppressMenu:!0,suppressSizeToFit:!1,width:150,field:"statusIfDifferent",cellRenderer:P},{headerName:"Currency Tolerance",field:"toleranceOnCurrency",suppressMenu:!0,suppressSizeToFit:!1,width:80,cellRenderer:F},{headerName:"Tolerance",field:"toleranceValue",suppressMenu:!0,width:80,suppressSizeToFit:!1},{headerName:"Colour If Different",field:"colourIfDifferent",suppressMenu:!0,width:80,suppressSizeToFit:!1,cellRenderer:T}],defaultColDef:{wrapHeaderText:!0,autoHeaderHeight:!0}},j={isEdit:"edit"===i};return d.loading?null:(0,y.jsxs)(u.Z,{sx:{width:"75vw"},display:"flex",flexDirection:"column",children:[(0,y.jsxs)(u.Z,{display:"flex",flexDirection:"column",sx:{borderBottom:1,borderColor:"divider"},children:[(0,y.jsxs)(u.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,y.jsxs)(o.Z,{variant:"h5",noWrap:!0,children:["edit"===i?"Edit":"View"," Rule"]}),(0,y.jsx)(S.Z,{size:"small",onClick:n,children:(0,y.jsx)(b.Z,{})})]}),(0,y.jsx)(k.Z,{}),(0,y.jsx)(u.Z,{sx:{p:1,backgroundColor:"#fafafb"},children:(0,y.jsxs)(R.ZP,{container:!0,spacing:1,children:[(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Message Type"}),(0,y.jsx)(o.Z,{children:d.data.messageType})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Rule Type"}),(0,y.jsx)(o.Z,{children:d.data.ruleType})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Entity Bic"}),(0,y.jsx)(o.Z,{children:d.data.entityBic})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Client Bic"}),(0,y.jsx)(o.Z,{children:d.data.clientBic})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Created by"}),(0,y.jsx)(o.Z,{children:d.data.createdBy})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:4,children:(0,y.jsxs)(Z.Z,{spacing:.5,children:[(0,y.jsx)(o.Z,{color:"secondary",children:"Validated by"}),(0,y.jsx)(o.Z,{children:d.data.validatedBy})]})})]})})]}),(0,y.jsx)(u.Z,{flexGrow:1,children:(0,y.jsx)(p.Z,{gridOptions:v,rowData:d.rule,context:j,isCondensed:!j.isEdit,gridHeight:"calc(100vh - ".concat("edit"===i?"220":"170","px)")})}),"edit"===i?(0,y.jsxs)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1,sx:{p:1,borderTop:1,borderColor:"divider"},children:[(0,y.jsx)(m.Z,{variant:"text",color:"secondary",onClick:n,size:"small",children:"Cancel"}),(0,y.jsx)(m.Z,{variant:"contained",color:"primary",onClick:n,size:"small",children:"Submit"})]}):null]})},B=i(58467),O=i(2135),V=i(54753),G=i(91294),A=i(67881),L=i(10383),U=i(7481),W=i(64558),_=i(32670),q=i(12119);var Y=function(e){var n=e.setOpen;return(0,y.jsxs)(u.Z,{sx:{width:500},display:"flex",flexDirection:"column",children:[(0,y.jsx)(u.Z,{display:"flex",flexDirection:"column",sx:{borderBottom:1,borderColor:"divider"},children:(0,y.jsxs)(u.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,y.jsx)(o.Z,{variant:"h5",noWrap:!0,children:"Create rule"}),(0,y.jsx)(S.Z,{size:"small",onClick:function(){return n(!1)},children:(0,y.jsx)(b.Z,{})})]})}),(0,y.jsx)(u.Z,{flexGrow:1,sx:{p:2,height:"calc(100vh - 105px)",overflowY:"auto"},children:(0,y.jsxs)(R.ZP,{container:!0,spacing:2.5,children:[(0,y.jsx)(R.ZP,{item:!0,xs:12,children:(0,y.jsxs)(Z.Z,{spacing:1,children:[(0,y.jsx)(G.Z,{children:"Rule name"}),(0,y.jsx)(A.Z,{fullWidth:!0,name:"ruleName",placeholder:"Rule name",size:"small"})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:12,children:(0,y.jsxs)(Z.Z,{spacing:1,children:[(0,y.jsx)(G.Z,{children:"Entity Type"}),(0,y.jsx)(L.Z,{children:(0,y.jsxs)(U.Z,{row:!0,"aria-label":"color",name:"entityType",id:"entityType",children:[(0,y.jsx)(W.Z,{value:"entity",control:(0,y.jsx)(_.Z,{color:"primary",sx:{color:"primary.main"}}),label:"Entity"}),(0,y.jsx)(W.Z,{value:"client",control:(0,y.jsx)(_.Z,{color:"warning",sx:{color:"warning.main"}}),label:"Client"})]})})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:12,children:(0,y.jsxs)(Z.Z,{spacing:1,children:[(0,y.jsx)(G.Z,{children:"Entity"}),(0,y.jsx)(L.Z,{fullWidth:!0,sx:{m:1},children:(0,y.jsx)(q.Z,{id:"entity",name:"entity",displayEmpty:!0,size:"small"})})]})}),(0,y.jsx)(R.ZP,{item:!0,xs:12,children:(0,y.jsxs)(Z.Z,{spacing:1,children:[(0,y.jsx)(G.Z,{children:"Client"}),(0,y.jsx)(L.Z,{fullWidth:!0,sx:{m:1},children:(0,y.jsx)(q.Z,{id:"client",name:"client",displayEmpty:!0,size:"small"})})]})})]})}),(0,y.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{p:1,borderTop:1,borderColor:"divider"},children:(0,y.jsxs)(Z.Z,{direction:"row",spacing:1,children:[(0,y.jsx)(m.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"}),(0,y.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){return n(!1)},children:"Create"})]})})]})},J=function(){var e=(0,B.UO)().status,n=0;switch(e){case"pending":n=1;break;case"archived":n=2;break;default:n=0}var i=(0,x.useState)({show:!1,action:"edit"}),f=(0,l.Z)(i,2),m=f[0],Z=f[1],v=(0,x.useState)(!1),j=(0,l.Z)(v,2),g=j[0],C=j[1],w=(0,x.useState)(n),z=(0,l.Z)(w,2),b=z[0],S=z[1],k=(0,x.useState)({loading:!0}),R=(0,l.Z)(k,2),T=R[0],E=R[1],I=(0,x.useRef)();(0,x.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.Z.get("/api/matching-rules",{params:{status:e||"available"}});case 2:i=n.sent,E((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,data:(null===i||void 0===i?void 0:i.data)||[]})}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var D={columnDefs:[{headerName:"Id",field:"id"},{headerName:"Message Type",field:"messageType"},{headerName:"Rule Type",field:"ruleType"},{headerName:"Client BIC",field:"clientBic"},{headerName:"Entity BIC",field:"entityBic"},{headerName:"Rule Name",field:"ruleName"},{headerName:"Created date",field:"createdDate"},{headerName:"Created by",field:"updatedBy"},{headerName:"Updated date",field:"lastModifiedDate"},{headerName:"Updated by",field:"validatedBy"}],rowSelection:"single",onRowDoubleClicked:function(){F("view")}};if(T.loading)return null;var F=function(e){Z({show:!0,action:e})},P=function(){Z((function(e){return(0,r.Z)((0,r.Z)({},e),{},{show:!1})}))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.Z,{variant:"h4",sx:{mb:1},display:"flex",alignItems:"center",children:[(0,y.jsx)(V.Z,{fontSize:"medium",sx:{mr:1}})," Manage matching rules"]}),(0,y.jsx)(s.Z,{value:b,onChange:function(e,n){return S(n)},children:[{key:"available",title:"Available Rules"},{key:"pending",title:"Pending for Validation"},{key:"archived",title:"Archived Rules"}].map((function(e,n){return(0,y.jsx)(c.Z,{component:O.rU,label:e.title,to:"".concat("/admin/matching-rules","/").concat(e.key)},e.key)}))}),(0,y.jsx)(d.Z,{elevation:1,children:(0,y.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,y.jsx)(u.Z,{component:"main",sx:{flexGrow:1},children:(0,y.jsx)(p.Z,{gridOptions:D,rowData:T.data,isCondensed:!0,gridId:I,id:"matching",gridHeight:"calc(100vh - 270px)"})}),(0,y.jsx)(u.Z,{component:"main",sx:{flexGrow:0,width:100,backgroundColor:"#f0f0f0",p:1},children:(0,y.jsx)(M,{createRule:C,viewOrEditRule:F})})]})}),(0,y.jsx)(h.ZP,{anchor:"right",open:m.show,onClose:P,children:(0,y.jsx)(H,{closeDrilldown:P,action:m.action})}),(0,y.jsx)(h.ZP,{anchor:"right",open:g,onClose:function(){return C((function(e){return!e}))},children:(0,y.jsx)(Y,{setOpen:C})})]})}},2040:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},30183:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},97180:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear")},8586:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},35192:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},71207:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},91210:function(e,n,i){var t=i(25700),r=i(46417);n.Z=(0,t.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},41769:function(e,n,i){i.d(n,{Z:function(){return S}});var t=i(4942),r=i(63366),a=i(87462),l=i(47313),o=i(83061),s=i(21921),c=i(17551),d=i(45359),u=i(25700),h=i(46417),p=(0,u.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=i(28170),Z=i(11236),v=i(64164),j=i(32298);function g(e){return(0,j.Z)("MuiCheckbox",e)}var C=(0,i(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=(0,v.ZP)(d.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,i.indeterminate&&n.indeterminate,"default"!==i.color&&n["color".concat((0,m.Z)(i.color))]]}})((function(e){var n,i=e.theme,r=e.ownerState;return(0,a.Z)({color:(i.vars||i).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:i.vars?"rgba(".concat("default"===r.color?i.vars.palette.action.activeChannel:i.vars.palette.primary.mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===r.color?i.palette.action.active:i.palette[r.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,t.Z)(n,"&.".concat(C.checked,", &.").concat(C.indeterminate),{color:(i.vars||i).palette[r.color].main}),(0,t.Z)(n,"&.".concat(C.disabled),{color:(i.vars||i).palette.action.disabled}),n))})),z=(0,h.jsx)(x,{}),M=(0,h.jsx)(p,{}),b=(0,h.jsx)(f,{}),S=l.forwardRef((function(e,n){var i,t,c=(0,Z.Z)({props:e,name:"MuiCheckbox"}),d=c.checkedIcon,u=void 0===d?z:d,p=c.color,x=void 0===p?"primary":p,f=c.icon,v=void 0===f?M:f,j=c.indeterminate,C=void 0!==j&&j,S=c.indeterminateIcon,k=void 0===S?b:S,R=c.inputProps,N=c.size,T=void 0===N?"medium":N,E=c.className,I=(0,r.Z)(c,y),D=C?k:v,F=C?k:u,P=(0,a.Z)({},c,{color:x,indeterminate:C,size:T}),H=function(e){var n=e.classes,i=e.indeterminate,t=e.color,r={root:["root",i&&"indeterminate","color".concat((0,m.Z)(t))]},l=(0,s.Z)(r,g,n);return(0,a.Z)({},n,l)}(P);return(0,h.jsx)(w,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":C},R),icon:l.cloneElement(D,{fontSize:null!=(i=D.props.fontSize)?i:T}),checkedIcon:l.cloneElement(F,{fontSize:null!=(t=F.props.fontSize)?t:T}),ownerState:P,ref:n,className:(0,o.default)(H.root,E)},I,{classes:H}))}))}}]);