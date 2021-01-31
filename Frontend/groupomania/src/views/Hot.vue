<template>
    <div class="hot">
        <form @submit.prevent="handleSubmit">
            <h2>🔥 Les dernières publications 🤏🏻</h2>

            <button type="submit">Valider</button>
            <ul id="example-1" class="listStyle">
                <li v-for="record in records" :key="record.id">
                    <h3>{{ record.title }}</h3>
                    <img v-bind:src="record.mediaUrl" width="320px"/>
                    <p class="postedBy">Publié par: {{ record.email }}</p>

                    <form @submit.prevent="commentSubmit">
                        <label for="comment">Commentaire:</label>
                        <textarea id="comment" rows="2" v-model="comment" name="comment" placeholder="Réagissez..."></textarea>
                        <button type="submit">Valider</button>
                    </form>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            records: [],
            comment: ''
        }
    },
    methods:{
        handleSubmit(){
            axios.get('api/medias')
            .then(res => {
                console.log(res.data);
                this.records = res.data;
            })
            .catch(err => { console.log(err) });
        },

        async commentSubmit(){
            const formdata = new FormData ();
            formdata.append ('comment', this.comment);
            formdata.append ('userid',localStorage.getItem('userid'));
            
            const token = localStorage.getItem('token');

            console.log(this.comment);
            console.log(localStorage.getItem('userid'));
            console.log(formdata);

            const uri = 'api/comments/24/'; // + this.records(id);
            console.log (uri);
            await axios.post(uri + 'comment', formdata,  {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': `multipart/form-data`
                }
            })
                .then(res => {
                    console.log(res);
                    this.$router.push('/');
                })
                .catch(err => { console.log(err) });
        }
    }
}
</script>

<style scoped>
    .hot {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 40px;
        color: lightgrey;
        font-weight: 600;
    }

    .listStyle {
        color: lightblue;
        list-style-type: none;
    }

    .postedBy {
        font-size: 20px;
        font-style: italic;
        color: lightblue;
        font-weight: 600;
    }
</style>