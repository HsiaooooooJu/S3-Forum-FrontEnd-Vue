(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22c9b572"],{"262c":function(t,e,a){},"3efe":function(t,e,a){"use strict";a("8773")},"822a":function(t,e,a){"use strict";a("f30a")},8773:function(t,e,a){},ad68:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[t.isLoading?e("Spinner"):[e("h1",[t._v("餐廳描述頁")]),e("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),e("hr"),e("h2",{staticClass:"my-4"},[t._v(" 所有評論： ")]),t._l(t.restaurantComments,(function(a){return e("RestaurantComments",{key:a.id,attrs:{"restaurant-comments":a},on:{"after-delete-comment":t.afterDeleteComment}})})),e("CreateComments",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},s=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-lg-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"contact-info-wrap"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-lg-8"},[e("p",[t._v(t._s(t.restaurant.description))]),e("router-link",{staticClass:"btn btn-main btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v(" Dashboard")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFav(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-main btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFav(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-main like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])},i=[],o=(a("d9e2"),a("2708")),c=a("4cce"),u=a("2fa3"),d={name:"RestaurantDetail",mixins:[o["a"]],props:{initialRestaurant:{type:Object,required:!0}},data(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant(t){this.restaurant={...this.restaurant,...t}}},methods:{async addFav(t){try{const{data:e}=await c["a"].addFav({restaurantId:t});if("success"!==e.status)throw new Error(e.message);this.restaurant={...this.restaurant,isFavorited:!0}}catch(e){u["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"})}},async deleteFav(t){try{const{data:e}=await c["a"].delFav({restaurantId:t});if("success"!==e.status)throw new Error(e.message);this.restaurant={...this.restaurant,isFavorited:!1}}catch(e){u["a"].fire({icon:"error",title:"無法將餐廳從最愛移除，請稍後再試"})}},async addLike(t){try{const{data:e}=await c["a"].addLike({restaurantId:t});if("success"!==e.status)throw new Error(e.message);this.restaurant={...this.restaurant,isLiked:!0}}catch(e){u["a"].fire({icon:"error",title:"無法按讚，請稍後再試"})}},async deleteLike(t){try{const{data:e}=await c["a"].delLike({restaurantId:t});if("success"!==e.status)throw new Error(e.message);this.restaurant={...this.restaurant,isLiked:!1}}catch(e){u["a"].fire({icon:"error",title:"無法取消讚，請稍後再試"})}}}},m=d,l=(a("822a"),a("2877")),p=Object(l["a"])(m,n,i,!1,null,"6bee0f89",null),f=p.exports,h=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleDelBtn(t.comment.id)}}},[t._v(" Delete ")]):t._e(),e("h3",[e("router-link",{attrs:{to:{name:"user",params:{id:t.comment.User.id}}}},[t._v(" "+t._s(t.comment.User.name)+" ")])],1),e("p",[t._v(t._s(t.comment.text))]),e("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(t.comment.createdAt))+" ")])]),e("hr")])])},b=[],v=a("c4c3"),g=a("2f62"),C={name:"RestaurantComments",mixins:[o["b"]],props:{restaurantComments:{type:Object,required:!0}},data(){return{comment:this.restaurantComments}},computed:{...Object(g["b"])(["currentUser"])},methods:{async handleDelBtn(t){try{const{data:e}=await v["a"].delComments({commentId:t});if("error"===e.status)throw new Error(e.message);this.$emit("after-delete-comment",t)}catch(e){u["a"].fire({icon:"error",title:"無法刪除評論，請稍後再試"})}}}},_=C,y=(a("d803"),Object(l["a"])(_,h,b,!1,null,"32b2c46e",null)),w=y.exports,k=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"text"}},[t._v("留下評論：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")]),e("button",{staticClass:"btn btn-main mr-0",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" Submit ")])])])},x=[],L={name:"CreateComments",props:{restaurantId:{type:Number,required:!0}},data(){return{text:"",isProcessing:!1}},computed:{...Object(g["b"])(["currentUser"])},methods:{async handleSubmit(){try{const t=this.text.trim();if(!t)return void u["a"].fire({icon:"warning",title:"您尚未填寫任何評論"});this.isProcessing=!0;const{data:e}=await v["a"].createComments({restaurantId:this.restaurantId,text:this.text});if("error"===e.status)throw new Error(e.message);this.$emit("after-create-comment",{commentId:e.commentId,restaurantId:this.restaurantId,text:this.text}),this.text="",this.isProcessing=!1}catch(t){this.isProcessing=!1,u["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"})}}}},I=L,D=(a("3efe"),Object(l["a"])(I,k,x,!1,null,"e3358ea6",null)),R=D.exports,F=a("2375"),P={name:"Restaurant",components:{RestaurantDetail:f,RestaurantComments:w,CreateComments:R,Spinner:F["a"]},data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFav:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},computed:{...Object(g["b"])(["currentUser"])},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()},methods:{async fetchRestaurant(t){try{this.isLoading=!0;const{data:e}=await v["a"].getRestaurant({restaurantId:t}),{restaurant:a,isFavorited:r,isLiked:s}=e,{id:n,name:i,Category:o,image:c,opening_hours:u,tel:d,address:m,description:l,Comments:p}=a;this.restaurant={id:n,name:i,categoryName:o?o.name:"未分類",image:c,openingHours:u,tel:d,address:m,description:l,isFavorited:r,isLiked:s},this.restaurantComments=p,this.isLoading=!1}catch(e){this.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}},afterDeleteComment(t){this.restaurantComments=this.restaurantComments.filter(e=>e.id!==t)},afterCreateComment(t){const{commentId:e,restaurantId:a,text:r}=t;this.restaurantComments.push({id:e,RestaurantId:a,User:{id:this.currentUser.id,name:this.currentUser.name},text:r,createdAt:new Date})}},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)}},U=P,j=Object(l["a"])(U,r,s,!1,null,null,null);e["default"]=j.exports},d803:function(t,e,a){"use strict";a("262c")},f30a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-22c9b572.cd0086b6.js.map