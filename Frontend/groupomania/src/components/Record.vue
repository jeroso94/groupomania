
<template>
    <div class="recordStyle">
        <h3>{{ record.title }} ({{ record.updatedAt }})</h3>
        <article>
            <header>
                <img class="picture" :src="record.mediaUrl" alt="illustration"/>
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
            commentField: '',
            userid: localStorage.getItem('userid')
        }
    },

    methods:{
        async commentSubmit(){
            const data = {
                'comment': this.commentField,
                'userid': localStorage.getItem('userid')
            }
            // console.log(this.commentField);
            // console.log(localStorage.getItem('userid'));
            // console.log(data);

            const token = localStorage.getItem('token');
            // console.log(token);

            const uri = 'api/comments/'+ this.record.id + '/comment/' + this.userid;
            // console.log (uri);
            await axios.post(uri, data,  {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(() => {
                // .then(res => {
                    // console.log(res);
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
        font-size: 1rem;
        font-weight: 500;
    }

    h3 {
        font-size: 1.5rem;
        // font-weight: 800;
    }

    article {
        margin-bottom: 35px;
    }

    .picture {
        block-size: 20vmax ;
    }

    header {
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        form {
            display: flex;
            align-items:center;
            // margin: 5px;
            width: 99%;
            padding: 0 2% 0 2%;
        }

        textarea {
            margin: 5px;
            width: 30rem;
            height: 60px;
            border-radius: 3px;
            border: 1px solid #CCC;
            padding: 8px;
            font-size: 1rem;
            font-family: Verdana;
            box-shadow: 1px 1px 5px #CCC;
            &:hover {
                border: 2px solid lightcoral;
                padding: 8px;
                font-family: Verdana;
                box-shadow: 1px 1px 5px #CCC;
            }
        }

        input {
            margin: 5px;
            cursor: pointer;
            width: 15rem;
            height: 34px;
            border: 2px solid white;
            background-color:lightcoral;
            font-family: Verdana;
            font-weight: 600;
            font-size: 0.7rem;
            &:hover {
                // width: 150px;
                // height: 34px;
                border: 2px solid white;
                background-color:black;
                color:#fff;
            }
        }
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        form {
            width: 99%;
            padding: 0 2% 0 2%;
        }
        textarea {
                margin: 5px;
                width: 99%;
                height: 60px;
                border-radius: 3px;
                border: 1px solid #CCC;
                padding: 8px;
                font-size: 1rem;
                font-family: Verdana;
                box-shadow: 1px 1px 5px #CCC;
                &:hover {
                    border: 2px solid lightcoral;
                    padding: 8px;
                    font-family: Verdana;
                    box-shadow: 1px 1px 5px #CCC;
                }
            }

        input {
            margin: 5px;
            cursor: pointer;
            width: 99%;
            height: 34px;
            border: 2px solid white;
            background-color:lightcoral;
            font-family: Verdana;
            font-weight: 600;
            font-size: 0.7rem;
            &:hover {
                // width: 150px;
                // height: 34px;
                border: 2px solid white;
                background-color:black;
                color:#fff;
            }
        }
    }
</style>