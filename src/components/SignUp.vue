<template>
    <div id="sign-up">
        <h1>Registro</h1>
        <div id="form">
            <label>Correo electrónico</label>
            <input type="text" v-model="email">
            <label>Contraseña</label>
            <input type="password" v-model="password">
            <label>Confirmar contraseña</label>
            <input type="password" v-model="confirmpassword">
            <button @click="signup">Registrarse</button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
            confirmpassword: ''
        }
    },
    methods: {
        signup: function() {
            if(this.password == this.confirmpassword) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
}
</script>
<style lang="scss">
    #sign-up {
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
