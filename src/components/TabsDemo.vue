<template>
<div>
<demo title="标签" :component="Tabs01"  :code="code1" :content="content1"></demo>
</div>
</template>

<script>
import  Tabs01 from './Tabs01.vue'
import  Demo from './Demo.vue'
import {code as code1,content as content1} from './js/tabs'
export default {
    components: {
      Demo
    },
  setup(){
      return{
        Tabs01,code1,content1
      }
  }
}
</script>
