<template>
    <div class="not-found">
        <p>not found</p>
    </div>
</template>

<script>
export default {
    name: 'AppNotFound',
    created(){
        this.$router.push({ path: '/app/home' });
    }
}
</script>