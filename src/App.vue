<template>
  <div id="app">
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" to="/">Accueil</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="AddStud">Ajouter Etudiant</router-link>
  </li>
</ul>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App'
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
