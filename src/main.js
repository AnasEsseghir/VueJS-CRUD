// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2Filters from 'vue2-filters'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
//FILTRATION (TRI PAR NOM DE COLLEGE DANS LE FICHIER VUE)
Vue.use(Vue2Filters)
//ACTIVATION DE L'UTILISATION DE VUERESOURCE POUR CONSOMMER WS REST
Vue.use(VueResource)

//URL du WEBSERVICE REST À UTILISER
Vue.http.options.root = "http://localhost:8080/offreeduwar/api"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
