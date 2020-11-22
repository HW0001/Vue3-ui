"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("./views/Home.vue");
var Doc_vue_1 = require("./views/Doc.vue");
var SwitchDemo_vue_1 = require("./components/SwitchDemo.vue");
var ButtonDemo_vue_1 = require("./components/ButtonDemo.vue");
var DialogDemo_vue_1 = require("./components/DialogDemo.vue");
var TabsDemo_vue_1 = require("./components/TabsDemo.vue");
var Introduce_vue_1 = require("./components/Introduce.vue");
var Install_vue_1 = require("./components/Install.vue");
var StartUse_vue_1 = require("./components/StartUse.vue");
var CheckBoxDemo_vue_1 = require("./components/CheckBoxDemo.vue");
var history = vue_router_1.createWebHistory();
var router = vue_router_1.createRouter({
    history: history,
    routes: [{
            redirect: "/home",
            path: "/"
        }, {
            path: '/home', component: Home_vue_1["default"]
        }, {
            path: '/doc', component: Doc_vue_1["default"], children: [
                { path: '', redirect: "/doc/introduce" },
                { path: '/doc/introduce', component: Introduce_vue_1["default"] },
                { path: '/doc/install', component: Install_vue_1["default"] },
                { path: '/doc/startuse', component: StartUse_vue_1["default"] },
                { path: '/doc/switch', component: SwitchDemo_vue_1["default"] },
                { path: '/doc/button', component: ButtonDemo_vue_1["default"] },
                { path: '/doc/dialog', component: DialogDemo_vue_1["default"] },
                { path: '/doc/tabs', component: TabsDemo_vue_1["default"] },
                { path: '/doc/checkbox', component: CheckBoxDemo_vue_1["default"] },
            ]
        }]
});
exports["default"] = router;
