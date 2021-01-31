<template>
    <div class="message">
        <Tabs>
            <Tab name="Publier" selected="true"> 
                <form @submit.prevent="handleSubmit">           
                    <h3>🧻 Diffuser un média ✍🏻</h3>
                    <div class="formStyle">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" rows="2" v-model="description" name="description" placeholder="Description de l'intérêt de cette diffusion"></textarea>
                    </div>
                    <div class="formStyle">
                        <input id="file-upload" name="media" type="file" accept="image/*">
                    </div>
                    <div class="formStyle">
                        <button type="submit">Valider</button>                
                    </div>
                </form>
            </Tab>

            <Tab name="Mes publications"> 
                <!-- <table>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Cheese</td>
                    <td>Yellow</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>Red</td>
                </tr>
                </table> -->

                <form @submit.prevent="display">
                    <!-- <h2>😇 Mes publications 💅🏻</h2> -->

                    <button type="submit">Valider</button>
                    <ul id="example-1" class="listStyle">
                        <li v-for="record in records" :key="record.id">
                            <h3>{{ record.title }}</h3>
                            <img v-bind:src="record.mediaUrl" width="320px"/>
                            <p class="postedBy">Publié par: {{ record.email }}</p>
                            
                        </li>
                    </ul>
                </form>

            </Tab>
        </Tabs>
    </div>
</template>

<script>
    import axios from 'axios';
    import Tab from '@/components/Tab';
    import Tabs from '@/components/Tabs';

    export default {
        components: {
        Tab,
        Tabs
        },

        data(){
            return{
                description: '',
                records: [],
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
            },

            display(){
                const uri = 'api/medias/' + this.userid;
                console.log (uri);
                axios.get(uri)
                .then(res => {
                    console.log(res.data);
                    this.records = res.data;
                })
                .catch(err => { console.log(err) });
            }
        }
    }
</script>

<style scoped>
    .message {
        display: flex;
        justify-content: center ;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 40px;
        color: lightgrey;
        font-weight: 600;
    }

    .formStyle {
        margin: auto;
        padding: 5px 5px 5px 5px;
        display: flex;
        justify-content: space-between ;
        align-items: center;
        font-size: 30px;
        color: lightblue;
        font-weight: 600;
    }
</style>