import{S as s,i as a,s as e,e as t,t as r,k as l,c as n,a as c,g as o,d as h,n as d,b as i,f as u,D as f,h as m,E as $,F as p,G as v,j as g,m as _,o as M,H as w,x,u as y,v as C}from"../chunks/vendor-7d90268f.js";function j(s){let a,e,p,v,g,_,M,w,x;return{c(){a=t("div"),e=t("p"),p=r("CollabCodes"),v=l(),g=t("p"),_=r("CC"),M=l(),w=t("p"),x=r(s[0]),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);e=n(r,"P",{class:!0});var l=c(e);p=o(l,"CollabCodes"),l.forEach(h),v=d(r),g=n(r,"P",{class:!0});var i=c(g);_=o(i,"CC"),i.forEach(h),M=d(r),w=n(r,"P",{class:!0});var u=c(w);x=o(u,s[0]),u.forEach(h),r.forEach(h),this.h()},h(){i(e,"class","header__text header__text--wide svelte-1g88wjz"),i(g,"class","header__text header__text--small svelte-1g88wjz"),i(w,"class","header__timer svelte-1g88wjz"),i(a,"class","header p-3 svelte-1g88wjz")},m(s,t){u(s,a,t),f(a,e),f(e,p),f(a,v),f(a,g),f(g,_),f(a,M),f(a,w),f(w,x)},p(s,[a]){1&a&&m(x,s[0])},i:$,o:$,d(s){s&&h(a)}}}function E(s,a,e){let t=p(new Date,"HH:mm:ss - dd. MMMM yyyy");return setInterval((()=>{e(0,t=p(new Date,"HH:mm:ss - dd. MMMM yyyy"))}),1e3),[t]}class H extends s{constructor(s){super(),a(this,s,E,j,e,{})}}function z(s){let a,e,r,o;a=new H({});const f=s[1].default,m=v(f,s,s[0],null);return{c(){g(a.$$.fragment),e=l(),r=t("main"),m&&m.c(),this.h()},l(s){_(a.$$.fragment,s),e=d(s),r=n(s,"MAIN",{class:!0});var t=c(r);m&&m.l(t),t.forEach(h),this.h()},h(){i(r,"class","header-margin")},m(s,t){M(a,s,t),u(s,e,t),u(s,r,t),m&&m.m(r,null),o=!0},p(s,[a]){m&&m.p&&(!o||1&a)&&w(m,f,s,s[0],o?a:-1,null,null)},i(s){o||(x(a.$$.fragment,s),x(m,s),o=!0)},o(s){y(a.$$.fragment,s),y(m,s),o=!1},d(s){C(a,s),s&&h(e),s&&h(r),m&&m.d(s)}}}function D(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}export default class extends s{constructor(s){super(),a(this,s,D,z,e,{})}}
