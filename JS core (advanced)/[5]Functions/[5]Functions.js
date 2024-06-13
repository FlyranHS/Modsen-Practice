let str = "qddasdasd g  oinliup cius  a;ruovv d";
function findUniq(arr) {
    for(let item of arr){
        if (str.indexOf(item) === str.lastIndexOf(item)) {
            return item;
    }
    
  }
}
  console.log(findUniq(str));