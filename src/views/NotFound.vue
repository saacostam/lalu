<template>
    <div class="not-found">
        <p>not found</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    created(){
        if (localStorage.getItem('username')) this.$router.push({ path: '/app' });
        else this.$router.push({ path: '/' });
    }
}
</script>