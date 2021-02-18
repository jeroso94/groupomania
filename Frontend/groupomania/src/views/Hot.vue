<template>
    <div class="hot">
        <h3>🔥 Les dernières publications 🤏🏻</h3>
        <record :record="record" :commentList="commentList" v-for="record in recordList" :key="record.id"></record>
    </div>
</template>

<script>
import axios from 'axios';
import Record from '../components/Record.vue';
export default {
  components: { Record },
    data() {
        return {
            recordList: [],
            commentList: [],
            comment: ''
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
        /* display: flex;
        justify-content: center;
        align-items: center; */
        height: 100%;
        width: 100%;
        font-size: 30px;
        color: lightgrey;
        font-weight: 600;
    }

    h3 {
        margin-top: 70px;
        margin-bottom: 150px;
    }
</style>