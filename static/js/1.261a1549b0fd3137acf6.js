webpackJsonp([1],{mJTh:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={name:"Login",data:function(){return{account:"",pwd:"",accountError:"",pwdError:""}},computed:{bgUrl:function(){return"bg-url"+(new Date).getDay()}},methods:{verifyAccount:function(t){this.account=t.target.value,"admin"!==this.account?this.accountError="账号为admin":this.accountError=""},verifyPwd:function(t){this.pwd=t.target.value,"admin"!==this.pwd?this.pwdError="密码为admin":this.pwdError=""},register:function(){console.log("注册账号")},forgetPwd:function(){console.log("忘记密码")},submit:function(){""!==this.account&&""!==this.pwd&&""===this.accountError&&""===this.pwdError?this.$router.push("index"):("admin"!==this.account?this.accountError="账号为admin":this.accountError="","admin"!==this.pwd?this.pwdError="密码为admin":this.pwdError="")}}},s={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"login-vue",class:t.bgUrl},[n("div",{staticClass:"container"},[n("p",{staticClass:"title"},[t._v("WELCOME")]),t._v(" "),n("div",{staticClass:"input-c"},[n("Input",{attrs:{prefix:"ios-contact",placeholder:"用户名"},on:{"on-blur":t.verifyAccount}}),t._v(" "),n("p",{staticClass:"error"},[t._v(t._s(t.accountError))])],1),t._v(" "),n("div",{staticClass:"input-c"},[n("Input",{attrs:{type:"password",prefix:"md-lock",placeholder:"密码"},on:{"on-blur":t.verifyPwd}}),t._v(" "),n("p",{staticClass:"error"},[t._v(t._s(t.pwdError))])],1),t._v(" "),n("Button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.submit}},[t._v("登陆")]),t._v(" "),n("p",{staticClass:"account"},[n("span",{on:{click:t.register}},[t._v("注册账号")]),t._v(" | "),n("span",{on:{click:t.forgetPwd}},[t._v("忘记密码")])])],1)])},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(t){n("qQJ2")},null,null);r.default=c.exports},qQJ2:function(t,r){}});
//# sourceMappingURL=1.261a1549b0fd3137acf6.js.map