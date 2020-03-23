// WebPack 설정 강의 
// 원의 넓이 구하기 
// commonjs 규격
//webpack의 사용 이유 - 여러개의 코드 조각들을 하나로 통합하는데 편리하게 도움을 줌
// require는 불러오는 키워드 ./mathUtill 파일에서 함수만 가져옴

//const {getCircleArea} = require('./mathUtill'); <== commonjs 표준

import {getCircleArea} from "./mathUtill"; // esm 표준

const result = getCircleArea(2);

console.log(result);