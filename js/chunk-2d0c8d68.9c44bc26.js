(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d68"],{"571a":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),a("hr"),t._l(t.restaurants,(function(s){return a("div",{key:s.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:s.id}}}},[a("img",{staticClass:"card-img",attrs:{src:s.image}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(s.name)+" ")]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(s.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(s.description)+" ")]),a("router-link",{staticClass:"btn btn-main mr-2",attrs:{to:{name:"restaurant",params:{id:s.id}}}},[t._v("Show ")]),s.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.deleteFav(s.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-main",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.addFav(s.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},e=[],i=(s("d9e2"),s("8bb1")),n=s("c4c3"),o=s("4cce"),c=s("2fa3"),d=s("2375"),u={name:"RestaurantTop",components:{NavTabs:i["a"],Spinner:d["a"]},data(){return{restaurants:[],isLoading:!0}},methods:{async fetchTopRestaurants(){try{const{data:t}=await n["a"].getTopRestaurants();this.restaurants=t.restaurants,this.isLoading=!1}catch(t){this.isLoading=!1,c["a"].fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"})}},async addFav(t){try{const{data:a}=await o["a"].addFav({restaurantId:t});if(console.log(a),"error"===a.status)throw new Error(a.message);this.restaurants=this.restaurants.map(a=>t!==a.id?a:{...a,isFavorited:!0,FavoriteCount:a.FavoriteCount+1}).sort((t,a)=>a.FavoriteCount-t.FavoriteCount)}catch(a){console.log(a),c["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"})}},async deleteFav(t){try{const{data:a}=await o["a"].delFav({restaurantId:t});if("error"===a.status)throw new Error(a.message);this.restaurants=this.restaurants.map(a=>t!==a.id?a:{...a,isFavorited:!1,FavoriteCount:a.FavoriteCount-1}).sort((t,a)=>a.FavoriteCount-t.FavoriteCount)}catch(a){c["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"})}}},created(){this.fetchTopRestaurants()}},l=u,v=s("2877"),p=Object(v["a"])(l,r,e,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c8d68.9c44bc26.js.map