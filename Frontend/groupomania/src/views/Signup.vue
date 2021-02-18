<template>
    <div class="signup">
        <form @submit.prevent="handleSubmit">
            <h3>📔 Inscription ✍🏻</h3>

            <div class="formStyle">
                <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="Identifiant:pseudo@domain.com"/>
            </div>

            <div class="formStyle">
                <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Mot de passe"/>
            </div>

            <div class="formStyle">
                <input type="password" class="form-control" v-model="confirmedPassword" name="confirmedPassword" id="confirmedPassword" placeholder="Confirmation du mot de passe"/>
            </div>
            <input type="submit" name="submit" value="s'te plaît, merci !"/>
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
        font-size: 30px;
        color: lightgrey;
        font-weight: 600;
    }

    h3 {
        margin-top: 70px;
        margin-bottom: 150px;
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

    input[type='email'], input[type='password'] {
        margin: 25px 5px 5px 5px;
        width: 100%;
        height: 50px;
        border-radius: 3px;
        border: 1px solid #CCC;
        padding: 8px;
        font-size: 20px;
        font-family: Verdana;
        box-shadow: 1px 1px 5px #CCC;
        &:hover {
            border: 3px solid lightblue;
            padding: 8px;
            font-size: 20px;
            font-family: Verdana;
            box-shadow: 1px 1px 5px #CCC;
        }
    }

    input[type='submit'] {
        margin: 50px 5px 100% 5px;
        width: 100%;
        height: 34px;
        border: 2px solid white;
        background-color:lightblue;
        font-family: Verdana;
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:darkslateblue;
            color:#fff;
        }
    }
</style>