(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(t,e,_){"use strict";_.r(e);var n={data:function(){return{students:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.$axios.$get("https://teacher-assistant.github.io/winter2022-AdvanceProgramming/HomeWorks.json").then((function(e){return t.students=e}))}))}},r=_(45),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"alert alert-dark"},[t._m(0),t._v(" "),_("div",{staticClass:"table-responsive"},[_("table",{staticClass:"table table-primary table-striped"},[t._m(1),t._v(" "),_("tbody",t._l(t.students,(function(e,n){return _("tr",[_("th",{attrs:{scope:"row"}},[t._v(t._s(n+1))]),t._v(" "),_("td",[t._v(t._s(e.id))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW1))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW2))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW3))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW4))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW6))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW7))]),t._v(" "),_("td",[t._v(" "+t._s(e.HW8))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("h3",[t._v("\n    \t\tBelow table is updated "),_("span",{staticClass:"alert-link"},[t._v("a few days after deadlines")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("thead",[_("tr",[_("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("Student Number")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW1")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW2")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW3")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW4")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW6")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW7")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("HW8")])])])}],!1,null,null,null);e.default=component.exports}}]);