<template>
    <div class="post">
        <h3>🧻 Publication ✍🏻</h3>
        <Tabs>
            <Tab name="Ajouter" selected="true"> 
                <form @submit.prevent="handleSubmit">           
                    <div class="formStyle">
                        <textarea class="form-control" id="description" rows="2" v-model="description" name="description" placeholder="Description de l'intérêt de cette diffusion"></textarea>
                    </div>
                    <div class="formStyle">
                        <input id="file-upload" name="media" type="file" accept="image/*">
                    </div>
                    <div class="formStyle">
                        <input type="submit" name="submit" value="Publier"/>
                    </div>
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
                console.log(formdata);
                await axios.post('api/medias/upload', formdata,  {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': `multipart/form-data`
                    }
                })
                    .then(res => {
                        console.log(res);
                        this.$router.push('/');
                    })
                    .catch(err => { console.log(err) });
            }
        },
        created(){
            const uri = 'api/medias/' + this.userid;
            console.log (uri);
            axios.get(uri)
            .then(res => {
                console.log(res.data);
                this.recordList = res.data;
            })
            .catch(err => { console.log(err) });
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        // display: flex;
        // justify-content: center ;
        // align-items: center;
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

    .formStyle {
        margin: auto;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color: lightblue;
        font-size: 20px;
    }

    textarea {
        margin: 25px 5px 5px 5px;
        width: 100%;
        height: 50px;
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

    input[type='file'] {
        margin: 25px 5px 5px 5px;
        width: 100%;
        border: 2px solid white;
        background-color:lightblue;
        font-family: Verdana;
        font-weight: 600;
        font-size: 12px;
        color:darkslateblue;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:darkslateblue;
            color:#fff;
        }
    }

    input[type='submit'] {
        margin: 50px 5px 100% 5px;
        width: 100%;
        height: 34px;
        border: 2px solid white;
        background-color:lightblue;
        font-family: Verdana;
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            border: 2px solid white;
            background-color:darkslateblue;
            color:#fff;
        }
    }


</style>