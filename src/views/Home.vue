<template>
  <div class="topnavcontenor">
    <top-nav :VisiblleIcon="false" />
    <div class="content">
      <img src="../assets/logo.png" />
      <p>一个基于vue3打造的自定义组件项目，</p>
      <div>
        <a href="https://github.com/HW0001/Vue3-ui">github</a>
        <router-link to="/doc">开始</router-link>
      </div>
    </div>
  </div>
  <div class="extend">
    <div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <span>基于Vue3-compositionAPI</span>
      </div>
    </div>
    <div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <span>使用typescript</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.topnavcontenor {
  padding-bottom: 100px;

  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;

    img {
      width: 150px;
    }

    a {
      display: inline-block;
      border: 1px solid #42b983;
      text-align: center;
      margin-right: 20px;
      border-radius: 15px;
      color: #fff;
      padding: 10px 30px;
      background: rgb(79, 192, 141);
      cursor: pointer;
    }
  }
}

.extend {
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 32%;
    padding: 10px 0;

    > div {
      width: 280px;
      margin-left: auto;
      margin-right: auto;

      > svg {
        width: 64px;
        height: 64px;
        vertical-align: middle;
      }

      > span {
        vertical-align: middle;
      }
    }
  }

  @media (max-width: 800px) {
    > div {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    > div {
      width: 100%;
    }
  }
}
</style>
