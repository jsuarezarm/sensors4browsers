<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="navbar">
      <div id="left">
        <span><router-link to="/">Sensors4Browsers</router-link></span>
      </div>
      <div id="right">
        <span v-if="user">Hola {{user_email}}</span>
        <span class="sep" v-if="user">|</span>
        <span @click="signout" v-if="user">Cerrar Sesión</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user: false,
      user_email: ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = true
        this.user_email = user.email
      } else {
        this.user = false
        this.user_email = ''
      }
    });
  },
  methods: {
    signout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('signin')
      })
    }
  }
}
</script>

<style lang="scss">
body {
  background: #cbffe7;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#navbar {
  height: 2em;
  background: #42b983;
  padding: 1.5em;

  #left {
    float: left;

    a {
      text-decoration: none;
      color: #2c3e50;
    }
  }

  #right {
    float: right;
  }

  span {
    font-size: 1.3em;
  }

  .sep {
    margin-left: 1em;
    margin-right: 1em;
  }
}
</style>
