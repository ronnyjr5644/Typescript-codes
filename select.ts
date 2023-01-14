function x(...num){
    var arr:number[]=[];
    var val;
   for(let i of num){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0){
        arr.push(i);
    }
   }
   var maxi=Number.MIN_SAFE_INTEGER
   for(var i=0;i<arr.length;i++){
        maxi=Math.max(maxi,arr[i]);
   }
   console.log(maxi);
}
x(29,101,113,17);
