/**
 * item 8
 * 타입 공간과 값 공간의 심벌 구분하기
 */

// interface Cylinder {
//     radius: number;
//     height: number;
// }

// const Cylinder = (radius: number, height: number) => ({radius, height});

// function calculateVolume(shape: unknown) {
//     if(shape instanceof Cylinder){
//         shape.radius
//         //'{}' 형식에 'radius' 속성이 없습니다.
//     }
// }

/*
type, interface 뒤에 선언되는 symbol => 타입
const, let 뒤에 선언되는 symbol => 값
*/

/*
아래의 코드는 Cylinder 클래스가 타입으로 사용
class와 enum은 상황에 따라 타입과 값 두 가지로 모두 사용 가능한 예약어
*/
class Cylinder {
    radius=1;
    height=1;
}

function calculateVolume(shape: unknown) {
    if(shape instanceof Cylinder){
        shape
        shape.radius
    }
}