<template>
  <g-menu>
    <g-menu-group-item>
      <template v-slot:title> <span>第一项</span> </template>
      <g-menu-item to="/doc/menu/menudame1">1.1</g-menu-item>
      <g-menu-item to="/doc/menu/menudame2">1.2</g-menu-item>
    </g-menu-group-item>
    <g-menu-group-item>
      <template v-slot:title> <span>第二项</span></template>
      <g-menu-item to="/doc/menu/menudame3">2.1</g-menu-item>
      <g-menu-item to="/doc/menu/menudame4">2.2</g-menu-item>
    </g-menu-group-item>
  </g-menu>
  <div>
    演示demo：
    <router-view />
  </div>
</template>

<script>
import GMenu from '../lib/GMenu.vue'
import GMenuGroupItem from '../lib/GMenuGroupItem.vue'
import GMenuItem from '../lib/GMenuItem.vue'
export default {
  components: {
    GMenu,
    GMenuGroupItem,
    GMenuItem
  }
}
</script>

<style scoped>

</style>