<template>
<div class="topnavcontenor">
    <top-nav />
    <div class="content">
        <img src="../assets/logo.png" />
        <p>一个基于vue3打造的自定义组件项目，</p>
        <div> <a>github</a>
            <router-link to='/doc'>开始</router-link>
        </div>
    </div>
</div>
<div class="extend">
    <div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Vue"></use>
            </svg>
            <span>基于Vue3compositionAPI</span>
        </div>
    </div>
    <div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <span>使用typescript语法</span>
        </div>
    </div>
    <div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <span>广告位招租</span>
        </div>
    </div>
    <div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <span>广告位招租</span>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {
        TopNav,
    }
};
</script>

<style lang="scss" scoped>
.topnavcontenor {
    background: linear-gradient(145deg, rgba(222, 251, 250, 1) 0%, rgba(185, 229, 232, 1) 100%);
    padding-bottom: 100px;
    clip-path: ellipse(100% 90% at 50% 0);

    .content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding-top: 30px;

        img {
            width: 200px;
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
        }
    }
}

.extend {
    display: flex;
    flex-wrap: wrap;

    >div {
        width: 32%;
        height: 150px;

        >div {
            width: 280px;
            margin-left: auto;
            margin-right: auto;

            >svg {
                width: 64px;
                height: 64px;
                vertical-align: middle;
            }

            >span {
                vertical-align: middle;
            }
        }
    }

    @media (max-width:800px) {
        >div {
            width: 50%;

        }
    }

    @media (max-width:500px) {
        >div {
            width: 100%;
        }
    }
}
</style>
