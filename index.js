


function findMinimumPair(arr,sum){
arr.sort()
var pairs = []
for(var i = 0; i < arr.length; i++){
  var outPut = []
  if(arr[i] != arr[i + 1]){

  for(var j = i; j < arr.length; j++){
  if( sum == arr[i] + arr[j] ){
    outPut.push(arr[i],arr[j]);
     pairs.push(outPut);
     break;
  }
  } 
  } 
}
console.log(pairs)
}
 findMinimumPair([2,4,5,6,1,4,2,7,8,9],10)