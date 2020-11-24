"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = exports.code = void 0;
var code = "\n<template>\n  <div>\n    <g-check-box-group\n      :boxList=\"boxlist\"\n      groupName=\"box\"\n      :selecteds=\"selecteds\"\n      :disableds=\"disableds\"\n      @onChange=\"onChange\"\n    ></g-check-box-group>\n    {{ selecteds.join(\",\") }}\n  </div>\n</template>\n<script lang=\"ts\">\nimport { ref } from \"vue\";\nimport GCheckBoxGroup from \"../../lib/GCheckBoxGroup.vue\";\nexport default {\n  setup() {\n    const boxlist = ref([\n      { text: \"\u7B2C\u4E00\u4E2A\", value: \"1\" },\n      { text: \"\u7B2C\u4E8C\u4E2A\", value: \"2\" },\n      { text: \"\u7B2C\u4E09\u4E2A\", value: \"3\" },\n    ]);\n    const selecteds = ref([\"1\"]);\n    const disableds = ref([\"1\"]);\n    const onChange = (val: string[]) => {\n      selecteds.value = val;\n    };\n\n    return { boxlist, selecteds, onChange, disableds };\n  },\n  components: { GCheckBoxGroup },\n};\n</script>\n";
exports.code = code;
var content = "\n    \u901A\u8FC7GCheckBoxGroup\u7EC4\u4EF6\u6765\u521B\u5EFA\u548C\u63A7\u5236box\n";
exports.content = content;