// DAY 22
// 유한소수 판별하기

// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

// 1
// 테스트 케이스 22만 실패
function solution(a, b) {
   
      return (((a/b) * 10000000000) % 2) === 0 || (((a/b) * 1000) % 5) === 0 ? 1 : 2
}
    


// 2
const solution = (a, b)  => (10000000000*a)%b === 0 ? 1 : 2;

/*
테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.02ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.6MB)
테스트 6 〉	통과 (0.04ms, 33.6MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.02ms, 33.4MB)
테스트 9 〉	통과 (0.02ms, 33.5MB)
테스트 10 〉	통과 (0.04ms, 33.6MB)
테스트 11 〉	통과 (0.03ms, 33.4MB)
테스트 12 〉	통과 (0.02ms, 33.4MB)
테스트 13 〉	통과 (0.03ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.02ms, 33.4MB)
테스트 16 〉	통과 (0.03ms, 33.6MB)
테스트 17 〉	통과 (0.03ms, 33.6MB)
테스트 18 〉	통과 (0.02ms, 33.4MB)
테스트 19 〉	통과 (0.02ms, 33.5MB)
테스트 20 〉	통과 (0.04ms, 33.5MB)
테스트 21 〉	통과 (0.03ms, 33.4MB)
테스트 22 〉	통과 (0.02ms, 33.5MB)
테스트 23 〉	통과 (0.02ms, 33.4MB)
테스트 24 〉	통과 (0.02ms, 33.5MB)
테스트 25 〉	통과 (0.04ms, 33.4MB)
테스트 26 〉	통과 (0.02ms, 33.4MB)
테스트 27 〉	통과 (0.04ms, 33.5MB)
테스트 28 〉	통과 (0.04ms, 33.4MB)
테스트 29 〉	통과 (0.02ms, 33.5MB)
테스트 30 〉	통과 (0.03ms, 33.4MB)
테스트 31 〉	통과 (0.04ms, 33.5MB)
테스트 32 〉	통과 (0.03ms, 33.4MB)
테스트 33 〉	통과 (0.02ms, 33.4MB)
테스트 34 〉	통과 (0.03ms, 33.4MB)
테스트 35 〉	통과 (0.02ms, 33.5MB)
테스트 36 〉	통과 (0.03ms, 33.4MB)
테스트 37 〉	통과 (0.03ms, 33.5MB)
테스트 38 〉	통과 (0.04ms, 33.4MB)
테스트 39 〉	통과 (0.02ms, 33.5MB)
테스트 40 〉	통과 (0.05ms, 33.4MB)
테스트 41 〉	통과 (0.02ms, 33.5MB)
테스트 42 〉	통과 (0.03ms, 33.5MB)
테스트 43 〉	통과 (0.03ms, 33.4MB)
테스트 44 〉	통과 (0.04ms, 33.4MB)
테스트 45 〉	통과 (0.02ms, 33.4MB)
테스트 46 〉	통과 (0.02ms, 33.4MB)
테스트 47 〉	통과 (0.02ms, 33.5MB)
테스트 48 〉	통과 (0.02ms, 33.4MB)
*/