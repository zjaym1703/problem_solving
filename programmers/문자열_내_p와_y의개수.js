//문제 : https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
    var cnt = 0; // p 일때 +1 y일때 -1
    for(var i =0;i<s.length;i++){
        if(s.charAt(i) =='p' || s.charAt(i) =='P'){
            cnt-=1;
        }else if(s.charAt(i) =='y' || s.charAt(i) =='Y'){
            cnt+=1;
        }
    }

    return cnt == 0 ? true : false;
}