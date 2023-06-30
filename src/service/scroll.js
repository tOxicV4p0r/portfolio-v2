import { easeInOutCubic } from "./easing";

export const scrollSmooth = (toElementId, duration, offsetTop) => {

    const startPosition = window.scrollY;
    const distance = (document.getElementById(toElementId).getClientRects()[0].top) - offsetTop;
    const extendDuration = duration + (Math.abs(distance) * 0.5);

    if (distance === 0) {
        return;
    }

    let startTimeStamp;
    function step(timeStamp) {
        if (startTimeStamp === undefined) {
            startTimeStamp = timeStamp;
        }

        const elapsed = timeStamp - startTimeStamp;
        const timeRation = elapsed / (extendDuration * 0.01);

        // The current position that has to move is within range between 0..1
        // The time input range between 0..1 , indicating the position within the animation.
        const current = easeInOutCubic(Math.min(timeRation / 100, 1));

        // Perform scrolling
        window.scroll(0, startPosition + (distance * current));

        if (current < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
};

