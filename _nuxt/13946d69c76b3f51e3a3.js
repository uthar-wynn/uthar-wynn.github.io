(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{538:function(t,e,n){"use strict";var r={props:{snippet:{required:!0,type:Object}}},l=n(29),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap lg:flex-no-wrap justify-between items-center bg-white p-8 roundend-lg w-full mb-2"},[n("div",{staticClass:"mr-8 mb-2 lg:mb-0"},[n("h1",{staticClass:"text-gray-600 text-xl leading-snug"},[n("nuxt-link",{staticClass:"text-gray-600",attrs:{to:{name:"snippets-id",params:{id:t.snippet.uuid}}}},[t._v(t._s(t.snippet.title||"Untitled snippet"))])],1),t._v(" "),n("div",{staticClass:"text-gray-500 mr-6 font-medium"},[t._v(t._s(t.snippet.steps_count)+" steps")])]),t._v(" "),n("div",[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},693:function(t,e,n){"use strict";n.r(e);var r={components:{SnippetCard:n(538).a},props:{snippet:{required:!0,type:Object}}},l=n(29),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("SnippetCard",{attrs:{snippet:this.snippet}},[e("nuxt-link",{attrs:{to:{name:"author-id",params:{id:this.snippet.author.data.username}}}},[this._v(this._s(this.snippet.author.data.name))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);