(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("34a39462",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n(345)},353:function(t,e,n){var r=n(134)(!1);r.push([t.i,"main#home-page{grid-gap:2rem;gap:2rem;display:flex;align-items:center;flex-direction:column;justify-content:center}main#home-page div.status{height:2rem;padding-left:.5rem;padding-right:.5rem;grid-gap:1rem;gap:1rem;display:flex;align-items:center;flex-direction:row;justify-content:unset}main#home-page div.status svg{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}main#home-page div.status p{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}main#home-page div.links{grid-gap:1.5rem;gap:1.5rem;display:flex;align-items:unset;flex-direction:row;justify-content:unset}main#home-page div.links a{transition:transform .25s}main#home-page div.links a:hover{transform:scale(125%)}",""]),t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(52),n(54),n(25),n(1).a.extend({data:function(){return{newData:!1,lanyard:{},socket:null}},computed:{getStatus:function(){var t=this.lanyard;if(!t)return"Couldn't fetch data from Lanyard";if(t.spotify){var e=t.spotify||{},n=e.song,r=e.artist;return"".concat(r," - ").concat(n)}return"i'm not listening to anything right now"},statusLoaded:function(){return 0!==Object.keys(this.lanyard).length}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$lanyard({userId:"349536885749579777",socket:!0});case 2:t.socket=e.sent,t.socket.addEventListener("message",(function(e){var data=e.data,n=JSON.parse(data),r=n.t,o=n.d;"INIT_STATE"!==r&&"PRESENCE_UPDATE"!==r||(t.lanyard=o||{}),t.newData=!t.newData}));case 4:case"end":return e.stop()}}),e)})))()}})),c=(n(352),n(44)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{attrs:{id:"home-page"}},[e("h1",[t._v("omercup")]),t._v(" "),e("div",{staticClass:"status"},[e("Icon",{directives:[{name:"show",rawName:"v-show",value:t.statusLoaded&&t.lanyard.spotify,expression:"statusLoaded && lanyard.spotify"}],attrs:{icon:"si-glyph:disc",width:"1.5rem"}}),t._v(" "),e("p",[t._v(t._s(t.statusLoaded?t.getStatus:"Loading..."))])],1),t._v(" "),e("div",{staticClass:"links"},[e("a",{attrs:{href:"https://discord.com/users/349536885749579777",target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{attrs:{icon:"simple-icons:discord",width:"2rem"}})],1),t._v(" "),e("a",{attrs:{href:"https://github.com/omercup",target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{attrs:{icon:"simple-icons:github",width:"2rem"}})],1),t._v(" "),e("a",{attrs:{href:"https://www.last.fm/user/omercup",target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{attrs:{icon:"simple-icons:lastdotfm",width:"2rem"}})],1),t._v(" "),e("a",{attrs:{href:"https://steamcommunity.com/id/omercup",target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{attrs:{icon:"simple-icons:steam",width:"2rem"}})],1),t._v(" "),e("a",{attrs:{href:"https://twitter.com/heisomercup",target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{attrs:{icon:"simple-icons:twitter",width:"2rem"}})],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"decoration"},[e("div"),t._v(" "),e("div")])}],!1,null,null,null);e.default=component.exports}}]);