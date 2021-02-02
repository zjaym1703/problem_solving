// 문제 : https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript
function solution(seoul) {
    var cnt = seoul.length;
    for(var i=0;i<cnt;i++){
        if(seoul[i]=="Kim"){
            return '김서방은 '+i+"에 있다";
        }
    }
}