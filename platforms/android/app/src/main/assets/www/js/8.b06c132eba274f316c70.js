webpackJsonp([8],{NDQl:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{groups:[],snackbar:!1,tipMsg:"",showLoading:!0}},created:function(){localStorage.token&&this.$store.commit("getUser",this)},mounted:function(){this.loadFollowList()},methods:{loadFollowList:function(){var t=this;this.$http({method:"get",url:"/api/User/MyFollow"}).then(function(e){e.data.code>0?t.groups=e.data.data.groups:(t.tipMsg=e.data.message,t.snackbar=!0),t.showLoading=!1})},follow:function(t,e){var o=this;this.$http({method:"post",url:"/api/User/Follow",params:{uid:t,act:e}}).then(function(e){if(e.data.code>0){var s=0;o.groups[0].users.forEach(function(r){r.user.id==t&&(o.groups[0].users[s].relation=e.data.data.relation),s++})}else console.log("关注失败")})}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]},[o("v-col",{staticClass:"mx-auto pa-0",attrs:{md:"8"}},[o("div",{staticClass:"text-center"},[o("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)])],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"mx-auto pa-0",attrs:{md:"8"}},[o("v-list",t._l(t.groups,function(e){return o("v-list-group",{key:e.id,attrs:{"prepend-icon":"star","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.groupName)}})],1)]},proxy:!0}],null,!0),model:{value:e.isFolder,callback:function(o){t.$set(e,"isFolder",o)},expression:"group.isFolder"}},[t._v(" "),t._l(e.users,function(e){return o("v-list-item",{key:e.user.id,staticClass:"pl-4"},[o("v-list-item-avatar",[o("v-img",{attrs:{src:e.user.avatar}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.user.userName)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.user.desc)}})],1),t._v(" "),o("v-list-item-action",[0==e.relation?o("v-btn",{attrs:{small:"",tile:"",outlined:"",color:"primary",width:"75px",height:"28px"},on:{click:function(o){return t.follow(e.user.id,1)}}},[o("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("关注\n              ")],1):1==e.relation?o("v-btn",{attrs:{small:"",tile:"",outlined:"",color:"gray",width:"75px",height:"28px"},on:{click:function(o){return t.follow(e.user.id,2)}}},[o("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("已关注\n              ")],1):2==e.relation?o("v-btn",{attrs:{small:"",tile:"",outlined:"",color:"primary",width:"75px",height:"28px"},on:{click:function(o){return t.follow(e.user.id,1)}}},[o("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("回粉\n              ")],1):3==e.relation?o("v-btn",{attrs:{small:"",tile:"",outlined:"",color:"gray",width:"75px",height:"28px"},on:{click:function(o){return t.follow(e.user.id,2)}}},[o("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("已互粉\n              ")],1):t._e()],1)],1)})],2)}),1)],1)],1),t._v(" "),o("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.tipMsg))])],1)},staticRenderFns:[]},i=o("VU/8")(s,r,!1,null,null,null);e.default=i.exports}});