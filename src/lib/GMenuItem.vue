<template>
<li class="golu-menu-item-li" @click="liclick">
    <a :href="to">
        <slot />
    </a>
</li>
</template>

<script lang="ts">
export default {
    setup(props, context) {
        const to = context.attrs.to
        const liclick = () => {
            console.log(context.attrs)
        }
        return {
            liclick,
            to
        }
    }
}
</script>

<style lang="scss">
.golu-menu-item-li {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
}
</style>
