<template>
    <div class="hot">
        <form id="load" @submit.prevent="handleSubmit">
            <h2>🔥 Les dernières publications 🤏🏻</h2>

            <button form="load" type="submit">Valider</button>
            
            <div v-for="record in recordList" :key="record.id">
                <ul id="example-1" class="listStyle">
                    <li>
                        <h3>[post#id:{{ record.id }}] {{ record.title }}</h3>
                        <img v-bind:src="record.mediaUrl" width="320px"/>
                        <p class="postedBy">Publié par: {{ record.email }}</p>
                    </li>
                    <li v-for="comment in commentList" :key="comment.id">
                        <p class="postedBy" v-if="record.id == comment.mediaId">[comment#id:{{comment.id}}] Réaction de {{ comment.email }} [pour post #id:{{ comment.mediaId }}]: {{ comment.comment }}</p>
                    </li>
                    <li>
                        <form v-bind:id="record.id" @submit.prevent="commentSubmit($event)">
                            <label v-bind:form="record.id" for="comment"> Commentaire: {{record.id}}</label>
                            <textarea v-bind:form="record.id" rows="2" v-model="comment" name="comment" placeholder="Réagissez..."></textarea>
                            <button v-bind:form="record.id" type="submit">Valider {{record.id}}</button>
                        </form>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            recordList: [],
            commentList: [],
            comment: ''
        }
    },

    methods:{
        handleSubmit(){
            axios.get('api/medias')
            .then(res => {
                console.log(res.data);
                this.recordList = res.data;

                axios.get('api/comments')
                .then(resComments => {
                    console.log(resComments.data);
                    this.commentList = resComments.data;
                })
            })
            .catch(err => { console.log(err) });
        },

        async commentSubmit(event){
            const data = {
                'comment': this.comment,
                'userid': localStorage.getItem('userid')
            }
            console.log(this.comment);
            console.log(localStorage.getItem('userid'));
            console.log(data);

            const token = localStorage.getItem('token');
            console.log(token);

            console.log(event.target.id);

            const uri = 'api/comments/'+ event.target.id + '/';
            console.log (uri);
            await axios.post(uri + 'comment', data,  {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(res => {
                    console.log(res);
                    return this.$router.push('/');
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