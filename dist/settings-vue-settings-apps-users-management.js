/*! For license information please see settings-vue-settings-apps-users-management.js.LICENSE.txt */
!function(){"use strict";var e,r,o,i={78778:function(e,r,o){var i=o(20144),u=o(34741),s=o(83678),a={name:"App",beforeMount:function(){null!==document.getElementById("serverData")&&this.$store.commit("setServerData",JSON.parse(document.getElementById("serverData").dataset.server))}},c=(0,o(51900).Z)(a,(function(){var e=this.$createElement;return(this._self._c||e)("router-view")}),[],!1,null,null,null).exports,d=o(78345),p=o(79753),f=function(){return Promise.all([o.e(7874),o.e(8351)]).then(o.bind(o,27255))},l=function(){return Promise.all([o.e(7874),o.e(7418)]).then(o.bind(o,62128))};i.ZP.use(d.Z);var m=new d.Z({mode:"history",base:(0,p.generateUrl)(""),linkActiveClass:"active",routes:[{path:"/:index(index.php/)?settings/users",component:f,props:!0,name:"users",children:[{path:":selectedGroup",name:"group",component:f}]},{path:"/:index(index.php/)?settings/apps",component:l,props:!0,name:"apps",children:[{path:":category",name:"apps-category",component:l,children:[{path:":id",name:"apps-details",component:l}]}]}]}),g=o(20629),h=o(4820),v=o(10128),A=(o(65509),function(e){return e.replace(/\/$/,"")}),U=function(){return(0,v.confirmPassword)()},b=function(e,t){return h.default.get(A(e),t)},I=function(e,t){return h.default.post(A(e),t)},y=function(e,t){return h.default.put(A(e),t)},L=function(e,t){return h.default.delete(A(e),{params:t})},P=(0,o(17499).IY)().setApp("settings").detectUser().build(),w=function(e,t){return 1===t?e.sort((function(e,t){return e.usercount-e.disabled<t.usercount-t.disabled})):e.sort((function(e,t){return e.name.localeCompare(t.name)}))},E={id:"",name:"",usercount:0,disabled:0,canAdd:!0,canRemove:!0},O={appendUsers:function(e,t){var r=e.users.concat(Object.keys(t).map((function(e){return t[e]})));e.usersOffset+=e.usersLimit,e.users=r},setPasswordPolicyMinLength:function(e,t){e.minPasswordLength=""!==t?t:0},initGroups:function(e,t){var r=t.groups,n=t.orderBy,o=t.userCount;e.groups=r.map((function(e){return Object.assign({},E,e)})),e.orderBy=n,e.userCount=o,e.groups=w(e.groups,e.orderBy)},addGroup:function(e,t){var r=t.gid,n=t.displayName;try{if(void 0!==e.groups.find((function(e){return e.id===r})))return;var o=Object.assign({},E,{id:r,name:n});e.groups.push(o),e.groups=w(e.groups,e.orderBy)}catch(e){console.error("Can't create group",e)}},renameGroup:function(e,t){var r=t.gid,n=t.displayName,o=e.groups.findIndex((function(e){return e.id===r}));if(o>=0){var i=e.groups[o];i.name=n,e.groups.splice(o,1,i),e.groups=w(e.groups,e.orderBy)}},removeGroup:function(e,t){var r=e.groups.findIndex((function(e){return e.id===t}));r>=0&&e.groups.splice(r,1)},addUserGroup:function(e,t){var r=t.userid,n=t.gid,o=e.groups.find((function(e){return e.id===n})),i=e.users.find((function(e){return e.id===r}));o&&i.enabled&&e.userCount>0&&o.usercount++,i.groups.push(n),e.groups=w(e.groups,e.orderBy)},removeUserGroup:function(e,t){var r=t.userid,n=t.gid,o=e.groups.find((function(e){return e.id===n})),i=e.users.find((function(e){return e.id===r}));o&&i.enabled&&e.userCount>0&&o.usercount--;var u=i.groups;u.splice(u.indexOf(n),1),e.groups=w(e.groups,e.orderBy)},addUserSubAdmin:function(e,t){var r=t.userid,n=t.gid;e.users.find((function(e){return e.id===r})).subadmin.push(n)},removeUserSubAdmin:function(e,t){var r=t.userid,n=t.gid,o=e.users.find((function(e){return e.id===r})).subadmin;o.splice(o.indexOf(n),1)},deleteUser:function(e,t){var r=e.users.findIndex((function(e){return e.id===t}));this.commit("updateUserCounts",{user:e.users[r],actionType:"remove"}),e.users.splice(r,1)},addUserData:function(e,t){var r=t.data.ocs.data;e.users.push(r),this.commit("updateUserCounts",{user:r,actionType:"create"})},enableDisableUser:function(e,t){var r=t.userid,n=t.enabled,o=e.users.find((function(e){return e.id===r}));o.enabled=n,this.commit("updateUserCounts",{user:o,actionType:n?"enable":"disable"})},updateUserCounts:function(e,t){var r=t.user,n=t.actionType,o=e.groups.find((function(e){return"disabled"===e.id}));switch(n){case"enable":case"disable":o.usercount+=r.enabled?-1:1,e.userCount+=r.enabled?1:-1,r.groups.forEach((function(t){e.groups.find((function(e){return e.id===t})).disabled+=r.enabled?-1:1}));break;case"create":e.userCount++,r.groups.forEach((function(t){e.groups.find((function(e){return e.id===t})).usercount++}));break;case"remove":r.enabled?(e.userCount--,r.groups.forEach((function(t){e.groups.find((function(e){return e.id===t})).usercount--}))):(o.usercount--,r.groups.forEach((function(t){e.groups.find((function(e){return e.id===t})).disabled--})));break;default:P.error("Unknown action type in updateUserCounts: '".concat(n,"'"))}},setUserData:function(e,t){var r=t.userid,n=t.key,o=t.value;if("quota"===n){var i=OC.Util.computerFileSize(o);e.users.find((function(e){return e.id===r}))[n][n]=null!==i?i:o}else e.users.find((function(e){return e.id===r}))[n]=o},resetUsers:function(e){e.users=[],e.usersOffset=0}},C=h.default.CancelToken,_=null,R={state:{users:[],groups:[],orderBy:1,minPasswordLength:0,usersOffset:0,usersLimit:25,userCount:0},mutations:O,getters:{getUsers:function(e){return e.users},getGroups:function(e){return e.groups},getSubadminGroups:function(e){return e.groups.filter((function(e){return"admin"!==e.id&&"disabled"!==e.id}))},getPasswordPolicyMinLength:function(e){return e.minPasswordLength},getUsersOffset:function(e){return e.usersOffset},getUsersLimit:function(e){return e.usersLimit},getUserCount:function(e){return e.userCount}},actions:{getUsers:function(e,t){var r=t.offset,n=t.limit,o=t.search,i=t.group;return _&&_.cancel("Operation canceled by another search request."),_=C.source(),o="string"==typeof o?o:"",""!==(i="string"==typeof i?i:"")?b((0,p.generateOcsUrl)("cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}",{group:encodeURIComponent(i),offset:r,limit:n,search:o}),{cancelToken:_.token}).then((function(t){var r=Object.keys(t.data.ocs.data.users).length;return r>0&&e.commit("appendUsers",t.data.ocs.data.users),r})).catch((function(t){h.default.isCancel(t)||e.commit("API_FAILURE",t)})):b((0,p.generateOcsUrl)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:r,limit:n,search:o}),{cancelToken:_.token}).then((function(t){var r=Object.keys(t.data.ocs.data.users).length;return r>0&&e.commit("appendUsers",t.data.ocs.data.users),r})).catch((function(t){h.default.isCancel(t)||e.commit("API_FAILURE",t)}))},getGroups:function(e,t){var r=t.offset,n=t.limit,o=t.search;o="string"==typeof o?o:"";var i=-1===n?"":"&limit=".concat(n);return b((0,p.generateOcsUrl)("cloud/groups?offset={offset}&search={search}",{offset:r,search:o})+i).then((function(t){return Object.keys(t.data.ocs.data.groups).length>0&&(t.data.ocs.data.groups.forEach((function(t){e.commit("addGroup",{gid:t,displayName:t})})),!0)})).catch((function(t){return e.commit("API_FAILURE",t)}))},getUsersFromList:function(e,t){var r=t.offset,n=t.limit,o=t.search;return o="string"==typeof o?o:"",b((0,p.generateOcsUrl)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:r,limit:n,search:o})).then((function(t){return Object.keys(t.data.ocs.data.users).length>0&&(e.commit("appendUsers",t.data.ocs.data.users),!0)})).catch((function(t){return e.commit("API_FAILURE",t)}))},getUsersFromGroup:function(e,t){var r=t.groupid,n=t.offset,o=t.limit;return b((0,p.generateOcsUrl)("cloud/users/{groupId}/details?offset={offset}&limit={limit}",{groupId:encodeURIComponent(r),offset:n,limit:o})).then((function(t){return e.commit("getUsersFromList",t.data.ocs.data.users)})).catch((function(t){return e.commit("API_FAILURE",t)}))},getPasswordPolicyMinLength:function(e){return!(!OC.getCapabilities().password_policy||!OC.getCapabilities().password_policy.minLength)&&(e.commit("setPasswordPolicyMinLength",OC.getCapabilities().password_policy.minLength),OC.getCapabilities().password_policy.minLength)},addGroup:function(e,t){return U().then((function(r){return I((0,p.generateOcsUrl)("cloud/groups"),{groupid:t}).then((function(r){return e.commit("addGroup",{gid:t,displayName:t}),{gid:t,displayName:t}})).catch((function(e){throw e}))})).catch((function(r){throw e.commit("API_FAILURE",{gid:t,error:r}),r}))},renameGroup:function(e,t){var r=t.groupid,n=t.displayName;return U().then((function(t){return y((0,p.generateOcsUrl)("cloud/groups/{groupId}",{groupId:encodeURIComponent(r)}),{key:"displayname",value:n}).then((function(t){return e.commit("renameGroup",{gid:r,displayName:n}),{groupid:r,displayName:n}})).catch((function(e){throw e}))})).catch((function(t){throw e.commit("API_FAILURE",{groupid:r,error:t}),t}))},removeGroup:function(e,t){return U().then((function(r){return L((0,p.generateOcsUrl)("cloud/groups/{groupId}",{groupId:encodeURIComponent(t)})).then((function(r){return e.commit("removeGroup",t)})).catch((function(e){throw e}))})).catch((function(r){return e.commit("API_FAILURE",{gid:t,error:r})}))},addUserGroup:function(e,t){var r=t.userid,n=t.gid;return U().then((function(t){return I((0,p.generateOcsUrl)("cloud/users/{userid}/groups",{userid:r}),{groupid:n}).then((function(t){return e.commit("addUserGroup",{userid:r,gid:n})})).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{userid:r,error:t})}))},removeUserGroup:function(e,t){var r=t.userid,n=t.gid;return U().then((function(t){return L((0,p.generateOcsUrl)("cloud/users/{userid}/groups",{userid:r}),{groupid:n}).then((function(t){return e.commit("removeUserGroup",{userid:r,gid:n})})).catch((function(e){throw e}))})).catch((function(t){throw e.commit("API_FAILURE",{userid:r,error:t}),t}))},addUserSubAdmin:function(e,t){var r=t.userid,n=t.gid;return U().then((function(t){return I((0,p.generateOcsUrl)("cloud/users/{userid}/subadmins",{userid:r}),{groupid:n}).then((function(t){return e.commit("addUserSubAdmin",{userid:r,gid:n})})).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{userid:r,error:t})}))},removeUserSubAdmin:function(e,t){var r=t.userid,n=t.gid;return U().then((function(t){return L((0,p.generateOcsUrl)("cloud/users/{userid}/subadmins",{userid:r}),{groupid:n}).then((function(t){return e.commit("removeUserSubAdmin",{userid:r,gid:n})})).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{userid:r,error:t})}))},wipeUserDevices:function(e,t){return U().then((function(e){return I((0,p.generateOcsUrl)("cloud/users/{userid}/wipe",{userid:t})).catch((function(e){throw e}))})).catch((function(r){return e.commit("API_FAILURE",{userid:t,error:r})}))},deleteUser:function(e,t){return U().then((function(r){return L((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:t})).then((function(r){return e.commit("deleteUser",t)})).catch((function(e){throw e}))})).catch((function(r){return e.commit("API_FAILURE",{userid:t,error:r})}))},addUser:function(e,t){var r=e.commit,n=e.dispatch,o=t.userid,i=t.password,u=t.displayName,s=t.email,a=t.groups,c=t.subadmin,d=t.quota,f=t.language;return U().then((function(e){return I((0,p.generateOcsUrl)("cloud/users"),{userid:o,password:i,displayName:u,email:s,groups:a,subadmin:c,quota:d,language:f}).then((function(e){return n("addUserData",o||e.data.ocs.data.id)})).catch((function(e){throw e}))})).catch((function(e){throw r("API_FAILURE",{userid:o,error:e}),e}))},addUserData:function(e,t){return U().then((function(r){return b((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:t})).then((function(t){return e.commit("addUserData",t)})).catch((function(e){throw e}))})).catch((function(r){return e.commit("API_FAILURE",{userid:t,error:r})}))},enableDisableUser:function(e,t){var r=t.userid,n=t.enabled,o=void 0===n||n,i=o?"enable":"disable";return U().then((function(t){return y((0,p.generateOcsUrl)("cloud/users/{userid}/{userStatus}",{userid:r,userStatus:i})).then((function(t){return e.commit("enableDisableUser",{userid:r,enabled:o})})).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{userid:r,error:t})}))},setUserData:function(e,t){var r=t.userid,n=t.key,o=t.value,i=["email","displayname"];return-1!==["email","language","quota","displayname","password"].indexOf(n)&&"string"==typeof o&&(-1===i.indexOf(n)&&o.length>0||-1!==i.indexOf(n))?U().then((function(t){return y((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:r}),{key:n,value:o}).then((function(t){return e.commit("setUserData",{userid:r,key:n,value:o})})).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{userid:r,error:t})})):Promise.reject(new Error("Invalid request data"))},sendWelcomeMail:function(e,t){return U().then((function(e){return I((0,p.generateOcsUrl)("cloud/users/{userid}/welcome",{userid:t})).then((function(e){return!0})).catch((function(e){throw e}))})).catch((function(r){return e.commit("API_FAILURE",{userid:t,error:r})}))}}},k=o(26932),F=(o(73317),{APPS_API_FAILURE:function(e,r){(0,k.showError)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+r.error.response.data.data.message,{isHTML:!0}),console.error(e,r)},initCategories:function(e,t){var r=t.categories,n=t.updateCount;e.categories=r,e.updateCount=n},setUpdateCount:function(e,t){e.updateCount=t},addCategory:function(e,t){e.categories.push(t)},appendCategories:function(e,t){e.categories=t},setAllApps:function(e,t){e.apps=t},setError:function(e,t){var r=t.appId,n=t.error;Array.isArray(r)||(r=[r]),r.forEach((function(t){e.apps.find((function(e){return e.id===t})).error=n}))},clearError:function(e,t){var r=t.appId;t.error,e.apps.find((function(e){return e.id===r})).error=null},enableApp:function(e,t){var r=t.appId,n=t.groups,o=e.apps.find((function(e){return e.id===r}));o.active=!0,o.groups=n},disableApp:function(e,t){var r=e.apps.find((function(e){return e.id===t}));r.active=!1,r.groups=[],r.removable&&(r.canUnInstall=!0)},uninstallApp:function(e,t){e.apps.find((function(e){return e.id===t})).active=!1,e.apps.find((function(e){return e.id===t})).groups=[],e.apps.find((function(e){return e.id===t})).needsDownload=!0,e.apps.find((function(e){return e.id===t})).installed=!1,e.apps.find((function(e){return e.id===t})).canUnInstall=!1,e.apps.find((function(e){return e.id===t})).canInstall=!0},updateApp:function(e,t){var r=e.apps.find((function(e){return e.id===t})),n=r.update;r.update=null,r.version=n,e.updateCount--},resetApps:function(e){e.apps=[]},reset:function(e){e.apps=[],e.categories=[],e.updateCount=0},startLoading:function(e,t){Array.isArray(t)?t.forEach((function(t){i.ZP.set(e.loading,t,!0)})):i.ZP.set(e.loading,t,!0)},stopLoading:function(e,t){Array.isArray(t)?t.forEach((function(t){i.ZP.set(e.loading,t,!1)})):i.ZP.set(e.loading,t,!1)}}),S={enableApp:function(e,r){var n,o=r.appId,i=r.groups;return n=Array.isArray(o)?o:[o],U().then((function(r){return e.commit("startLoading",n),e.commit("startLoading","install"),I((0,p.generateUrl)("settings/apps/enable"),{appIds:n,groups:i}).then((function(r){return e.commit("stopLoading",n),e.commit("stopLoading","install"),n.forEach((function(t){e.commit("enableApp",{appId:t,groups:i})})),b((0,p.generateUrl)("apps/files")).then((function(){r.data.update_required&&((0,k.showInfo)(t("settings","The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds."),{onClick:function(){return window.location.reload()},close:!1}),setTimeout((function(){location.reload()}),5e3))})).catch((function(){Array.isArray(o)||e.commit("setError",{appId:n,error:t("settings","Error: This app cannot be enabled because it makes the server unstable")})}))})).catch((function(t){e.commit("stopLoading",n),e.commit("stopLoading","install"),e.commit("setError",{appId:n,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:o,error:t})}))})).catch((function(t){return e.commit("API_FAILURE",{appId:o,error:t})}))},forceEnableApp:function(e,t){var r,n=t.appId;return t.groups,r=Array.isArray(n)?n:[n],U().then((function(){return e.commit("startLoading",r),e.commit("startLoading","install"),I((0,p.generateUrl)("settings/apps/force"),{appId:n}).then((function(e){location.reload()})).catch((function(t){e.commit("stopLoading",r),e.commit("stopLoading","install"),e.commit("setError",{appId:r,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:n,error:t})}))})).catch((function(t){return e.commit("API_FAILURE",{appId:n,error:t})}))},disableApp:function(e,t){var r,n=t.appId;return r=Array.isArray(n)?n:[n],U().then((function(t){return e.commit("startLoading",r),I((0,p.generateUrl)("settings/apps/disable"),{appIds:r}).then((function(t){return e.commit("stopLoading",r),r.forEach((function(t){e.commit("disableApp",t)})),!0})).catch((function(t){e.commit("stopLoading",r),e.commit("APPS_API_FAILURE",{appId:n,error:t})}))})).catch((function(t){return e.commit("API_FAILURE",{appId:n,error:t})}))},uninstallApp:function(e,t){var r=t.appId;return U().then((function(t){return e.commit("startLoading",r),b((0,p.generateUrl)("settings/apps/uninstall/".concat(r))).then((function(t){return e.commit("stopLoading",r),e.commit("uninstallApp",r),!0})).catch((function(t){e.commit("stopLoading",r),e.commit("APPS_API_FAILURE",{appId:r,error:t})}))})).catch((function(t){return e.commit("API_FAILURE",{appId:r,error:t})}))},updateApp:function(e,t){var r=t.appId;return U().then((function(t){return e.commit("startLoading",r),e.commit("startLoading","install"),b((0,p.generateUrl)("settings/apps/update/".concat(r))).then((function(t){return e.commit("stopLoading","install"),e.commit("stopLoading",r),e.commit("updateApp",r),!0})).catch((function(t){e.commit("stopLoading",r),e.commit("stopLoading","install"),e.commit("APPS_API_FAILURE",{appId:r,error:t})}))})).catch((function(t){return e.commit("API_FAILURE",{appId:r,error:t})}))},getAllApps:function(e){return e.commit("startLoading","list"),b((0,p.generateUrl)("settings/apps/list")).then((function(t){return e.commit("setAllApps",t.data.apps),e.commit("stopLoading","list"),!0})).catch((function(t){return e.commit("API_FAILURE",t)}))},getCategories:function(e){return e.commit("startLoading","categories"),b((0,p.generateUrl)("settings/apps/categories")).then((function(t){return t.data.length>0&&(e.commit("appendCategories",t.data),e.commit("stopLoading","categories"),!0)})).catch((function(t){return e.commit("API_FAILURE",t)}))}},G={state:{apps:[],categories:[],updateCount:0,loading:{},loadingList:!1},mutations:F,getters:{loading:function(e){return function(t){return e.loading[t]}},getCategories:function(e){return e.categories},getAllApps:function(e){return e.apps},getUpdateCount:function(e){return e.updateCount}},actions:S},x={state:{},mutations:{},getters:{},actions:{setAppConfig:function(e,t){var r=t.app,n=t.key,o=t.value;return U().then((function(e){return I((0,p.generateOcsUrl)("apps/provisioning_api/api/v1/config/apps/{app}/{key}",{app:r,key:n}),{value:o}).catch((function(e){throw e}))})).catch((function(t){return e.commit("API_FAILURE",{app:r,key:n,value:o,error:t})}))}}};i.ZP.use(g.ZP);var D={API_FAILURE:function(e,r){try{var n=r.error.response.data.ocs.meta.message;(0,k.showError)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+n,{isHTML:!0})}catch(e){(0,k.showError)(t("settings","An error occurred during the request. Unable to proceed."))}console.error(e,r)}},T=new g.yh({modules:{users:R,apps:G,settings:{state:{serverData:{}},mutations:{setServerData:function(e,t){e.serverData=t}},getters:{getServerData:function(e){return e.serverData}},actions:{}},oc:x},strict:!1,mutations:D});i.ZP.use(u.default,{defaultHtml:!1}),(0,s.Z)(T,m),o.nc=btoa(OC.requestToken),i.ZP.prototype.t=t,i.ZP.prototype.n=n,i.ZP.prototype.OC=OC,i.ZP.prototype.OCA=OCA,i.ZP.prototype.oc_userconfig=oc_userconfig,new i.ZP({router:m,store:T,render:function(e){return e(c)}}).$mount("#content")}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=i,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=function(t,r,n,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var u=!0,a=0;a<r.length;a++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[a])}))?r.splice(a--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))},s.u=function(e){return{7418:"settings-apps-view",8351:"settings-users"}[e]+"-"+e+".js?v="+{7418:"2ad55c6a24de3d3371a5",8351:"6082afb457a1990ed51f"}[e]},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="nextcloud:",s.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var u,a;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){u=p;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",o+n),u.src=e),r[e]=[t];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),a&&document.head.appendChild(u)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=8562,function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){s.b=document.baseURI||self.location.href;var e={8562:0};s.f.j=function(t,r){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var i=s.p+s.u(t),u=new Error;s.l(i,(function(r){if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],u=r[1],a=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in u)s.o(u,n)&&(s.m[n]=u[n]);if(a)var d=a(s)}for(t&&t(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),s.nc=void 0;var a=s.O(void 0,[7874],(function(){return s(78778)}));a=s.O(a)}();
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=5c63c3eec29ed19c4686