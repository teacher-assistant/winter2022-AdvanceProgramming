(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{students:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.$axios.$get("http://127.0.0.1:3000/winter2022-AdvanceProgramming/HomeWorks.json").then((function(e){return t.students=e}))}))}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-dark"},[t._m(0),t._v(" "),n("table",{staticClass:"table table-primary table-striped"},[t._m(1),t._v(" "),n("tbody",t._l(t.students,(function(e,r){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(" "+t._s(e.HW1))]),t._v(" "),n("td",[t._v(" "+t._s(e.HW2))])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("\n    \t\tBelow table is updated "),n("span",{staticClass:"alert-link"},[t._v("a few days after deadlines")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Student Number")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("HW1")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("HW2")])])])}],!1,null,null,null);e.default=component.exports}}]);