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
        <div v-for="item in list" class="list-posts" :key="item.id">{{ item.name }} <span class="right" @click="editList(item.body, item.name, item.id )"><i class="material-icons">edit</i></span><span class="right" @click="deleteItemFromList(item.id)"><i class="material-icons">delete</i></span></div>
      </div>
      <div class="col-md-6">
        <h2>Create / Edit Post</h2>
        <form @submit.prevent="savePost">
          <input type="hidden" name="id" v-model="idPost" />
          <div class="form-group col-md-6">
            <input type="text" id="title" placeholder="Title" v-model="title" class="form-control input-posts">
          </div>
          <div class="form-group">
            <textarea id="post-body" placeholder="Post body" v-model="postBody" class="form-control input-posts"></textarea>
          </div>
          <button type="submit"  class="btn btn-primary input-posts">Salvar</button>
        </form>
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
      list: [],
      idPost: null,
      title: null,
      postBody: null
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
    editList(body,nome, id){
      this.idPost = id;
      this.index = id-1;
      console.log(this.idPost);
      this.title = nome;
      this.postBody = body;
      // if (this.title == '' && this.postBody == '')
      //   this.idPost = this.users.length+1

      // this.title = title
      // this.titleBody = postBody
    },
    deleteItemFromList(itemId){
       this.list = this.list.filter(item => item.id !== itemId);
    },
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
    },
    savePost() {
      if(this.idPost != null){
        this.list[this.idPost-1].name = this.title;
        this.list[this.idPost-1].body = this.postBody;

      }else {
        this.list.push({name: this.title, body: this.postBody, id: this.selectedOption, postId: this.list.length+1 });
      }
      // Resetar os campos após salvar, se necessário
    
    }

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
  margin:10px;
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
h2 {
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
