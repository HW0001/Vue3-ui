<template>
  <div>
    <p>npm 安装：</p>
    <pre>npm i g-mc-ui</pre>
    <p>yarn 安装：</p>
    <pre>yarn add g-mc-ui</pre>
  </div>
  <router-link class="back" to="/doc/introduce">←介绍</router-link>
  <router-link class="next" to="/doc/startuse">使用 →</router-link>
</template>

<style lang="scss" scoped>
div {
  width: 50%;

  pre {
    margin: 20px 0 30px 20px;
  }
}

.back {
  float: left;
}

.next {
  float: right;
}

a {
  color: #42b983;
  font-weight: 600;
}
</style>
