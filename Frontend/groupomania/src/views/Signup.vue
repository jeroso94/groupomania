<template>
    <div class="signup">
        <header><h3>📔 Inscription ✍🏻</h3></header>
        <section>
            <form class="formStyle" @submit.prevent="handleSubmit">
                <label for="email"><input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="pseudo@groupomania.fr" title="email"/></label>
                <label for="password"><input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Mot de passe" title="password"/></label>
                <label for="confirmedpassword"><input type="password" class="form-control" v-model="confirmedPassword" name="confirmedPassword" id="confirmedPassword" placeholder="Confirmation du mot de passe" title="confirmedPassword"/></label>
                <label for="submit"><input type="submit" name="submit" value="Je valide !"/></label>
            </form>
        </section>
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

            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
    .signup {
        height: 100%;
        width: 100%;
        font-size: 2rem;
        color: lightgrey;
        font-weight: 600;
    }

    header {
        padding-bottom: 2%;
    }

    section {
        margin-left : 10%;
        margin-right : 10%;
    }

    .formStyle {
        margin: 15px;
        color: lightcoral;
        font-size: 20px;
    }

    input[type='email'], input[type='password'] {
        margin: 25px 0;
        width: 99%;
        height: 50px;
        border-radius: 3px;
        border: 1px solid #CCC;
        padding: 4px;
        font-size: 1rem;
        font-family: Verdana;
        box-shadow: 1px 1px 5px #CCC;
        &:hover {
            border: 2px solid lightcoral;
            padding: 4px;
            font-size: 20px;
            font-family: Verdana;
            box-shadow: 1px 1px 5px #CCC;
        }
    }

    input[type='submit'] {
        margin: 25px 0 100% 0;
        width: 100%;
        height: 34px;
        border: 2px solid white;
        background-color:lightcoral;
        font-family: Verdana;
        // font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color: black;
            color:#fff;
        }
    }
</style>