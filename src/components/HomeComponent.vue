<template>
    <div>
            <mt-swipe :auto="0">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
            HomeComponent
    </div>
</template>
<script>
    export default{
        name:"HomeComponent",
        data(){
            return{

            }
        }
    } 
</script>

<style scoped>
    .mint-swipe {
        height:200px;
    }
    .mint-swipe-item:nth-child(1){
        background-color: aqua;
    }
    .mint-swipe-item:nth-child(2){
        background-color:blueviolet;
    }
    .mint-swipe-item:nth-child(3){
        background-color:chocolate;
    }
</style>