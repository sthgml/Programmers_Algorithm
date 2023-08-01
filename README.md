# Programmers_Algorithm

## JavaScript


- 작업 방법  
fork -> fork 파일 clone -> 각자의 IDE에서 코드 작업

git branch `branch명`  
git checkout `branch명`  
git add pr_test.md(작업내용)  
git commit -m `"PR_TEST"`  
git push  


>  이때 fatal: The current branch pr_test has no upstream branch.  
>  To push the current branch and set the remote as upstream, use  
>  이런 에러가 뜨는건 로컬엔 새로운 branch가 있지만 github엔 반영이 안되었기 때문이다.  
>`git push --set-upstream origin pr_test`
> 를 입력해주면 github에도 만든 브랜치가 생긴걸 알 수 있다

-push 후 main 브랜치로 돌아올 것!  
`git checkout main`

# 🔥작업 방법

## 🔹 원격 브랜치랑 로컬 브랜치 합치기

`로컬 브랜치에서 명령어 작성`
git fetch --prune origin 
git reset --hard origin/main


## 🔹 Js File Naming 컨벤션

ex) `JHJ - DAY1 - 01_문자열 출력하기`


## 🔹 Commit 컨벤션

|태그 이름| 설명|
|---|---|
|Feat	|새로운 기능을 추가할 경우|
|Fix|	버그를 고친 경우|
|Design	|CSS 등 사용자 UI 디자인 변경|
|!BREAKING CHANGE	|커다란 API 변경의 경우|
!HOTFIX	|급하게 치명적인 버그를 고쳐야하는 경우|
|Style	|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|Refactor	|프로덕션 코드 리팩토링|
|Comment	|필요한 주석 추가 및 변경
|Docs	|문서를 수정한 경우|
|Test	|테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)|
|Chore	|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|
|Rename	|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
|Remove	|파일을 삭제하는 작업만 수행한 경우|


