<template>
<div class="golu-menu">
    <component v-for="(item,index) in firsteles" :is="item" :key="index"></component>
</div>
</template>

<script lang="ts">
export default {
    setup(props, context) {
        const firsteles = context.slots.default()
        console.log(firsteles)
        return {
            firsteles
        }
    }
}
</script>

<style lang="scss">
.golu-menu {
    display: inline-block;
    padding: 20px 10px;
}
</style>
