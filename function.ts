// const studentScores: number[] = [67, 89, 92, 76, 56];
// var temp = studentScores.reverse().shift();
// console.log(temp);
function productdetails(prodid:number,prodstatus:boolean=false,prodname?:string,...colors):string{
    let details;
    if(!prodname){
        enum creditcard{samsung=25000,redmi=50000,apple=75000}
        prodname=prodid[prodid];
    }
    if(prodname){
        if(prodstatus){
            details=prodname+"is available in"+colors;
        }
        else{
            details=prodname+"is out of stocks in "+colors;
        }
    }
    return details
}
console.log(productdetails(1000,true,'one plus','black','gold','red','silver'));

//provide an exception for invocation indicating optional and default
//rest parameter


