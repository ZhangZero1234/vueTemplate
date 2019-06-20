<template>
        <mt-header title="购物商城">
            <span  slot="left">
                <mt-button icon="back" @click="gotoBack">back</mt-button>
            </span>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
</template>

<script>
    export default{
        name:"Header",
        data(){
            return{
                
            }
        },
        methods:{
            gotoBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>