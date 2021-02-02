function solution(numbers) {
    var answer = [];
    for(var i=0;i<numbers.length;i++){
        for(var j= i+1; j<numbers.length;j++){
            var num = numbers[i]+numbers[j]
            if (answer.indexOf(num)== -1){
                answer.push(num);
            }
        }
    }
    answer.sort(function (a,b){ return a-b; });
    return answer;
}