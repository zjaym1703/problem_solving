function solution(s) {
    var answer = s.split(' ');
    for(var i=0;i<answer.length;i++){
       var str = '';
        for(var j=0;j<answer[i].length;j++){
            if(j%2 == 0) str += answer[i].charAt(j).toUpperCase();
            else str += answer[i].charAt(j).toLowerCase();
        }
        answer[i] = str;
    }
    return answer.join(' ');
}