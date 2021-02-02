function solution(num) {
    var answer = 0;
    if(num == 1) return answer;
    for(var i=1;i<=500;i++){
        num = (num%2==0) ? num/2 : (num *3) + 1;
        if(num == 1){
            answer = i;
            break;
        }
    }
    return (num == 1) ? answer : -1;
}