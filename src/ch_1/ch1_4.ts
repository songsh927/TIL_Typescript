/* 
p17
타입 연산은 런타임에 영향을 주지 않는다. 
*/


/*
function asNumber(val : number | string): number {
    return val as number;
}

컴파일 후 자바스크립트 코드
 
 function asNumber(val){
      return val;
 }
 */ 

function asNumber(val : number | string): number {
    return typeof(val) === 'string' ? Number(val) : val;
}
/*
컴파일 후 자바스크립트 코드

function asNumber(val) {
    return typeof (val) === 'string' ? Number(val) : val;
}

*/