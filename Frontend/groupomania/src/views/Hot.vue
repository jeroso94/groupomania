<template>
    <div class="hot">
        <header><h3>🔥 Les dernières publications 🤏🏻</h3></header>
        <recordDisplay :record="record" :commentList="commentList" v-for="record in recordList" :key="record.id"></recordDisplay>
    </div>
</template>

<script>
import axios from 'axios';
import recordDisplay from '../components/Record.vue';
export default {
  components: { recordDisplay },
    data() {
        return {
            recordList: [],
            commentList: [],
            commentField: ''
        }
    },

    created() {
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

}
</script>

<style scoped>
    .hot {
        height: 100%;
        width: 100%;
        font-size: 30px;
        color: lightgrey;
        font-weight: 600;
    }

    header {
        margin-top: 70px;
        margin-bottom: 150px;
    }
</style>