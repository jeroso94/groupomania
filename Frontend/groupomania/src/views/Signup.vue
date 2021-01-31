<template>
    <div class="signup">
        <form @submit.prevent="handleSubmit">
            <h3>📔 Inscription ✍🏻</h3>

            <div class="formStyle">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="pseudo@domain.com"/>
            </div>

            <div class="formStyle">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="****"/>
            </div>

            <div class="formStyle">
                <label for="password">Confirmation du mot de passe</label>
                <input type="password" class="form-control" v-model="confirmedPassword" name="confirmedPassword" id="confirmedPassword" placeholder="****"/>
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
            confirmedPassword:''
        }
    },
    methods:{
        handleSubmit(){
            const data = {
                email: this.email,
                password: this.password,
                confirmedPassword: this.confirmedPassword
            };
            //console.log(data);
            axios.post('api/auth/signup', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => { console.log(err) });

            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    .signup {
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