import{_ as Se,c as Pe,o as ke,m as dn,n as $,f as mn,p as pn,a as E,b as N,q as gn}from"./Dv2tr2Gk.js";const hn={props:{v:{type:String,default:""}},computed:{html(){const t=this.v||(this.$slots.default?this.$slots.default[0].text:"");if(t!==""&&!t)throw new Error("Only text is allowed in T tag.");const e=/\[(.*?)\]\((.*?)\)/g;return t.replace(e,"<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>")}}},yn=["innerHTML"];function bn(t,e,n,a,r,i){return ke(),Pe("span",{innerHTML:i.html},null,8,yn)}const Ee=Se(hn,[["render",bn]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function vn(t,e,n){return(e=An(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kt(Object(n),!0).forEach(function(a){vn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function An(t){var e=xn(t,"string");return typeof e=="symbol"?e:e+""}const qt=()=>{};let Rt={},_e={},Ce=null,Ie={mark:qt,measure:qt};try{typeof window<"u"&&(Rt=window),typeof document<"u"&&(_e=document),typeof MutationObserver<"u"&&(Ce=MutationObserver),typeof performance<"u"&&(Ie=performance)}catch{}const{userAgent:Qt=""}=Rt.navigator||{},D=Rt,y=_e,Zt=Ce,at=Ie;D.document;const L=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Ne=~Qt.indexOf("MSIE")||~Qt.indexOf("Trident/");var wn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,On=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Te={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Sn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",ct="duotone",Pn="sharp",kn="sharp-duotone",Me=[A,ct,Pn,kn],En={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_n={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Cn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),In={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Nn=["fak","fa-kit","fakd","fa-kit-duotone"],Jt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tn=["kit"],Fn={kit:{"fa-kit":"fak"}},Mn=["fak","fakd"],Ln={kit:{fak:"fa-kit"}},te={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Dn=["fak","fa-kit","fakd","fa-kit-duotone"],Rn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},jn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Yn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Un=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],wt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...zn,...Un],Bn=["solid","regular","light","thin","duotone","brands"],Le=[1,2,3,4,5,6,7,8,9,10],Wn=Le.concat([11,12,13,14,15,16,17,18,19,20]),$n=[...Object.keys(Yn),...Bn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY].concat(Le.map(t=>"".concat(t,"x"))).concat(Wn.map(t=>"w-".concat(t))),Hn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const F="___FONT_AWESOME___",Ot=16,ze="fa",De="svg-inline--fa",B="data-fa-i2svg",St="data-fa-pseudo-element",Gn="data-fa-pseudo-element-pending",jt="data-prefix",Yt="data-icon",ee="fontawesome-i2svg",Xn="async",Vn=["HTML","HEAD","STYLE","SCRIPT"],Re=(()=>{try{return!0}catch{return!1}})();function tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const je=l({},Te);je[A]=l(l(l(l({},{"fa-duotone":"duotone"}),Te[A]),Jt.kit),Jt["kit-duotone"]);const Kn=tt(je),Pt=l({},In);Pt[A]=l(l(l(l({},{duotone:"fad"}),Pt[A]),te.kit),te["kit-duotone"]);const ne=tt(Pt),kt=l({},At);kt[A]=l(l({},kt[A]),Ln.kit);const Ut=tt(kt),Et=l({},jn);Et[A]=l(l({},Et[A]),Fn.kit);tt(Et);const qn=wn,Ye="fa-layers-text",Qn=On,Zn=l({},En);tt(Zn);const Jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=Sn,ta=[...Tn,...$n],q=D.FontAwesomeConfig||{};function ea(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function na(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=na(ea(n));r!=null&&(q[a]=r)});const Ue={styleDefault:"solid",familyDefault:A,cssPrefix:ze,replacementClass:De,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q.familyPrefix&&(q.cssPrefix=q.familyPrefix);const X=l(l({},Ue),q);X.autoReplaceSvg||(X.observeMutations=!1);const c={};Object.keys(Ue).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){X[t]=e,Q.forEach(n=>n(c))},get:function(){return X[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,Q.forEach(e=>e(c))},get:function(){return X.cssPrefix}});D.FontAwesomeConfig=c;const Q=[];function aa(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const z=Ot,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ra(t){if(!t||!L)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let t=12,e="";for(;t-- >0;)e+=ia[Math.random()*62|0];return e}function V(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Bt(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Be(t[n]),'" '),"").trim()}function ut(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Wt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function sa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function la(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,i="";return r&&Ne?i+="translate(".concat(e.x/z-n/2,"em, ").concat(e.y/z-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):i+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),i+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function We(){const t=ze,e=De,n=c.cssPrefix,a=c.replacementClass;let r=fa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ae=!1;function ht(){c.autoAddCss&&!ae&&(ra(We()),ae=!0)}var ca={mixout(){return{dom:{css:We,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}};const M=D||{};M[F]||(M[F]={});M[F].styles||(M[F].styles={});M[F].hooks||(M[F].hooks={});M[F].shims||(M[F].shims=[]);var I=M[F];const $e=[],He=function(){y.removeEventListener("DOMContentLoaded",He),st=1,$e.map(t=>t())};let st=!1;L&&(st=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),st||y.addEventListener("DOMContentLoaded",He));function ua(t){L&&(st?setTimeout(t,0):$e.push(t))}function et(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Be(t):"<".concat(e," ").concat(oa(n),">").concat(a.map(et).join(""),"</").concat(e,">")}function re(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,f,m;for(a===void 0?(u=1,m=e[i[0]]):(u=0,m=a);u<o;u++)f=i[u],m=s(m,e[f],f,e);return m};function da(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function _t(t){const e=da(t);return e.length===1?e[0].toString(16):null}function ma(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ie(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ct(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ie(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,ie(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&Ct("fa",e)}const{styles:J,shims:pa}=I,Ge=Object.keys(Ut),ga=Ge.reduce((t,e)=>(t[e]=Object.keys(Ut[e]),t),{});let $t=null,Xe={},Ve={},Ke={},qe={},Qe={};function ha(t){return~ta.indexOf(t)}function ya(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ha(r)?r:null}const Ze=()=>{const t=a=>yt(J,(r,i,o)=>(r[o]=yt(i,a,{}),r),{});Xe=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ve=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Qe=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in J||c.autoFetchSvg,n=yt(pa,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Ke=n.names,qe=n.unicodes,$t=dt(c.styleDefault,{family:c.familyDefault})};aa(t=>{$t=dt(t.styleDefault,{family:c.familyDefault})});Ze();function Ht(t,e){return(Xe[t]||{})[e]}function ba(t,e){return(Ve[t]||{})[e]}function U(t,e){return(Qe[t]||{})[e]}function Je(t){return Ke[t]||{prefix:null,iconName:null}}function va(t){const e=qe[t],n=Ht("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return $t}const tn=()=>({prefix:null,iconName:null,rest:[]});function xa(t){let e=A;const n=Ge.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return Me.forEach(a=>{(t.includes(n[a])||t.some(r=>ga[a].includes(r)))&&(e=a)}),e}function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=Kn[n][t];if(n===ct&&!t)return"fad";const r=ne[n][t]||ne[n][a],i=t in I.styles?t:null;return r||i||null}function Aa(t){let e=[],n=null;return t.forEach(a=>{const r=ya(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function oe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=wt.concat(Dn),i=oe(t.filter(h=>r.includes(h))),o=oe(t.filter(h=>!wt.includes(h))),s=i.filter(h=>(a=h,!Fe.includes(h))),[u=null]=s,f=xa(i),m=l(l({},Aa(o)),{},{prefix:dt(u,{family:f})});return l(l(l({},m),Pa({values:t,family:f,styles:J,config:c,canonical:m,givenPrefix:a})),wa(n,a,m))}function wa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Je(r):{},o=U(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!J.far&&J.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Oa=Me.filter(t=>t!==A||t!==ct),Sa=Object.keys(At).filter(t=>t!==A).map(t=>Object.keys(At[t])).flat();function Pa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ct,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Oa.includes(n)&&(Object.keys(i).find(g=>Sa.includes(g))||o.autoFetchSvg)){const g=Cn.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=U(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class ka{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Ct(i,r[i]);const o=Ut[A][i];o&&Ct(o,r[i]),Ze()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}}let se=[],H={};const G={},Ea=Object.keys(G);function _a(t,e){let{mixoutsTo:n}=e;return se=t,H={},Object.keys(G).forEach(a=>{Ea.indexOf(a)===-1&&delete G[a]}),se.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{H[o]||(H[o]=[]),H[o].push(i[o])})}a.provides&&a.provides(G)}),n}function It(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(i=>{i.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function Nt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=U(n,e)||e,re(en.definitions,n,e)||re(I.styles,n,e)}const en=new ka,Ca=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,W("noAuto")},Ia={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(W("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ua(()=>{Ta({autoReplaceSvgRoot:e}),W("watch",t)})}},Na={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=dt(t[0]);return{prefix:n,iconName:U(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(qn))){const e=mt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:U(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:U(e,t)||t}}}},S={noAuto:Ca,config:c,dom:Ia,parse:Na,library:en,findIconDefinition:Nt,toHtml:et},Ta=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(I.styles).length>0||c.autoFetchSvg)&&L&&c.autoReplaceSvg&&S.dom.i2svg({node:e})};function pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>et(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Fa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Wt(o)&&n.found&&!a.found){const{width:s,height:u}=n,f={x:s/u/2,y:.5};r.style=ut(l(l({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ma(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Gt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:f,extra:m,watchable:h=!1}=t,{width:g,height:v}=n.found?n:e,_=Mn.includes(a),k=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(P=>m.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(m.classes).join(" ");let w={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})};const d=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};h&&(w.attributes[B]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||Z())},children:[s]}),delete w.attributes.title);const p=l(l({},w),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:l(l({},d),m.styles)}),{children:b,attributes:x}=n.found&&e.found?j("generateAbstractMask",p)||{children:[],attributes:{}}:j("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=b,p.attributes=x,o?Ma(p):Fa(p)}function le(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[B]="");const f=l({},o.styles);Wt(r)&&(f.transform=la({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=ut(f);m.length>0&&(u.style=m);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function La(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ut(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:bt}=I;function Tt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const za={found:!1,width:512,height:512};function Da(t,e){!Re&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=Je(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){const i=bt[e][t];return a(Tt(i))}Da(t,e),a(l(l({},za),{},{icon:c.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}const fe=()=>{},Mt=c.measurePerformance&&at&&at.mark&&at.measure?at:{mark:fe,measure:fe},K='FA "6.7.2"',Ra=t=>(Mt.mark("".concat(K," ").concat(t," begins")),()=>nn(t)),nn=t=>{Mt.mark("".concat(K," ").concat(t," ends")),Mt.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var Xt={begin:Ra,end:nn};const it=()=>{};function ce(t){return typeof(t.getAttribute?t.getAttribute(B):null)=="string"}function ja(t){const e=t.getAttribute?t.getAttribute(jt):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function Ya(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ua(){return c.autoReplaceSvg===!0?ot.replace:ot[c.autoReplaceSvg]||ot.replace}function Ba(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Wa(t){return y.createElement(t)}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ba:Wa}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(an(i,{ceFn:n}))}),a}function $a(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ot={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(an(n),e)}),e.getAttribute(B)===null&&c.keepOriginalSource){let n=y.createComment($a(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Bt(e).indexOf(c.replacementClass))return ot.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===c.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>et(i)).join(`
`);e.setAttribute(B,""),e.innerHTML=r}};function ue(t){t()}function rn(t,e){const n=typeof e=="function"?e:it;if(t.length===0)n();else{let a=ue;c.mutateApproach===Xn&&(a=D.requestAnimationFrame||ue),a(()=>{const r=Ua(),i=Xt.begin("mutate");t.map(r),i(),n()})}}let Vt=!1;function on(){Vt=!0}function Lt(){Vt=!1}let lt=null;function de(t){if(!Zt||!c.observeMutations)return;const{treeCallback:e=it,nodeCallback:n=it,pseudoElementsCallback:a=it,observeMutationsRoot:r=y}=t;lt=new Zt(i=>{if(Vt)return;const o=R();V(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ce(s.addedNodes[0])&&(c.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&ce(s.target)&&~Jn.indexOf(s.attributeName))if(s.attributeName==="class"&&ja(s.target)){const{prefix:u,iconName:f}=mt(Bt(s.target));s.target.setAttribute(jt,u||o),f&&s.target.setAttribute(Yt,f)}else Ya(s.target)&&n(s.target)})}),L&&lt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ha(){lt&&lt.disconnect()}function Ga(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Xa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=mt(Bt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||Ht(r.prefix,_t(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Va(t){const e=V(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||Z()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ka(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Xa(t),i=Va(t),o=It("parseNodeAttributes",{},t);let s=e.styleParser?Ga(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:qa}=I;function sn(t){const e=c.autoReplaceSvg==="nest"?me(t,{styleParser:!1}):me(t);return~e.extra.classes.indexOf(Ye)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}function Qa(){return[...Nn,...wt]}function pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=y.documentElement.classList,a=m=>n.add("".concat(ee,"-").concat(m)),r=m=>n.remove("".concat(ee,"-").concat(m)),i=c.autoFetchSvg?Qa():Fe.concat(Object.keys(qa));i.includes("fa")||i.push("fa");const o=[".".concat(Ye,":not([").concat(B,"])")].concat(i.map(m=>".".concat(m,":not([").concat(B,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=V(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Xt.begin("onTree"),f=s.reduce((m,h)=>{try{const g=sn(h);g&&m.push(g)}catch(g){Re||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise((m,h)=>{Promise.all(f).then(g=>{rn(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(g=>{u(),h(g)})})}function Za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(n=>{n&&rn([n],e)})}function Ja(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Nt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Nt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const tr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:v}=t;return pt(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||Z()):(f["aria-hidden"]="true",f.focusable="false")),Gt({icons:{main:Tt(v),mask:r?Tt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:l(l({},C),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:m,classes:u}})))};var er={mixout(){return{icon:Ja(tr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=pe,t.nodeCallback=Za,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return pe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:f,maskId:m,extra:h}=n;return new Promise((g,v)=>{Promise.all([Ft(a,o),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[k,w]=_;g([e,Gt({icons:{main:k,mask:w},prefix:o,iconName:a,transform:s,symbol:u,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ut(o);s.length>0&&(a.style=s);let u;return Wt(i)&&(u=j("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},nr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pt({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ar={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return pt({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),La({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},rr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return pt({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),le({content:t,transform:l(l({},C),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(Ne){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,s=f.height/u}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,le({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const ir=new RegExp('"',"ug"),ge=[1105920,1112319],he=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),_n),Hn),Rn),zt=Object.keys(he).reduce((t,e)=>(t[e.toLowerCase()]=he[e],t),{}),or=Object.keys(zt).reduce((t,e)=>{const n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function sr(t){const e=t.replace(ir,""),n=ma(e,0),a=n>=ge[0]&&n<=ge[1],r=e.length===2?e[0]===e[1]:!1;return{value:_t(r?e[0]:e),isSecondary:a||r}}function lr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||or[n]}function ye(t,e){const n="".concat(Gn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=V(t.children).filter(g=>g.getAttribute(St)===e)[0],s=D.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),f=u.match(Qn),m=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&h!=="none"&&h!==""){const g=s.getPropertyValue("content");let v=lr(u,m);const{value:_,isSecondary:k}=sr(g),w=f[0].startsWith("FontAwesome");let d=Ht(v,_),p=d;if(w){const b=va(_);b.iconName&&b.prefix&&(d=b.iconName,v=b.prefix)}if(d&&!k&&(!o||o.getAttribute(jt)!==v||o.getAttribute(Yt)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const b=Ka(),{extra:x}=b;x.attributes[St]=e,Ft(d,v).then(P=>{const nt=Gt(l(l({},b),{},{icons:{main:P,mask:tn()},prefix:v,iconName:p,extra:x,watchable:!0})),Y=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=nt.map(un=>et(un)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function fr(t){return Promise.all([ye(t,"::before"),ye(t,"::after")])}function cr(t){return t.parentNode!==document.head&&!~Vn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function be(t){if(L)return new Promise((e,n)=>{const a=V(t.querySelectorAll("*")).filter(cr).map(fr),r=Xt.begin("searchPseudoElements");on(),Promise.all(a).then(()=>{r(),Lt(),e()}).catch(()=>{r(),Lt(),n()})})}var ur={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=be,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;c.searchPseudoElements&&be(n)}}};let ve=!1;var dr={mixout(){return{dom:{unwatch(){on(),ve=!0}}}},hooks(){return{bootstrap(){de(It("mutationObserverCallbacks",{}))},noAuto(){Ha()},watch(t){const{observeMutationsRoot:e}=t;ve?Lt():de(It("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const xe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var mr={mixout(){return{parse:{transform:t=>xe(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=xe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},g={outer:o,inner:m,path:h};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pr(t){return t.tag==="g"?t.children:[t]}var gr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?mt(n.split(" ").map(r=>r.trim())):tn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:f}=r,{width:m,icon:h}=i,g=sa({transform:s,containerWidth:m,iconWidth:u}),v={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},_=f.children?{children:f.children.map(Ae)}:{},k={tag:"g",attributes:l({},g.inner),children:[Ae(l({tag:f.tag,attributes:l(l({},f.attributes),g.path)},_))]},w={tag:"g",attributes:l({},g.outer),children:[k]},d="mask-".concat(o||Z()),p="clip-".concat(o||Z()),b={tag:"mask",attributes:l(l({},vt),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,w]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:pr(h)},b]};return n.push(x,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")")},vt)}),{children:n,attributes:a}}}},hr={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},yr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},br=[ca,er,nr,ar,rr,ur,dr,mr,gr,hr,yr];_a(br,{mixoutsTo:S});S.noAuto;S.config;const vr=S.library;S.dom;const Dt=S.parse;S.findIconDefinition;S.toHtml;const xr=S.icon;S.layer;S.text;S.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ar={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]};function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?we(Object(n),!0).forEach(function(a){O(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function wr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Or(t){var e=wr(t,"string");return typeof e=="symbol"?e:e+""}function ft(t){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(t)}function O(t,e,n){return e=Or(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Pr(t,e){if(t==null)return{};var n=Sr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ln={exports:{}};(function(t){(function(e){var n=function(d,p,b){if(!f(p)||h(p)||g(p)||v(p)||u(p))return p;var x,P=0,nt=0;if(m(p))for(x=[],nt=p.length;P<nt;P++)x.push(n(d,p[P],b));else{x={};for(var Y in p)Object.prototype.hasOwnProperty.call(p,Y)&&(x[d(Y,b)]=n(d,p[Y],b))}return x},a=function(d,p){p=p||{};var b=p.separator||"_",x=p.split||/(?=[A-Z])/;return d.split(x).join(b)},r=function(d){return _(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,b){return b?b.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,u=function(d){return typeof d=="function"},f=function(d){return d===Object(d)},m=function(d){return s.call(d)=="[object Array]"},h=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},v=function(d){return s.call(d)=="[object Boolean]"},_=function(d){return d=d-0,d===d},k=function(d,p){var b=p&&"process"in p?p.process:p;return typeof b!="function"?d:function(x,P){return b(x,d,P)}},w={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return n(k(r,p),d)},decamelizeKeys:function(d,p){return n(k(o,p),d,p)},pascalizeKeys:function(d,p){return n(k(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(kr)})(ln);var Er=ln.exports,_r=["class","style"];function Cr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Er.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Ir(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function fn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return fn(u)}),r=Object.keys(t.attributes||{}).reduce(function(u,f){var m=t.attributes[f];switch(f){case"class":u.class=Ir(m);break;case"style":u.style=Cr(m);break;default:u.attrs[f]=m}return u},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Pr(n,_r);return pn(t.tag,T(T(T({},e),{},{class:r.class,style:T(T({},r.style),o)},r.attrs),s),a)}var cn=!1;try{cn=!0}catch{}function Nr(){if(!cn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?O({},t,e):{}}function Tr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},O(O(O(O(O(O(O(O(O(O(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),O(O(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Oe(t){if(t&&ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dt.icon)return Dt.icon(t);if(t===null)return null;if(ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Fr=dn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=$(function(){return Oe(e.icon)}),i=$(function(){return xt("classes",Tr(e))}),o=$(function(){return xt("transform",typeof e.transform=="string"?Dt.transform(e.transform):e.transform)}),s=$(function(){return xt("mask",Oe(e.mask))}),u=$(function(){return xr(r.value,T(T(T(T({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});mn(u,function(m){if(!m)return Nr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var f=$(function(){return u.value?fn(u.value.abstract[0],{},a):null});return function(){return f.value}}});vr.add(Ar);const Mr={components:{"font-awesome-icon":Fr,T:Ee}},Lr={class:"container"},zr={class:"text-lg md_text-3xl my-1"},Dr={class:"text-xs"},Rr={class:"text-xs"},jr={class:"text-xs"};function Yr(t,e,n,a,r,i){const o=Ee,s=gn("font-awesome-icon");return ke(),Pe("div",Lr,[E("h1",null,[N(o,{v:"[東大](とうだい) [CAST](きゃすと) [五月祭](ごがつさい)2025"})]),E("div",zr,[e[0]||(e[0]=E("span",{class:"text-sm md_text-base"},"5",-1)),E("span",Dr,[N(o,{v:"[月](がつ)"})]),e[1]||(e[1]=E("span",{class:"text-sm md_text-base ml-1"},"24",-1)),E("span",Rr,[N(o,{v:"[日](にち)"})]),e[2]||(e[2]=E("span",{class:"text-xs bg-blue-600 text-white mx-2 p-1 rounded"},"土",-1)),N(s,{class:"mx-2 text-lg",icon:["fas","caret-right"]}),e[3]||(e[3]=E("span",{class:"text-sm md_text-base"},"25",-1)),E("span",jr,[N(o,{v:"[日](にち)"})]),e[4]||(e[4]=E("span",{class:"text-xs bg-red-600 text-white mx-2 p-1 rounded"},"日",-1))]),E("div",null,[N(o,{v:"「なるほど[実感](じっかん)サイエンスミュージアム」"}),N(o,{v:"「なるほど[体感](たいかん)サイエンスショー」"}),N(o,{v:"「[作](つく)って[体感](たいかん)サイエンスアトリエ」"}),N(o,{v:"を[出展](しゅってん)しています！"})])])}const Br=Se(Mr,[["render",Yr],["__scopeId","data-v-f710e1ee"]]);export{Br as default};
