import{r as u,u as f,o as l,c as m,a as r,b as p,d as n,e as h,t as g,f as c,g as y}from"./vendor.3e95b7a3.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};_();var x="./assets/disc.2bc47748.svg?component",v="./assets/github.cf420134.svg?component",b="./assets/discord.0d6e8108.svg?component",w="./assets/twitter.5fd254b3.svg?component";const k={class:"h-screen flex items-center justify-center bg-bg"},L={class:"p-8 md:p-16 w-5/6 md:w-auto bg-card rounded-4xl flex flex-col text-center gap-8"},N=r("h1",{class:"font-secondary text-secondary text-6xl md:text-7xl font-bold"},"omercup",-1),j={class:"font-primary text-primary text-xl md:text-2xl flex items-start gap-4 md:w-lg justify-center"},B={class:"flex gap-8 justify-center"},O={href:"https://discord.com/users/349536885749579777",target:"_blank",rel:"noreferrer noopener"},D={href:"https://github.com/omercup",target:"_blank",rel:"noreferrer noopener"},I={href:"https://twitter.com/heisomercup",target:"_blank",rel:"noreferrer noopener"},P={setup(d){const o=u(null);return f({socket:!0,userId:"349536885749579777",onPresenceUpdate(s){s.listening_to_spotify?o.value=`${s.spotify.artist} - ${s.spotify.song}`:o.value=null}}),(s,a)=>(l(),m("section",k,[r("figure",L,[N,r("p",j,[o.value?(l(),p(n(x),{key:0,class:"text-icon animate-spin animate-duration-1600 flex-shrink-0 w-7 hidden md:block"})):h("",!0),r("span",null,g(o.value?o.value:"I'm not listening to anything right now"),1)]),r("div",B,[r("a",O,[c(n(b),{class:"transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:scale-125 hover:text-secondary"})]),r("a",D,[c(n(v),{class:"transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:scale-125 hover:text-secondary"})]),r("a",I,[c(n(w),{class:"transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:scale-125 hover:text-secondary"})])])])]))}};y(P).mount("#app");
