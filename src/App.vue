<template>
  <div id="app">
    
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar

  }
}
</script>

<style>


nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #009BDE;
  padding: 10px;
}

nav a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
