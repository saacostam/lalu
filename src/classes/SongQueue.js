export class SongQueue {
    constructor(){
        this.queue = [];
        this.current = 0;
    }

    setQueue(newQueue){
        this.queue = newQueue;
        this.current = 0;
    }

    prev(){
        this.current = (this.current-1+this.queue.length)%(this.queue.length);
        return this.queue[this.current];
    }

    next(){
        this.current = (this.current+1+this.queue.length)%(this.queue.length);
        return this.queue[this.current]
    }
    
    getCurrentSong(){
        return this.queue[this.current];
    }
}