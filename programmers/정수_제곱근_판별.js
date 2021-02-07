function solution(n) {    
    n = Math.sqrt(n);
    return /^[0-9]+$/.test(String(n)) == true ? (n+1)*(n+1) : -1 ;
}