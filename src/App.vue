<template>
  <div id="app">
      <Header></Header>
      <transition>
          <router-view/>
      </transition>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/bar/Header.vue"
import Footer from "./components/bar/Footer.vue"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  },
  components:{Header,Footer}
}
</script>

<style>
  body{
    margin: 0;
    padding: 0; 
  }
  html{
    width: 100%;
    height:100vh;
  } 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);  
}
.v-enter-to{
  opacity: 1;
  transform: translateX(0%); 
}
.v-leave{
  opacity: 1;
  transform: translateX(0%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s ease;
}
</style>
