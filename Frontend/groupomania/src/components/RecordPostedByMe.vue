<template>
    <ul class="listStyle" >
        <li><h4>{{ record.title }} ({{ record.updatedAt }})</h4></li>
        <li class="listContent">
            <img v-bind:src="record.mediaUrl" width="320px" alt="Illustration"/>
            <p class="postedBy">(<span class="postedByLabel">Publié par</span>: {{ record.email }})</p>
        </li>
        <li>
            <form @submit.prevent="postDelete">
                <input type="submit" name="delete" value="Supprimer"/>
            </form>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
    props: ['record'],

    methods:{
        postDelete() {
            const token = localStorage.getItem('token');
            console.log(token);

            console.log(this.record.id);

            axios.delete('api/medias/' + this.record.id, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(res => {
                    console.log(res);
                    window.history.go();
                })
                .catch(err => { console.log(err) });                
        }    
    }
}
</script>

<style lang="scss" scoped>
    .listStyle {
        list-style-type: none;
        text-align: justify;
        color: lightcoral;
        font-size: 20px;
        font-weight: 500;
    }

    .listContent {
        text-align: center;
    }

    .postedByLabel {
        font-style: normal;
        border-bottom-style:dotted;
        font-weight: 300;
    }

    .postedBy {
        font-size: 16px;
        font-style: italic;
        font-weight: 300;
    }

    .formStyle {
        margin: auto;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color: lightcoral;
        font-size: 20px;
    }
</style>