/**
 * item 11
 * 잉여 속성 체크의 한계 인지하기
 */

/**
 * 타입이 명시된 변수에 객체 리터럴을 할당할 때 타입스크립트는 
 * 해당타입의 속성이 있는지, 그리고 '그 외의 속성은 없는지' 확인한다.
 */

interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

// const r: Room = {
//     numDoors: 1,
//     ceilingHeightFt: 10,
//     elephant: 'present'
//     //Error!
//     //Type '{ numDoors: number; ceilingHeightFt: number; elephant: string; }' is not assignable to type 'Room'.
//     //Object literal may only specify known properties, and 'elephant' does not exist in type 'Room'.
// }

const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
};
const r: Room = obj;

/*
첫 번째 예제에서는 구조적 타입 시스템에서 발생할 수 있는 중요한 종류의 오류를 잡을 수 있도록 '잉여속성 체크'라는 과정이 수행되었다.
두 번째 예제에서는 obj의 타입이 
{
    numDoors: number;
    ceilingHeightFt: number;
    elephant: string
}
으로 추론되었다. obj 타입은 Room타입의 부분 집합을 포함하므로 Room에 할당이 가능하며 타입체커도 통과한다.

잉여 속성 체크가 할당 가능 검사와는 별도의 과정이라는 것을 이해해야함!
*/