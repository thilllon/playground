_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"00EI":function(e,t,r){"use strict";(function(e){var o;r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=240,a=null!==(o=e.env.SUBDIRECTORY)&&void 0!==o?o:"",i=a?"/".concat(a):""}).call(this,r("8oxB"))},"2v50":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),o=[e[r],e[t]];e[t]=o[0],e[r]=o[1]}return e}},"5AJ6":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("wx14"),n=r("q1tI"),a=r.n(n),i=r("HR5l");function c(e,t){var r=function(t,r){return a.a.createElement(i.a,Object(o.a)({ref:r},t),e)};return r.muiName=i.a.muiName,a.a.memo(a.a.forwardRef(r))}},"8oxB":function(e,t){var r,o,n=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{o="function"===typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var s,l=[],p=!1,d=-1;function u(){p&&s&&(p=!1,s.length?l=s.concat(l):d=-1,l.length&&b())}function b(){if(!p){var e=c(u);p=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,p=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||p||c(b)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},AeFk:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));var o=r("q1tI"),n=(r("+1VY"),r("siue")),a=(r("pVnL"),r("gRFL"),r("2mql"),r("eVQB"),r("Exhd")),i=(r("ep+1"),function(e,t){var r=arguments;if(null==t||!n.e.call(t,"css"))return o.createElement.apply(void 0,r);var a=r.length,i=new Array(a);i[0]=n.a,i[1]=Object(n.d)(e,t);for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)});function c(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Object(a.a)(t)}},EQyt:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var o=r("BGKE"),n=(r("q1tI"),r("Ji2X")),a=(r("bKvQ"),r("vAif"),r("2v50"),r("Nm0n"));function i(){var e=a.a.filter((function(e){return e.href.includes("/games")}));return Object(o.b)(n.a,{children:e.map((function(e,t){return Object(o.b)("li",{children:Object(o.b)("a",{href:e.href,children:e.text})},"game__"+t)}))})}},HR5l:function(e,t,r){"use strict";var o=r("wx14"),n=r("Ff2n"),a=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("NqtD"),l=a.forwardRef((function(e,t){var r=e.children,c=e.classes,l=e.className,p=e.color,d=void 0===p?"inherit":p,u=e.component,b=void 0===u?"svg":u,m=e.fontSize,f=void 0===m?"default":m,h=e.htmlColor,v=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,x=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(b,Object(o.a)({className:Object(i.a)(c.root,l,"inherit"!==d&&c["color".concat(Object(s.a)(d))],"default"!==f&&c["fontSize".concat(Object(s.a)(f))]),focusable:"false",viewBox:y,color:h,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},x),r,v?a.createElement("title",null,v):null)}));l.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(l)},Ji2X:function(e,t,r){"use strict";var o=r("wx14"),n=r("Ff2n"),a=r("rePB"),i=r("q1tI"),c=(r("17x9"),r("iuhU")),s=r("H2TA"),l=r("NqtD"),p=i.forwardRef((function(e,t){var r=e.classes,a=e.className,s=e.component,p=void 0===s?"div":s,d=e.disableGutters,u=void 0!==d&&d,b=e.fixed,m=void 0!==b&&b,f=e.maxWidth,h=void 0===f?"lg":f,v=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(p,Object(o.a)({className:Object(c.a)(r.root,a,m&&r.fixed,u&&r.disableGutters,!1!==h&&r["maxWidth".concat(Object(l.a)(String(h)))]),ref:t},v))}));t.a=Object(s.a)((function(e){return{root:Object(a.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:o}),t}),{}),maxWidthXs:Object(a.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(a.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(a.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(a.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(a.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(p)},Nm0n:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var o=r("BGKE"),n=r("n0mX"),a=r("q1tI"),i=r("5AJ6"),c=Object(i.a)(a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),s=Object(i.a)(a.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew"),l=Object(i.a)(a.createElement(a.Fragment,null,a.createElement("path",{d:"M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"}),a.createElement("path",{d:"M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"})),"Spa"),p=Object(i.a)(a.createElement("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),"DirectionsRun"),d=Object(i.a)(a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info"),u=Object(i.a)(a.createElement("path",{d:"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"}),"BrightnessLow"),b=Object(i.a)(a.createElement("path",{d:"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}),"Movie"),m=Object(i.a)(a.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox"),f=r("00EI"),h=n.a,v=[{text:"Home",href:f.b+"/",as:f.b+"/",icon:Object(o.b)(c,{})},{text:"Converter",href:f.b+"/converter",as:f.b+"/converter",icon:Object(o.b)(s,{})},{text:"Kohmasutra",href:f.b+"/kohmasutra",as:f.b+"/kohmasutra",icon:Object(o.b)(l,{})},{text:"Next.js + Material-UI + Emotion",href:f.b+"/next-mui-emotion",as:f.b+"/next-mui-emotion",icon:Object(o.b)(n.a,{})},{text:"Animal Run",href:f.b+"/games/animal-run",as:f.b+"/games/animal-run",icon:Object(o.b)(p,{})},{text:"About",href:f.b+"/about",as:f.b+"/about",icon:Object(o.b)(d,{})},{text:"Games",href:f.b+"/games",as:f.b+"/games",icon:Object(o.b)(h,{})},{text:"TicTacToe",href:f.b+"/games/tictactoe",as:f.b+"/games/tictactoe",icon:Object(o.b)(h,{})},{text:"Mine Sweeper",href:f.b+"/games/minesweeper",as:f.b+"/games/minesweeper",icon:Object(o.b)(u,{})},{text:"Movies",href:f.b+"/movies",as:f.b+"/movies",icon:Object(o.b)(b,{})},{text:"test posts",href:f.b+"/posts",as:f.b+"/posts",icon:Object(o.b)(m,{})},{text:"Omok",href:f.b+"/games/omok",as:f.b+"/games/omok",icon:Object(o.b)(u,{})},{text:"The Mind",href:f.b+"/games/themind",as:f.b+"/games/themind",icon:Object(o.b)(u,{})},{text:"Lost Cities",href:f.b+"/games/lostcities",as:f.b+"/games/lostcities",icon:Object(o.b)(u,{})},{text:"Tistory",href:f.b+"/tistory",as:f.b+"/tistory",icon:Object(o.b)(h,{})}]},"R/WZ":function(e,t,r){"use strict";var o=r("wx14"),n=r("RD7I"),a=r("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(o.a)({defaultTheme:a.a},t))}},Wp5w:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return r("EQyt")}])},Z3vd:function(e,t,r){"use strict";var o=r("Ff2n"),n=r("wx14"),a=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("ye/S"),l=r("VD++"),p=r("NqtD"),d=a.forwardRef((function(e,t){var r=e.children,c=e.classes,s=e.className,d=e.color,u=void 0===d?"default":d,b=e.component,m=void 0===b?"button":b,f=e.disabled,h=void 0!==f&&f,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,x=void 0!==y&&y,O=e.endIcon,j=e.focusVisibleClassName,w=e.fullWidth,S=void 0!==w&&w,k=e.size,z=void 0===k?"medium":k,C=e.startIcon,E=e.type,T=void 0===E?"button":E,N=e.variant,R=void 0===N?"text":N,I=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=C&&a.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(p.a)(z))])},C),P=O&&a.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(p.a)(z))])},O);return a.createElement(l.a,Object(n.a)({className:Object(i.a)(c.root,c[R],s,"inherit"===u?c.colorInherit:"default"!==u&&c["".concat(R).concat(Object(p.a)(u))],"medium"!==z&&[c["".concat(R,"Size").concat(Object(p.a)(z))],c["size".concat(Object(p.a)(z))]],g&&c.disableElevation,h&&c.disabled,S&&c.fullWidth),component:m,disabled:h,focusRipple:!x,focusVisibleClassName:Object(i.a)(c.focusVisible,j),ref:t,type:T},I),a.createElement("span",{className:c.label},M,r,P))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(d)},bKvQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("BGKE"),n=(r("q1tI"),r("hlFM")),a=r("R/WZ"),i=Object(a.a)((function(e){return{toolbar:e.mixins.toolbar}})),c=function(e){var t=e.id,r=i();return Object(o.b)(n.a,{id:t,className:r.toolbar})}},cpVT:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return o}))},dhJC:function(e,t,r){"use strict";function o(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return o}))},hlFM:function(e,t,r){"use strict";var o=r("KQm4"),n=r("wx14"),a=(r("17x9"),r("bv9d"));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(n.a)({},Object(a.a)(r,e(Object(n.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(a.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},s=r("rePB"),l=r("LybE");function p(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var d=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,n)||{};return Object(l.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,a&&(t=a(t))),!1===o?t:Object(s.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function u(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var b=c(d({prop:"border",themeKey:"borders",transform:u}),d({prop:"borderTop",themeKey:"borders",transform:u}),d({prop:"borderRight",themeKey:"borders",transform:u}),d({prop:"borderBottom",themeKey:"borders",transform:u}),d({prop:"borderLeft",themeKey:"borders",transform:u}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),m=c(d({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),f=c(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),h=c(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),v=c(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),g=c(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=d({prop:"boxShadow",themeKey:"shadows"});function x(e){return e<=1?"".concat(100*e,"%"):e}var O=d({prop:"width",transform:x}),j=d({prop:"maxWidth",transform:x}),w=d({prop:"minWidth",transform:x}),S=d({prop:"height",transform:x}),k=d({prop:"maxHeight",transform:x}),z=d({prop:"minHeight",transform:x}),C=(d({prop:"size",cssProperty:"width",transform:x}),d({prop:"size",cssProperty:"height",transform:x}),c(O,j,w,S,k,z,d({prop:"boxSizing"}))),E=r("+Hmc"),T=c(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),N=r("Ff2n"),R=r("q1tI"),I=r.n(R),M=r("iuhU"),P=r("2mql"),L=r.n(P),A=r("RD7I");function W(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var H=r("cNwE"),K=function(e){var t=function(e){return function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.name,i=Object(N.a)(o,["name"]),c=a,s="function"===typeof t?function(e){return{root:function(r){return t(Object(n.a)({theme:e},r))}}}:{root:t},l=Object(A.a)(s,Object(n.a)({Component:e,name:a||e.displayName,classNamePrefix:c},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=I.a.forwardRef((function(t,o){var a=t.children,i=t.className,c=t.clone,s=t.component,p=Object(N.a)(t,["children","className","clone","component"]),d=l(t),u=Object(M.a)(d.root,i),b=p;if(r&&(b=W(b,r)),c)return I.a.cloneElement(a,Object(n.a)({className:Object(M.a)(a.props.className,u)},b));if("function"===typeof a)return a(Object(n.a)({className:u},b));var m=s||e;return I.a.createElement(m,Object(n.a)({ref:o,className:u},b),a)}));return L()(p,e),p}}(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:H.a},r))}},_=i(c(b,m,f,h,v,g,y,C,E.b,T)),B=K("div")(_,{name:"MuiBox"});t.a=B},n0mX:function(e,t,r){"use strict";var o=r("q1tI"),n=r("5AJ6");t.a=Object(n.a)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu")},vAif:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var o=r("BGKE"),n=r("cpVT"),a=r("AeFk"),i=r("dhJC"),c=(r("q1tI"),r("hlFM")),s=r("Z3vd");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"zjik7",styles:"display:flex"},u=function(e){var t=e.list,r=e.onClick,n=e.onContextMenu,l=(e.onAuxClick,e.disabled),u=Object(i.a)(e,["list","onClick","onContextMenu","onAuxClick","disabled"]),b=function(e){return e},m=function(e){2===e.buttons&&0===e.button&&(e.stopPropagation(),e.preventDefault())};return Object(o.b)(c.a,{children:t.map((function(e,t){return Object(o.b)(c.a,{css:d,children:e.map((function(e,o){var i=function(e){var t,r;return 0<=e&&e<=8&&(e=0),null!==(t=null===(r=[{id:-1,sign:"*",className:"mine",color:"red"},{id:0,sign:null,className:"safe",color:"white"},{id:10,sign:null,className:"veiled",color:"gainsboro"},{id:11,sign:"!",className:"suspicious",color:"gainsboro"},{id:12,sign:"?",className:"undetermined",color:"gainsboro"}].filter((function(t){return t.id===e})))||void 0===r?void 0:r[0])&&void 0!==t?t:{}}(e),d=i.sign,f=i.className;return Object(a.a)(c.a,p(p({},u),{},{disableRipple:l,className:f,id:"".concat("__box__","_").concat(t,"_").concat(o),component:s.a,key:"box_".concat(t,"_").concat(o),css:Object(a.b)("box-sizing:content-box;border:1px solid black;width:","1rem",";height:","1rem",";display:flex;justify-content:center;align-items:center;min-width:0;min-height:0;line-height:0;border-radius:0;transition:none;&.veiled,&.suspicious,&.undetermined{background-color:gainsboro;}&.safe{background-color:white;}&.mine{background-color:red;}"),onClick:l?void 0:r(t,o),onContextMenu:l?void 0:n(t,o),onMouseDown:l?void 0:b,onMouseUp:l?void 0:m}),d||(10===e||0===e?"":e))}))},"box_".concat(t))}))})}}},[["Wp5w",0,1,2,3]]]);
//# sourceMappingURL=games-ef4800a7e61e971e21f3.js.map