import{S as s,i as a,s as e,e as n,t as o,c as t,a as r,g as i,d as c,f as d,D as u,h as p,E as f}from"../../chunks/vendor-d76605a0.js";function l(s){let a,e;return{c(){a=n("div"),e=o(s[0])},l(n){a=t(n,"DIV",{});var o=r(a);e=i(o,s[0]),o.forEach(c)},m(s,n){d(s,a,n),u(a,e)},p(s,[a]){1&a&&p(e,s[0])},i:f,o:f,d(s){s&&c(a)}}}async function I({page:s,fetch:a}){return console.log(s),{props:{sessionId:s.params.sessionid}}}function h(s,a,e){let{sessionId:n}=a;return s.$$set=s=>{"sessionId"in s&&e(0,n=s.sessionId)},[n]}export default class extends s{constructor(s){super(),a(this,s,h,l,e,{sessionId:0})}}export{I as load};
