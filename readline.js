const {getCircleArea,getSquareArea} = require('./mathUtill');

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//question은 입력 함수
rl.question('원하는 도형을 작성해주세요 : {정사각형, 원}', 
    figure => {
        console.log(`선택된 도형 : ${figure}`);

        switch(figure) {
            case "정사각형":
                rl.question("변의 길이를 입력해주세요 : ", input => {
                    console.log(`입력받은 값 : ${input}`);
                    console.log(`정사각형의 넓이는 : ${getSquareArea(input)} 입니다.`);
                    rl.close();
                });
                break;

                case "원":
                    rl.question("반지름의 길이를 입력해주세요 : ", input => {
                        console.log(`입력받은 값 : ${input}`);
                        console.log(`정사각형의 넓이는 : ${getCircleArea(input)} 입니다.`);
                        rl.close();
                    });
                    break;

                default:
                    console.log("지원하지 않음");
                    rl.close();
        }
    }
)