import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCZ86ZKaI47qZWmS8QSH0t_I2z-9-PcrQA',
  authDomain: 'tfmsensors.firebaseapp.com',
  databaseURL: 'https://tfmsensors.firebaseio.com',
  projectId: 'tfmsensors',
  storageBucket: 'tfmsensors.appspot.com',
  messagingSenderId: '49440443880'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
