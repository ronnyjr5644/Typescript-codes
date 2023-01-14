//generic datatype
function comp<T>(compid:T):T{
    console.log('generakvalue: ', compid);
    return compid;
}
comp('co1fs')
comp(1000)   
//generics array
function compi<T>(...compid:T[]):T{
    console.log('generakvalue: ', compid);
    return compid[0];
}
compi('co1fs','dfdsf','fddw')
compi(1000,123213,1345532,3521,213)   

//generics classes
class employee<T>{
    constructor(
        private empid:T,
        private empname:string,
        private projectdetails:string[]
    ){}
    getempid(projid:string):T | undefined{
        let output:T | undefined;
        let validid=this.projectdetails.filter(id=>projid===id);
        if(validid.length>0){
            output=this.empid;
        }
        return output;
    }
}
var empobjstring=new employee<string>('132','david',['dfadfsa','adsfsadf']);
console.log(empobjstring.getempid('adfdf'));

var empobjnum=new employee<string>(101,'david',['dfadfsa','adsfsadf']);
console.log(empobjnum.getempid('adfdf'));

