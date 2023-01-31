/**
 * p19
 * 타입스크립트의 타입으로는 함수를 오버로드할 수 없다.
 */

/*
매개변수가 달라도 에러가 난다.
런타임에서 타입과는 무관하기때문에 함수 오버로딩은 불가능

function add(a: number, b: number){
    return a+b;
}

function add(a: string, b: string){
    return a+b;
}

*/

/*
타입스크립트에서 함수 오버로딩을 지원하나 타입 수준에서만 지원
하나의 함수에 대해 여러 개의 선언문을 작성이 가능하지만 구현체 (implementation)는 유일해야한다.
*/

function add(a: number, b: number) : number;
function add(a: string, b: string) : string;

function add(a:any,b:any){
    return a+b;
}

const three = add(1,2);
const twelve = add('1','2');
