<template>
    <div class="optout">
        <header><h3>❌ Suppression du profil 🧨</h3></header>
        <section>
            <form class="formStyle" @submit.prevent="handleSubmit">
                <label for="email"><input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="Identifiant:pseudo@domain.com" title="email"/></label>
                <label for="password"><input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Mot de passe" title="password"/></label>
                <label for="submit"><input type="submit" name="submit" value="Confirmer"/></label>
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
            password:''
        }
    },
    methods:{
        handleSubmit(){
            const data = {
                email: this.email,
                password: this.password
            };
            //console.log(data);
            axios.post('api/auth/optout', data)
            .then(res => {
                console.log(res);
                localStorage.removeItem('token');
                this.$router.push('/signup');
            })
            .catch(err => { console.log(err) });
        }
    }
}
</script>

<style lang="scss" scoped>
    .optout {
        height: 100%;
        width: 100%;
        font-size: 30px;
        color: lightgrey;
        font-weight: 600;
    }

    header {
        padding-top: 70px;
        padding-bottom: 150px;
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
        font-size: 20px;
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
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:black;
            color:#fff;
        }
    }
</style>