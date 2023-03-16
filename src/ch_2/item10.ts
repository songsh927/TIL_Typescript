/**
 * item 10
 * 객체 래퍼 타입 피하기
 */

function isGreeting(phrase: String){
    return [
        'hello',
        'good day'
    ].includes(phrase);
    //rgument of type 'String' is not assignable to parameter of type 'string'.
    // 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
}

/**
 * 타입스크립트 객체 래퍼 타입은 지양하고 기본형타입을 사용해야함
 * ex) String => string Number => number Boolean => boolean Symbol => symbol BigInt => bigint
 */