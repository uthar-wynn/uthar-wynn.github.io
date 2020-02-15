(window.webpackJsonp=window.webpackJsonp||[]).push([[23,18,19,20,21,22],{539:function(t,e,r){var content=r(678);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(139).default)("03db8479",content,!0,{sourceMap:!1})},540:function(t,e,r){"use strict";var n=r(670),o=r.n(n),l=r(671)({highlight:function(t,e){var r=l.utils.escapeHtml;return e&&o.a.getLanguage(e)?'<pre class="hljs language-'+r(e.toLowerCase())+'"><code>'+o.a.highlightAuto(r(t)).value+"</code></pre>":'<pre class="hljs"><code>'+r(t)+"</code></pre>"}}),c={props:{value:{required:!0,type:String}},computed:{markdown:function(){return l.render(this.value)}}},d=r(29),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.markdown)}})}),[],!1,null,null,null);e.a=component.exports},668:function(t,e,r){"use strict";r.r(e);var n={props:{step:{required:!0}}},o=r(29),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-link",{staticClass:"block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0",class:{"opacity-25 pointer-events-none":!this.step},attrs:{to:this.step?{query:{step:this.step.uuid}}:{}}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},669:function(t,e,r){"use strict";r.r(e);var n={props:{steps:{required:!0,type:Array},currentStep:{required:!0,type:Object}}},o=r(29),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.steps,(function(e,n){return r("li",{key:n,staticClass:"mb-1"},[r("nuxt-link",{class:{"font-bold":t.currentStep.uuid===e.uuid},attrs:{to:{query:{step:e.uuid}}}},[t._v(t._s(n+1)+". "+t._s(e.title||"Untitled step"))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},675:function(t,e,r){"use strict";r(185);var n=r(676),o=r(688);e.a={computed:{orderedStepsAsc:function(){return Object(n.orderBy)(this.steps,"order","asc")},orderedStepsDesc:function(){return Object(n.orderBy)(this.steps,"order","desc")},firstStep:function(){return this.orderedStepsAsc[0]},nextStep:function(){var t=this;return this.orderedStepsAsc.find((function(s){return s.order>t.currentStep.order}))||null},previousStep:function(){var t=this;return this.orderedStepsDesc.find((function(s){return s.order<t.currentStep.order}))||null},currentStep:function(){var t=this;return this.orderedStepsAsc.find((function(s){return s.uuid===t.$route.query.step}))||this.firstStep},currentStepIndex:function(){return this.orderedStepsAsc.map((function(s){return s.uuid})).indexOf(this.currentStep.uuid)}},mounted:function(){this.registerKeyboardShortcuts()},methods:{goToStep:function(t){this.$router.push({query:{step:t.uuid}})},registerKeyboardShortcuts:function(){var t=this;Object(o.a)("ctrl+shift+left,ctrl+shift+right",(function(e,r){switch(r.key){case"ctrl+shift+left":t.previousStep&&t.goToStep(t.previousStep);break;case"ctrl+shift+right":t.nextStep&&t.goToStep(t.nextStep)}}))}}}},677:function(t,e,r){"use strict";var n=r(539);r.n(n).a},678:function(t,e,r){(e=r(138)(!1)).push([t.i,".CodeMirror{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;width:100%;max-width:100%;border:2px dashed #cbd5e0;border-radius:.5rem;margin-bottom:1.5rem}",""]),t.exports=e},679:function(t,e,r){var map={"./af":541,"./af.js":541,"./ar":542,"./ar-dz":543,"./ar-dz.js":543,"./ar-kw":544,"./ar-kw.js":544,"./ar-ly":545,"./ar-ly.js":545,"./ar-ma":546,"./ar-ma.js":546,"./ar-sa":547,"./ar-sa.js":547,"./ar-tn":548,"./ar-tn.js":548,"./ar.js":542,"./az":549,"./az.js":549,"./be":550,"./be.js":550,"./bg":551,"./bg.js":551,"./bm":552,"./bm.js":552,"./bn":553,"./bn.js":553,"./bo":554,"./bo.js":554,"./br":555,"./br.js":555,"./bs":556,"./bs.js":556,"./ca":557,"./ca.js":557,"./cs":558,"./cs.js":558,"./cv":559,"./cv.js":559,"./cy":560,"./cy.js":560,"./da":561,"./da.js":561,"./de":562,"./de-at":563,"./de-at.js":563,"./de-ch":564,"./de-ch.js":564,"./de.js":562,"./dv":565,"./dv.js":565,"./el":566,"./el.js":566,"./en-SG":567,"./en-SG.js":567,"./en-au":568,"./en-au.js":568,"./en-ca":569,"./en-ca.js":569,"./en-gb":570,"./en-gb.js":570,"./en-ie":571,"./en-ie.js":571,"./en-il":572,"./en-il.js":572,"./en-nz":573,"./en-nz.js":573,"./eo":574,"./eo.js":574,"./es":575,"./es-do":576,"./es-do.js":576,"./es-us":577,"./es-us.js":577,"./es.js":575,"./et":578,"./et.js":578,"./eu":579,"./eu.js":579,"./fa":580,"./fa.js":580,"./fi":581,"./fi.js":581,"./fo":582,"./fo.js":582,"./fr":583,"./fr-ca":584,"./fr-ca.js":584,"./fr-ch":585,"./fr-ch.js":585,"./fr.js":583,"./fy":586,"./fy.js":586,"./ga":587,"./ga.js":587,"./gd":588,"./gd.js":588,"./gl":589,"./gl.js":589,"./gom-latn":590,"./gom-latn.js":590,"./gu":591,"./gu.js":591,"./he":592,"./he.js":592,"./hi":593,"./hi.js":593,"./hr":594,"./hr.js":594,"./hu":595,"./hu.js":595,"./hy-am":596,"./hy-am.js":596,"./id":597,"./id.js":597,"./is":598,"./is.js":598,"./it":599,"./it-ch":600,"./it-ch.js":600,"./it.js":599,"./ja":601,"./ja.js":601,"./jv":602,"./jv.js":602,"./ka":603,"./ka.js":603,"./kk":604,"./kk.js":604,"./km":605,"./km.js":605,"./kn":606,"./kn.js":606,"./ko":607,"./ko.js":607,"./ku":608,"./ku.js":608,"./ky":609,"./ky.js":609,"./lb":610,"./lb.js":610,"./lo":611,"./lo.js":611,"./lt":612,"./lt.js":612,"./lv":613,"./lv.js":613,"./me":614,"./me.js":614,"./mi":615,"./mi.js":615,"./mk":616,"./mk.js":616,"./ml":617,"./ml.js":617,"./mn":618,"./mn.js":618,"./mr":619,"./mr.js":619,"./ms":620,"./ms-my":621,"./ms-my.js":621,"./ms.js":620,"./mt":622,"./mt.js":622,"./my":623,"./my.js":623,"./nb":624,"./nb.js":624,"./ne":625,"./ne.js":625,"./nl":626,"./nl-be":627,"./nl-be.js":627,"./nl.js":626,"./nn":628,"./nn.js":628,"./pa-in":629,"./pa-in.js":629,"./pl":630,"./pl.js":630,"./pt":631,"./pt-br":632,"./pt-br.js":632,"./pt.js":631,"./ro":633,"./ro.js":633,"./ru":634,"./ru.js":634,"./sd":635,"./sd.js":635,"./se":636,"./se.js":636,"./si":637,"./si.js":637,"./sk":638,"./sk.js":638,"./sl":639,"./sl.js":639,"./sq":640,"./sq.js":640,"./sr":641,"./sr-cyrl":642,"./sr-cyrl.js":642,"./sr.js":641,"./ss":643,"./ss.js":643,"./sv":644,"./sv.js":644,"./sw":645,"./sw.js":645,"./ta":646,"./ta.js":646,"./te":647,"./te.js":647,"./tet":648,"./tet.js":648,"./tg":649,"./tg.js":649,"./th":650,"./th.js":650,"./tl-ph":651,"./tl-ph.js":651,"./tlh":652,"./tlh.js":652,"./tr":653,"./tr.js":653,"./tzl":654,"./tzl.js":654,"./tzm":655,"./tzm-latn":656,"./tzm-latn.js":656,"./tzm.js":655,"./ug-cn":657,"./ug-cn.js":657,"./uk":658,"./uk.js":658,"./ur":659,"./ur.js":659,"./uz":660,"./uz-latn":661,"./uz-latn.js":661,"./uz.js":660,"./vi":662,"./vi.js":662,"./x-pseudo":663,"./x-pseudo.js":663,"./yo":664,"./yo.js":664,"./zh-cn":665,"./zh-cn.js":665,"./zh-hk":666,"./zh-hk.js":666,"./zh-tw":667,"./zh-tw.js":667};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=679},690:function(t,e,r){"use strict";r.r(e);r(38);var n,o=r(7),l={props:{snippet:{required:!0,type:Object},step:{required:!0,type:Object}},methods:{deleteStep:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$delete("snippets/".concat(this.snippet.uuid,"/steps/").concat(this.step.uuid));case 2:this.$emit("deleted",this.step);case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},c=r(29),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0",attrs:{href:"#",title:"Delete step"},on:{click:function(e){return e.preventDefault(),t.deleteStep(e)}}},[r("svg",{staticClass:"fill-current text-white h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"}})])])}),[],!1,null,null,null);e.default=component.exports},691:function(t,e,r){"use strict";r.r(e);var n,o=r(113),l=(r(38),r(7)),c={props:{position:{required:!0,type:String},snippet:{required:!0,type:Object},currentStep:{required:!0,type:Object}},methods:{addStep:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("snippets/".concat(this.snippet.uuid,"/steps"),Object(o.a)({},this.position,this.currentStep.uuid));case 2:e=t.sent,this.$emit("added",e.data);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},d=r(29),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addStep(e)}}},[r("svg",{staticClass:"fill-current text-white h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",title:"Add step "+t.position}},[r("path",{attrs:{d:"M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"}})])])}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,r){"use strict";r.r(e);var n={components:{StepMarkdown:r(540).a},data:function(){return{codemirror:null}},props:{step:{required:!0,type:Object}},computed:{document:function(){return this.codemirror.getDoc()}},watch:{"step.uuid":function(){this.document.setValue(this.step.body)}},mounted:function(){var t=this,e=r(689);this.codemirror=e.fromTextArea(this.$refs.textarea,{indentUnit:2,indentWithTabs:!1,smartIndent:!0,lineWrapping:!0,lineNumbers:!1,scrollbarStyle:null,extraKeys:{Tab:function(t){return t.execCommand("intentMore")},"Shift-Tab":function(t){return t.execCommand("intentLess")}}}),this.document.setValue(this.step.body),this.document.on("change",(function(e){t.$emit("input",e.getValue())}))}},o=(r(677),r(29)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("textarea",{ref:"textarea"}),this._v(" "),e("div",{staticClass:"bg-white p-8 rounded-lg text-gray-600"},[e("StepMarkdown",{attrs:{value:this.step.body}})],1)])}),[],!1,null,null,null);e.default=component.exports},939:function(t,e,r){"use strict";r.r(e);r(38);var n,o=r(7),l=r(669),c=r(668),d=r(691),h=r(690),f=r(692),m=r(675),v=r(676),j=r(536),x=r.n(j),y={components:{StepList:l.default,StepNavigationButton:c.default,AddStepButton:d.default,DeleteStepButton:h.default,StepEditor:f.default},data:function(){return{snippet:null,steps:[],lastSaved:null}},middleware:["auth"],mixins:[m.a],head:function(){return{title:"Editing ".concat(this.snippet.title||"Untitled snippet")}},watch:{"snippet.title":{handler:Object(v.debounce)(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(title){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$patch("snippets/".concat(this.snippet.uuid),{title:title});case 2:this.touchLastSaved();case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),500)},"snippet.is_public":{handler:Object(v.debounce)(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$patch("snippets/".concat(this.snippet.uuid),{is_public:e});case 2:this.touchLastSaved();case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),500)},currentStep:{deep:!0,handler:Object(v.debounce)(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$patch("snippets/".concat(this.snippet.uuid,"/steps/").concat(e.uuid),{title:e.title,body:e.body});case 2:this.touchLastSaved();case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),500)}},computed:{lastSavedFormatted:function(){return x()(this.lastSaved).format("HH:mm:ss")}},methods:{touchLastSaved:function(){this.lastSaved=x.a.now()},handleStepAdded:function(t){this.steps.push(t),this.goToStep(t)},handleStepDeleted:function(t){var e=this.previousStep;this.steps.filter((function(s){return s.uuid!==t.uuid})),this.goToStep(e||this.firstStep)}},asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.params,t.next=3,r.$axios.$get("snippets/".concat(n.id));case 3:return o=t.sent,t.abrupt("return",{snippet:o.data,steps:o.data.steps.data});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},S=r(29),component=Object(S.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bg-white mb-16"},[r("div",{staticClass:"container py-10 pb-16"},[r("div",{staticClass:"w-10/12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.snippet.title,expression:"snippet.title"}],staticClass:"text-4xl text-gray-700 font-medium font-header leading-tight mb-4 w-full block p-2 border-2 rounded border-dashed border-gray-400",attrs:{type:"text",placeholder:"Untitled snippet"},domProps:{value:t.snippet.title},on:{input:function(e){e.target.composing||t.$set(t.snippet,"title",e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-gray-600"},[t._v("\n          Created by\n          "),r("nuxt-link",{attrs:{to:{name:"author-id",params:{id:t.snippet.author.data.username}}}},[t._v("Siegfried Gijsen")])],1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"flex items-center mb-6"},[r("div",{staticClass:"text-xl text-gray-600 font-medium font-header mr-3"},[t._v(t._s(t.currentStepIndex+1)+"/"+t._s(t.steps.length)+".")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStep.title,expression:"currentStep.title"}],staticClass:"text-xl text-gray-600 font-medium font-header p-2 py-1 bg-transparent border-2 rounded border-dashed border-gray-400 w-full",attrs:{type:"text",placeholder:"Untitled step"},domProps:{value:t.currentStep.title},on:{input:function(e){e.target.composing||t.$set(t.currentStep,"title",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"flex flex-wrap lg:flex-no-wrap"},[r("div",{staticClass:"w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-no-wrap justify-between items-start"},[r("div",{staticClass:"flex flex-row lg:flex-col mr-2 order-first"},[r("StepNavigationButton",{attrs:{step:t.previousStep}},[r("svg",{staticClass:"fill-current text-white h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"}})])]),t._v(" "),r("AddStepButton",{attrs:{position:"before",snippet:t.snippet,currentStep:t.currentStep},on:{added:t.handleStepAdded}})],1),t._v(" "),r("div",{staticClass:"w-full lg:mr-2"},[r("StepEditor",{attrs:{step:t.currentStep},model:{value:t.currentStep.body,callback:function(e){t.$set(t.currentStep,"body",e)},expression:"currentStep.body"}})],1),t._v(" "),r("div",{staticClass:"flex flex-row-reverse lg:flex-col order-first lg:order-last"},[r("StepNavigationButton",{attrs:{step:t.nextStep}},[r("svg",{staticClass:"fill-current text-white h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"}})])]),t._v(" "),r("AddStepButton",{attrs:{position:"after",snippet:t.snippet,currentStep:t.currentStep},on:{added:t.handleStepAdded}}),t._v(" "),t.steps.length>1?r("DeleteStepButton",{attrs:{snippet:t.snippet,step:t.currentStep},on:{deleted:t.handleStepDeleted}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"w-full lg:w-4/12"},[r("div",{staticClass:"mb-8"},[r("h1",{staticClass:"text-4xl text-gray-700 font-medium leading-tight mb-6"},[t._v("Steps")]),t._v(" "),r("StepList",{attrs:{steps:t.orderedStepsAsc,currentStep:t.currentStep}})],1),t._v(" "),r("div",{staticClass:"border-t-2 border-gray-300 py-6"},[r("h1",{staticClass:"text-xl text-gray-600 font-medium mb-6"},[t._v("Publishing")]),t._v(" "),r("div",{staticClass:"text-gray-500 text-sm mb-6"},[t.lastSaved?[t._v("Last saved at "+t._s(t.lastSavedFormatted))]:[t._v("No changes saved in this session yet")]],2),t._v(" "),r("div",{staticClass:"flex item-baseline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.snippet.is_public,expression:"snippet.is_public"}],staticClass:"mr-2",attrs:{type:"checkbox",name:"public",id:"public"},domProps:{checked:Array.isArray(t.snippet.is_public)?t._i(t.snippet.is_public,null)>-1:t.snippet.is_public},on:{change:function(e){var r=t.snippet.is_public,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.snippet,"is_public",r.concat([null])):l>-1&&t.$set(t.snippet,"is_public",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.snippet,"is_public",o)}}}),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("label",{staticClass:"text-gray-600 font-medium",attrs:{for:"public"}},[this._v("Make this snippet public")]),this._v(" "),e("div",{staticClass:"text-gray-500 text-sm"},[this._v("Don't worry, you can change this later")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-gray-500 text-sm"},[this._v("\n          Use\n          "),e("div",{staticClass:"inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm"},[this._v("ctrl")]),this._v("+\n          "),e("div",{staticClass:"inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm"},[this._v("shift")]),this._v("+\n          "),e("div",{staticClass:"inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm"},[this._v("left or right")]),this._v("on your keyboard to navigate between steps.\n        ")])}],!1,null,null,null);e.default=component.exports}}]);