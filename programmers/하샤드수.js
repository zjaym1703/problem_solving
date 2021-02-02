function solution(x) {
    var num = 0;
    var cnt_num = String(x);
    for(var i =0;i< cnt_num.length ;i++){
        num+= parseInt(cnt_num.charAt(i));
    }
    if(x % num == 0) {  return true;   }
    else{  return false; }
}