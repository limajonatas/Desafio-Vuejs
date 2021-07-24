<template>
  <header>
    <nav class="container">
      <a href="/">
        <img src="../../public/coronavirus.png" alt="COVID-ATT" id="logo">
        <h1>Covid-ATT</h1>
      </a>
    </nav>
  </header>
</template>

<script>
//import Collumn from './Collumn.vue';
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
  }

  nav {
    opacity: initial;
    display: flex; 
    justify-content: space-between;
  }

  a {
    color: #ffffff;
    display: flex; 
    justify-content: flex-start;
  }

  h1 {
    margin-top: 18px;
  }
  #logo {
    width: 60px;
  }
</style>