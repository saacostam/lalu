<template>
    <section class="relative h-16 md:h-40 mx-auto rounded-3xl bg-[center_right_20rem] md:mt-16 flex items-center justify-center">
        <img 
            src="https://github.com/saacostam/lalu_fe/raw/master/public/images/common/sound-wave.png" 
            class="hidden md:block md:absolute md:-top-[8.5rem] right-0 w-80"
        >
        <span class="text-white absolute md:top-1/2 md:left-16 text-xl md:text-5xl w-3/4 truncate">Hi <span class="font-semibold">{{this.$store.state.username}}</span>!</span>
    </section>
</template>

<style scoped>
section{
    background: rgb(201,15,154);
    background: radial-gradient(circle at 40%, rgb(160, 20, 125) 0%, rgb(14, 8, 84) 65%, rgba(0,0,0,1) 100%);
}
</style>