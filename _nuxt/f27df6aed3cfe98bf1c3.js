(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{538:function(t,e,n){"use strict";var j={props:{snippet:{required:!0,type:Object}}},r=n(29),component=Object(r.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap lg:flex-no-wrap justify-between items-center bg-white p-8 roundend-lg w-full mb-2"},[n("div",{staticClass:"mr-8 mb-2 lg:mb-0"},[n("h1",{staticClass:"text-gray-600 text-xl leading-snug"},[n("nuxt-link",{staticClass:"text-gray-600",attrs:{to:{name:"snippets-id",params:{id:t.snippet.uuid}}}},[t._v(t._s(t.snippet.title||"Untitled snippet"))])],1),t._v(" "),n("div",{staticClass:"text-gray-500 mr-6 font-medium"},[t._v(t._s(t.snippet.steps_count)+" steps")])]),t._v(" "),n("div",[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},679:function(t,e,n){var map={"./af":541,"./af.js":541,"./ar":542,"./ar-dz":543,"./ar-dz.js":543,"./ar-kw":544,"./ar-kw.js":544,"./ar-ly":545,"./ar-ly.js":545,"./ar-ma":546,"./ar-ma.js":546,"./ar-sa":547,"./ar-sa.js":547,"./ar-tn":548,"./ar-tn.js":548,"./ar.js":542,"./az":549,"./az.js":549,"./be":550,"./be.js":550,"./bg":551,"./bg.js":551,"./bm":552,"./bm.js":552,"./bn":553,"./bn.js":553,"./bo":554,"./bo.js":554,"./br":555,"./br.js":555,"./bs":556,"./bs.js":556,"./ca":557,"./ca.js":557,"./cs":558,"./cs.js":558,"./cv":559,"./cv.js":559,"./cy":560,"./cy.js":560,"./da":561,"./da.js":561,"./de":562,"./de-at":563,"./de-at.js":563,"./de-ch":564,"./de-ch.js":564,"./de.js":562,"./dv":565,"./dv.js":565,"./el":566,"./el.js":566,"./en-SG":567,"./en-SG.js":567,"./en-au":568,"./en-au.js":568,"./en-ca":569,"./en-ca.js":569,"./en-gb":570,"./en-gb.js":570,"./en-ie":571,"./en-ie.js":571,"./en-il":572,"./en-il.js":572,"./en-nz":573,"./en-nz.js":573,"./eo":574,"./eo.js":574,"./es":575,"./es-do":576,"./es-do.js":576,"./es-us":577,"./es-us.js":577,"./es.js":575,"./et":578,"./et.js":578,"./eu":579,"./eu.js":579,"./fa":580,"./fa.js":580,"./fi":581,"./fi.js":581,"./fo":582,"./fo.js":582,"./fr":583,"./fr-ca":584,"./fr-ca.js":584,"./fr-ch":585,"./fr-ch.js":585,"./fr.js":583,"./fy":586,"./fy.js":586,"./ga":587,"./ga.js":587,"./gd":588,"./gd.js":588,"./gl":589,"./gl.js":589,"./gom-latn":590,"./gom-latn.js":590,"./gu":591,"./gu.js":591,"./he":592,"./he.js":592,"./hi":593,"./hi.js":593,"./hr":594,"./hr.js":594,"./hu":595,"./hu.js":595,"./hy-am":596,"./hy-am.js":596,"./id":597,"./id.js":597,"./is":598,"./is.js":598,"./it":599,"./it-ch":600,"./it-ch.js":600,"./it.js":599,"./ja":601,"./ja.js":601,"./jv":602,"./jv.js":602,"./ka":603,"./ka.js":603,"./kk":604,"./kk.js":604,"./km":605,"./km.js":605,"./kn":606,"./kn.js":606,"./ko":607,"./ko.js":607,"./ku":608,"./ku.js":608,"./ky":609,"./ky.js":609,"./lb":610,"./lb.js":610,"./lo":611,"./lo.js":611,"./lt":612,"./lt.js":612,"./lv":613,"./lv.js":613,"./me":614,"./me.js":614,"./mi":615,"./mi.js":615,"./mk":616,"./mk.js":616,"./ml":617,"./ml.js":617,"./mn":618,"./mn.js":618,"./mr":619,"./mr.js":619,"./ms":620,"./ms-my":621,"./ms-my.js":621,"./ms.js":620,"./mt":622,"./mt.js":622,"./my":623,"./my.js":623,"./nb":624,"./nb.js":624,"./ne":625,"./ne.js":625,"./nl":626,"./nl-be":627,"./nl-be.js":627,"./nl.js":626,"./nn":628,"./nn.js":628,"./pa-in":629,"./pa-in.js":629,"./pl":630,"./pl.js":630,"./pt":631,"./pt-br":632,"./pt-br.js":632,"./pt.js":631,"./ro":633,"./ro.js":633,"./ru":634,"./ru.js":634,"./sd":635,"./sd.js":635,"./se":636,"./se.js":636,"./si":637,"./si.js":637,"./sk":638,"./sk.js":638,"./sl":639,"./sl.js":639,"./sq":640,"./sq.js":640,"./sr":641,"./sr-cyrl":642,"./sr-cyrl.js":642,"./sr.js":641,"./ss":643,"./ss.js":643,"./sv":644,"./sv.js":644,"./sw":645,"./sw.js":645,"./ta":646,"./ta.js":646,"./te":647,"./te.js":647,"./tet":648,"./tet.js":648,"./tg":649,"./tg.js":649,"./th":650,"./th.js":650,"./tl-ph":651,"./tl-ph.js":651,"./tlh":652,"./tlh.js":652,"./tr":653,"./tr.js":653,"./tzl":654,"./tzl.js":654,"./tzm":655,"./tzm-latn":656,"./tzm-latn.js":656,"./tzm.js":655,"./ug-cn":657,"./ug-cn.js":657,"./uk":658,"./uk.js":658,"./ur":659,"./ur.js":659,"./uz":660,"./uz-latn":661,"./uz-latn.js":661,"./uz.js":660,"./vi":662,"./vi.js":662,"./x-pseudo":663,"./x-pseudo.js":663,"./yo":664,"./yo.js":664,"./zh-cn":665,"./zh-cn.js":665,"./zh-hk":666,"./zh-hk.js":666,"./zh-tw":667,"./zh-tw.js":667};function j(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}j.keys=function(){return Object.keys(map)},j.resolve=r,t.exports=j,j.id=679},941:function(t,e,n){"use strict";n.r(e);n(38);var j,r=n(7),l=(n(15),n(536)),c=n.n(l),o={components:{SnippetCard:n(538).a},head:function(){return{title:"Snippets by ".concat(this.user.name)}},data:function(){return{user:null,snippets:[]}},computed:{joined:function(){return c()(this.user.joined).format("Do MMMM YYYY")}},asyncData:(j=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,j,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,j=e.params,t.next=3,n.$axios.$get("users/".concat(j.id));case 3:return r=t.sent,t.next=6,n.$axios.$get("users/".concat(j.id,"/snippets"));case 6:return l=t.sent,t.abrupt("return",{user:r.data,snippets:l.data});case 8:case"end":return t.stop()}}),t)}))),function(t){return j.apply(this,arguments)})},m=n(29),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white mb-16"},[n("div",{staticClass:"container py-10 pb-16"},[n("h1",{staticClass:"text-4xl text-gray-700 font-medium mb-4"},[t._v(t._s(t.user.name))]),t._v(" "),n("div",{staticClass:"text-gray-600"},[t._v("Member since "+t._s(t.joined))])])]),t._v(" "),n("div",{staticClass:"container"},[n("h1",{staticClass:"text-xl text-gray-600 font-medium mb-6"},[t._v("Public snippets ("+t._s(t.snippets.length)+")")]),t._v(" "),t._l(t.snippets,(function(t){return n("SnippetCard",{key:t.uuid,attrs:{snippet:t}})}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);