"use strict";(self.webpackChunkmatch_control_ui=self.webpackChunkmatch_control_ui||[]).push([[263],{30073:function(e,n,i){i.d(n,{Z:function(){return y}});var s=i(93433),l=i(29439),r=i(47313),t=i(32415),o=i(35672),c=i(8224),a=i(31929),d=i(41769),x=i(25685),h=i(82937),m=i(18104),Z=i(25700),j=i(46417),u=(0,Z.Z)([(0,j.jsx)("path",{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},"0"),(0,j.jsx)("path",{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},"1")],"KeyboardDoubleArrowRight"),p=(0,Z.Z)((0,j.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight"),f=(0,Z.Z)((0,j.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft"),v=(0,Z.Z)([(0,j.jsx)("path",{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},"0"),(0,j.jsx)("path",{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},"1")],"KeyboardDoubleArrowLeft");function b(e,n){return e.filter((function(e){return-1===n.indexOf(e)}))}function g(e,n){return e.filter((function(e){return-1!==n.indexOf(e)}))}function y(e){var n=e.source,i=e.selected,Z=(0,r.useState)(i||[]),y=(0,l.Z)(Z,2),z=y[0],C=y[1],w=(0,r.useState)(n||[]),k=(0,l.Z)(w,2),P=k[0],M=k[1],T=(0,r.useState)([]),D=(0,l.Z)(T,2),I=D[0],O=D[1],S=g(z,P),E=g(z,I);(0,r.useEffect)((function(){null!==i&&void 0!==i&&i.length&&W()}),[i]);var L=function(e){return function(){var n=z.indexOf(e),i=(0,s.Z)(z);-1===n?i.push(e):i.splice(n,1),C(i)}},W=function(){O(I.concat(S)),M(b(P,S)),C(b(z,S))},R=function(e){return(0,j.jsx)(t.Z,{sx:{width:1,height:250,overflow:"auto"},children:(0,j.jsx)(o.Z,{dense:!0,component:"div",role:"list",children:e.map((function(e){var n="transfer-list-item-".concat(e,"-label");return(0,j.jsxs)(c.Z,{role:"listitem",onClick:L(e),sx:{p:.5},children:[(0,j.jsx)(a.Z,{children:(0,j.jsx)(d.Z,{checked:-1!==z.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,j.jsx)(x.Z,{id:n,primary:e})]},e)}))})})};return(0,j.jsxs)(h.ZP,{container:!0,spacing:1,justifyContent:"space-between",alignItems:"center",children:[(0,j.jsx)(h.ZP,{item:!0,flexGrow:1,children:R(P)}),(0,j.jsx)(h.ZP,{item:!0,children:(0,j.jsxs)(h.ZP,{container:!0,direction:"column",alignItems:"center",children:[(0,j.jsx)(m.Z,{onClick:function(){O(I.concat(P)),M([])},disabled:0===P.length,"aria-label":"move all right",children:(0,j.jsx)(u,{})}),(0,j.jsx)(m.Z,{onClick:W,disabled:0===S.length,"aria-label":"move selected right",children:(0,j.jsx)(p,{})}),(0,j.jsx)(m.Z,{onClick:function(){M(P.concat(E)),O(b(I,E)),C(b(z,E))},disabled:0===E.length,"aria-label":"move selected left",children:(0,j.jsx)(f,{})}),(0,j.jsx)(m.Z,{onClick:function(){M(P.concat(I)),O([])},disabled:0===I.length,"aria-label":"move all left",children:(0,j.jsx)(v,{})})]})}),(0,j.jsx)(h.ZP,{item:!0,flexGrow:1,children:R(I)})]})}},16263:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var s=i(1413),l=i(29439),r=i(19190),t=i(71207),o=i(35192),c=i(84149),a=i(16157),d=i(42669),x=i(73477),h=i(82937),m=i(62463),Z=i(91294),j=i(10383),u=i(12119),p=i(39874),f=i(63988),v=i(90495),b=i(59629),g=i(285),y=i(53805),z=i(75958),C=i(83719),w=i(86360),k=i(18104),P=i(47313),M=i(8586),T=i(87668),D=i(67881),I=i(64287),O=i(64558),S=i(41769),E=i(30073),L=i(46417);var W=function(e){var n=e.setOpen,i=e.action;return(0,L.jsxs)(a.Z,{sx:{width:960},display:"flex",flexDirection:"column",children:[(0,L.jsx)(a.Z,{display:"flex",flexDirection:"column",sx:{borderBottom:1,borderColor:"divider"},children:(0,L.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{p:1},children:[(0,L.jsxs)(d.Z,{variant:"h5",noWrap:!0,children:["edit"===i?"Edit":"Create"," user"]}),(0,L.jsx)(k.Z,{size:"small",onClick:function(){return n(!1)},children:(0,L.jsx)(M.Z,{})})]})}),(0,L.jsx)(a.Z,{flexGrow:1,sx:{p:2,height:"calc(100vh - 105px)",overflowY:"auto"},children:(0,L.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Message Type"}),(0,L.jsx)(u.Z,{id:"messageType",name:"messageType",displayEmpty:!0,size:"small"})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Username"}),(0,L.jsx)(D.Z,{id:"username",name:"username",size:"small"})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Role"}),(0,L.jsx)(u.Z,{id:"role",name:"role",displayEmpty:!0,size:"small"})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Confirmation Type"}),(0,L.jsx)(u.Z,{id:"confirmationType",name:"confirmationType",displayEmpty:!0,size:"small"})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:12,children:(0,L.jsxs)(j.Z,{component:"fieldset",children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Paired Cards"}),(0,L.jsx)(I.Z,{row:!0,children:["To Investigate Deals","Matched Deals","4 Eye Validation","MisMatched Deals"].map((function(e){return(0,L.jsx)(O.Z,{value:e,control:(0,L.jsx)(S.Z,{}),label:e,labelPlacement:"end",name:"pairedCard"})}))})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:12,children:(0,L.jsxs)(j.Z,{component:"fieldset",children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"UnPaired Cards"}),(0,L.jsx)(I.Z,{row:!0,children:["Duplicate Deals","UnMatched Deals","Other Deals","Bad Reference Deals"].map((function(e){return(0,L.jsx)(O.Z,{value:e,control:(0,L.jsx)(S.Z,{}),label:e,labelPlacement:"end",name:"unPairedCard"})}))})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Host Bic"}),(0,L.jsx)(E.Z,{source:[1,2,3,4]})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:6,children:(0,L.jsxs)(j.Z,{component:"fieldset",fullWidth:!0,children:[(0,L.jsx)(T.Z,{component:"legend",sx:{mb:1},children:"Workgroup"}),(0,L.jsx)(E.Z,{source:[1,2,3,4]})]})})]})}),(0,L.jsxs)(m.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:1,borderTop:1,borderColor:"divider"},children:[(0,L.jsx)(k.Z,{color:"error",children:(0,L.jsx)(o.Z,{})}),(0,L.jsxs)(m.Z,{direction:"row",spacing:1,children:[(0,L.jsx)(x.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"}),(0,L.jsx)(x.Z,{variant:"contained",color:"primary",onClick:function(){return n(!1)},children:"edit"===i?"Update":"Create"})]})]})]})};var R=function(){var e=(0,P.useState)({show:!1,action:"edit"}),n=(0,l.Z)(e,2),i=n[0],M=n[1],T=function(e){M({show:!0,action:e})},D=function(){M((function(e){return(0,s.Z)((0,s.Z)({},e),{},{show:!1})}))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(a.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:2},children:[(0,L.jsxs)(d.Z,{variant:"h4",sx:{mb:1},display:"flex",alignItems:"center",children:[(0,L.jsx)(r.Z,{fontSize:"medium",sx:{mr:1}})," Manage Users"]}),(0,L.jsx)(x.Z,{variant:"contained",size:"small",onClick:function(){return T("create")},children:"Create User"})]}),(0,L.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(h.ZP,{item:!0,xs:12,sm:2,children:(0,L.jsx)(c.Z,{children:(0,L.jsxs)(h.ZP,{container:!0,spacing:2.5,children:[(0,L.jsx)(h.ZP,{item:!0,xs:12,children:(0,L.jsxs)(m.Z,{spacing:1,children:[(0,L.jsx)(Z.Z,{children:"Message Type"}),(0,L.jsx)(j.Z,{fullWidth:!0,sx:{m:1},children:(0,L.jsx)(u.Z,{id:"messageType",name:"messageType",displayEmpty:!0,size:"small"})})]})}),(0,L.jsx)(h.ZP,{item:!0,xs:12,children:(0,L.jsxs)(m.Z,{spacing:1,children:[(0,L.jsx)(Z.Z,{children:"Username"}),(0,L.jsx)(j.Z,{fullWidth:!0,sx:{m:1},children:(0,L.jsx)(u.Z,{id:"user",name:"user",displayEmpty:!0,size:"small"})})]})})]})})}),(0,L.jsx)(h.ZP,{item:!0,xs:12,sm:10,children:(0,L.jsx)(c.Z,{content:!1,children:(0,L.jsx)(p.Z,{children:(0,L.jsxs)(f.Z,{size:"small",children:[(0,L.jsx)(v.Z,{children:(0,L.jsxs)(b.Z,{children:[(0,L.jsx)(g.Z,{sx:{width:"10%"},children:"Role"}),(0,L.jsx)(g.Z,{sx:{width:"10%"},children:"Type"}),(0,L.jsx)(g.Z,{sx:{width:"70%"},children:"Workgroups"}),(0,L.jsx)(g.Z,{sx:{width:"10%"},children:"Options"})]})}),(0,L.jsx)(y.Z,{children:(0,L.jsxs)(b.Z,{hover:!0,children:[(0,L.jsx)(g.Z,{children:"ADMIN"}),(0,L.jsx)(g.Z,{children:"BOTH"}),(0,L.jsx)(g.Z,{children:(0,L.jsxs)(m.Z,{direction:"row",spacing:1,children:[(0,L.jsx)(z.Z,{color:"info",label:"MT300",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT305",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT320",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT330",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT340",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT341",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT600",size:"small"}),(0,L.jsx)(z.Z,{color:"info",label:"MT601",size:"small"})]})}),(0,L.jsx)(g.Z,{children:(0,L.jsxs)(m.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,L.jsx)(C.Z,{title:"Edit",placement:"top",children:(0,L.jsx)(k.Z,{size:"small",color:"primary",onClick:function(){return T("edit")},children:(0,L.jsx)(t.Z,{})})}),(0,L.jsx)(C.Z,{title:"Delete",placement:"top",children:(0,L.jsx)(k.Z,{size:"small",color:"error",children:(0,L.jsx)(o.Z,{})})})]})})]})})]})})})})]}),(0,L.jsx)(w.ZP,{anchor:"right",open:i.show,onClose:D,children:(0,L.jsx)(W,{setOpen:D,action:i.action})})]})}},8586:function(e,n,i){var s=i(25700),l=i(46417);n.Z=(0,s.Z)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},35192:function(e,n,i){var s=i(25700),l=i(46417);n.Z=(0,s.Z)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},71207:function(e,n,i){var s=i(25700),l=i(46417);n.Z=(0,s.Z)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},41769:function(e,n,i){i.d(n,{Z:function(){return P}});var s=i(4942),l=i(63366),r=i(87462),t=i(47313),o=i(83061),c=i(21921),a=i(17551),d=i(45359),x=i(25700),h=i(46417),m=(0,x.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Z=(0,x.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=(0,x.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=i(28170),p=i(11236),f=i(64164),v=i(32298);function b(e){return(0,v.Z)("MuiCheckbox",e)}var g=(0,i(77430).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],z=(0,f.ZP)(d.Z,{shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,i.indeterminate&&n.indeterminate,"default"!==i.color&&n["color".concat((0,u.Z)(i.color))]]}})((function(e){var n,i=e.theme,l=e.ownerState;return(0,r.Z)({color:(i.vars||i).palette.text.secondary},!l.disableRipple&&{"&:hover":{backgroundColor:i.vars?"rgba(".concat("default"===l.color?i.vars.palette.action.activeChannel:i.vars.palette.primary.mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,a.Fq)("default"===l.color?i.palette.action.active:i.palette[l.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==l.color&&(n={},(0,s.Z)(n,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:(i.vars||i).palette[l.color].main}),(0,s.Z)(n,"&.".concat(g.disabled),{color:(i.vars||i).palette.action.disabled}),n))})),C=(0,h.jsx)(Z,{}),w=(0,h.jsx)(m,{}),k=(0,h.jsx)(j,{}),P=t.forwardRef((function(e,n){var i,s,a=(0,p.Z)({props:e,name:"MuiCheckbox"}),d=a.checkedIcon,x=void 0===d?C:d,m=a.color,Z=void 0===m?"primary":m,j=a.icon,f=void 0===j?w:j,v=a.indeterminate,g=void 0!==v&&v,P=a.indeterminateIcon,M=void 0===P?k:P,T=a.inputProps,D=a.size,I=void 0===D?"medium":D,O=a.className,S=(0,l.Z)(a,y),E=g?M:f,L=g?M:x,W=(0,r.Z)({},a,{color:Z,indeterminate:g,size:I}),R=function(e){var n=e.classes,i=e.indeterminate,s=e.color,l={root:["root",i&&"indeterminate","color".concat((0,u.Z)(s))]},t=(0,c.Z)(l,b,n);return(0,r.Z)({},n,t)}(W);return(0,h.jsx)(z,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":g},T),icon:t.cloneElement(E,{fontSize:null!=(i=E.props.fontSize)?i:I}),checkedIcon:t.cloneElement(L,{fontSize:null!=(s=L.props.fontSize)?s:I}),ownerState:W,ref:n,className:(0,o.default)(R.root,O)},S,{classes:R}))}))}}]);