# sleepwell
[백엔드 깃허브](https://github.com/sleeeepWELL/BackEnd)

## 프로젝트 기획 배경

- 문제 제시

  어렸을 때부터 잠을 적게 자야 성공한다는 말에 의구심을 품어왔다.

  아인슈타인(10시간) vs 에디슨(4시간)

  잠을 적게 자야 한다. vs 많이 자야 한다. → 개개인마다 다르다.

  세바시 특강보고 공감 → 이것에 도움을 줄 수 있는 product를 만들어보면 어떨까 생각만 하고 있었다. →  현재 할 수 있는 일부터 시작해 보자 → 간단한 서비스부터(내가 지금 배우고 있는 웹서비스)

![image](https://user-images.githubusercontent.com/53491653/119460984-3521cf00-bd7a-11eb-8599-e1623cfb4c6a.png)


- 해결책

  사람마다 겪는 일이나 경험, 배경이 다르다 → 쓰면 된다 → 그 데이터를 바탕으로 결과만 깔끔하게 제시

  sleepwell 서비스에서 수면시간을 기록하고 자신에게 맞는 적정 수면시간을 찾는다.



## 프로젝트 소개

- 인트로페이지에서 서비스 가이드를 볼 수 있다.
- 개개인의 기록 서비스이기 때문에, 회원가입 or 카톡 로그인은 필수적이다.
- 로그인 후 오늘까지의 수면시간을 기록한다
- 캘린더, 분석서비스를 이용하여 시각화 하여 보여준다.
- 데이터가 쌓이면 쌓일 수록 당신에게 맞는 적정수면시간이 나올 것이다.
- 수면시간 외에도, 태그로 표현되어 있는 음주, 야식, 운동, 야근의 주간, 월간 빈도수를 체크할 수 있다.

![image](https://user-images.githubusercontent.com/53491653/119460900-1d4a4b00-bd7a-11eb-9e7b-95928c3cbf11.png)


## 기술 소개
* JWT token(Access + Refresh)
  * setTimeout & setInterval
* 카카오 소셜 로그인
* Spring Data JPA + chart.js, nivo를 활용한 분석
* 데이터 핸들링 + 시각화
* 캘린더 & 카드 구현(CRUD)
* 메일서버 <-> Redis (인증)

![image](https://user-images.githubusercontent.com/53491653/119461912-2687e780-bd7b-11eb-9b53-859291b404f2.png)

## 사용 라이브러리

라이브러리 | 설명
---|:---:
|axios | 서버 통신|
|redux | 클라이언트 저장소| 
|material ui | 외부 ui 사용|
|styled-components | 컴포넌트 스타일링|
|chart/nivo | 차트|
|three | 3D|
|moment | 시간 및 날짜| 



## 최종 성과

5주간 저희 팀 모든 구성원에게 좋은 경험이 되었을거라고 믿는다.

- 프로젝트에 한 명도 빠짐없이 자신의 의견이 들어간 부분이 있을 것이다.
  - 거의 모든 부분에 대해 대화를 많이 나누고 의견 취합을 하였다.
  - 자신의 의견을 말하고, 상대방 의견을 들어주는 법에 대해 연습했다.
  - 자신의 의견이 반영 된 만큼 더 애정을 갖고 프로젝트를 할 수 있었다.
- UX/UI ↔  프론트엔드 ↔  백엔드 구조에서의 협업 방식을 경험해볼 수 있었다.
  - 실무에 들어가기 전 이렇게 다양한 사람들과 프로젝트를 해볼 수 있는 기회는 흔치 않을 것이다.
  - 우리가 사용했던 방식이 무조건 맞는 것은 아니겠지만, 어딜 가서도 잘 융화될 수 있는 개발자, 디자이너가 될 수 있을 것이다.
- 개인의 실력 상승
  - 프로젝트를 하는 시간동안 여러 막히는 부분을 만나고, 그것을 해결하게 되면서 개인의 실력 상승에 도움이 되었다고 생각한다.
  - 웹서비스를 완성시키고, 반응형에 대한 생각을 하게 되었다.

### 링크
**[서비스 링크](https://teamsleepwell.com/ )**

**[팀원 소개](https://www.notion.so/TeamSleepwell-dcb0a3d7c4fc47d781479c33c3929e48 )**
