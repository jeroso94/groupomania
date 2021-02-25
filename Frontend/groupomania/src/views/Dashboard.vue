<template>
  <div class="dashboard">
    <Sidebar />
    <section class="content">
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar.vue'

  export default {
    components: { Sidebar },
    name: 'Home',
  }  
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 320px) {
    .dashboard {
      // display: grid;
      // grid-template-columns: 1fr 5fr;
      background-color: black;
      /* height: 100vh; */
      width: 100vw;
    }

    .content {
      padding: 25px;
      background-color: white;
      border-radius: 20px;
      margin: 6px 0px 6px 0px;
    }
  }

    @media screen and (min-width: 768px) {
    .dashboard {
      display: grid;
      grid-template-columns: 1fr 5fr;
      background-color: black;
      /* height: 100vh; */
      width: 100vw;
    }

    .content {
      padding: 25px;
      background-color: white;
      border-radius: 20px;
      margin: 6px 6px 6px 0px;
    }
  }
</style>