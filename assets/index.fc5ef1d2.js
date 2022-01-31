import{d as p,r as u,u as m,c as h,a as s,b as g,e as a,f as _,t as y,g as c,I as i,o as d,h as v}from"./vendor.9a24fa93.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};w();const k={class:"bg-black flex h-screen text-white items-center justify-center select-none"},x={class:"flex flex-col text-center w-11/12 gap-6 md:w-auto md:gap-8"},b=s("h1",{class:"font-primary font-bold text-5xl md:text-6xl"},"omercup",-1),L={class:"flex font-secondary text-lg gap-4 items-start justify-center md:text-xl md:w-lg"},I=["href","title"],N={class:"flex gap-6 justify-center"},j={href:"https://discord.com/users/349536885749579777",target:"_blank",rel:"noreferrer noopener"},V={href:"https://github.com/omercup",target:"_blank",rel:"noreferrer noopener"},B={href:"https://steamcommunity.com/id/omercup/",target:"_blank",rel:"noreferrer noopener"},E={href:"https://twitter.com/heisomercup",target:"_blank",rel:"noreferrer noopener"},O=p({setup(f){const r=u(!1),n=u(""),o=u("");return m({socket:!0,userId:"349536885749579777",onPresenceUpdate(e){e.listening_to_spotify?(r.value=!0,n.value=`https://open.spotify.com/track/${e.spotify.track_id}`,o.value=`${e.spotify.artist} - ${e.spotify.song}`):(r.value=!1,n.value="https://open.spotify.com/track/57g9uWuZI1t822eLvEVQjn?si=0",o.value="I'm not listening to anything right now")}}),(e,t)=>(d(),h("section",k,[s("figure",x,[b,s("p",L,[r.value?(d(),g(a(i),{key:0,class:"flex-shrink-0 animate-spin w-6 animate-duration-1600",icon:"si-glyph:disc",width:"28"})):_("",!0),s("a",{class:"truncate decoration-1 hover:underline",target:"_blank",rel:"noreferrer noopener",href:n.value?n.value:"https://open.spotify.com/track/57g9uWuZI1t822eLvEVQjn?si=0",title:o.value?o.value:"Loading..."},y(o.value?o.value:"Loading..."),9,I)]),s("div",N,[s("a",j,[c(a(i),{class:"transform transition ease-out w-7 duration-250 md:w-10 hover:scale-125",icon:"simple-icons:discord",width:"35"})]),s("a",V,[c(a(i),{class:"transform transition ease-out w-7 duration-250 md:w-10 hover:scale-125",icon:"simple-icons:github",width:"35"})]),s("a",B,[c(a(i),{class:"transform transition ease-out w-7 duration-250 md:w-10 hover:scale-125",icon:"simple-icons:steam",width:"35"})]),s("a",E,[c(a(i),{class:"transform transition ease-out w-7 duration-250 md:w-10 hover:scale-125",icon:"simple-icons:twitter",width:"35"})])])])]))}});v(O).mount("#app");