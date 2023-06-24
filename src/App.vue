<template>
  <div id="app">
    
    <NavBar/>
  
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  font-family: Roboto
}

nav {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0379AB;
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
