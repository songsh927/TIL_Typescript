/**
 * item 7
 * 타입이 값들의 집합이라고 생각하기
 */

/*
할당 가능한 값들의 집함 => 타입
ex) 24, 1.63 => number
    'String' => String
    null, undefined => tsconfig.json의 설정에 따라

    타입을 값의 집합으로 생각하기
    타입스크립트의 타입은 업격한 상속관계가 아닌 집합으로 표현
 */

const x : never = 12; // never 타입으로 선언된 변수의 범위는 공집합이기 때문에 아무런 값도 할당할 수 없다.
//TS2322: Type 'number' is not assignable to type 'never'.
//number 타입은 never에 할당X

//literal 타입 => 한 가지 값만 포함하는 타입
type A = 'A';
type B = 'B';
type Twelve = 12;

//두 개 혹은 세 개로 묶으려면 union 타입을 사용
//union 타입은 값 집합들의 합집합을 말함
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

//타입스크립트의 오류에서 '할당 가능한'이라는 문구는 집합의 관점에서 '~의 원소(값과 타입의 관계)' 또는 '~의 부분 집합(두 타입의 관계)'를 의미한다.
const a: AB = 'A';
const c: AB = 'C';
//TS2322: Type '"C"' is not assignable to type 'AB'.
// TS2451: Cannot redeclare block-scoped variable 'c'.
/*
집합의 관점에서 타입체커의 역할은 하나의 집합이 다른 집합의 부분 집합인지 검사하는 것
 */


interface Person{
    name: string;
}
interface Lifespan{
    birth: Date;
    death?: Date;
}
// &연산자를 통해 두 개의 인터페이스의 교집합이 아닌 타입의 범위에 적용되기 때문에 두 개의 속성을 다 가지는 인터섹션 타입에 속함
//type PersonSpan = Person & Lifespan;
interface PersonSpan extends Person{ // 일반적으로 위의 PersonSpan을 선언하는 방식보다 extends키워드를 사용
    birth: Date;
    death?: Date;
}
//PersonSpan은 Person의 서브타입
const ps: PersonSpan = {
    name:'Alan Turing',
    birth:new Date('1912/06/23'),
    death: new Date('1954/06/07')
}

// 속성에 대한 인터섹션과 달리 두 인터페이스의 union에서는 그렇지 않다.
type K = keyof (Person | Lifespan); //타입이 never
// 속하는 값이 없기때문에 공집합이여야만 한다.

//keyof (A&B) = (keyof A) | (keyof B)
//keyof (A|B) = (keyof A) & (keyof B)


//extends 키워드는 제네릭타입에서 한정자로도 사용. '~의 부분 집합'을 의미
function getKey<K extends string>(val: any, key: K){}
