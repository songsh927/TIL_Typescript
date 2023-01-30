/*
타입 (런타임 접근 불가)와 값 (런타임 접근 가능)을 둘 다 사용하는 방법
type을 class로 만들면 된다.

인터페이스는 타입으로만 사용 가능하지만 클래스로 선언하면 타입과 값으로 모두 사용할 수 있어서 오류가 없음.
*/

class Square {
    constructor(public width: number){}
}

class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type Shape3 = Square | Rectangle;

function calculateArea3(shape: Shape3) {
    if( shape instanceof Rectangle) {
        shape;                                      // 타입이 Rectangle
        return shape.width * shape.height;
    } else {
        shape;                                      // 타입이 Square
        return shape.width * shape.width;
    }
}