<template>
    <div class="home">
        <h3>Home</h3>
        <span class="text-white">{{this.$store.state.songQueue.queue}}</span>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
.home{
    background-color: #aa3bb9;
}
</style>