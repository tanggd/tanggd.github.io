function Q(t){if(Array.isArray(t))return t}function X(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],a=!0,i=!1,o,f;try{for(r=r.call(t);!(a=(o=r.next()).done)&&(n.push(o.value),!(e&&n.length===e));a=!0);}catch(s){i=!0,f=s}finally{try{!a&&r.return!=null&&r.return()}finally{if(i)throw f}}return n}}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function V(t,e){if(!!t){if(typeof t=="string")return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(t,e)}}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(t,e){return Q(t)||X(t,e)||V(t,e)||Y()}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},P.apply(this,arguments)}function tt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function At(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function kt(t,e,r){return e&&E(t.prototype,e),r&&E(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function Ot(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?_(Object(r),!0).forEach(function(n){tt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function et(t){if(Array.isArray(t))return F(t)}function rt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ht(t){return et(t)||rt(t)||V(t)||nt()}function at(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function Rt(t,e){if(t==null)return{};var r=at(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}function u(t,e){it(t)&&(t="100%");var r=ot(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function v(t){return Math.min(1,Math.max(0,t))}function it(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function ot(t){return typeof t=="string"&&t.indexOf("%")!==-1}function $(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function y(t){return t<=1?"".concat(Number(t)*100,"%"):t}function d(t){return t.length===1?"0"+t:String(t)}function ft(t,e,r){return{r:u(t,255)*255,g:u(e,255)*255,b:u(r,255)*255}}function B(t,e,r){t=u(t,255),e=u(e,255),r=u(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,o=0,f=(n+a)/2;if(n===a)o=0,i=0;else{var s=n-a;switch(o=f>.5?s/(2-n-a):s/(n+a),n){case t:i=(e-r)/s+(e<r?6:0);break;case e:i=(r-t)/s+2;break;case r:i=(t-e)/s+4;break}i/=6}return{h:i,s:o,l:f}}function M(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function st(t,e,r){var n,a,i;if(t=u(t,360),e=u(e,100),r=u(r,100),e===0)a=r,i=r,n=r;else{var o=r<.5?r*(1+e):r+e-r*e,f=2*r-o;n=M(f,o,t+1/3),a=M(f,o,t),i=M(f,o,t-1/3)}return{r:n*255,g:a*255,b:i*255}}function T(t,e,r){t=u(t,255),e=u(e,255),r=u(r,255);var n=Math.max(t,e,r),a=Math.min(t,e,r),i=0,o=n,f=n-a,s=n===0?0:f/n;if(n===a)i=0;else{switch(n){case t:i=(e-r)/f+(e<r?6:0);break;case e:i=(r-t)/f+2;break;case r:i=(t-e)/f+4;break}i/=6}return{h:i,s,v:o}}function ut(t,e,r){t=u(t,360)*6,e=u(e,100),r=u(r,100);var n=Math.floor(t),a=t-n,i=r*(1-e),o=r*(1-a*e),f=r*(1-(1-a)*e),s=n%6,S=[r,o,i,i,f,r][s],p=[f,r,r,o,i,i][s],w=[i,i,f,r,r,o][s];return{r:S*255,g:p*255,b:w*255}}function j(t,e,r,n){var a=[d(Math.round(t).toString(16)),d(Math.round(e).toString(16)),d(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ht(t,e,r,n,a){var i=[d(Math.round(t).toString(16)),d(Math.round(e).toString(16)),d(Math.round(r).toString(16)),d(ct(n))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function ct(t){return Math.round(parseFloat(t)*255).toString(16)}function D(t){return h(t)/255}function h(t){return parseInt(t,16)}function lt(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var C={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function b(t){var e={r:0,g:0,b:0},r=1,n=null,a=null,i=null,o=!1,f=!1;return typeof t=="string"&&(t=bt(t)),typeof t=="object"&&(l(t.r)&&l(t.g)&&l(t.b)?(e=ft(t.r,t.g,t.b),o=!0,f=String(t.r).substr(-1)==="%"?"prgb":"rgb"):l(t.h)&&l(t.s)&&l(t.v)?(n=y(t.s),a=y(t.v),e=ut(t.h,n,a),o=!0,f="hsv"):l(t.h)&&l(t.s)&&l(t.l)&&(n=y(t.s),i=y(t.l),e=st(t.h,n,i),o=!0,f="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=$(r),{ok:o,format:t.format||f,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var gt="[-\\+]?\\d+%?",dt="[-\\+]?\\d*\\.\\d+%?",g="(?:".concat(dt,")|(?:").concat(gt,")"),A="[\\s|\\(]+(".concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")\\s*\\)?"),k="[\\s|\\(]+(".concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")[,|\\s]+(").concat(g,")\\s*\\)?"),c={CSS_UNIT:new RegExp(g),rgb:new RegExp("rgb"+A),rgba:new RegExp("rgba"+k),hsl:new RegExp("hsl"+A),hsla:new RegExp("hsla"+k),hsv:new RegExp("hsv"+A),hsva:new RegExp("hsva"+k),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function bt(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(C[t])t=C[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=c.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=c.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=c.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=c.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=c.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=c.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=c.hex8.exec(t),r?{r:h(r[1]),g:h(r[2]),b:h(r[3]),a:D(r[4]),format:e?"name":"hex8"}:(r=c.hex6.exec(t),r?{r:h(r[1]),g:h(r[2]),b:h(r[3]),format:e?"name":"hex"}:(r=c.hex4.exec(t),r?{r:h(r[1]+r[1]),g:h(r[2]+r[2]),b:h(r[3]+r[3]),a:D(r[4]+r[4]),format:e?"name":"hex8"}:(r=c.hex3.exec(t),r?{r:h(r[1]+r[1]),g:h(r[2]+r[2]),b:h(r[3]+r[3]),format:e?"name":"hex"}:!1)))))))))}function l(t){return Boolean(c.CSS_UNIT.exec(String(t)))}var Ft=function(){function t(e,r){e===void 0&&(e=""),r===void 0&&(r={});var n;if(e instanceof t)return e;typeof e=="number"&&(e=lt(e)),this.originalInput=e;var a=b(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=r.format)!==null&&n!==void 0?n:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),r,n,a,i=e.r/255,o=e.g/255,f=e.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),f<=.03928?a=f/12.92:a=Math.pow((f+.055)/1.055,2.4),.2126*r+.7152*n+.0722*a},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=$(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var e=T(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=T(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?"hsv(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=B(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=B(this.r,this.g,this.b),r=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?"hsl(".concat(r,", ").concat(n,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),j(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),ht(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(r,", ").concat(n,")"):"rgba(".concat(e,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(r){return"".concat(Math.round(u(r,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(r){return Math.round(u(r,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+j(this.r,this.g,this.b,!1),r=0,n=Object.entries(C);r<n.length;r++){var a=n[r],i=a[0],o=a[1];if(e===o)return i}return!1},t.prototype.toString=function(e){var r=Boolean(e);e=e??this.format;var n=!1,a=this.a<1&&this.a>=0,i=!r&&a&&(e.startsWith("hex")||e==="name");return i?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=v(r.l),new t(r)},t.prototype.brighten=function(e){e===void 0&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)},t.prototype.darken=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=v(r.l),new t(r)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=v(r.s),new t(r)},t.prototype.saturate=function(e){e===void 0&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=v(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,new t(r)},t.prototype.mix=function(e,r){r===void 0&&(r=50);var n=this.toRgb(),a=new t(e).toRgb(),i=r/100,o={r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a};return new t(o)},t.prototype.analogous=function(e,r){e===void 0&&(e=6),r===void 0&&(r=30);var n=this.toHsl(),a=360/r,i=[this];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(new t(n));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var r=this.toHsv(),n=r.h,a=r.s,i=r.v,o=[],f=1/e;e--;)o.push(new t({h:n,s:a,v:i})),i=(i+f)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),n=new t(e).toRgb();return new t({r:n.r+(r.r-n.r)*r.a,g:n.g+(r.g-n.g)*r.a,b:n.b+(r.b-n.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),n=r.h,a=[this],i=360/e,o=1;o<e;o++)a.push(new t({h:(n+o*i)%360,s:r.s,l:r.l}));return a},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),m=2,N=.16,pt=.05,vt=.05,yt=.15,z=5,K=4,mt=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function L(t){var e=t.r,r=t.g,n=t.b,a=T(e,r,n);return{h:a.h*360,s:a.s,v:a.v}}function x(t){var e=t.r,r=t.g,n=t.b;return"#".concat(j(e,r,n,!1))}function xt(t,e,r){var n=r/100,a={r:(e.r-t.r)*n+t.r,g:(e.g-t.g)*n+t.g,b:(e.b-t.b)*n+t.b};return a}function W(t,e,r){var n;return Math.round(t.h)>=60&&Math.round(t.h)<=240?n=r?Math.round(t.h)-m*e:Math.round(t.h)+m*e:n=r?Math.round(t.h)+m*e:Math.round(t.h)-m*e,n<0?n+=360:n>=360&&(n-=360),n}function G(t,e,r){if(t.h===0&&t.s===0)return t.s;var n;return r?n=t.s-N*e:e===K?n=t.s+N:n=t.s+pt*e,n>1&&(n=1),r&&e===z&&n>.1&&(n=.1),n<.06&&(n=.06),Number(n.toFixed(2))}function q(t,e,r){var n;return r?n=t.v+vt*e:n=t.v-yt*e,n>1&&(n=1),Number(n.toFixed(2))}function U(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[],n=b(t),a=z;a>0;a-=1){var i=L(n),o=x(b({h:W(i,a,!0),s:G(i,a,!0),v:q(i,a,!0)}));r.push(o)}r.push(x(n));for(var f=1;f<=K;f+=1){var s=L(n),S=x(b({h:W(s,f),s:G(s,f),v:q(s,f)}));r.push(S)}return e.theme==="dark"?mt.map(function(p){var w=p.index,Z=p.opacity,J=x(xt(b(e.backgroundColor||"#141414"),b(r[w]),Z*100));return J}):r}var O={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},H={},R={};Object.keys(O).forEach(function(t){H[t]=U(O[t]),H[t].primary=H[t][5],R[t]=U(O[t],{theme:"dark",backgroundColor:"#141414"}),R[t].primary=R[t][5]});var St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};const Tt=St;var wt={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const jt=wt;export{Tt as C,jt as L,Ft as T,I as _,At as a,kt as b,Ot as c,P as d,Ht as e,Mt as f,tt as g,Q as h,rt as i,V as j,Y as k,Rt as l,U as m};
