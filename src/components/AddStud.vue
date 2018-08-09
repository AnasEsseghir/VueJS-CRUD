<template>
  <div id="app">
  <div class="container">
<form>
  <div class="form-group">
    <label>Nom</label>
    <input type="text" class="form-control" v-model="firstname" placeholder="Nom">
  </div>
  <div class="form-group">
    <label>Prénom</label>
    <input type="text" class="form-control" v-model="lastname" placeholder="Prénom">
  </div>
    <div class="form-group">
    <label>Sexe</label>
    <input type="text" class="form-control" v-model="gender" placeholder="Sexe">
  </div>
    <div class="form-group">
    <label>Email</label>
    <input type="text" class="form-control" v-model="email" placeholder="Email">    </div>
    <div class="form-group">
    <label>Mot de passe </label>
    <input type="text" class="form-control" v-model="userAccount.password" placeholder="Mot de passe ">    </div>
    <div class="form-group">
    <label>Téléphone</label>
    <input type="text" class="form-control" v-model="phoneNumber" placeholder="Téléphone">
  </div>
  <div class="row">
    <div class="col">
    <label>Adresse</label>
    <input type="text" class="form-control" v-model="address" placeholder="Adresse">    </div>
    <div class="col">
    <label>Code postale</label>
    <input type="text" class="form-control" v-model="zipcode" placeholder="Code postale">    </div>
  </div>
   <div class="form-group">
    <label>École </label>
    <select class="form-control" v-model="selectedschool">
    <option disabled value="">Choisissez votre école</option>
    <option v-bind:value="school" v-for="school in schools" :key="school.id">{{school.name}} </option>
    </select>
    </div>
  <button type="button" class="btn btn-outline-primary" @click="add()">Ajouter</button>
</form>
  </div>
  </div>
</template>

<script>
export default {
   mounted() {
    this.$school = this.$resource('School');
    this.$school.query().then((response)=>{this.schools=response.data},(response)=>{ console.log('erreur',response) });
    this.$webservice = this.$resource('Student');
  },
  data() {
  return {
          address: "",
          cityName:	"Abancourt",
          email: "",
          firstname: '',
          gender: '',
          lastname: '',
          phoneNumber: '',
          userAccount: {
              email: "",
              password : ""
          },
          userName: "",
          userRoles: "student_ml",
          zipcode: "",
          schools: [],
          school: {
            id: 0,
            mail: "",
            name: "",
            schoolType: ""
          },
          selectedschool: ""      
  }
  },
   methods: {
    add () {
    this.$webservice.save({
          address: this.address,
          cityName:	this.cityName,
          email: this.email,
          firstname: this.firstname,
          gender: this.gender,
          lastname: this.lastname,
          phoneNumber: this.phoneNumber,
          userAccount: {
              email: this.email,
              password : this.userAccount.password
          },
          userName: this.email,
          userRoles: "student_ml",
          zipcode: this.zipcode,
          school: {
            id: this.selectedschool.id,
            mail: this.selectedschool.mail,
            name: this.selectedschool.name,
            schoolType: this.selectedschool.schoolType
          }
    }).then((response)=>{
      this.$router.push('/')
    },(response)=>{ console.log('erreur',response) });
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
