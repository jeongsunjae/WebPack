const PI = 3.14;
const getCircleArea = r => r*r * PI;
//export를 사용하여 내보내기 가능
// 이름같으면 : 뒤 생략 가능
// module.exports ={
//     PI,
//     getCircleArea
// }

export {
    PI,
    getCircleArea
}