
<template>
    <ul class="listStyle">
        <li><h3>{{ record.title }} ({{ record.updatedAt }})</h3></li>
        <li class="listContent">
            <img v-bind:src="record.mediaUrl" width="320px"/>
            <p class="postedBy">(<span class="postedByLabel">Publié par</span>: {{ record.email }})</p>
        </li>
        <li v-for="comment in commentList" :key="comment.id">
            <p class="commentedBy" v-if="record.id == comment.mediaId"><span class="commentedByLabel">{{ comment.email }}</span>: {{ comment.comment }} ({{ comment.updatedAt }})</p>
        </li>
        <li>
            <form @submit.prevent="commentSubmit">
                <textarea rows="2" v-model="comment" name="comment" placeholder="Réagissez..."></textarea>
                <input type="submit" name="submit" value="Poster le commentaire"/>
            </form>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
    props: ['record', 'commentList'],

    data() {
        return {
            comment: ''
        }
    },

    methods:{
        async commentSubmit(){
            const data = {
                'comment': this.comment,
                'userid': localStorage.getItem('userid')
            }
            console.log(this.comment);
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
                    // let result = JSON.parse(res);
                    // this.commentList.push(result.comment)
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
        color: lightblue;
        font-size: 20px;
        font-weight: 500;
    }

    h3 {
        font-size: 24px;
        font-weight: 800;
    }

    .listContent {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 5px;
    }

    .postedByLabel {
        font-style: normal;
        border-bottom-style:dotted;
        font-weight: 300;
    }

    .postedBy {
        font-size: 16px;
        font-style: italic;
        // color: lightblue;
        font-weight: 300;
    }

    .commentedByLabel {
        font-style: normal;
        border-bottom-style:solid;
        
    }

    .commentedBy {
        font-size: 20px;
        font-style: italic;
        color: lightblue;
        
    }

    // label {
    //     margin: 5px;
    // }

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
            border: 3px solid lightblue;
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
        background-color:lightblue;
        font-family: Verdana;
        font-weight: 600;
        font-size: 12px;
        &:hover {
            // width: 150px;
            // height: 34px;
            border: 2px solid white;
            background-color:darkslateblue;
            color:#fff;
        }
    }
</style>