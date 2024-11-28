# 🎰 javascript-lotto-precourse

## 기능 목록

### 입력

- 금액
- 당첨 번호
- 보너스 번호

### 예외 처리

- 금액
  - 숫자가 아닌지 체크
  - 정수가 아닌지 체크
  - 최소값 ~ 최대값 체크
  - 천원 단위
- 당첨 번호
  - 숫자가 아닌지 체크
  - 정수가 아닌지 체크
  - 개수 6개
  - 중복 값
  - 범위 1~45
- 보너스 번호
  - 숫자가 아닌지 체크
  - 정수가 아닌지 체크
  - 범위 1~45
  - 당첨 번호 중복

### 출력

- 구매한 로또 -> 구매한 수량
- 당첨 내역 출력
- 수익률
- 에러 메시지 출력

### 기타 기능

- 로또 생성
  - 오름차순
- 당첨 결과 계산
- 수익률 계산
  - 소수점
  - 천 단위 컴마
- 예외 발생시 입력 재시도

### 기타

- 리팩토링
  - 함수 길이 10 제한
  - indent depth 2 제한
  - 상수화

## 테스트

### 통합 테스트

- applicationTest -> 케이스 추가

### 단위 테스트

- validation test
- parser test
- Lotto test
- LottoCalculator test
- LottoStatistics test

## 폴더 구조

model, view, util, constant

## 로또 클래스 활용법

- validate 제거
- numbers => 발행한 로또 하나씩 저장
- 당첨 번호, 보너스 번호를 받아서 당첨 등수를 계산
