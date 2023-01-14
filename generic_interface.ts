interface cart<T>{
    items:T[];
    additem(item:T):void;
}
class stringcart implements cart<string>{
    constructor(public items:string[]){}

    additem(item: string): void {
        this.items.push(item)
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }
}
class numbercart implements cart<number>{
    constructor(public items:number[]){}

    additem(item: number): void {
        this.items.push(item)
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }
}
let stringobj=new stringcart(['biscut','choco']);
stringobj.additem('juices');
let numberobj=new numbercart([234234,23432,25235,235,3252,3]);
numberobj.additem(3243234);



