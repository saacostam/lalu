export class SongQueue {
    constructor(queue) {
        this.queue = queue || [];
        this.nextPointer = 0;
        this.ordered = true;
        this.history = [];
        this.currentSong = '';
    }

    newQueue(new_queue) {
        this.queue = new_queue;
        this.nextPointer = 0;
        this.history = [];
    }

    randomNumber(min, max) {
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        return Math.random() * (max - min) + min;
    }

    nextSong() {
        if (this.queue.length === 0) {
            return null
        }

        if (!this.ordered) {
            this.nextPointer = this.randomNumber(0, this.queue.length);
        }

        this.history.push(this.currentSong);
        this.currentSong = this.queue.splice(this.nextPointer, 1);
        return this.currentSong;
    }

    prevSong() {
        this.history.push(this.currentSong);
        this.currentSong = this.history.pop();
        return this.currentSong;
    }
}