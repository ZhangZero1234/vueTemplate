<template>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Cart">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</template>
<script>
    export default{
        name:"Footer",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>