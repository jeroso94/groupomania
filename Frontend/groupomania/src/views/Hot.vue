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
            commentField: '',
            userid: localStorage.getItem('userid')
        }
    },

    created() {
        axios.get('api/medias/load/' + this.userid)
        .then(res => {
            // console.log(res.data);
            this.recordList = res.data;

            axios.get('api/comments/load/' + this.userid)
            .then(resComments => {
                // console.log(resComments.data);
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
        font-size: 2rem;
        color: lightgrey;
        font-weight: 600;
    }
    
    header {
        padding-bottom: 2%;
    }
</style>