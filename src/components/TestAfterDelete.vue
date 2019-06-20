<template>
    <div>
        122222
        <!-- <button @click="toFather">send</button> -->
        <input type="text" @input="toBrother">
        <!-- <button @click="toFather"><slot name="btnContent"></slot></button> -->
    </div>
</template>
<script>
    
    import EventBus from '../plugins/bus.js'
    export default{
        name:"TestAfterDelete",
        data(){
            return {

            }
        },
        props:{
            m:{
                type:Object,
                default:function(){
                    return {msg:"我是备胎"}
                }
            }
        },
        created(){
            console.log(this.m);
            EventBus.$on("fromBro",(val)=>{
                console.log(val);
            });
        },
        methods:{
           toBrother(){
               console.log("sss");
             EventBus.$emit("toBro","toBro");
           }
        }
    }
</script>
<style scoped>

</style>