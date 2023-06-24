<template>
  <div class="container">
    <br/>
    <select v-model="selectedOption" @change="changeList" class="custom-select">
      <option v-for="option in users" :value="option.id"  :key="option.id">{{ option.name }}</option>
    </select>
    <br/>
    <br/>
    <div class="row">
      <div class="col-md-6">
        <h2>Posts:</h2>
        <div v-for="item in list" class="list-posts" :key="item.id">{{ item.name }}</div>
      </div>
      <div class="col-md-6">
        <h2>Create / Edit Post</h2>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PostComponents',
  props: {
    msg: String
  },
  data() {
    return {
      selectedOption: 1,
      users: [],
      list: []
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
        this.changeList();
        // Faça o processamento dos dados recebidos
      })
      .catch(error => {
        console.error(error);
        // Lide com o erro de requisição
      });
  },
  methods: {
    changeList(){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+this.selectedOption+'/comments')
      .then(response => {
        console.log(response.data);
        return this.list = response.data
        // Faça o processamento dos dados recebidos
      })
      .catch(error => {
        console.error(error);
        // Lide com o erro de requisição
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.custom-select {
  padding: 10px;
  border-radius: 5px;
  color:#FFF;
  background-color: #009BDE;
  border: 1px solid #ccc;
  width: 200px;
  box-shadow : 0px  4px  4px  rgba(0, 0, 0, 0.25);
}

.list-posts {
  padding:10px;
  margin:10px;
  color:#FFF;
  background-color: #009BDE;
  box-shadow : 0px  4px  4px  rgba(0, 0, 0, 0.25);
}

.custom-select:focus {
  outline: none;
  border-color: #009BDE;
}
.user-item {
  padding: 10px;
  background-color: #f2f2f2;
  margin-bottom: 5px;
  border-radius: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
