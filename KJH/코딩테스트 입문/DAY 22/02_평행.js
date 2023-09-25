// DAY 22
// 평행

// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    let answer = 0;

    // x1 - x2 / y1 - y2 === x3- x4 / y3 - y4
    if (
        (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]) ===
        (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])
    ) {
        answer = 1;
    } else if (
        (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1]) ===
        (dots[1][0] - dots[3][0]) / (dots[1][1] - dots[3][1])
    ) {
        answer = 1;
    } else if (
        (dots[0][0] - dots[3][0]) / (dots[0][1] - dots[1][1]) ===
        (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])
    ) {
        answer = 1;
    }

    return answer;
}

/*
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.6MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.07ms, 33.5MB)
*/