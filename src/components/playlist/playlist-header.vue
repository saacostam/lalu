<template>
    <section class="relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16">
        <img src="https://github.com/saacostam/lalu_fe/raw/master/public/images/common/sound-wave.png" class="absolute -top-[8.5rem] right-0 w-80"/>
        <span class="text-white absolute top-1/2 left-10 text-5xl font-semibold">{{ name }}</span>
    </section>
</template>

<script>
export default {
    props: [
        'name'
    ]
}
</script>

<style scoped>
section{
    background: rgb(201,15,154);
    background: linear-gradient(144deg, rgb(201, 15, 40) 0%, rgb(75, 1, 110) 55%, rgba(0,0,0,1) 100%);
}
</style>