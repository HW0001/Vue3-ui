<template>
<div>
    <demo title="引用组件方式" :content="content1" :component="Dialog01" :code="code1"></demo>
    <demo title="调用方法打开" :content="content2" :component="Dialog02" :code="code2"></demo>
</div>
</template>

<script>
import Dialog01 from './Dialog01.vue'
import Dialog02 from './Dialog02.vue'
import Demo from './Demo.vue'
import {
    code as code1,
    content as content1
} from './js/dialog01'
import {
    code as code2,
    content as content2
} from './js/dialog02'
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Dialog01,
            Dialog02,
            code1,
            code2,
            content1,
            content2
        }
    }
}
</script>
