var album = /** @class */ (function () {
    function album(person, title, track) {
        if (track === void 0) { track = 0; }
        this.artist = person;
        this.albumTitle = title;
        this.trac = track;
    }
    return album;
}());
function make_album(art, titl, track) {
    if (track === void 0) { track = 0; }
    var ab1 = new album(art, titl, track);
    var ab2 = new album(art, titl);
    return ab1;
}
console.log(make_album("teddy", "teddyPan", 34));
console.log(make_album("Ali", "Teleg", 12));
console.log(make_album("Hamza", "Harry"));
