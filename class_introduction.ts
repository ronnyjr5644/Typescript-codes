//class can holdd properties and methods to it
class movie{
    movietitle:string;
    rating:number=5.0;
    lang:string[];
    year?:Number
    constructor(public title:string,public rate:number,public langi:string[]){
        this.movietitle=title;
        this.rating=rate
        this.lang=langi
    }
    getrating():number{
        console.log('inside getrating');
        return this.rating;
    }
}
let Movie=new movie('raas',3424,['english','random']);
 console.log(Movie.getrating());



