import DelayTime from './DelayTime';

function SlideModule ({time, container, slideList, nowNum, nextNum}) {
    // Delay 시간 설정(전달 받기), DelayTime 호출 후 closer 적용
    const delay = time,
        delayTime = DelayTime(delay);

    return () => {
        if (delayTime()) {
            slideList[nowNum].style.left = "-100%";
        }
    }
}

export default SlideModule;