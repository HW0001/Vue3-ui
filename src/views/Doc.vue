<template>
<div>
  <top-nav />
  <div class="content">
    <aside v-if="asidevisib">左边的</aside>
    <main>内容区域</main>
  </div>
  </div>
</template>
<script lang="ts">
import { inject,Ref } from 'vue';
import TopNav from "../components/TopNav.vue";
export default {
    setup(){
        const asidevisib =  inject<Ref<boolean>>("asidevis")
        return {
            asidevisib
        }
    },
  components: { TopNav },
};
</script>
 <style lang="scss" scoped>
 .content{
     display: flex;
     justify-content:space-between;
 }
 </style>