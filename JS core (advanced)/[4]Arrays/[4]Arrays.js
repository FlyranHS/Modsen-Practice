function minArray(a){
    let arr = a.sort(function(a,b){ return a-b});
    return arr[0];
}
console.log(minArray([3, 1000, 1293, -123, 348 , 0]));