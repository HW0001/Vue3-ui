<template>
  <div class="doc">
    <top-nav :VisiblleIcon="true" />
    <div class="content">
      <aside class="asidediv" v-if="asidevisib">
        <aside-list></aside-list>
      </aside>
      <main class="maindiv">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/common/TopNav.vue";
import AsideList from "../components/common/AsideList.vue";
export default {
  setup() {
    const asidevisib = inject<Ref<boolean>>("asidevis");
    return {
      asidevisib,
    };
  },
  components: {
    TopNav,
    AsideList,
  },
};
</script>

<style lang="scss" scoped>
.doc {
  .content {
    display: flex;

    .asidediv {
      width: 150px;
    }

    .maindiv {
      padding-left: 50px;
      min-width: 50%;
      margin-top: 50px;
    }
  }
}
</style>
