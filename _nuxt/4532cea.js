(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{253:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{students:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.$axios.$get("https://github.com/omid-reza/teacher-assistant/blob/main/docs/Winter-2022/Advance%20Programming/HomeWorks.json").then((function(e){return t.students=e}))}))}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-dark"},[t._m(0),t._v(" "),n("table",{staticClass:"table table-primary table-striped"},[t._m(1),t._v(" "),n("tbody",t._l(t.students,(function(e,r){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(" "+t._s(e.HW1))])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("\n    \t\tBelow table is updated every "),n("span",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("Sunday")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Student Number")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("HW1 "),n("br"),t._v("2022-02-21")])])])}],!1,null,null,null);e.default=component.exports}}]);