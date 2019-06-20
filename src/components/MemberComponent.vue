<template>
    <div>
        MemberComponent <br>
       <!-- <label for="">TestAfterDelete: <input type="radio" v-model="str" value="TestAfterDelete"></label>
       <label for="">TestAfterDelete2: <input type="radio" v-model="str" value="TestAfterDelete2"></label> -->
        <!-- <p ref="myRef" v-for="item in a">{{item}}</p> -->
        <!-- <p ref="myRef">2</p> -->
        <!-- <Test-after-delete :m="obj" @getFromSon="getSonData">
                <template slot="btnContent"></template>  
        </Test-after-delete>
        <Test-after-delete2>
             
        </Test-after-delete2> -->
        <!-- <keep-alive> -->
                <component is="TestAfterDelete"></component>
                <component is="TestAfterDelete2"></component>
        <!-- </keep-alive> -->
       
    </div>
</template>
<script>
    import TestAfterDelete from "./TestAfterDelete.vue";
    import TestAfterDelete2 from "./TestAfterDelete2.vue";
    export default{
        name:"MemberComponent",
        data(){
            return{
                a:[1,2],
                obj:{a:1,b:2},
                str:"TestAfterDelete"
            }
        },
        methods:{
            getSonData($event){
                console.log($event);
            }
        },
        mounted(){
            this.$nextTick(function(){
                console.log(this.$refs.myRef);
            });
        },
        components:{
            TestAfterDelete,TestAfterDelete2
        }
    } 
</script>

<style scoped>

</style>