//class can holdd properties and methods to it
var movie = /** @class */ (function () {
    function movie(title, rate, langi) {
        this.title = title;
        this.rate = rate;
        this.langi = langi;
        this.rating = 5.0;
        this.movietitle = title;
        this.rating = rate;
        this.lang = langi;
    }
    movie.prototype.getrating = function () {
        console.log('inside getrating');
        return this.rating;
    };
    return movie;
}());
var Movie = new movie('raas', 3424, ['english', 'random']);
console.log(Movie.getrating());
