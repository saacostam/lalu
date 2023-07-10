<template>
    <!-- <div 
        class="font-mono text-7xl font-extralight"
        :class="`text-[${primaryColor}]`"
    >
        LALU
    </div> -->
    <img src="assets/laluLogo.png">
</template>

<script>
import { COLORS_CONFIG } from './../../config'
export default {
    data() {
        return {
            primaryColor: COLORS_CONFIG.PRIMARY_LIGHTER,
        }
    }
}
</script>