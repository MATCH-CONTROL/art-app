"use strict";(self.webpackChunkmatch_control_ui=self.webpackChunkmatch_control_ui||[]).push([[536],{72536:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var i=r(82937),t=r(62463),s=r(42669),a=r(16157),o=r(79359),l=r(10679),c=r(77449),d=r(46417),u=function(){var e=(0,o.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(l.Z,{maxWidth:"xl",children:(0,d.jsxs)(t.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(s.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(s.Z,{component:c.Z,variant:"subtitle2",href:"#privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(t.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(s.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://yindeo.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(s.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://yindeo.com",target:"_blank",underline:"hover",children:"Privacy Policy"})]})]})})},h=r(18283),x=r(1413),m=r(45987),p=r(84149),j=["children"],v=function(e){var n=e.children,r=(0,m.Z)(e,j);return(0,d.jsx)(p.Z,(0,x.Z)((0,x.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,d.jsx)(a.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},Z=function(e){var n=e.children;return(0,d.jsx)(a.Z,{sx:{minHeight:"100vh"},children:(0,d.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(v,{children:n})})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})})},f=r(74165),g=r(15861),w=r(29439),b=r(47313),y=r(91294),P=r(42318),k=r(48569),C=r(59017),E=r(64558),S=r(41769),_=r(73477),H=r(28089),B=r(79429),W=r(1229),q=function(){var e=(0,b.useRef)(!0);return(0,b.useEffect)((function(){return function(){e.current=!1}}),[]),e},A=r(6977),T=r(70551),z=r(81262);function D(e){var n,r,i,t,s=e.children,a=e.type,o=void 0===a?"scale":a,l=e.direction,c=void 0===l?"right":l,u=e.offset,h=void 0===u?10:u,x=e.scale,m=void 0===x?{hover:1.05,tap:.954}:x;switch(c){case"up":case"left":i=h,t=0;break;default:i=0,t=h}var p=(0,T.n)(i,t),j=(0,w.Z)(p,2),v=j[0],Z=j[1],f=(0,T.n)(i,t),g=(0,w.Z)(f,2),b=g[0],y=g[1];switch(o){case"rotate":return(0,d.jsx)(z.E.div,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:s});case"slide":return"up"===c||"down"===c?(0,d.jsx)(z.E.div,{animate:{y:void 0!==b?b:""},onHoverEnd:function(){return y()},onHoverStart:function(){return y()},children:s}):(0,d.jsx)(z.E.div,{animate:{x:void 0!==v?v:""},onHoverEnd:function(){return Z()},onHoverStart:function(){return Z()},children:s});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,d.jsx)(z.E.div,{whileHover:{scale:null===(n=m)||void 0===n?void 0:n.hover},whileTap:{scale:null===(r=m)||void 0===r?void 0:r.tap},children:s})}}var F=r(31741),I=r(44874),L=function(){var e=b.useState(!1),n=(0,w.Z)(e,2),r=n[0],a=n[1],o=(0,W.Z)().login,l=q(),c=b.useState(!1),u=(0,w.Z)(c,2),h=u[0],x=u[1],m=function(){x(!h)},p=function(e){e.preventDefault()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(B.J9,{initialValues:{email:"admin@yindeo.com",password:"123456",submit:null},validationSchema:H.Ry().shape({email:H.Z_().email("Must be a valid email").max(255).required("Email is required"),password:H.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,g.Z)((0,f.Z)().mark((function e(n,r){var i,t,s;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setErrors,t=r.setStatus,s=r.setSubmitting,e.prev=1,e.next=4,o(n.email,n.password);case 4:l.current&&(t({success:!0}),s(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),l.current&&(t({success:!1}),i({submit:e.t0.message}),s(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,o=e.handleBlur,l=e.handleChange,c=e.handleSubmit,u=e.isSubmitting,x=e.touched,j=e.values;return(0,d.jsx)("form",{noValidate:!0,onSubmit:c,children:(0,d.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsxs)(t.Z,{spacing:1,children:[(0,d.jsx)(y.Z,{htmlFor:"email-login",children:"Email Address"}),(0,d.jsx)(P.Z,{id:"email-login",type:"email",value:j.email,name:"email",onBlur:o,onChange:l,placeholder:"Enter email address",fullWidth:!0,error:Boolean(x.email&&n.email)}),x.email&&n.email&&(0,d.jsx)(k.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsxs)(t.Z,{spacing:1,children:[(0,d.jsx)(y.Z,{htmlFor:"password-login",children:"Password"}),(0,d.jsx)(P.Z,{fullWidth:!0,error:Boolean(x.password&&n.password),id:"-password-login",type:h?"text":"password",value:j.password,name:"password",onBlur:o,onChange:l,endAdornment:(0,d.jsx)(C.Z,{position:"end",children:(0,d.jsx)(A.Z,{"aria-label":"toggle password visibility",onClick:m,onMouseDown:p,edge:"end",color:"secondary",children:h?(0,d.jsx)(F.Z,{}):(0,d.jsx)(I.Z,{})})}),placeholder:"Enter password"}),x.password&&n.password&&(0,d.jsx)(k.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,d.jsx)(t.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,d.jsx)(E.Z,{control:(0,d.jsx)(S.Z,{checked:r,onChange:function(e){return a(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,d.jsx)(s.Z,{variant:"h6",children:"Keep me sign in"})})})}),n.submit&&(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(k.Z,{error:!0,children:n.submit})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(D,{children:(0,d.jsx)(_.Z,{disableElevation:!0,disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},M=function(){return(0,d.jsx)(Z,{children:(0,d.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(t.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,d.jsx)(s.Z,{variant:"h3",children:"Login"})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(L,{})})]})})}}}]);