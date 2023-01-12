var O=Object.defineProperty,P=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(s,a,t)=>a in s?O(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,C=(s,a)=>{for(var t in a||(a={}))D.call(a,t)&&g(s,t,a[t]);if(x)for(var t of x(a))I.call(a,t)&&g(s,t,a[t]);return s},N=(s,a)=>P(s,w(a));import{j as p,r as l,a as y,R as L,b as $}from"./vendor.76c012d4.js";const B=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};B();const e=p.exports.jsx,r=p.exports.jsxs,_=p.exports.Fragment,b=l.exports.createContext(),U=({children:s})=>{const[a,t]=l.exports.useState({ciudad:"",pais:""}),[i,n]=l.exports.useState({}),[o,c]=l.exports.useState(!1),[h,d]=l.exports.useState(!1),E=u=>{t(N(C({},a),{[u.target.name]:u.target.value}))},S=async u=>{c(!0),d(!1);try{const{ciudad:f,pais:R}=u,v="6c858f4cfdca02a306eae958512d70a0",k=`https://api.openweathermap.org/geo/1.0/direct?q=${f},${R}&limit=1&appid=${v}`,{data:q}=await y(k),{lat:F,lon:j}=q[0],A=`https://api.openweathermap.org/data/2.5/weather?lat=${F}&lon=${j}&appid=${v}`,{data:M}=await y(A);n(M)}catch{d("No hay resultados")}finally{c(!1)}};return e(b.Provider,{value:{busqueda:a,datosBusqueda:E,consultarClima:S,resultado:i,cargando:o,noResultado:h},children:s})},m=()=>l.exports.useContext(b),K=()=>{const[s,a]=l.exports.useState(""),{busqueda:t,datosBusqueda:i,consultarClima:n}=m(),{ciudad:o,pais:c}=t;return r("div",{className:"contenedor",children:[s&&e("p",{children:s}),r("form",{onSubmit:d=>{if(d.preventDefault(),Object.values(t).includes("")){a("Todos los campos son obligatorios");return}a(""),n(t)},children:[r("div",{className:"campo",children:[e("label",{htmlFor:"ciudad",children:"Ciudad"}),e("input",{type:"text",id:"ciudad",name:"ciudad",onChange:i,value:o})]}),r("div",{className:"campo",children:[e("label",{htmlFor:"pais",children:"Pa\xEDs"}),r("select",{id:"pais",name:"pais",onChange:i,value:c,children:[e("option",{value:"",children:" Seleccione un pa\xEDs"}),e("option",{value:"US",children:"Estados Unidos"}),e("option",{value:"MX",children:"M\xE9xico"}),e("option",{value:"AR",children:"Argentina"}),e("option",{value:"CO",children:"Colombia"}),e("option",{value:"CR",children:"Costa Rica"}),e("option",{value:"ES",children:"Espa\xF1a"}),e("option",{value:"PE",children:"Per\xFA"})]})]}),e("input",{type:"submit",value:"Consultar Clima"})]})]})},T=()=>{const{resultado:s}=m(),{name:a,main:t}=s,i=273.15;return r("div",{className:"contenedor clima",children:[r("h2",{children:["El Clima de ",a," es: "]}),r("p",{children:[parseInt(t.temp-i)," ",e("span",{children:"\u2103"})]}),r("div",{className:"temp_min_max",children:[r("p",{children:["M\xEDn: ",parseInt(t.temp_min-i)," ",e("span",{children:"\u2103"})]}),r("p",{children:["M\xE1x: ",parseInt(t.temp_max-i)," ",e("span",{children:"\u2103"})]})]})]})},X=()=>e("div",{className:"loading",children:r("div",{className:"sk-chase",children:[e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"})]})}),z=()=>{const{resultado:s,cargando:a,noResultado:t}=m();return e(_,{children:r("main",{className:"dos-columnas",children:[e(K,{}),a?e(X,{}):s!=null&&s.name?e(T,{}):t?e("p",{children:t}):e("p",{children:"El clima se va a mostrar aqu\xED"})]})})};function G(){return r(U,{children:[e("header",{children:e("h1",{children:"Buscador de Clima"})}),e(z,{})]})}L.render(e($.StrictMode,{children:e(G,{})}),document.getElementById("root"));
