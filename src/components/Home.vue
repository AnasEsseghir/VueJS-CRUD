<template>
  <div id="app">
  <div class="form-group">
  <label>Recherche d'un étudiant</label>
  <input type="text" v-model="search" class="form-control" placeholder="Nom ou prénom de l'étudiant"/>
  </div>
<table class="table">
    <thead>
  <tr>
  <th scope="col">Sexe</th>
  <th scope="col">FirstName</th>
  <th scope="col">LastName</th>
  <th scope="col">Email</th>
  <th scope="col">Ecole</th>
  <th scope="col">Modification</th>
  <th scope="col">Suppression</th>
  </tr>
  </thead>
    <tbody>
        <router-link :to="{ name: 'StudDetails', params: { student: stud }}" v-for="stud in orderBy(filteredstudents, 'id')" :key="stud.id" tag="tr">     
          <td>{{stud.gender}}</td>
       <td>
       <input type="text" v-model="stud.firstname"></td>
       <td>{{stud.lastname}}</td>
       <td>{{stud.email}}</td>
       <td>{{stud.school.name}}</td>
          <td><button @click="modify(stud)" class="btn btn-secondary">Modifier</button></td>
   <td><button @click="destroy(stud)" class="btn btn-danger">Supprimer</button></td>
       </router-link>

   </tbody>
  </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      students: [],
      search: ''
      }
  },
  mounted() {
    this.$student = this.$resource('Student{/id}');
    this.$student.query().then((response)=>{this.students=response.data},(response)=>{ console.log('erreur',response) });
  },
  methods: {
    modify (stud) {
    this.$student.update({id: stud.id},stud).then((response)=>{
    },(response)=>{ console.log('erreur',response) });
    },
    destroy (stud) {
         this.$student.remove({id: stud.id}).then((response)=>{
           this.students= this.students.filter(s => s !== stud)
         },(response)=>{ console.log('erreur',response) });
    }
  },
  computed: {
    filteredstudents: function(){
      return this.students.filter((stud)=>{
        return stud.firstname.toLowerCase().match(this.search.toLowerCase()) || stud.lastname.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
