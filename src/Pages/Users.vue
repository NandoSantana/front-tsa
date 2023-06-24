<template>
  <div class="container">
    <br/>
    <select v-model="selectedOption" @change="changeList" class="custom-select">
      <option v-for="option in users" :value="option.id"  :key="option.id">{{ option.name }}</option>
    </select>
    <br/>
    <br/>
    <div class="container">
      <form class="row">
        <div class="form-group col-md-4">
            <label><h3>Name:</h3></label>
            <div class="input-posts">
            {{ list.name }} 
            </div>
        </div>

        <div class="form-group  col-md-4">
        <label><h3>Username:</h3></label>
        <div class=" input-posts">
            {{ list.username }} 
            </div>
        </div>

        <div class="form-group  col-md-4">
        <label><h3>Email:</h3></label>
        <div class=" input-posts">
            {{ list.email }} 
            </div>
        </div>
      
        <div class="form-group pd col-md-4">
        <label><h3>Phone:</h3></label>
        <div class=" input-posts">
            {{ list.phone }} 
            </div>
        </div>
      
        <div class="form-group pd col-md-4">
            <label><h3>Street:</h3></label>
            <div class=" input-posts">
                {{ list.address.street }} 
            </div>
        </div>

        <div class="form-group pd col-md-4">
            <label><h3>City:</h3></label>
            <div class=" input-posts">
                {{ list.address.city }} 
            </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GetUsers',
  data() {
    return {
      selectedOption: 1,
      users: [],
      list: [],

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
      axios.get('https://jsonplaceholder.typicode.com/users/'+this.selectedOption)
      .then(response => {
        console.log(response.data);
        return this.list = response.data
        // Faça o processamento dos dados recebidos
      })
      .catch(error => {
        console.error(error);
        // Lide com o erro de requisição
      });
    },

  },
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.custom-select {
  padding: 10px;
  border-radius: 25px;
  color:#FFF;
  background-color: #0379AB;
  border: 1px solid #ccc;
  width: 200px;
  box-shadow : 0px  4px  4px  rgba(0, 0, 0, 0.25);
}
.right{
  position:relative;
  float:right;
  padding:2px;
}

.input-posts {
  padding:10px;
  color:#000;
  background-color: #c9c9c9;
  border-radius: 15px;
  box-shadow : 0px  4px  4px  rgba(0, 0, 0, 0.25);
}
.list-posts {
  padding:10px;
  margin:10px;
  color:#FFF;
  background-color: #009BDE;
  border-radius: 15px;
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
    padding-top: 86px;
    color:#0379AB;
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
