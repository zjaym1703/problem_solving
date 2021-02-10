function solution(arr) {
    if(arr.length == 1){
       return [-1]; 
    }else{
        var temp=arr[0];
       for(var i=1;i<arr.length;i++){
           if(temp>arr[i]) temp = arr[i];
       }
        arr.splice(arr.indexOf(temp),1);
       return arr; 
    }
}