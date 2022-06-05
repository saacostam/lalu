<template>
    <div id="carousel">
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1080')" v-show="this.current==0"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1081')" v-show="this.current==1"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1082')" v-show="this.current==2"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1083')" v-show="this.current==3"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1084')" v-show="this.current==4"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1085')" v-show="this.current==5"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1086')" v-show="this.current==6"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1087')" v-show="this.current==7"></div>
        <div class="current-image" style="background-image:url('https://picsum.photos/1080/1088')" v-show="this.current==8"></div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data:()=>{
        return {
            current:0,
            total_images: 9,
            timeOut: 5000
        }
    },
    methods:{
        updateImage(){
            this.current = (this.current+1)%this.total_images;
            setTimeout(() => this.updateImage(), this.timeOut);
        }
    },
    beforeMount(){
        this.updateImage();
    }
}
</script>

<style scoped>
.current-image{
    width: 100%;
    height: 100%;
    background-size:cover;
    background-position: center;
    transition: ease-in background-image;
}
</style>