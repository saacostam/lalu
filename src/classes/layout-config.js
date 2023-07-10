export class LayoutConfig{
    constructor(){
        this.musicPlayerHeight = 100;
        this.navbarWidth = 190;
    }

    getMusicPlayerHeight(){
        return this.musicPlayerHeight;
    }

    setMusicPlayerHeight(newValue){
        this.musicPlayerHeight = newValue;
    }

    getNavbarWidth(){
        return this.navbarWidth;
    }

    setNavbarWidth(newValue){
        this.navbarWidth = newValue;
    }
}