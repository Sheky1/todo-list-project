(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"33f6":function(t,e,o){},"39a3":function(t,e,o){"use strict";o("33f6")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("b-container",{staticClass:"main-container"},[o("b-row",[o("b-col",{attrs:{lg:"12"}},[o("b-nav",{staticStyle:{"margin-bottom":"20px"},attrs:{tabs:"",align:"center"}},[o("router-link",{attrs:{to:"/"}},[o("b-button",{attrs:{variant:"outline-primary"}},[t._v("Home")])],1),o("router-link",{attrs:{to:"/new-entity"}},[o("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Add note/todo")])],1)],1),o("router-view")],1)],1)],1)],1)},i=[],r={name:"App"},s=r,c=(o("034f"),o("2877")),l=Object(c["a"])(s,a,i,!1,null,null,null),u=l.exports,d=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticStyle:{"margin-bottom":"10px"}},[t._v("Pregled obaveza i beleski")]),o("Todos"),o("Notes")],1)},f=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-bottom":"30px"}},[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Obaveze")]),o("b-list-group",[o("b-list-group-item",{staticClass:"list-item",attrs:{active:""}},[t._v("Lista obaveza")]),t._l(t.todos,(function(e){return o("b-list-group-item",{key:e.id,staticClass:"list-item"},[o("div",{staticClass:"list-item-left"},[t._v(" "+t._s(e.category)+" ==> "+t._s(e.content)+" ")]),o("b-button-group",[o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(o){return t.editTodo(e.id)}}},[t._v("Izmeni")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(o){return t.onDelete(e.id)}}},[t._v("Obrisi")])],1)],1)}))],2)],1)},b=[],v=o("5530"),h=o("2f62"),g={name:"Todos",computed:Object(v["a"])({},Object(h["c"])(["todos"])),methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(h["b"])(["getTodos"])),Object(h["b"])(["deleteTodo"])),{},{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Uspesno ste obrisali obavezu!",{title:"Uspesno!",autoHideDelay:3e3,variant:"success",appendToast:t})},onDelete:function(t){this.deleteTodo(t),this.makeToast()},editTodo:function(t){mt.push({path:"/todo/".concat(t)})}}),mounted:function(){this.getTodos()}},y=g,$=(o("39a3"),Object(c["a"])(y,p,b,!1,null,null,null)),j=$.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Beleske")]),o("b-container",[o("b-row",t._l(t.notes,(function(e){return o("b-col",{key:e.id,attrs:{lg:"6"}},[o("b-card",{staticStyle:{"margin-bottom":"15px"},attrs:{header:e.category,"header-tag":"header",title:e.title}},[o("b-card-text",[t._v(t._s(e.content))]),o("b-button-group",[o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(o){return t.editTodo(e.id)}}},[t._v("Izmeni")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(o){return t.onDelete(e.id)}}},[t._v("Obrisi")])],1)],1)],1)})),1)],1)],1)},k=[],O={name:"Notes",computed:Object(v["a"])({},Object(h["c"])(["notes"])),methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(h["b"])(["getNotes"])),Object(h["b"])(["deleteNote"])),{},{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toastCount++,this.$bvToast.toast("Uspesno ste obrisali belesku!",{title:"Uspesno!",autoHideDelay:3e3,variant:"success",appendToast:t})},onDelete:function(t){this.deleteNote(t),this.makeToast()},editTodo:function(t){mt.push({path:"/note/".concat(t)})}}),mounted:function(){this.getNotes()}},T=O,_=Object(c["a"])(T,x,k,!1,null,null,null),N=_.exports,S={name:"Home",components:{Todos:j,Notes:N}},w=S,z=Object(c["a"])(w,m,f,!1,null,"7bbb1c93",null),D=z.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Izmena obaveze")]),o("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{attrs:{id:"example-input-group-1",label:"Kategorija:","label-for":"example-input-1"}},[o("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("category"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.category.$model,callback:function(e){t.$set(t.$v.form.category,"$model",e)},expression:"$v.form.category.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Kategorija mora imati najmanje 4 a najvise 18 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-2",label:"Sadrzaj","label-for":"example-input-2"}},[o("b-form-textarea",{attrs:{id:"example-input-2",name:"example-input-2",state:t.validateState("content"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.content.$model,callback:function(e){t.$set(t.$v.form.content,"$model",e)},expression:"$v.form.content.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v("Neophodno je uneti sadrzaj.")])],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Izmeni")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.resetForm()}}},[t._v("Resetuj")])],1)],1)],1)},q=[],E=o("1dce"),P=o("b5ae"),U={name:"Todo",mixins:[E["validationMixin"]],data:function(){return{form:{category:null,content:null},id:this.$route.params.id}},validations:{form:{category:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(18)},content:{required:P["required"]}}},computed:Object(v["a"])(Object(v["a"])({},Object(h["c"])(["todos"])),{},{todo:function(){for(var t=0;t<this.todos.length;t++)if(this.todos[t].id===parseInt(this.$route.params.id))return this.todos[t];return null}}),methods:Object(v["a"])(Object(v["a"])({},Object(h["b"])(["changeTodo"])),{},{validateState:function(t){var e=this.$v.form[t],o=e.$dirty,n=e.$error;return o?!n:null},onSubmit:function(t){t.preventDefault(),this.$v.form.$touch(),this.$v.form.$anyError?this.makeToast("Neuspesno","Doslo je do greske prilikom izmene.","danger"):(this.changeTodo({todo:this.form,id:this.id}),this.makeToast("Uspesno","Uspesno ste izmenili obavezu!","success"))},resetForm:function(){var t=this;this.form={category:this.todo.category,content:this.todo.content},this.$nextTick((function(){t.$v.$reset()}))},makeToast:function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,variant:o,appendToast:n})}}),mounted:function(){this.form.category=this.todo.category,this.form.content=this.todo.content}},C=U,F=Object(c["a"])(C,L,q,!1,null,"3c94a44a",null),I=F.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Izmena beleske")]),o("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{attrs:{id:"example-input-group-1",label:"Naslov:","label-for":"example-input-1"}},[o("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("title"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.title.$model,callback:function(e){t.$set(t.$v.form.title,"$model",e)},expression:"$v.form.title.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Naslov mora imati najmanje 4 a najvise 30 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-2",label:"Kategorija:","label-for":"example-input-2"}},[o("b-form-input",{attrs:{id:"example-input-2",name:"example-input-2",state:t.validateState("category"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.category.$model,callback:function(e){t.$set(t.$v.form.category,"$model",e)},expression:"$v.form.category.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v("Kategorija mora imati najmanje 4 a najvise 18 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-3",label:"Sadrzaj","label-for":"example-input-3"}},[o("b-form-textarea",{attrs:{id:"example-input-3",name:"example-input-3",state:t.validateState("content"),"aria-describedby":"input-3-live-feedback"},model:{value:t.$v.form.content.$model,callback:function(e){t.$set(t.$v.form.content,"$model",e)},expression:"$v.form.content.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-3-live-feedback"}},[t._v("Neophodno je uneti sadrzaj.")])],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Izmeni")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.resetForm()}}},[t._v("Resetuj")])],1)],1)],1)},K=[],M={name:"Note",mixins:[E["validationMixin"]],data:function(){return{form:{title:null,category:null,content:null},id:this.$route.params.id,show:!0}},validations:{form:{title:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(30)},category:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(18)},content:{required:P["required"]}}},computed:Object(v["a"])(Object(v["a"])({},Object(h["c"])(["notes"])),{},{note:function(){for(var t=0;t<this.notes.length;t++)if(this.notes[t].id===parseInt(this.$route.params.id))return this.notes[t];return null}}),methods:Object(v["a"])(Object(v["a"])({},Object(h["b"])(["changeNote"])),{},{onSubmit:function(t){t.preventDefault(),this.$v.form.$touch(),this.$v.form.$anyError?this.makeToast("Neuspesno","Doslo je do greske prilikom izmene.","danger"):(this.changeNote({note:this.form,id:this.id}),this.makeToast("Uspesno","Uspesno ste izmenili obavezu!","success"))},validateState:function(t){var e=this.$v.form[t],o=e.$dirty,n=e.$error;return o?!n:null},resetForm:function(){var t=this;this.form={title:this.note.title,category:this.note.category,content:this.note.content},this.$nextTick((function(){t.$v.$reset()}))},makeToast:function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,variant:o,appendToast:n})}}),mounted:function(){this.form.title=this.note.title,this.form.category=this.note.category,this.form.content=this.note.content}},J=M,R=Object(c["a"])(J,H,K,!1,null,"36a75fdb",null),A=R.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticStyle:{"margin-bottom":"10px"}},[t._v("Dodavanje obaveza i beleski")]),o("NewTodo"),o("hr"),o("NewNote")],1)},G=[],Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Dodavanje obaveza")]),o("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{attrs:{id:"example-input-group-1",label:"Kategorija:","label-for":"example-input-1"}},[o("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("category"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.category.$model,callback:function(e){t.$set(t.$v.form.category,"$model",e)},expression:"$v.form.category.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Kategorija mora imati najmanje 4 a najvise 18 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-2",label:"Sadrzaj","label-for":"example-input-2"}},[o("b-form-textarea",{attrs:{id:"example-input-2",name:"example-input-2",state:t.validateState("content"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.content.$model,callback:function(e){t.$set(t.$v.form.content,"$model",e)},expression:"$v.form.content.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v("Neophodno je uneti sadrzaj.")])],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Dodaj")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.resetForm()}}},[t._v("Resetuj")])],1)],1)],1)},V=[],W={name:"NewTodo",mixins:[E["validationMixin"]],data:function(){return{form:{category:null,content:null}}},validations:{form:{category:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(18)},content:{required:P["required"]}}},methods:Object(v["a"])(Object(v["a"])({},Object(h["b"])(["addTodo"])),{},{validateState:function(t){var e=this.$v.form[t],o=e.$dirty,n=e.$error;return o?!n:null},resetForm:function(){var t=this;this.form={category:null,content:null},this.$nextTick((function(){t.$v.$reset()}))},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError?this.makeToast("Neuspesno","Doslo je do greske prilikom dodavanja.","danger"):(this.addTodo(this.form),this.makeToast("Uspesno","Uspesno ste dodali obavezu!","success"),this.resetForm())},makeToast:function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,variant:o,appendToast:n})}})},X=W,Y=Object(c["a"])(X,Q,V,!1,null,"6b96ecd8",null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",{staticStyle:{"text-align":"left"}},[t._v("Dodavanje beleski")]),o("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{attrs:{id:"example-input-group-1",label:"Naslov:","label-for":"example-input-1"}},[o("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("title"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.title.$model,callback:function(e){t.$set(t.$v.form.title,"$model",e)},expression:"$v.form.title.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Naslov mora imati najmanje 4 a najvise 30 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-2",label:"Kategorija:","label-for":"example-input-2"}},[o("b-form-input",{attrs:{id:"example-input-2",name:"example-input-2",state:t.validateState("category"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.category.$model,callback:function(e){t.$set(t.$v.form.category,"$model",e)},expression:"$v.form.category.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v("Kategorija mora imati najmanje 4 a najvise 18 karaktera.")])],1),o("b-form-group",{attrs:{id:"example-input-group-3",label:"Sadrzaj","label-for":"example-input-3"}},[o("b-form-textarea",{attrs:{id:"example-input-3",name:"example-input-3",state:t.validateState("content"),"aria-describedby":"input-3-live-feedback"},model:{value:t.$v.form.content.$model,callback:function(e){t.$set(t.$v.form.content,"$model",e)},expression:"$v.form.content.$model"}}),o("b-form-invalid-feedback",{attrs:{id:"input-3-live-feedback"}},[t._v("Neophodno je uneti sadrzaj.")])],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Dodaj")]),o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.resetForm()}}},[t._v("Resetuj")])],1)],1)],1)},et=[],ot={name:"NewTodo",mixins:[E["validationMixin"]],data:function(){return{form:{title:null,category:null,content:null}}},validations:{form:{title:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(30)},category:{required:P["required"],minLength:Object(P["minLength"])(4),maxLength:Object(P["maxLength"])(18)},content:{required:P["required"]}}},methods:Object(v["a"])(Object(v["a"])({},Object(h["b"])(["addNote"])),{},{validateState:function(t){var e=this.$v.form[t],o=e.$dirty,n=e.$error;return o?!n:null},resetForm:function(){var t=this;this.form={title:null,category:null,content:null},this.$nextTick((function(){t.$v.$reset()}))},onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError?this.makeToast("Neuspesno","Doslo je do greske prilikom dodavanja.","danger"):(this.addNote(this.form),this.makeToast("Uspesno","Uspesno ste dodali obavezu!","success"),this.resetForm())},makeToast:function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,variant:o,appendToast:n})}})},nt=ot,at=Object(c["a"])(nt,tt,et,!1,null,"40998448",null),it=at.exports,rt={name:"NewEntity",components:{NewTodo:Z,NewNote:it}},st=rt,ct=Object(c["a"])(st,B,G,!1,null,"f205bc72",null),lt=ct.exports;n["default"].use(d["a"]);var ut=[{path:"/",name:"home",component:D},{path:"/note/:id",name:"note",component:A},{path:"/todo/:id",name:"todo",component:I},{path:"/new-entity",name:"new-entity",component:lt}],dt=new d["a"]({mode:"history",base:"/",routes:ut}),mt=dt;o("a434"),o("d3b7");n["default"].use(h["a"]);var ft=new h["a"].Store({state:{todos:[],notes:[]},mutations:{setTodos:function(t,e){t.todos=e},newTodo:function(t,e){t.todos.push(e)},removeTodo:function(t,e){for(var o=0;o<t.todos.length;o++)if(t.todos[o].id===e){t.todos.splice(o,1);break}},updateTodo:function(t,e){for(var o=0;o<t.todos.length;o++)if(t.todos[o].id===parseInt(e.id)){t.todos[o].content=e.todo.content,t.todos[o].category=e.todo.category;break}},setNotes:function(t,e){t.notes=e},newNote:function(t,e){t.notes.push(e)},removeNote:function(t,e){for(var o=0;o<t.notes.length;o++)if(t.notes[o].id===e){t.notes.splice(o,1);break}},updateNote:function(t,e){for(var o=0;o<t.notes.length;o++)if(t.notes[o].id===parseInt(e.id)){t.notes[o].content=e.note.content,t.notes[o].category=e.note.category,t.notes[o].title=e.note.title;break}}},actions:{getTodos:function(t){var e=t.commit;fetch("http://localhost:8000/api/todos",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("setTodos",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},deleteTodo:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/todo/".concat(e),{method:"delete"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("removeTodo",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},addTodo:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/todos",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:e.category,content:e.content})}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("newTodo",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},changeTodo:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/todo/".concat(e.id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.todo)}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("updateTodo",{id:e.id,todo:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},getNotes:function(t){var e=t.commit;fetch("http://localhost:8000/api/notes",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("setNotes",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},deleteNote:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/note/".concat(e),{method:"delete"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("removeNote",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},addNote:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/notes",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title,category:e.category,content:e.content})}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("newNote",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))},changeNote:function(t,e){var o=t.commit;fetch("http://localhost:8000/api/note/".concat(e.id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.note)}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){o("updateNote",{id:e.id,note:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){console.log(t)})):console.log(t)}))}}}),pt=o("5f5b");o("f9e3"),o("2dd8");n["default"].use(pt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:mt,store:ft,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.e605d5b7.js.map