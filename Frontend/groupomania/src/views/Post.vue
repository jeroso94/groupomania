<template>
    <div class="post">
        <header><h3>🧻 Publication ✍🏻</h3></header>
        <Tabs>
            <Tab name="Ajouter" selected="true"> 
                <form class="formStyle" @submit.prevent="handleSubmit">
                    <label for="description"><textarea class="form-control" id="description" rows="2" v-model="description" name="description" placeholder="Description de l'intérêt de cette diffusion" title="description"></textarea></label>
                    <label for="file-upload"><input id="file-upload" name="media" type="file" accept="image/*" title="file-upload"></label>
                    <label for="submit"><input type="submit" name="submit" value="Publier"/></label>
                </form>
            </Tab>

            <Tab name="Relire">
                <record-posted-by-me :record="record" v-for="record in recordList" :key="record.id"></record-posted-by-me>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
    import axios from 'axios';
    import Tab from '@/components/Tab';
    import Tabs from '@/components/Tabs';
    import RecordPostedByMe from '../components/RecordPostedByMe.vue';

    export default {
        components: {
        Tab,
        Tabs,
        RecordPostedByMe
        },

        data(){
            return{
                description: '',
                recordList: [],
                userid: localStorage.getItem('userid')
            }
        },
        
        methods:{
            async handleSubmit(){
                const formdata = new FormData ();
                formdata.append ('description', this.description);
                formdata.append ('media', document.getElementById('file-upload').files[0]);
                formdata.append ('user',localStorage.getItem('user'));
                
                const token = localStorage.getItem('token');

                // console.log(this.media);
                // console.log(this.user);
                // console.log(formdata);
                const uri = 'api/medias/upload/' + this.userid;
                // console.log(uri);
                await axios.post(uri, formdata,  {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': `multipart/form-data`
                    }
                })
                    .then(() => {
                    // .then(res => {
                    //     console.log(res);
                        this.$router.push('/hot');
                    })
                    .catch(err => { console.log(err) });
            }
        },
        created(){
            const uri = 'api/medias/' + this.userid;
            // console.log (uri);
            axios.get(uri)
            .then(res => {
                // console.log(res.data);
                this.recordList = res.data;
            })
            .catch(err => { console.log(err) });
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        height: 100%;
        width: 100%;
        font-size: 2rem;
        color: lightgrey;
        font-weight: 600;
    }

    header {
        padding-bottom: 2%;
    }

    .formStyle {
        margin: 15px;
        color: lightcoral;
        font-size: 20px;
    }

    textarea {
        width: 99%;
        height: 50px;
        border-radius: 3px;
        border: 1px solid #CCC;
        padding: 4px;
        font-size: 1rem;
        font-family: Verdana;
        box-shadow: 1px 1px 5px #CCC;
        &:hover {
            border: 2px solid lightcoral;
            padding: 4px;
            font-size: 1rem;
            font-family: Verdana;
            box-shadow: 1px 1px 5px #CCC;
        }
    }

    input[type='file'] {
        margin: 25px 0;
        width: 100%;
        border: 2px solid white;
        // background-color:lightcoral;
        font-family: Verdana;
        font-weight: 600;
        font-size: 1rem;
        color:black;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:black;
            color:#fff;
        }
    }

    input[type='submit'] {
        margin: 25px 0 100% 0;
        width: 100%;
        height: 34px;
        border: 2px solid white;
        background-color:lightcoral;
        font-family: Verdana;
        // font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:black;
            color:#fff;
        }
    }


</style>