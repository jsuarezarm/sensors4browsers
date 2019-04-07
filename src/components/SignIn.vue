<template>
    <div id="sign-in">
        <h1>Iniciar Sesión</h1>
        <!-- <form action="" method="post"> -->
        <div id="form">
            <label>Correo electrónico</label>
            <input type="text" v-model="email">
            <label>Contraseña</label>
            <input type="password" v-model="password">
            <!-- <input type="submit"> -->
            <button @click="login">Iniciar sesión</button>
            <p><router-link to="/signup">¿No tienes cuenta? Regístrate</router-link></p>
        <!-- </form> -->
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('home')
                },
                (err) => {
                    alert("Error: " + err.message)
                }
            );
        }
    }
}
</script>
<style lang="scss">
    #sign-in {
        // border: solid 1px;
        // border-radius: 5px;
        padding: 0.5em 1em 1em;
        // justify-content: center;
        display: inline-block;

        #form {
            width: 300px;

            input[type=text], input[type=password] {
                width: 90%;
                margin-bottom: 15px;
            }

            * {
                margin-left: auto;
                margin-right: auto;
                font-size: 1em;
            }
        }
    }
</style>
