(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2de59b"],{"01c8":function(t,e,a){t.exports=a.p+"img/jacob-henry.777debb2.png"},"0e83":function(t,e,a){t.exports=a.p+"img/sam-cornwell.9337b5f5.png"},1452:function(t,e,a){t.exports=a.p+"img/rony-xavier.74142d6b.png"},"177e":function(t,e,a){t.exports=a.p+"img/mark-tollick.f6a6f92d.png"},"1d12":function(t,e,a){t.exports=a.p+"img/will-dower.ba4865e8.png"},"304b":function(t,e,a){t.exports=a.p+"img/mohamed-el-sharkawi.eb2424dd.png"},"367e":function(t,e,a){t.exports=a.p+"img/brett-kreider.85596343.png"},"39dd":function(t,e,a){t.exports=a.p+"img/luke-malinowski.86c05650.png"},4507:function(t,e,a){t.exports=a.p+"img/alicia-sturtevant.540a5bd0.png"},"495d":function(t,e,a){},"4a1a":function(t,e,a){"use strict";var s=a("80d2"),i=a("2b0e");e["a"]=i["a"].extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array],default:()=>[]},sortDesc:{type:[Boolean,Array],default:()=>[]},customSort:{type:Function,default:s["A"]},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:s["z"]},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:Object(s["C"])(this.sortBy),sortDesc:Object(s["C"])(this.sortDesc),groupBy:Object(s["C"])(this.groupBy),groupDesc:Object(s["C"])(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};return this.options&&(t=Object.assign(t,this.options)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return-1===this.internalOptions.itemsPerPage?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return!this.disableSort&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?Object(s["s"])(this.computedItems,this.internalOptions.groupBy[0]):null},scopedProps(){const t={sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length};return t},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){Object(s["i"])(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){Object(s["i"])(t,e)||(this.$emit("update:options",t),this.$emit("pagination",this.pagination))},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:Object(s["C"])(t)})},"internalOptions.sortBy"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:Object(s["C"])(t)})},"internalOptions.sortDesc"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:Object(s["C"])(t)})},"internalOptions.groupBy"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:Object(s["C"])(t)})},"internalOptions.groupDesc"(t,e){!Object(s["i"])(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0}},methods:{toggle(t,e,a,i,o,n){let r=e.slice(),l=a.slice();const c=r.findIndex(e=>e===t);return c<0?(n||(r=[],l=[]),r.push(t),l.push(!1)):c>=0&&!l[c]?l[c]=!0:o?l[c]=!1:(r.splice(c,1),l.splice(c,1)),Object(s["i"])(r,e)&&Object(s["i"])(l,a)||(i=1),{by:r,desc:l,page:i}},group(t){const{by:e,desc:a,page:s}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:a,page:s})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:a,page:s}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.mustSort,this.multiSort);this.updateOptions({sortBy:e,sortDesc:a,page:s})},sortArray(t){const e=t.map(t=>{const e=this.internalOptions.sortBy.findIndex(e=>e===t);return e>-1&&this.internalOptions.sortDesc[e]});this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){const e=this.internalOptions.groupBy.concat(this.internalOptions.sortBy),a=this.internalOptions.groupDesc.concat(this.internalOptions.sortDesc);return this.customSort(t,e,a,this.locale)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,this.internalOptions.page-1)),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}})},"4bcb":function(t,e,a){t.exports=a.p+"img/eugene-aronne.9ef4c3e4.png"},"608d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[a("v-snackbar",{attrs:{timeout:5e3},model:{value:t.snackbarSuccess,callback:function(e){t.snackbarSuccess=e},expression:"snackbarSuccess"}},[t._v("\n        Team Member Added Successfully\n        "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbarSuccess=!1}}},[t._v("\n            Close\n        ")])],1),a("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.removeSuccess,callback:function(e){t.removeSuccess=e},expression:"removeSuccess"}},[t._v("\n        Team Member Removed Successfully\n        "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.removeSuccess=!1}}},[t._v("\n            Close\n        ")])],1),a("v-container",{staticClass:"text-center ",attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"11"}},[a("v-toolbar",{staticClass:"elevation-1"},[a("v-toolbar-title",[t._v("Team Details: ")]),a("div",{staticClass:"flex-grow-1"}),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-search-web",label:"Search","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("AddTeam",{staticClass:"ml-2",on:{showSuccess:t.showData}})],1)],1)],1),a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"11"}},[a("v-container",{attrs:{fluid:""}},[t.teamLoader?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{col:"12",md:"2"}},[a("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):a("v-row",[a("v-container",{attrs:{fluid:""}},[a("v-data-iterator",{attrs:{items:t.teamData,search:t.search,"items-per-page":t.itemsPerPage,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions}},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-row",{},t._l(e.items,(function(e){return a("v-col",{key:e.name,staticClass:"pa-1",attrs:{col:"12",cols:"6",md:"2",sm:"3"}},[a("div",{staticClass:"text-center py-3 elevation-1",class:1==t.$vuetify.theme.dark?"grey darken-3":"white",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.showTeam(e.id)}}},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:e.image,alt:""}})]),a("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(e.name))]),a("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"80%"}},[t._v(t._s(e.designation))]),a("v-chip",{staticClass:"ma-1",attrs:{"x-small":""}},[t._v(t._s(e.role))])],1)])})),1)]}}])})],1)],1)],1)],1)],1)],1)],1)},i=[],o=a("59ca"),n=a.n(o),r=(a("8aa5"),a("a078"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"1200"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{color:"indigo",dark:""}},s),[t._v("\n        Add New Team Member\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":"",dark:""}},[t._v("\n        Create New Team Member \n      ")]),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"pa-0"},[a("v-col",{attrs:{md:"12",cols:"12"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{staticClass:"pa-3"},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Team Member Status")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[a("v-select",{attrs:{items:t.items,label:"Active Status",outlined:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[a("v-select",{attrs:{items:t.items,label:"Visiblity Status",outlined:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"ID",type:"text",outlined:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[a("v-select",{attrs:{items:t.teamRole,label:"Role",outlined:""},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1)],1),a("v-row",{staticClass:"pa-3"},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Team Member Info")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{rules:t.nameRules,label:"Name",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{rules:t.nameRules,label:"Desigination",outlined:""},model:{value:t.designation,callback:function(e){t.designation=e},expression:"designation"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Image URL",outlined:""},model:{value:t.imageURL,callback:function(e){t.imageURL=e},expression:"imageURL"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},s),[t._v("Upload Image")])]}}]),model:{value:t.dialogImageUload,callback:function(e){t.dialogImageUload=e},expression:"dialogImageUload"}},[a("v-card",[a("v-card-title",[t._v("Upload Speaker Image")]),a("v-card-text",[a("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),a("v-file-input",{attrs:{accept:"image/*",label:"File input","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(e){t.imageUpload=e},expression:"imageUpload"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogImageUload=!1}}},[t._v("Disagree")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Agree")])],1)],1)],1)],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"12",cols:"12"}},[a("v-img",{staticClass:"mt-n7",attrs:{src:t.imageURL}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",xs:"12",cols:"12"}},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Bio"},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}})],1)],1),a("v-row",{staticClass:"pa-3"},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Contact Number",outlined:""},model:{value:t.mbnumber,callback:function(e){t.mbnumber=e},expression:"mbnumber"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"8",xs:"8",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{rules:t.emailRules,label:"Email Id",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-row",{staticClass:"pa-3"},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Facebook",outlined:""},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Github",outlined:""},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Linkedin",outlined:""},model:{value:t.linkedin,callback:function(e){t.linkedin=e},expression:"linkedin"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Meetup",outlined:""},model:{value:t.meetup,callback:function(e){t.meetup=e},expression:"meetup"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Twitter",outlined:""},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[a("v-text-field",{staticClass:"ma-0",attrs:{label:"Website/Blog",outlined:""},model:{value:t.web,callback:function(e){t.web=e},expression:"web"}})],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),a("v-btn",{attrs:{color:"primary",disabled:!t.valid,loading:t.loading},on:{click:t.SaveEvent}},[t._v("\n          Add New Team Member\n        ")])],1)],1)],1)],1)}),l=[],c={props:{},data(){return{imageUpload:[],imagePre:"",imageUploading:!1,valid:!0,dialogImageUload:!1,nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"],emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],teamRole:["Core Team","Organizing Team","Volunteer"],dialog:!1,loading:!1,items:[!0,!1],active:Boolean,visible:Boolean,id:"",mbnumber:"",name:"",facebook:"",github:"",linkedin:"",email:"",meetup:"",twitter:"",web:"",bio:"",imageURL:"",designation:"",role:null}},methods:{onFileChange(){let t=new FileReader;t.readAsDataURL(this.imageUpload),t.onload=()=>{this.imagePre=t.result}},uploadImage(){this.imageUploading=!0;var t=`${this.userId}.${this.imageUpload.name.split(".")[1]}`;console.log(t);var e=n.a.storage().ref("team/"+t);e.put(this.imageUpload).then(t=>{e.getDownloadURL().then(t=>{console.log(t),this.imageURL=t,this.imageUploading=!1,this.uploadImage="Uploaded"})}),this.dialogImageUload=!1},SaveEvent(){if(this.$refs.form.validate()){var t={active:this.active,visible:this.visible,name:this.name,designation:this.designation,mbnumber:this.mbnumber,email:this.email,image:this.imageURL,bio:this.bio,id:this.id,role:this.role,socialLinks:{facebook:this.facebook,github:this.github,linkedin:this.linkedin,meetup:this.meetup,twitter:this.twitter,web:this.web}};n.a.firestore().collection("team").doc(t.id).set(t).then(t=>{this.dialog=!1,this.$emit("showSuccess")}).catch(t=>{console.log(t)})}}}},p=c,m=a("2877"),d=a("6544"),g=a.n(d),u=a("8336"),h=a("b0af"),v=a("99d9"),b=a("62ad"),f=a("a523"),y=a("169a"),x=a("ce7e"),C=a("23a7"),S=a("4bd4"),O=a("adda"),P=a("0fd9"),k=a("b974"),I=a("2fa4"),$=a("8654"),_=a("a844"),w=Object(m["a"])(p,r,l,!1,null,null,null),D=w.exports;g()(w,{VBtn:u["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:b["a"],VContainer:f["a"],VDialog:y["a"],VDivider:x["a"],VFileInput:C["a"],VForm:S["a"],VImg:O["a"],VRow:P["a"],VSelect:k["a"],VSpacer:I["a"],VTextField:$["a"],VTextarea:_["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("div",t._g({staticClass:"text-center py-3 elevation-1 white",staticStyle:{cursor:"pointer"}},s),[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),a("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.teamData.name))]),a("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"80%"}},[t._v(t._s(t.teamData.designation))]),a("v-chip",{staticClass:"ma-1",attrs:{"x-small":""}},[t._v(t._s(t.teamData.role))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.dialog?a("v-card",{attrs:{color:""}},[a("v-card-title",{staticClass:"px-5 google-font",attrs:{"primary-title":""}},[t._v("\n     "+t._s(t.teamData.name)+" \n    ")]),a("v-card-text",{staticClass:"pa-5 py-0"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),a("p",{staticClass:"mt-3 mb-0 google-font mb-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.teamData.name))]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"100%"}},[t._v(t._s(t.teamData.designation))]),a("v-chip",{staticClass:"mt-2",attrs:{small:""}},[t._v(t._s(t.teamData.role))]),a("br"),a("br"),t.teamData.visible?a("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):a("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")]),t.teamData.active?a("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Active")]):a("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Active")]),a("br")],1),a("v-col",{attrs:{cols:"12",md:"9"}},[a("p",{staticClass:"mb-0"},[a("b",[t._v("Bio")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.bio))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("Email")])]),a("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.email))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("Mobile")])]),a("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.mbnumber))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("User ID")])]),a("p",{staticClass:"mt-0 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},[t._v(t._s(t.teamData.id))]),a("p",{staticClass:"mb-0 mt-3"},[a("b",[t._v("Social Links")])]),a("p",{staticClass:"mt-1 mb-0 google-font mt-0",staticStyle:{"font-size":"110%"}},t._l(t.teamData.socialLinks,(function(e,s){return a("span",{key:s,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[e?a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e,target:"_blank"}},[a("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[t._v(t._s(s))])],1):t._e()])})),0),a("p",{staticClass:"mb-1 mt-4"},[a("b",[t._v("Action Links")])]),a("removeTeam",{staticClass:"mr-1",staticStyle:{"margin-left":"0.9px"},attrs:{teamData:{id:t.teamData.id,name:t.teamData.name}},on:{removeSuccess:t.RemoveSuceess}}),t._v("\n                     \n                    "),a("editTeam",{attrs:{teamData:t.teamData}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()],1)},T=[],V=a("9917"),B=a("42f5"),L={components:{removeTeam:V["a"],editTeam:B["a"]},props:{teamData:{}},data(){return{dialog:!1}},methods:{getImgUrl(t){return t.length>0?a("b270")("./"+t):a("72ab")},RemoveSuceess(){this.dialog=!1,this.$emit("showSuccess")}}},A=L,E=a("8212"),U=a("cc20"),F=Object(m["a"])(A,j,T,!1,null,null,null),R=F.exports;g()(F,{VAvatar:E["a"],VBtn:u["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VChip:U["a"],VCol:b["a"],VContainer:f["a"],VDialog:y["a"],VDivider:x["a"],VRow:P["a"],VSpacer:I["a"]});var z={components:{AddTeam:D,Team:R},name:"admin-dashboard",data:()=>({teamRole:["Core Team","Organizing Team","Volunteer"],itemsPerPageOptions:[8,16,32],itemsPerPage:8,removeSuccess:!1,teamLoader:!0,search:"",loading:!0,teamData:[],snackbarSuccess:!1}),created(){this.$route.query.msg&&(this.removeSuccess=!0)},computed:{},mounted(){n.a.auth().currentUser?this.showData():this.$router.replace("login")},methods:{showTeam(t){this.$router.replace("/admin/dashboard/team/"+t)},getImgUrl(t){return t.length>0?t:a("72ab")},showData(){this.teamLoader=!0,this.teamData=[],console.log("Calling Show Data"),n.a.firestore().collection("team").get().then(t=>{t.forEach(t=>{this.id=t.id,this.teamData.push(t.data())}),this.teamLoader=!1,this.loading=!1}).catch(t=>{console.log("Error getting documents",t)})}}},N=z,M=a("a75b"),K=a("c377"),W=a("490a"),q=a("2db4"),G=a("71d9"),J=a("2a7f"),H=Object(m["a"])(N,s,i,!1,null,null,null);e["default"]=H.exports;g()(H,{VAvatar:E["a"],VBtn:u["a"],VChip:U["a"],VCol:b["a"],VContainer:f["a"],VContent:M["a"],VDataIterator:K["a"],VProgressCircular:W["a"],VRow:P["a"],VSnackbar:q["a"],VTextField:$["a"],VToolbar:G["a"],VToolbarTitle:J["a"]})},"775c":function(t,e,a){t.exports=a.p+"img/robert-thew.6daa0e92.png"},9191:function(t,e,a){t.exports=a.p+"img/dan-haynes.7bc326e9.png"},9202:function(t,e,a){t.exports=a.p+"img/aaron-lippold.980167a8.png"},9928:function(t,e,a){t.exports=a.p+"img/vikram-bala.5e21226f.png"},afdd:function(t,e,a){"use strict";var s=a("8336");e["a"]=s["a"]},b270:function(t,e,a){var s={"./aaron-lippold.png":"9202","./alicia-sturtevant.png":"4507","./brett-kreider.png":"367e","./colin-doherty.png":"e981","./dan-haynes.png":"9191","./eugene-aronne.png":"4bcb","./jacob-henry.png":"01c8","./lipee-vora.png":"db6c","./luke-malinowski.png":"39dd","./mark-tollick.png":"177e","./mohamed-el-sharkawi.png":"304b","./robert-thew.png":"775c","./rony-xavier.png":"1452","./sam-cornwell.png":"0e83","./vikram-bala.png":"9928","./will-dower.png":"1d12"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id="b270"},c377:function(t,e,a){"use strict";var s=a("4a1a"),i=a("f41f"),o=a("7560"),n=a("80d2"),r=a("d9bd");e["a"]=o["a"].extend({name:"v-data-iterator",props:{...s["a"].options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object},data:()=>({selection:{},expansion:{},internalCurrentItems:[]}),computed:{everyItem(){return!!this.internalCurrentItems.length&&this.internalCurrentItems.every(t=>this.isSelected(t))},someItems(){return this.internalCurrentItems.some(t=>this.isSelected(t))},sanitizedFooterProps(){return Object(n["d"])(this.footerProps)}},watch:{value:{handler(t){this.selection=t.reduce((t,e)=>{return t[Object(n["m"])(e,this.itemKey)]=e,t},{})},immediate:!0},selection(t,e){Object(n["i"])(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce((t,e)=>{return t[Object(n["m"])(e,this.itemKey)]=!0,t},{})},immediate:!0},expansion(t,e){if(Object(n["i"])(t,e))return;const a=Object.keys(t).filter(e=>t[e]),s=a.length?this.items.filter(t=>a.includes(String(Object(n["m"])(t,this.itemKey)))):[];this.$emit("update:expanded",s)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(r["a"])(t,e,this)});const e=["expand","content-class","content-props","content-tag"];e.forEach(t=>{this.$attrs.hasOwnProperty(t)&&Object(r["d"])(t)})},methods:{toggleSelectAll(t){const e=Object.assign({},this.selection);this.internalCurrentItems.forEach(a=>{const s=Object(n["m"])(a,this.itemKey);t?e[s]=a:delete e[s]}),this.selection=e,this.$emit("toggle-select-all",{value:t})},isSelected(t){return!!this.selection[Object(n["m"])(t,this.itemKey)]||!1},select(t,e=!0,a=!0){const s=this.singleSelect?{}:Object.assign({},this.selection),i=Object(n["m"])(t,this.itemKey);if(e?s[i]=t:delete s[i],this.singleSelect&&a){const t=Object.keys(this.selection),e=t.length&&Object(n["m"])(this.selection[t[0]],this.itemKey);e&&e!==i&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=s,a&&this.$emit("item-selected",{item:t,value:e})},isExpanded(t){return this.expansion[Object(n["m"])(t,this.itemKey)]||!1},expand(t,e=!0){const a=this.singleExpand?{}:Object.assign({},this.expansion),s=Object(n["m"])(t,this.itemKey);e?a[s]=!0:delete a[s],this.expansion=a,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t){const e={item:t,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t)};return e},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots["loading"]||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,expand:this.expand}):this.$scopedSlots.item?t.items.map(t=>this.$scopedSlots.item(this.createItemProps(t))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},a=Object(n["n"])("footer.",this.$scopedSlots);return this.$createElement(i["a"],{scopedSlots:a,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[Object(n["p"])(this,"header",e,!0),this.genItems(t),this.genFooter(t),Object(n["p"])(this,"footer",e,!0)])}},render(){return this.$createElement(s["a"],{props:this.$props,on:{"update:options":(t,e)=>!Object(n["i"])(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!Object(n["i"])(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)}},scopedSlots:{default:this.genDefaultScopedSlot}})}})},db6c:function(t,e,a){t.exports=a.p+"img/lipee-vora.fa9e2a60.png"},e981:function(t,e,a){t.exports=a.p+"img/colin-doherty.d83f6c6b.png"},f41f:function(t,e,a){"use strict";a("495d");var s=a("b974"),i=a("9d26"),o=a("afdd"),n=a("2b0e");e["a"]=n["a"].extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedItemsPerPageOptions(){return this.itemsPerPageOptions.map(t=>{return"object"===typeof t?t:this.genItemsPerPageOption(t)})}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedItemsPerPageOptions;return e.length<=1?null:(e.find(e=>e.value===t)||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(s["a"],{attrs:{"aria-label":this.itemsPerPageText},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];if(this.pagination.itemsLength){const e=this.pagination.itemsLength,a=this.pagination.pageStart+1,s=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop;t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:a,pageStop:s,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,a,s,e)]}return this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,a,s){return this.$createElement(o["a"],{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":a}},[this.$createElement(i["a"],s)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}})}}]);