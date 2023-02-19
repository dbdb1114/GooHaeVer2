/**
 * 
 * @param {number} Delay 전달받을 슬라이드 진행 시간
 * 
 * 변수 하나에 closer 적용 시켜서 사용해야함
 * @returns 실행 가능 여부 전달(Boolean값으로)
 */
function DelayTime ({Delay}) {
    let startTime = -new Date();

    return function () {
        if (new Date() - startTime > Delay) {
            startTime = new Date();

            return true;
        }
    }
}

export default DelayTime;