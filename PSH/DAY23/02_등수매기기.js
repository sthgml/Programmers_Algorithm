function solution(score) {
    const 평균 = score.map(v=>( v[0] + v[1]) / 2);
    const 등수 = [...평균].sort((a,b) => b-a, 0);
    return 평균.map(v=>등수.indexOf(v)+1);
}

// 테스트 1 〉	통과 (0.06ms, 33.2MB)
// 테스트 2 〉	통과 (0.15ms, 33.6MB)
// 테스트 3 〉	통과 (0.15ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.1MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.14ms, 33.4MB)
// 테스트 8 〉	통과 (0.14ms, 33.5MB)
// 테스트 9 〉	통과 (0.23ms, 33.5MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 테스트 12 〉	통과 (0.07ms, 33.4MB)