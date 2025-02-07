/* 객체 
복잡한 구조의 자료형들을 그룹화해서 관리하기 위한 자료형
{key1:value1, key2:value2, ...} key:value를 property
여러개의 property를 중괄호로 그룹화 시켜놓은 형태

객체를 생성하는 방식
1. 객체 리터럴방식 : 직접 중괄호를 감싸고 원하는 property를 생성하는 방식
2. 생성자함수를 통한 인스턴스 : 생성자함수 (객체를 생성하는 특별한 함수)

생성자함수를 통해 인스턴스(복사본 객체) 객체를 생성하는 경우
: 동일한 구조의 객체를 여러개 대량 복사해야 되는 경우
: 생성자함수(붕어빵틀), 인스턴스(붕어빵틀로 뽑아낸 각각의 붕어빵들)

객체지향 프로그래밍
: 대단위 프로젝트에서 동일한 기능의 함수, 동일한 기능의 자료를 가지고 있는 복사본 (인스턴스 객체)를 생성할 수 있는 시스템적인 프로그래밍 방법론 (리액트16버젼 이전, 클래스를 통한 컴포넌트 제작)

함수형 프로그래밍
: 호이스팅과 렉시컬 스코프를 활용한 클로저를 바탕으로 특정 기능마다의 변수, 함수를 모듈화해서 재사용하는 프로그래밍 방법론
(리액트 16.4버젼부터 함수형 프로그래밍 방식 고차함수 개념으로 컴포넌트 제작)

*/

// 객체 리터럴 방식
const student1 = {
    name: 'Andy',
    age: 20,
    isFemale: false
};

console.log(student1);

// 객체명.propertyKey
console.log(student1.name);

// 연관배열 형식
console.log(student1['age']);

// 객체의 property key에 함수도 등록 가능
const student2 = {
    name : 'Julia',
    age : 30,
    isFemail: true,
    inform : () => {
        console.log('My name is Julia and I am 30 years old.');
        // console.log(this);
    }
}

console.log(student2);

// 객체 안에 등록되어 있는 함수를 메서드(property)
// 자바스크립트에서는 이처럼 객체의 property로 등록가능하거나 함수의 인수로 전달가능하거나
// 변수에 대입할 수 있는 함수를 일급 객체라고 표현
student2.inform();

// 객체리터럴 안쪽에서의 this: window객체(전역객체)

// 생성자를 통한 인스턴스를 복사하는 법