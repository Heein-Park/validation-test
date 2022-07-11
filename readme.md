유효성 검사

1. 사용자의 아이디와 비밀번호를 Form에 입력받는다.
2. 비밀번호 확인란을 추가하여 비밀번호를 다시 입력하도록 한다.
3. 확인 버튼을 추가한다.
    3.1. function validate()를 추가한다.
    3.2. button.addEventListner를 통해 click 이벤트가 발생할 때 validate()를 실행하도록 설정한다.
    3.3. validate() 함수가 실행될 때마다, 사용자의 아이디와 비밀번호 값을 불러오도록 한다.
4. 확인 버튼을 누르면 비밀번호와 비밀번호 확인란의 문자가 같은지 비교한다.
    4.1. valdiate() 함수 내부에서 3.3. 때 불러온 비밀번호들을 if()구문으로 비교한다.
    4.2. 만약 같은 경우, console.log(`회원 가입 되셨습니다. ${아이디}님`)이라고 출력한다.
    4.3. 같지 않은 경우, window.alert('비밀번호가 일치하지 않습니다')라고 출력한다.
5. 같은 경우 사용자의 아이디와 비밀번호를 console.log로 출력한다.
6. 같지 않은 경우 window.alert로 오류를 띄운다.

7. style.css에서 hidden이라는 클래스에 display:none(안 보이게 하는 스타일 값)이 적용되게끔 설정한다.
    7.1 숨기고 싶은 태그에 hidden이라는 클래스를 적용한다. 예시) <div class="hidden">
    7.2 자바스크립트로는 classList.add와 classList.remove를 통해 hidden class를 제거하거나 추가한다.
8. HTML 구조에 오류 메세지 기입한다.
    8.1 오류 메세지는 처음에는 안 보여야 하기 때문에 hidden 클래스를 적용한다

구조
    제목
    아이디 입력란
    비밀번호 입력란
    비밀번호 확인란
    확인 버튼