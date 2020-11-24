"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = exports.code = void 0;
var code = "\n<template>\n  <div>\n    <g-check-box v-model:checked=\"checked\" @onClick=\"itemClick\"\n      >\u5168\u9009</g-check-box\n    >\n    <div class=\"space\"></div>\n    <g-check-box-group\n      :boxList=\"boxlist\"\n      groupName=\"box\"\n      :selecteds=\"selecteds\"\n      :disableds=\"disableds\"\n      @onChange=\"onChange\"\n    ></g-check-box-group>\n    {{ selecteds.join(\",\") }}\n  </div>\n</template>\n<script lang=\"ts\">\nimport { ref } from \"vue\";\nimport GCheckBox from \"../../lib/GCheckBox.vue\";\nimport GCheckBoxGroup from \"../../lib/GCheckBoxGroup.vue\";\nexport default {\n  setup() {\n    const checked = ref(true);\n    const boxlist = ref([\n      { text: \"\u7B2C\u4E00\u4E2A\", value: \"1\" },\n      { text: \"\u7B2C\u4E8C\u4E2A\", value: \"2\" },\n      { text: \"\u7B2C\u4E09\u4E2A\", value: \"3\" },\n    ]);\n    const selecteds = ref([\"1\"]);\n    const disableds = ref([\"1\"]);\n    const onChange = (val: string[]) => {\n      selecteds.value = val;\n    };\n    const itemClick = (checkded) => {\n      selecteds.value = checkded ? boxlist.value.map((b) => b.value) : [];\n    };\n    return { checked, boxlist, selecteds, onChange, disableds, itemClick };\n  },\n  components: { GCheckBox, GCheckBoxGroup },\n};\n</script>\n<style lang=\"scss\">\n.space {\n  height: 1em;\n}\n</style>\n\n";
exports.code = code;
var content = "\n    \u901A\u8FC7\u5C06box\u548Cgroupbox\u7EC4\u5408\u53EF\u4EE5\u8FBE\u5230\u5168\u9009\u7684\u6548\u679C\n";
exports.content = content;