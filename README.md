## Personal portfolio Blackboy96.xyz

A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.

[Blackboy96.xyz](https://blackboy96.xyz/)

![enter image description here](https://github.com/tOxicV4p0r/portfolio-v2/blob/main/static/demo.gif?raw=true)

  

## Tech Stack

  

- React

- TailwindCSS

- Fontawesome

  

## 🛠 How to setup

Simply run the below commands.

1. Install dependencies

```sh
npm install
```

2. Start the development server

```sh
npm start
```

# Story
## How I built portfolio website
Since I’m planning to start applying for jobs. I started thinking about how to effectively market myself. I began by planning the necessary skills. Since I lack working experience in this field, the only thing I can do is to build experience through practice projects and gain an understanding of various concepts. Ultimately, one thing that is essential for a developer is a portfolio website. After completing it, I would like to write a summary of the design and the various concepts that I have applied.

## Design concept

I start by seeking inspiration and determining the preferred style. The first thing I do is explore other developers’ portfolios, observing the design I like and trying to replicate them. One that caught my eye was that of  [Brittany Chiang](https://brittanychiang.com/), so I took it as a starting point for inspiration.

Now, it’s time to get hands-on and start laying down the framework. begin by outlining the structure and layout.
![Desktop layout](https://github.com/tOxicV4p0r/portfolio-v2/blob/main/static/S__19857414.jpg?raw=true)
![Mobile layout](https://github.com/tOxicV4p0r/portfolio-v2/blob/main/static/S__19857413.jpg?raw=true)

## Layout format used
The desired layout is to have a fixed column on the left and the ability to scroll only on the right side. After trying various approaches, I finally achieved the desired result by using a combination of grid layout and setting the left column as sticky. This allows the right column to scroll smoothly at any point on the screen.

## Additional task

**Scroll easing animation**

Due to the unsatisfactory scrolling behavior of the window object when we click to select different sections, we need to implement a custom animation to achieve the desired smoothness. The suitable function for this task is  **requestAnimationFrame** . Here is an example given by  [MNS web docs](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

```javascript
const element = document.getElementById("some-element-you-want-to-animate");  
let start, previousTimeStamp;  
let done = false;  

function  step(timeStamp) {  
   if (start === undefined) {  
      start = timeStamp;  
   }  
   const elapsed = timeStamp - start;  

   if (previousTimeStamp !== timeStamp) {  
   // Math.min() is used here to make sure the element stops at exactly 200px  
   const count = Math.min(0.1 * elapsed, 200);  
   element.style.transform = `translateX(${count}px)`;  
   if (count === 200) 
      done = true;  
   }  
   
   if (elapsed < 2000) {  
      // Stop the animation after 2 seconds  
      previousTimeStamp = timeStamp;  
      if (!done) {  
         window.requestAnimationFrame(step);  
      }  
   }  
}  

window.requestAnimationFrame(step);
```

Next, we will modify the code and add an easing function, which can be found here:  [https://easings.net/](https://easings.net/). Specifically, I have chosen the easeInOutCubic function for this purpose.

The function will accept a value ranging from 0 to 1 as an input and return a value ranging from 0 to 1 as an output.

![easeInOutCubic](https://github.com/tOxicV4p0r/portfolio-v2/blob/main/static/S__19857415.jpg?raw=true)

By passing the time value as an input, we will obtain the scroll position that we need. The code will be something like this.

```javascript
const  scrollSmooth  = (toElementId, duration, offsetTop) => {
   const  startPosition  =  window.scrollY;
   const  distance  = (document.getElementById(toElementId).getClientRects()[0].top) -  offsetTop;
   const  extendDuration  =  duration  + (Math.abs(distance) *  0.5);

   if (distance  ===  0) {   
      return;
   }

   let  startTimeStamp;
   function  step(timeStamp) {
      if (startTimeStamp  ===  undefined) {
         startTimeStamp  =  timeStamp;
      }
      
      const  elapsed  =  timeStamp  -  startTimeStamp;
      const  timeRation  =  elapsed  / (extendDuration  *  0.01);

      // The current position that has to move is within range between 0..1
      // The time input range between 0..1 , indicating the position within the animation.
      const  current  =  easeInOutCubic(Math.min(timeRation  /  100, 1));

      // Perform scrolling
      window.scroll(0, startPosition  + (distance  *  current));

      if (current  <  1) {
         window.requestAnimationFrame(step);
      }
   }

   window.requestAnimationFrame(step);
};
```
In this line, the more this distance there is, the more time will be added for the smoothness.
```javascript
    const extendDuration = duration + (Math.abs(distance) * 0.5);
```

Where the  **offsetTop** is the section offset that is added to prevent window from scrolling to the very top.

![enter image description here](https://github.com/tOxicV4p0r/portfolio-v2/blob/main/static/S__19857416.jpg?raw=true)

## 🎨 Color theme

| Color | Hex |
| -------------- | ------------------------------------------------------------------ |
| primaryTitle | ![#5DBF4E](https://via.placeholder.com/10/5DBF4E?text=+) `#5DBF4E` |
| primarySubTitle| ![#498C3F](https://via.placeholder.com/10/498C3F?text=+) `#498C3F` |
| primaryHeader | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) `#FFFFFF` |
| primaryContent | ![#8F96A6](https://via.placeholder.com/10/8F96A6?text=+) `#8F96A6` |
| primarySubContent1| ![#4b4f58](https://via.placeholder.com/10/4b4f58?text=+) `#4b4f58` |
| primarySubContent2| ![#343740](https://via.placeholder.com/10/ccd6f6?text=+) `#343740` |
| primaryBg | ![#0D0D0D](https://via.placeholder.com/10/0D0D0D?text=+) `#0D0D0D` |

![enter image description here](https://raw.githubusercontent.com/tOxicV4p0r/portfolio-v2/main/static/Color-UI_UX.jpg)

As for the other details, I will provide them in more depth in the tutorial video. This article serve as a brief summary for now.


### Show your support
Give a ⭐ if you like this website!

## License

This project is free and open source software, distributed under the The MIT License. Feel free to use anyway you want.

## Credits

This project was inspired by [brittanychiang.com](https://brittanychiang.com/)