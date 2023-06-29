const easeInOutQuart = (x) => {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}


function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

function easeInOutCirc(x) {
    return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

export const scrollSmooth = (rootElementId, firstElementId, toElementId, duration) => {
    const toElement = document.getElementById(toElementId);
    const firstElement = document.getElementById(firstElementId);
    const offSet = document.getElementById(rootElementId).getBoundingClientRect().top;
    let startTimeStamp, previousTimeStamp;
    let done = false;

    // const positionTarget = target;
    const toOffetTop = toElement.getBoundingClientRect().top;
    // console.log("🚀 ~ file: scroll.js:12 ~ scrollSmooth ~ offetTop:", toOffetTop);
    const pos = firstElement.getBoundingClientRect().top - offSet;
    // if (pos === offSet && pos === toOffetTop)
    //    return;
    // console.log("🚀 ~ file: scroll.js:16 ~ scrollSmooth ~ pos:", pos)
    const currentPosition = Math.abs(pos);
    // console.log("🚀 ~ file: scroll.js:17 ~ scrollSmooth ~ currentPosition:", currentPosition);
    // timeStamp is param from requestAnimationFrame
    const distance = toOffetTop - offSet;
    // console.log("🚀 ~ file: scroll.js:20 ~ scrollSmooth ~ distance:", distance)

    const extendDuration = duration + (Math.abs(distance) * 0.5);
    function step(timeStamp) {
        if (startTimeStamp === undefined) {
            startTimeStamp = timeStamp;
        }

        // if (distance === 0)
        //    return; // done = true;


        const elapsed = timeStamp - startTimeStamp;
        const timeRation = elapsed / (extendDuration * 0.01);

        const num = easeInOutCubic(timeRation / 100);
        // console.log("🚀 ~ file: scroll.js:34 ~ step ~ num:", num, timeRation, timeRation / 100)

        // do scroll
        // const move = element.top - (offetTop * num);
        document.getElementById(rootElementId).scroll(0, currentPosition + (distance * num));
        // console.log("🚀 ~ file: scroll.js:30 ~ step ~ offetTop * num:", toOffetTop * num, num, currentPosition, currentPosition + (distance * num));
        if (num >= 1)
            done = true;
        /*
        if (previousTimeStamp !== timeStamp) {
            // Math.min() is used here to make sure the element stops at exactly 200px
            const count = Math.min(0.1 * elapsed, 200);
            element.style.transform = `translateX(${count}px)`;
            if (count === 200) done = true;
        }
        */
        if (elapsed < extendDuration) {
            // Stop the animation
            if (!done) {
                window.requestAnimationFrame(step);
            }
        }
    }

    window.requestAnimationFrame(step);
};

