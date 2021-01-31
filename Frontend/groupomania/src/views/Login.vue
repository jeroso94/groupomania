<template>
    <div class="login">
        <form @submit.prevent="handleSubmit">
            <h3>👨🏻‍🚀 Connexion 👏🏻</h3>

            <div class="formStyle">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="pseudo@domain.com"/>
            </div>

            <div class="formStyle">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="****"/>
            </div>

            <button type="submit">Valider</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            email: '',
            password:'',
            authenticatedUser: localStorage.getItem('user')
        }
    },
    methods:{
        handleSubmit(){
            const data = {
                email: this.email,
                password: this.password
            };
            //console.log(data);
            axios.post('api/auth/login', data)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.user);
                localStorage.setItem('userid', res.data.userId);
                window.history.go();

            })
            .catch(err => { console.log(err) });
            this.$router.push('/message');
        }
    }
}
</script>

<style scoped>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 40px;
        color: lightgrey;
        font-weight: 600;
    }

    .formStyle {
        margin: auto;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color: lightblue;
        font-size: 20px;
    }
</style>