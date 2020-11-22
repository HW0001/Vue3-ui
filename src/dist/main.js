"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
require("./lib/golu.scss");
require("./index.scss");
var App_vue_1 = require("./App.vue");
// import './assets/normalize.css'
var router_1 = require("./router");
require("Prismjs");
require("Prismjs/themes/prism.css");
var Prism = window.Prism;
var app = vue_1.createApp(App_vue_1["default"]);
app.use(router_1["default"]);
app.mount('#app');
