<template>
  <main>
    <Collumn/>
  </main>
</template>

<script>
import Collumn from '@/components/Collumn';

export default {
  name: 'Home',
  components: {
    Collumn
  }
}
</script>

<style scoped> 
  main {

    justify-content: center;
    align-items: center;
  }
</style>