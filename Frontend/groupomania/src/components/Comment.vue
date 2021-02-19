<template>
    <div v-if="record.id == comment.mediaId">
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
            isadmin : localStorage.getItem('isadmin')
        }
    },

    methods:{
        commentDelete(){
            const token = localStorage.getItem('token');
            console.log(token);

            console.log(this.comment.id);

            axios.delete('api/comments/' + this.comment.id, {
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
    
    .commentedByLabel {
        font-style: normal;
        border-bottom-style:solid;
        
    }

    .commentedBy {
        margin-top: 5px;
        margin-bottom: 0px;
        font-size: 20px;
        font-style: italic;
        color: lightcoral;
        
    }
</style>