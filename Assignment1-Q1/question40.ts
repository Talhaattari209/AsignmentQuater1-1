class album{
    artist:string;
    albumTitle: string;
    trac: number;

    constructor(person,title,track=0){
        this.artist = person;
        this.albumTitle = title;
        this.trac = track;
    }
}


function make_album(art,titl,track=0){
    var ab1 = new album(art,titl,track);
    var ab2 = new album(art,titl)
    return ab1;
} 


console.log(make_album("teddy","teddyPan",34));
console.log(make_album("Ali","Teleg",12));
console.log(make_album("Hamza","Harry"));
