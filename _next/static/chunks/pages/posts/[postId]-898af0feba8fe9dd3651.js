_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"00EI":function(t,e,i){"use strict";(function(t){var n;i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o}));var r=240,a=null!==(n=t.env.SUBDIRECTORY)&&void 0!==n?n:"",o=a?"/".concat(a):""}).call(this,i("8oxB"))},"20a2":function(t,e,i){t.exports=i("nOHt")},"8oxB":function(t,e){var i,n,r=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(t){if(i===setTimeout)return setTimeout(t,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:a}catch(t){i=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var s,l=[],u=!1,p=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):p=-1,l.length&&h())}function h(){if(!u){var t=c(d);u=!0;for(var e=l.length;e;){for(s=l,l=[];++p<e;)s&&s[p].run();p=-1,e=l.length}s=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function f(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new b(t,e)),1!==l.length||u||c(h)},b.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9p8P":function(t,e,i){"use strict";i.r(e),i.d(e,"__N_SSG",(function(){return s})),i.d(e,"postIdList",(function(){return l})),i.d(e,"default",(function(){return u}));var n=i("BGKE"),r=(i("q1tI"),i("Ji2X")),a=i("ofer"),o=i("20a2"),c=i("00EI"),s=!0,l=["1","2","3"];function u(t){var e=t.post,i=Object(o.useRouter)().query.id,s="animal".concat(null===e||void 0===e?void 0:e.id,".jpg");return Object(n.c)(r.a,{maxWidth:"lg",children:[Object(n.c)(a.a,{variant:"h4",children:["router.query.id is ",i]}),Object(n.c)(a.a,{variant:"h4",children:["router.query.id is ",i]}),Object(n.b)(a.a,{variant:"h3",children:"Post"}),Object(n.b)(a.a,{variant:"h3",children:null===e||void 0===e?void 0:e.id}),Object(n.b)(a.a,{variant:"h3",children:null===e||void 0===e?void 0:e.subject}),Object(n.b)(a.a,{variant:"h3",children:null===e||void 0===e?void 0:e.content}),Object(n.b)("img",{src:"".concat(c.b,"/images/animal/").concat(s),alt:s,width:120})]})}},Aoyt:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[postId]",function(){return i("9p8P")}])},Ji2X:function(t,e,i){"use strict";var n=i("wx14"),r=i("Ff2n"),a=i("rePB"),o=i("q1tI"),c=(i("17x9"),i("iuhU")),s=i("H2TA"),l=i("NqtD"),u=o.forwardRef((function(t,e){var i=t.classes,a=t.className,s=t.component,u=void 0===s?"div":s,p=t.disableGutters,d=void 0!==p&&p,h=t.fixed,b=void 0!==h&&h,f=t.maxWidth,m=void 0===f?"lg":f,g=Object(r.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(u,Object(n.a)({className:Object(c.a)(i.root,a,b&&i.fixed,d&&i.disableGutters,!1!==m&&i["maxWidth".concat(Object(l.a)(String(m)))]),ref:e},g))}));e.a=Object(s.a)((function(t){return{root:Object(a.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,i){var n=t.breakpoints.values[i];return 0!==n&&(e[t.breakpoints.up(i)]={maxWidth:n}),e}),{}),maxWidthXs:Object(a.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(a.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(a.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(a.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(a.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},ofer:function(t,e,i){"use strict";var n=i("wx14"),r=i("Ff2n"),a=i("q1tI"),o=(i("17x9"),i("iuhU")),c=i("H2TA"),s=i("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(t,e){var i=t.align,c=void 0===i?"inherit":i,u=t.classes,p=t.className,d=t.color,h=void 0===d?"initial":d,b=t.component,f=t.display,m=void 0===f?"initial":f,g=t.gutterBottom,y=void 0!==g&&g,v=t.noWrap,x=void 0!==v&&v,w=t.paragraph,O=void 0!==w&&w,j=t.variant,T=void 0===j?"body1":j,k=t.variantMapping,W=void 0===k?l:k,E=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),_=b||(O?"p":W[T]||l[T])||"span";return a.createElement(_,Object(n.a)({className:Object(o.a)(u.root,p,"inherit"!==T&&u[T],"initial"!==h&&u["color".concat(Object(s.a)(h))],x&&u.noWrap,y&&u.gutterBottom,O&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==m&&u["display".concat(Object(s.a)(m))]),ref:e},E))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)}},[["Aoyt",0,1,2,4]]]);
//# sourceMappingURL=[postId]-898af0feba8fe9dd3651.js.map