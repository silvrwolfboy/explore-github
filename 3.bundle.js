webpackJsonp([3],{102:function(t,e){"use strict";e.a={ADS:{client:"ca-pub-5442972248172818",slotInFeed:"2105028631",slotInArticle:"7974047383",layout:"-fg+5n+6t-e7+r"}}},104:function(t,e,n){"use strict";var s=n(102);e.a={name:"followerlist",props:["listUser","listTitle","userShowing"],components:{IosArrowRightIcon:n(116).a},computed:{isEmptyResult:function(){var t=!0;return this.listUser&&this.listUser.length>0&&(t=!1),t}},data:function(){return{layout:s.a.ADS.layout,slot:s.a.ADS.slotInFeed,client:s.a.ADS.client}}}},105:function(t,e){"use strict";e.a={name:"ios-arrow-right-icon",data:function(){return{iconTitle:this.title?this.title:"Ios Arrow Right Icon"}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"14px"},h:{type:String,default:"14px"}}}},113:function(t,e,n){"use strict";function s(){n(114)}var i=n(104),a=n(118);e.a=n(0)(i.a,a.a,!1,s,"data-v-74de65ac",null).exports},114:function(t,e,n){var s=n(115);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("f7ee2532",s,!0)},115:function(t,e,n){e=t.exports=n(2)(!1),e.push([t.i,"\n.google-ads[data-v-74de65ac] {\n  width: 90%;\n}\n.empty-state[data-v-74de65ac] {\n  text-align: center;\n  font-size: 24px;\n  margin-top: 100px;\n  color: #ccc;\n}\n.results[data-v-74de65ac] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  background-color: #fff;\n  border: 1px #d1d5da solid;\n  border-radius: 3px;\n  margin: 0 0 60px;\n}\n.result:first-child a[data-v-74de65ac] {\n  border-top: 0;\n}\n.result a[data-v-74de65ac] {\n  position: relative;\n  display: block;\n  padding: 14px 15px 14px 14px;\n  line-height: inherit;\n  text-align: left;\n  color: #0096d9;\n  text-decoration: none;\n  border-top: 1px solid #eaecef;\n}\n.result__img[data-v-74de65ac] {\n  height: 40px;\n  width: 40px;\n  vertical-align: middle;\n  margin-right: 15px;\n  border-radius: 50%;\n  border: 2px solid #0096d9;\n}\n.result__name[data-v-74de65ac] {\n  font-size: 24px;\n}\n.title[data-v-74de65ac] {\n  margin: 10px;\n  font-size: 24px;\n}\n.ion[data-v-74de65ac] {\n  float: right;\n  padding-top: 10px;\n  font-size: 24px;\n  color: #DDD;\n}\n",""])},116:function(t,e,n){"use strict";var s=n(105),i=n(117);e.a=n(0)(s.a,i.a,!1,null,null,null).exports},117:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ion",class:t.rootClass,attrs:{name:"ios-arrow-right-icon","aria-labelledby":t.iconTitle}},[n("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[n("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])])},staticRenderFns:[]}},118:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isEmptyResult?n("div",{staticClass:"empty-state"},[n("svg",{staticClass:"octicon octicon-broadcast",attrs:{version:"1.1",width:"100",height:"100",viewBox:"0 0 16 16","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z"}})]),t._v(" "),n("br"),n("br"),t._v("\n      Not found any list here, Keep Work!\n      "),n("br")]):t._e(),t._v(" "),t.isEmptyResult?t._e():n("div",{staticClass:"title"},[t._v("\n      "+t._s(t.listTitle)+" "),n("b",[n("i",[t._v(t._s(t.userShowing))])])]),t._v(" "),n("ul",{staticClass:"results"},t._l(t.listUser,function(e,s){return n("li",{key:e.id,staticClass:"result"},[s>0&&s%5==0?n("div",{staticClass:"google-ads"},[n("InFeedAdsense",{attrs:{"root-class":"wrapper VueInFeedAdsense","data-ad-layout-key":t.layout,"data-ad-client":t.client,"data-ad-slot":t.slot}})],1):t._e(),t._v(" "),n("router-link",{attrs:{to:"/"+e.login+"/profile/"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar_url,expression:"res.avatar_url"}],staticClass:"result__img"}),t._v(" "),n("span",{staticClass:"result__name"},[t._v(t._s(e.login))]),t._v(" "),n("IosArrowRightIcon",{attrs:{w:"1em",h:"1em"}})],1)],1)}))])},staticRenderFns:[]}},130:function(t,e,n){"use strict";e.a={name:"FollowingPage",components:{UserList:n(113).a},computed:{userShowing:function(){return this.$route.params.user},userFollowing:function(){return this.$store.getters.userFollowing}},activated:function(){this.$store.dispatch("getUserFollowing",this.userShowing)}}},145:function(t,e,n){var s=n(146);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("2bc3d19c",s,!0)},146:function(t,e,n){e=t.exports=n(2)(!1),e.push([t.i,"",""])},147:function(t,e){"use strict";e.a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid__row"},[n("user-list",{attrs:{"list-user":t.userFollowing,"user-showing":t.userShowing,"list-title":"Following list from user"}})],1)},staticRenderFns:[]}},98:function(t,e,n){"use strict";function s(){n(145)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(130),a=n(147);e.default=n(0)(i.a,a.a,!1,s,"data-v-6e479cbf",null).exports}});