// 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
    let arr = [...String(n)];
    let sum =0;
    arr.map(e => (sum += parseInt(e)));
    return sum;
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)