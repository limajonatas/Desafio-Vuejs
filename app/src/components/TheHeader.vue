<template>
    <q-header elevated>
        <q-toolbar class="theHeader">
            <q-avatar size="46px">
                <img src="~assets/covid-19-black.png">
            </q-avatar>
            <q-toolbar-title class="absolute-center">COVID-19 STATS</q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script>
export default ({
  name: 'TheHeader'
})
</script>

<style lang="css" scoped>
    .theHeader{
        font-family: 'Oswald', sans-serif;
        background-color: #32CD32;
        color: black
    }
</style>
