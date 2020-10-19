<template>
  <div>
    <h5>{{ title }}</h5>
    <p>{{content}}</p>
    <div class="cpt">
      <component :is="component">组件内容</component>
    </div>
    <g-button @click="toggle">{{codevisible?"隐藏代码":"展示代码"}}</g-button>
    <pre v-if="codevisible" v-html="heightcode"></pre>
  </div>
</template>

<script lang="ts">
import GButton from '../lib/GButton.vue'
import {ref} from "vue"
export default {
  props: {
    component: Object,
    title: String,
    content:String,
    code:String
  },
  setup(props,context){
    const codevisible = ref(false)
    const heightcode = Prism.highlight(props.code, Prism.languages.html)
    const toggle = ()=>{
      codevisible.value = ! codevisible.value
    }
    return {
      codevisible,toggle,heightcode
    }
  },
  components: {
    GButton
  }
}
</script>

<style lang="scss" scoped>
h5{
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
}
p{
  font-size: 14px;
  color: #5e6d82;
  font-weight: 400;
  line-height: 1.5em;
  margin: 20px auto;
}
.cpt{
  padding: 10px;
  margin: 10px;
}
</style>
