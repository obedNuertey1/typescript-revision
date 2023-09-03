;
class MusicianStore {
    constructor() {
        this.musicians = [];
    }
    ;
    //This is correct but I'd rather stick with the latter
    //addMusician<U extends T>(musician:U):void{ 
    //	this.musicians.push(musician);
    //};
    addMusician(musician) {
        this.musicians.push(musician);
    }
    ;
    getMusician(index) {
        return this.musicians[index];
    }
    ;
}
;
const drummerStore = new MusicianStore();
const guitarStore = new MusicianStore();
const drummer = {
    NumberOfAlbums: 37,
    SongList: [],
    skin: "Fair",
    name: "John",
    age: 30
};
const guitarist = {
    NumberOfAlbums: 4,
    SongList: [],
    skin: "Fair",
    name: "John",
    age: 30
};
drummerStore.addMusician(drummer);
guitarStore.addMusician(guitarist);
const retrievedDrummer = drummerStore.getMusician(0);
const retrievedGuitarist = guitarStore.getMusician(0);
console.log(retrievedDrummer);
console.log(retrievedGuitarist);
export {};
//# sourceMappingURL=chatGPTtips.js.map