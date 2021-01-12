<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view :user="user" />
    </div>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue'
  import axios from 'axios';

  export default {
    components: { Sidebar },
    name: 'Home',

    data() {
        return {
            user: null
        }
    },

    created() {
        axios.get('api/auth/user')
        .then(res => {
            console.log(res);
            this.user = res.data;
        })
        .catch(err => { console.log(err) });
    }    
  }
</script>

<style scoped>
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: darkslateblue;
    height: 100vh;
    width: 100vw;
  }

  .content {
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;
  }
</style>