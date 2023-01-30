/**
 * 타입정보를 유지하는 기법
 * 런타임에 접근 가능한 타입정보를 명시적으로 저장하는 '태그 기법'
 */

interface Square2 {
    kind: 'square';
    width: number;
}

interface Rectangle2 {
    kind: 'rectangle';
    width: number;
    height: number;
}

type Shape2 = Square2 | Rectangle2;             // Shape2는 태그된 유니온 (tagged union)

function calculateArea2(shape: Shape2){
    if(shape.kind === 'rectangle'){
        shape;                                  // 타입이 Rectangle
        return shape.width * shape.height;
    } else {
        shape;                                  // 타입이 Square
        return shape.width * shape.width;
    }
}