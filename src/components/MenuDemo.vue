<template>
<div>
  <demo title="menu菜单" :component="Menu01"  :code="code1" :content="content1"></demo>
</div>
</template>

<script lang="ts">
import  Menu01 from './Menu01.vue'
import  Demo from './Demo.vue'
import {code as code1,content as content1} from './js/menu01'
export default {
  components: {
    Demo
  },
  setup(){
    return{
      Menu01,code1,content1
    }
  }
}
</script>
