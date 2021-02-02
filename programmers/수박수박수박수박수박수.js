function solution(n) {
    var answer = '';
    var num = n/2;
    answer = "수박".repeat(num);
    if(n%2 == 1){
       answer+="수";
    }
    return answer;
}