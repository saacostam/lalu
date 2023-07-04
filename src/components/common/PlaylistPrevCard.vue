<template>
    <router-link 
        class="h-28 w-100 bg-neutral-900 ronded rounded-2xl shrink-0 grow-0 hover:shadow cursor-pointer select-none flex flex-row select-none hover:no-underline select-none" 
        :class="`hover:shadow-[${primaryColor}]`"
        :to="`/app/playlist/${name}`"
    >
        <img :src="fImgSrc" :alt="name" class="ronded rounded-2xl" width="112" height="112"/>
        <div class="grow p-3 relative">
            <span class="text-white font-semibold text-md block">{{ name }}</span>
            <span class="text-white text-sm font-semibold">{{ number }} {{ number > 1 ? 'songs' : 'song' }}</span>
            <span class="absolute text-sm font-semibold bottom-2 right-3" :class="`text-[${primaryColor}]`">{{ duration }} {{ duration != 1 ? 'hours' : 'hour' }}</span>
        </div>
    </router-link>
</template>

<script>
import { COLORS_CONFIG } from '../../config';
export default {
    props: [
        'name',
        'number',
        'duration',
        'imgSrc',
        'src',
    ],
    data(){
        return {
            fImgSrc: this.$props['imgSrc'] || 'https://picsum.photos/200',
            primaryColor: COLORS_CONFIG.PRIMARY,
        }
    }
}
</script>