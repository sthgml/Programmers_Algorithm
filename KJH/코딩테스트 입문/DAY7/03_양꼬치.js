// DAY7
// 양꼬치

function solution(n, k) {
    if(n>=10){
        k -= Math.floor(n / 10)
    }
    return n * 12000 + k *2000
}

/*
테스트 1 〉	통과 (0.03ms, 32.9MB)
테스트 2 〉	통과 (0.04ms, 32.9MB)
테스트 3 〉	통과 (0.04ms, 32.8MB)
테스트 4 〉	통과 (0.03ms, 32.9MB)
테스트 5 〉	통과 (0.05ms, 33MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.1MB)
*/