<template>
    <div class="commentContent" v-if="record.id == comment.mediaId">
        <form @submit.prevent="commentDelete">
            <label for="delete"><input type="submit" name="delete" value="Supprimer" v-if="isadmin === 'true'"/></label>
        </form>
        <p class="commentedBy"><span class="commentedByLabel">{{ comment.email }}</span>: {{ comment.comment }} ({{ comment.updatedAt }})</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['record', 'comment' ],

    data() {
        return {
            isadmin : localStorage.getItem('isadmin'),
            userid: localStorage.getItem('userid')
        }
    },

    methods:{
        commentDelete(){
            const token = localStorage.getItem('token');

            // console.log(token);
            // console.log(this.comment.id);

            axios.delete('api/comments/delete/' + this.comment.id + '/' + this.userid, {
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
    input {
        margin: 5px;
        cursor: pointer;
        height: 34px;
        border: 2px solid white;
        background-color:lightcoral;
        font-family: Verdana;
        font-size: 0.7rem;
        &:hover {
            border: 2px solid white;
            background-color:black;
            color:#fff;
        }
    }
    
    .commentContent {
        display: flex;
        align-items: center;
    }
    .commentedBy {
        margin-top: 5px;
        margin-bottom: 0px;
        font-size: 1rem;
        font-style: italic;
        color: lightcoral;
        
    }
    
    .commentedByLabel {
        font-style: normal;
        border-bottom: 1px solid;
        
    }
</style>