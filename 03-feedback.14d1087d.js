!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),s?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function T(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form");console.log(O);var S="feedback-form-state",h=JSON.parse(localStorage.getItem(S))||{};O.addEventListener("input",e(t)((function(e){e.preventDefault(),h[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),e.target.reset(),localStorage.removeItem(S),h={}})),function(){var e=JSON.parse(localStorage.getItem(S));if(e){var t=O.elements,n=t.email,r=t.message;n.value=e.email||" ",r.value=e.message||" "}}()}();
//# sourceMappingURL=03-feedback.14d1087d.js.map