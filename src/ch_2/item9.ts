/**
 * item 9
 * 타입 단언보다는 타입 선언을 사용하기
 */

interface Person {
    name: string;
}

// const alice: Person = {name: 'Alice'}; // 타입선언
// const alice: Person = {} => Error! Person 유형에 필요한 name이 없음

// const bob = {name: 'Bob'} as Person; // 타입단언
//const bob = {} as Person => Error 없음

// const alice: Person = {
//     name: 'Alice',
//     occupation: 'dev'
    //개체 리터럴은 알려진 속성만 지정할 수 있으며 'Person' 형식에 'occupation'이(가) 없습니다
// }

// const bob = {
//     name: 'Bob',
//    occupation: 'dev'// 에러 없음
// } as Person


// const people = ['alice', 'bob', 'jan'].map(name => ({name}));
//const people: {
//    name: string;
// }[] => 원하는 타입이 아님

// const people = ['alice', 'bob', 'jan'].map(name => ({name} as Person));
//const people: Person[] => 타입 단언

// const people = ['alice', 'bob', 'jan'].map(name => {
//     const person: Person = {name};
//     return person;
// });
//const people: Person[] => 타입 선언

const people = ['alice', 'bob', 'jan'].map(
    (name): Person => ({name})
);
//const people: Person[]

console.log(people);