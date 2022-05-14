<template>
    <div class="not-found">
        <p>not found</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    created(){
        this.$router.push({ path: '/app/home' });
    }
}
</script>