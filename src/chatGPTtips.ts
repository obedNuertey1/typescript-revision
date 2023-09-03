interface Person {
	name:string;
	skin:string;
	age:number;
};

interface Musician{
	NumberOfAlbums:number;
	SongList:String[];
}

class MusicianStore<T extends Person>{
	private musicians:T[] = [];
	constructor(){};

	//This is correct but I'd rather stick with the latter
	//addMusician<U extends T>(musician:U):void{ 
	//	this.musicians.push(musician);
	//};

	addMusician(musician: T):void{
		this.musicians.push(musician);
	};

	getMusician(index: number):T|undefined{
		return this.musicians[index];
	};
};

const drummerStore = new MusicianStore<Musician>();
const guitarStore = new MusicianStore<Musician>();

const drummer: Musician & Person = {
	NumberOfAlbums: 37,
	SongList:[],
	skin: "Fair",
	name: "John",
	age: 30
};


const guitarist: Musician & Person = {
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
