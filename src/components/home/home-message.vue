<template>
    <section class="relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16">
        <img src="/images/common/sound-wave.png" class="absolute -top-[8.5rem] right-0 w-80">
        <span class="text-white absolute top-1/2 left-16 text-5xl">Hi <span class="font-semibold">{{this.$store.state.username}}</span>!</span>
    </section>
</template>

<style scoped>
section{
    background: rgb(201,15,154);
    background: radial-gradient(circle at 40%, rgb(160, 20, 125) 0%, rgb(14, 8, 84) 65%, rgba(0,0,0,1) 100%);
}
</style>