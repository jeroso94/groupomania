<template>
    <div class="optout">
        <form @submit.prevent="handleSubmit">
            <h3>Suppression de mon profil utilisateur</h3>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="email" name="email" id="email" placeholder="pseudo@domain.com"/>
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
            email: ''
        }
    },
    methods:{
        handleSubmit(){
            const data = {
                email: this.email
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

<style scoped>
    .optout {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 40px;
        color: lightgrey;
        font-weight: 600;
    }
</style>