<template>
  <section>
    <nav class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </nav>
    <article class="tabs-details">
      <slot></slot>
    </article>
  </section>
</template>

<script>
  export default {
    data: () => {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
  }
</script>

<style lang="scss" scoped>
  section {
    margin: 0 10%;
  }

  .tabs { 
    border-bottom: 1px solid #fefefe;
  }
  .tabs-details {
    padding: 10px 0px;
  }
  ul {
    display: flex;
    padding: 0;
    list-style: none;
    li {
      margin-right: 40px;
    }
    .nav-item {
      color:lightcoral;
      cursor: pointer;
      &:hover {
        color:black;
      }
      &.is-active {
        color:black;
      }
    }
  }
</style>