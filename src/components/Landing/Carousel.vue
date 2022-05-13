<template>
    <div id="carousel">
        <div id="current-image" :style="{'background-image':`url(${this.links[this.current]})`}"></div>
    </div>
</template>

<script>
export default {
    data:()=>{
        return {
            links:[
                'https://picsum.photos/2040/1080',
                'https://picsum.photos/2040/1081',
                'https://picsum.photos/2040/1082'
            ],
            current:0,
            timeOut: 5000
        }
    },
    methods:{
        updateImage(){
            this.current = (this.current+1)%this.links.length;
            setTimeout(() => this.updateImage(), this.timeOut);
        }
    },
    beforeMount(){
        this.updateImage();
    }
}
</script>

<style scoped>
#current-image{
    width: 100%;
    height: 100%;
    background-size:cover;
    background-position: center;
    transition: ease-in background-image;
}
</style>