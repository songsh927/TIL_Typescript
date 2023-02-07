/**
 * item 6
 * 편집기를 사용하여 타입 시스템 탐색하기
 */

/*
편집기에서 타입스크립트의 언어 서비스를 적극 활용할 것.

특정시점의 타입추론을 통해 디버깅이 쉬워짐
 */

function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    if(typeof elOrId === 'object'){
        return elOrId;
    } else if(elOrId === null){
        return document.body;
    } else {
        const el = document.getElementById(elOrId);
        return el;
    }
}
// HTMLElement | null 형식은 HTMLElement 형식에 할당할 수 없다.

const res = fetch('http://example.com')