const PI = 3.14;
const getCircleArea = r => r*r * PI;
const getSquareArea = d => d *d;
// export를 사용하여 내보내기 가능
// 이름같으면 : 뒤 생략 가능
module.exports ={
    PI,
    getCircleArea,
    getSquareArea
}
// const getSquareArea = d => d *d;

// export {
//     PI,
//     getCircleArea,
//     getSquareArea
// }