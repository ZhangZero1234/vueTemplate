<template>
    <div id="container">
        <input type="text" @input="toBrother">
    </div>
</template>
<script>

    import EventBus from '../plugins/bus.js'
    export default{
        name:"TestAfterDelete2",
        data(){
            return {

            }
        },
        methods:{
            toBrother(){
                EventBus.$emit("fromBro","fromBro");
            }
        },
        created(){
            EventBus.$on("toBro",(val)=>{
                console.log(val);
            })
        }
    }
</script>
<style scoped>
    
</style>