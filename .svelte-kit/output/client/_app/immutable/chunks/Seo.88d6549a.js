import{S as p,i as _,s as T,k as d,K as E,l as h,h as u,n,E as f,G as g}from"./index.4e18c1e1.js";function y(l){let o,a,i,c,r,e,s;return document.title=o=l[0],{c(){a=d("meta"),i=d("meta"),r=d("meta"),e=d("meta"),s=d("meta"),this.h()},l(m){const t=E("svelte-15zfawt",document.head);a=h(t,"META",{name:!0,content:!0}),i=h(t,"META",{property:!0,content:!0}),r=h(t,"META",{property:!0,content:!0}),e=h(t,"META",{property:!0}),s=h(t,"META",{name:!0,content:!0}),t.forEach(u),this.h()},h(){n(a,"name","description"),n(a,"content",l[2]),n(i,"property","og:title"),n(i,"content",c=l[1]??l[0]),n(r,"property","og:description"),n(r,"content",l[2]),n(e,"property","og:image"),n(s,"name","twitter:card"),n(s,"content","summary_large_image")},m(m,t){f(document.head,a),f(document.head,i),f(document.head,r),f(document.head,e),f(document.head,s)},p(m,[t]){t&1&&o!==(o=m[0])&&(document.title=o),t&4&&n(a,"content",m[2]),t&3&&c!==(c=m[1]??m[0])&&n(i,"content",c),t&4&&n(r,"content",m[2])},i:g,o:g,d(m){u(a),u(i),u(r),u(e),u(s)}}}function A(l,o,a){let{title:i}=o,{ogTitle:c=null}=o,{description:r}=o;return l.$$set=e=>{"title"in e&&a(0,i=e.title),"ogTitle"in e&&a(1,c=e.ogTitle),"description"in e&&a(2,r=e.description)},[i,c,r]}class S extends p{constructor(o){super(),_(this,o,A,y,T,{title:0,ogTitle:1,description:2})}}export{S};