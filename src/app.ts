
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

const v: NamedVector = {x: 3, y: 4, name:'Zee'};

console.log(calculateLength(v));