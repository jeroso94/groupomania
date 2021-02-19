
<template>
    <div class="recordStyle">
        <h3>{{ record.title }} ({{ record.updatedAt }})</h3>
        <article>
            <header>
                <img v-bind:src="record.mediaUrl" width="320px" alt="illustration"/>
                <h4 class="postedBy">(<span class="postedByLabel">Publié par</span>: {{ record.email }})</h4>
            </header>

            <commentDisplay :record="record" :comment="commentRecord" v-for="commentRecord in commentList" :key="commentRecord.id"></commentDisplay>

            <form @submit.prevent="commentSubmit">
                <label for="commentField"><textarea rows="2" v-model="commentField" name="commentField" placeholder="Rédigez votre commentaire..." title="commentField"></textarea></label>
                <label for="submit"><input type="submit" name="submit" value="Poster le commentaire"/></label>
            </form>
        </article>
    </div>
</template>

<script>
import axios from 'axios';
import commentDisplay from '../components/Comment.vue';
export default {
    components: { commentDisplay },
    props: ['record', 'commentList'],

    data() {
        return {
            commentField: ''
        }
    },

    methods:{
        async commentSubmit(){
            const data = {
                'comment': this.commentField,
                'userid': localStorage.getItem('userid')
            }
            console.log(this.commentField);
            console.log(localStorage.getItem('userid'));
            console.log(data);

            const token = localStorage.getItem('token');
            console.log(token);

            const uri = 'api/comments/'+ this.record.id + '/';
            console.log (uri);
            await axios.post(uri + 'comment', data,  {
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
    .recordStyle {
        padding-left: 15px;
        padding-right: 15px;
        list-style-type: none;
        text-align: justify;
        color: lightcoral;
        font-size: 20px;
        font-weight: 500;
    }

    h3 {
        font-size: 24px;
        font-weight: 800;
    }

    article {
        margin-bottom: 35px;
    }

    header {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 5px;
    }

    textarea {
        margin: 5px;
        width: 500px;
        height: 60px;
        border-radius: 3px;
        border: 1px solid #CCC;
        padding: 8px;
        font-size: 20px;
        font-family: Verdana;
        box-shadow: 1px 1px 5px #CCC;
        &:hover {
            border: 2px solid lightcoral;
            padding: 8px;
            font-size: 20px;
            font-family: Verdana;
            box-shadow: 1px 1px 5px #CCC;
        }
    }

    input {
        margin: 5px;
        cursor: pointer;
        // width: 150px;
        height: 34px;
        border: 2px solid white;
        background-color:lightcoral;
        font-family: Verdana;
        font-weight: 600;
        font-size: 12px;
        &:hover {
            // width: 150px;
            // height: 34px;
            border: 2px solid white;
            background-color:black;
            color:#fff;
        }
    }
</style>