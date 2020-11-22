<template>
  <div>
    <p>引用组件：</p>
    <pre>import { GButton } from "g-mc-ui";</pre>
    <p>引入css样式</p>
    <pre>import "g-mc-ui/lib/g-mc-ui.css";</pre>
    <P>目前支持的组件有：</P>
    <p>GButton、GDialog、GSwitch、GTabs</p>
    <router-link class="back" to="/doc/install">←安装</router-link>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 80%;
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