<!-- ## 🔥코딩 테스트 스터디🔥
- 방학 기간 동안 진행되는 **코딩 테스트 대비 문제 풀이** 스터디입니다.
- 매 주 **✔금요일 23:59** 까지 [5문제](https://github.com/Study-CodingTest/Study/issues)를 풀고, **✔토요일 23:59** 까지 [코드 리뷰](https://github.com/Study-CodingTest/Study/pulls)를 진행합니다.
    - 문제는 각자 원하는 문제 1개 + 나머지는 [tony9402 오늘의 문제](https://github.com/tony9402/baekjoon/blob/main/picked.md)에서 보충합니다.
- 매 주 **✔화요일 21:00**에 **⭐모의 코딩 테스트**를 진행합니다.
    - **Google Meet**를 이용하여 실시간으로 각자 문제를 풀이합니다. (마이크 off, 카메라 off)
    - **2시간 동안 3문제**를 풀이하며, 주로 기업 **코딩테스트 문제**나 **대회 문제**를 풀이합니다.
        - 문제는 미리 풀어보는 것을 방지하기 위해, 당일에 공개합니다.
    - 문제 풀이 이후 간단히 풀이와 느낌을 공유합니다. (마이크 on, 카메라 off, 화면 공유)
    - 모의 코딩테스트에서 풀이한 문제는 여기에 업로드하지 않습니다.

<br>
<br>

## 🔸 참여 방법

### 🔹 다음 주에 풀고 싶은 문제 신청 방법 [(✈ 문제 등록하기)](https://github.com/Study-CodingTest/Study/issues/new?assignees=&labels=&template=add-a-problem.md&title=%5B%ED%94%8C%EB%9E%AB%ED%8F%BC%5D+%EB%AC%B8%EC%A0%9C_%EC%9D%B4%EB%A6%84+%2F+%EB%82%9C%EC%9D%B4%EB%8F%84)
- Issues에 풀고 싶은 문제를 추가해 주세요.

<br>

### 🔹 소스 코드 업로드 및 리뷰 요청 방법
1. Main branch에서 새 branch를 생성한다.
2. 본인이 해결한 문제의 소스 코드를 **본인의 branch**에 push한다.
3. **Pull Request**를 통해 코드 리뷰를 요청한다.
4. 스터디원에게 리뷰를 받은 후, 수정이 완료되면 Label을 수정한다.

<br>

### 🔹 Code Review 규칙
- 자유롭게 의견을 제시한다.
    - 잘했다고 생각하는 부분 칭찬하기
        - 피드백 할 게 없으면 칭찬해 주세요👍
    - 다른 풀이 방법 공유하기
        - 코드 전체를 공유하는 것이 아닌, 키워드나 간단한 소개만 해 주세요.
    - 개선이 필요한 부분 설명하기
        - 단, 개선이 필요한 이유를 충분히 설명해 주세요.
        - 정답 코드를 알려주기 보다는, 스스로 고민하고 개선 방법을 선택할 수 있게 해 주세요.
        - 리뷰 과정이 숙제 검사가 아닌, 학습 과정으로 느낄 수 있게 해 주세요.
    - 궁굼한 부분 물어보기
- 오픈 커뮤니케이션 지향
    > ex) ~ 하는 게 어떨까요? / ~ 하는 것을 제안합니다. / ~ 부분은 ~ 문제가 있는 것 같은데 괜찮을까요?
- 코드 작성자에게 피드백하는 것이 아닌, 코드 자체를 피드백한다는 생각으로 리뷰한다.

#### 📚 References
- [SW 개발을 위한 코드리뷰(우아한 테크 세미나)](https://www.youtube.com/watch?v=ssDMIcPBqUE&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
- [효과적인 코드리뷰를 위한 리뷰어의 자세(카카오 테크)](https://tech.kakao.com/2022/03/17/2022-newkrew-onboarding-codereview/)

<br>

### 🔹 Pull Request 규칙
- PR 템플릿에 맞게 작성한다.
    - 문제를 푸는 과정에서 본인이 생각한 내용을 작성한다.
    - 코드 설명을 작성한다. (단, 주석에 작성한 경우 생략한다.)
    - 특히 리뷰를 받고 싶은 부분을 작성한다.
        - Markdown Codeblock을 이용하여 코드 일부를 발췌해서 작성한다.
        - 특히 리뷰를 받고 싶은 부분은, 리뷰어의 시간을 아낄 수 있게 본인 코드를 충분히 설명해 주세요.
- Reviewer는 본인을 제외한 3명을 추가한다.
- Label은 `Review Request`로 추가한다.
- 모든 스터디원에게 리뷰를 받은 후, 코드 수정이 완료되었으면 Label을 `Merge Request`로 변경한다.
- Main branch에 병합되면, 병합된 branch는 삭제시킨다.

<br>

### 🔹 Commit Message 컨벤션
```
type : subject

body
```
#### ✔ Type
- **Add**: 소스 코드 파일(cpp) 추가
- **Refactor**: 소스 코드 수정
- **Style**: 소스 코드 형식(format) 수정, 변수 네이밍 수정, 주석 추가/삭제 등 
    - (코드 동작에 영향이 없는 수정)
- **Chore**: 그 외 기타 작업

#### ✔ Subject
- 50자 이하의 간단한 제목을 사용한다.
    > ex) Add: 홍길동.cpp <br>
    > ex) Refactor: 완전 탐색 -> 이분 탐색 <br>
    > ex) Style: 함수명 변경

#### ✔ Body(optional)
- 부연 설명을 작성한다.
    > ex) input으로 주어진 배열의 원소들이 오름차순으로 정렬되어 있다는 특징을 이용하여, 탐색 알고리즘을 이분 탐색으로 수정하였습니다. <br>
    > 따라서 시간 복잡도가 O(n²) -> O(nlogn) 으로 최적화 되었습니다.
- 한 줄에 72자를 넘기지 않는다.

<br>

### 🔹 Branch Naming 컨벤션
- `본인_이름(영어_이니셜⭕, 한글❌)`/`이슈_번호(문제_번호❌)`
    > ex) hgd/1 <br>
    - branch 이름에 한글이 들어가면 문제가 생겨서 반드시 ⭐본인 이름을 영어 이니셜⭐로 branch를 생성해 주세요!
    - 문제 번호가 아닌, ⭐이슈 번호⭐로 branch를 생성해 주세요!
- 각 **문제마다 branch를 새롭게 생성**해서, 소스 코드를 push 후 리뷰 요청하는 방식

<br>

### 🔹 Cpp File Naming 컨벤션
- `본인이름.cpp`
    > ex) 홍길동.cpp -->
