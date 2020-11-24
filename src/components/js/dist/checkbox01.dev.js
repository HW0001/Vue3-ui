"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = exports.code = void 0;
var code = "\n<template>\n  <div>\n    <g-check-box v-model:checked=\"checked\" @onClick=\"itemClick\"\n      >\u9009\u9879\u5361</g-check-box\n    >\n  </div>\n</template>\n<script lang=\"ts\">\nimport { ref } from \"vue\";\nimport GCheckBox from \"../../lib/GCheckBox.vue\";\nexport default {\n  setup() {\n    const checked = ref(true);\n\n    const itemClick = (checkded) => {\n      console.log(checkded);\n    };\n    return { checked, itemClick };\n  },\n  components: { GCheckBox },\n};\n</script>\n";
exports.code = code;
var content = "\n    \u5355\u4E2Acheckbox\u901A\u8FC7\u4F20\u5165checked\u548ConClick\u4E8B\u4EF6\u76D1\u542Cbox\u53D8\u5316\n";
exports.content = content;