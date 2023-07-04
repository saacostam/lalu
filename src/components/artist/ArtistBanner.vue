<template>
    <section class="bg-neutral-900 ronded rounded-2xl flex flex-row items-center p-8">
        <img 
            :src="fImgSrc" 
            :alt="name"
            class="w-64 h-64 rounded-full"
            width="256"
            height="256"
        >
        <section class="pl-8 overflow-x-clip">
            <h1
                class="text-white font-semibold uppercase truncate text-ellipsis border-solid border-b-4 py-2.5 text-lg mb-4"
            >
                {{ name }}
            </h1>
            <p 
                class="text-white"
            >
                {{ description }}
            </p>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Artist Banner',
    props: [
        'name',
        'description',
        'imgSrc',
    ],
    data(){
        return {
            fImgSrc: this.$props['imgSrc'] || 'https://picsum.photos/256',
        }
    }
}
</script>