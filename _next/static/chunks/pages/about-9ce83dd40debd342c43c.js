_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/W3R":function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("bOvJ")}])},bOvJ:function(r,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return l})),e.d(t,"default",(function(){return s}));var o=e("BGKE"),n=e("Ji2X"),p=e("ofer"),a=e("hlFM"),i=e("NZy3"),c=e.n(i).a.lorem.sentences(5),l=!0;function s(r){var t=r.builtAt,e=r.contents;return Object(o.c)(n.a,{children:[Object(o.b)(p.a,{variant:"h1",children:"About"}),Object(o.b)(p.a,{variant:"body",children:t}),Object(o.c)(a.a,{children:[Object(o.b)(p.a,{variant:"h3",children:"run time"}),Object(o.b)(a.a,{children:Array(5).fill(null).map((function(){return Object(o.b)(p.a,{paragraph:!0,children:c})}))}),Object(o.b)(p.a,{variant:"h3",children:"build time"}),Object(o.b)(a.a,{children:Array(5).fill(null).map((function(){return Object(o.b)(p.a,{paragraph:!0,children:e})}))})]})]})}},hlFM:function(r,t,e){"use strict";var o=e("KQm4"),n=e("wx14"),p=(e("17x9"),e("bv9d"));var a=function(r){var t=function(t){var e=r(t);return t.css?Object(n.a)({},Object(p.a)(e,r(Object(n.a)({theme:t.theme},t.css))),function(r,t){var e={};return Object.keys(r).forEach((function(o){-1===t.indexOf(o)&&(e[o]=r[o])})),e}(t.css,[r.filterProps])):e};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(r.filterProps)),t};var i=function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var o=function(r){return t.reduce((function(t,e){var o=e(r);return o?Object(p.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(r,t){return r.concat(t.filterProps)}),[]),o},c=e("rePB"),l=e("LybE");function s(r,t){return t&&"string"===typeof t?t.split(".").reduce((function(r,t){return r&&r[t]?r[t]:null}),r):null}var h=function(r){var t=r.prop,e=r.cssProperty,o=void 0===e?r.prop:e,n=r.themeKey,p=r.transform,a=function(r){if(null==r[t])return null;var e=r[t],a=s(r.theme,n)||{};return Object(l.a)(r,e,(function(r){var t;return"function"===typeof a?t=a(r):Array.isArray(a)?t=a[r]||r:(t=s(a,r)||r,p&&(t=p(t))),!1===o?t:Object(c.a)({},o,t)}))};return a.propTypes={},a.filterProps=[t],a};function u(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var f=i(h({prop:"border",themeKey:"borders",transform:u}),h({prop:"borderTop",themeKey:"borders",transform:u}),h({prop:"borderRight",themeKey:"borders",transform:u}),h({prop:"borderBottom",themeKey:"borders",transform:u}),h({prop:"borderLeft",themeKey:"borders",transform:u}),h({prop:"borderColor",themeKey:"palette"}),h({prop:"borderRadius",themeKey:"shape"})),y=i(h({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),h({prop:"display"}),h({prop:"overflow"}),h({prop:"textOverflow"}),h({prop:"visibility"}),h({prop:"whiteSpace"})),d=i(h({prop:"flexBasis"}),h({prop:"flexDirection"}),h({prop:"flexWrap"}),h({prop:"justifyContent"}),h({prop:"alignItems"}),h({prop:"alignContent"}),h({prop:"order"}),h({prop:"flex"}),h({prop:"flexGrow"}),h({prop:"flexShrink"}),h({prop:"alignSelf"}),h({prop:"justifyItems"}),h({prop:"justifySelf"})),m=i(h({prop:"gridGap"}),h({prop:"gridColumnGap"}),h({prop:"gridRowGap"}),h({prop:"gridColumn"}),h({prop:"gridRow"}),h({prop:"gridAutoFlow"}),h({prop:"gridAutoColumns"}),h({prop:"gridAutoRows"}),h({prop:"gridTemplateColumns"}),h({prop:"gridTemplateRows"}),h({prop:"gridTemplateAreas"}),h({prop:"gridArea"})),b=i(h({prop:"position"}),h({prop:"zIndex",themeKey:"zIndex"}),h({prop:"top"}),h({prop:"right"}),h({prop:"bottom"}),h({prop:"left"})),g=i(h({prop:"color",themeKey:"palette"}),h({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=h({prop:"boxShadow",themeKey:"shadows"});function O(r){return r<=1?"".concat(100*r,"%"):r}var j=h({prop:"width",transform:O}),w=h({prop:"maxWidth",transform:O}),x=h({prop:"minWidth",transform:O}),P=h({prop:"height",transform:O}),N=h({prop:"maxHeight",transform:O}),A=h({prop:"minHeight",transform:O}),K=(h({prop:"size",cssProperty:"width",transform:O}),h({prop:"size",cssProperty:"height",transform:O}),i(j,w,x,P,N,A,h({prop:"boxSizing"}))),T=e("+Hmc"),_=i(h({prop:"fontFamily",themeKey:"typography"}),h({prop:"fontSize",themeKey:"typography"}),h({prop:"fontStyle",themeKey:"typography"}),h({prop:"fontWeight",themeKey:"typography"}),h({prop:"letterSpacing"}),h({prop:"lineHeight"}),h({prop:"textAlign"})),E=e("Ff2n"),S=e("q1tI"),B=e.n(S),R=e("iuhU"),C=e("2mql"),W=e.n(C),I=e("RD7I");function k(r,t){var e={};return Object.keys(r).forEach((function(o){-1===t.indexOf(o)&&(e[o]=r[o])})),e}var z=e("cNwE"),F=function(r){var t=function(r){return function(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=o.name,a=Object(E.a)(o,["name"]),i=p,c="function"===typeof t?function(r){return{root:function(e){return t(Object(n.a)({theme:r},e))}}}:{root:t},l=Object(I.a)(c,Object(n.a)({Component:r,name:p||r.displayName,classNamePrefix:i},a));t.filterProps&&(e=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var s=B.a.forwardRef((function(t,o){var p=t.children,a=t.className,i=t.clone,c=t.component,s=Object(E.a)(t,["children","className","clone","component"]),h=l(t),u=Object(R.a)(h.root,a),f=s;if(e&&(f=k(f,e)),i)return B.a.cloneElement(p,Object(n.a)({className:Object(R.a)(p.props.className,u)},f));if("function"===typeof p)return p(Object(n.a)({className:u},f));var y=c||r;return B.a.createElement(y,Object(n.a)({ref:o,className:u},f),p)}));return W()(s,r),s}}(r);return function(r,e){return t(r,Object(n.a)({defaultTheme:z.a},e))}},G=a(i(f,y,d,m,b,g,v,K,T.b,_)),J=F("div")(G,{name:"MuiBox"});t.a=J},ofer:function(r,t,e){"use strict";var o=e("wx14"),n=e("Ff2n"),p=e("q1tI"),a=(e("17x9"),e("iuhU")),i=e("H2TA"),c=e("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=p.forwardRef((function(r,t){var e=r.align,i=void 0===e?"inherit":e,s=r.classes,h=r.className,u=r.color,f=void 0===u?"initial":u,y=r.component,d=r.display,m=void 0===d?"initial":d,b=r.gutterBottom,g=void 0!==b&&b,v=r.noWrap,O=void 0!==v&&v,j=r.paragraph,w=void 0!==j&&j,x=r.variant,P=void 0===x?"body1":x,N=r.variantMapping,A=void 0===N?l:N,K=Object(n.a)(r,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=y||(w?"p":A[P]||l[P])||"span";return p.createElement(T,Object(o.a)({className:Object(a.a)(s.root,h,"inherit"!==P&&s[P],"initial"!==f&&s["color".concat(Object(c.a)(f))],O&&s.noWrap,g&&s.gutterBottom,w&&s.paragraph,"inherit"!==i&&s["align".concat(Object(c.a)(i))],"initial"!==m&&s["display".concat(Object(c.a)(m))]),ref:t},K))}));t.a=Object(i.a)((function(r){return{root:{margin:0},body2:r.typography.body2,body1:r.typography.body1,caption:r.typography.caption,button:r.typography.button,h1:r.typography.h1,h2:r.typography.h2,h3:r.typography.h3,h4:r.typography.h4,h5:r.typography.h5,h6:r.typography.h6,subtitle1:r.typography.subtitle1,subtitle2:r.typography.subtitle2,overline:r.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:r.palette.primary.main},colorSecondary:{color:r.palette.secondary.main},colorTextPrimary:{color:r.palette.text.primary},colorTextSecondary:{color:r.palette.text.secondary},colorError:{color:r.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)}},[["/W3R",0,1,9,2,12]]]);
//# sourceMappingURL=about-9ce83dd40debd342c43c.js.map