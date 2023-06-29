import { easeInOutCubic } from "./easing";

export const scrollSmooth = (rootElementId, firstElementId, toElementId, duration) => {
    const toElement = document.getElementById(toElementId);
    const firstElement = document.getElementById(firstElementId);
    const offSet = document.getElementById(rootElementId).getBoundingClientRect().top;

    const toOffetTop = toElement.getBoundingClientRect().top;
    const firstOffetTop = firstElement.getBoundingClientRect().top - offSet;
    const startPosition = Math.abs(firstOffetTop);
    const distance = toOffetTop - offSet;

    const extendDuration = duration + (Math.abs(distance) * 0.5);
    // console.log("🚀 ~ file: scroll.js:14 ~ scrollSmooth ~ distance: ", distance, "startPosition:", startPosition)

    if (distance === 0)
        return;

    let startTimeStamp;
    function step(timeStamp) {
        if (startTimeStamp === undefined) {
            startTimeStamp = timeStamp;
        }

        const elapsed = timeStamp - startTimeStamp;
        const timeRation = elapsed / (extendDuration * 0.01);

        // current position that it has to move between 0..1
        // time input between 0..1 , tell the function that where they are.
        const current = easeInOutCubic(Math.min(timeRation / 100, 1));
        // console.log("🚀 ~ file: scroll.js:27 ~ step ~ num:", current, timeRation)

        // do scroll
        document.getElementById(rootElementId).scroll(0, startPosition + (distance * current));

        if (current < 1)
            window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
};

