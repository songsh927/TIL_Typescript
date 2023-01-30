interface Square1 {
    width: number;
}

interface Rectangle1 extends Square1 {
    height: number;
}

type Shape1 = Square1 | Rectangle1;

function calculateArea1(shape: Shape1){
    // if(shape instanceof Rectangle){             // 형식만 참조하지만 여기서는 값으로 사용되고있다.
    //     return shape.width * shape.height;      // shape에 height 속성이 없음
    // }else{
    //     return shape.width * shape.width;
    // }

    if( 'height' in shape){                     // height 속성이 shape에 존재하는지 체크하는 방법 (타입정보가 있는지 확인)
        shape;                                  // 타입이 Rectangle
        return shape.width * shape.height;
    } else {
        shape;                                  // 타입이 Square
        return shape.width * shape.width;
    }
}

/*
p15
런타임에는 타입 체크가 불가능하다.
instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없다.
타입스크립트의 타입은 제거 가능 (erasable) 하다.

shape 타입을 명확하게 하려면 런타임에 타입정보를 유지하는 방법이 필요하다.
*/