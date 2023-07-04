<template>
    <div @click="setSong"
        class="bg-neutral-900 ronded rounded-2xl shrink-0 h-fit hover:shadow cursor-pointer select-none" 
        :class="`hover:shadow-[${shadowColor}] ${
            horizontal ? 'flex flex-row w-80 max-w-80 items-center max-w-[320px]':'w-44 max-w-[176px]'
        }`"
    >
        <img :src="fImgSrc" :alt="name" class="rounded-2xl grow-0" 
            :width="horizontal ? 96 : 176" 
            :height="horizontal ? 96 : 176" 
            :class="`${horizontal ? 'max-w-24 max-h-24' : 'w-100'}`"
        >
        <section class="p-2 overflow-clip">
            <span class="text-sm text-white block truncate text-ellipsis">{{ name }}</span>
            <span class="text-xs block truncate text-ellipsis" :class="`text-[${artistColor}]`">{{ artist }}</span>
        </section>
    </div>
</template>

<script>
import { COLORS_CONFIG } from '../../config';
import { SONGS } from '../../mock-data';

export default {
    props: [
        'name',
        'artist',
        'src',
        'horizontal',
        'id',
    ],
    data(){
        return {
            fImgSrc: `https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$props['src']}/img.jpg` || 'https://picsum.photos/200',
            artistColor: COLORS_CONFIG.PRIMARY_LIGHTER,
            shadowColor: COLORS_CONFIG.PRIMARY,
        }
    },
    methods:{
        setSong(){
            const newQueue = [
                ...SONGS.filter(song => song.id == this.$props['id']),
                ...SONGS.filter(song => song.id != this.$props['id'])
            ]
            
            this.$store.state.songQueue.setQueue(newQueue);
        }
    }
}
</script>