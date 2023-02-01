
/*
구조적 타이핑에 익숙해지기
*/

interface Vector2D{
    x: number;
    y: number;
}

function calculateLength(v:Vector2D){
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector{
    name: string;
    x: number;
    y: number;
}

interface Vector3D{
    x: number;
    y: number;
    z: number;
}

function nomalize(v: Vector3D){

    const length = calculateLength(v)

    return {
        x: v.x/length,
        y: v.y/length,
        z: v.z/length
    }
}

// console.log(nomalize({x: 3, y: 4, z: 5})); // 결과: {x: 0.6, y: 0.8, z: 1}

/*
calculateLength() 에서 z가 무시됨
2D백터를 계산하는 calculateLenth()의 구조적 타이핑 관점에서는 문제가 없음
*/

function calculateLengthL1(v: Vector3D){
    // let length = 0;
//     for( const axis of Object.keys(v)){
//     const coord = v[axis]; // v[axis]가 어떤 속성이 될 지 알 수 없기 때문에 에러
//     length += Math.abs(coord);
// }
//     return length;

    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C{
    foo: string;
    constructor(foo: string){
        this.foo = foo + 'asdf';
    }
}

const c = new C('instance of C');
const d : C = {foo: 'object literal'};
