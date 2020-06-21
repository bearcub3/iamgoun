# imgoun

Front-end/UI Designer

**Everything** on the website regarding webpack config, design and coding is done by me.
> React, JavaScript, HTML5, CSS3, SASS, Bootstrap, SVG, Webpack, Yarn and a few dependencies for extra functionalities such as React-Spring and etc.

To see my actual work, please clone this repository with **the green 'clone' button** on the top of right side of this page.
Or if you are familiar with terminal line,

    git clone https://github.com/bearcub3/imgoun.git

Once you clone my repository, open the terminal line and make sure you are in the cloned directory.

    cd imgoun

and then run the command line to see my work on the localhost server, http://localhost:8080/

    yarn start or npm run start
    
    
---
Currently, this website is optimized in Chrome browser and also works fine in Edge and of course, it is a responsive website. 
For the time being, there are some flickering issue and the SVG filter element doesn't work on Safari.
This is worse on Firefox. I am not sure if it is only related to my laptop or a general issue on Firefox.
Most of the effects are presented janky and there is a performance issue unlike in other browsers. This is a personal website and the majority uses the Google Chrome browser statistically. So, it won't be a major problem for the moment. :-)

I reckon that the SVG animations on the fixed position elements cause the flickering. First of all, I  can try using

    --webkit-backface-visibility: hidden;
    
for the SVG animation elements related to 3D transform to fix the issue. It is a bit unexpected that Edge works better than the other two. When it comes to the browser compatibility, I believed MS ones would be the one always causing a pain in the neck. Next time I'd like to try post-css with the postprocessor Autoprefixer. This would minimize the error-prone manual work and come in very handy with the automation. 

This is my first ever react website.
Originally I started building it with Javascript and JS libraries. and then, I decided to try something new.
It was a spontaneous decision. However, I think it was worth trying something I haven't done before. I only had worked on creating web components using React and storybook in a previous job. It was an eye-opening experience and I realized that I am capable of building things on my own, it led me to boost my confidence and I also learned a lot in many aspects of front-end development, for instance, writing webpack config code. I still have a way to go. But, it was a big step to open many doors to learning new things such as NodeJS, CommonJS and so on. 

Admittedly there is a big difference between vanilla JS and React to create a website/app. React is a great tool to modulize and to break down all the elements into the atomic components to extend maintainability and reusability. I clearly can perceive the philosophy of the React developers while building the whole site. Especially, if the website/app is configurable, I believe React would be the more ideal tool to optimize sustainability and extendability for the UI components to a certain degree. But, there are also some drawbacks along with those advantages. There could be lots of dependencies we may not be able to avoid and unlike JS, it doesn't manipulate DOM directly, but, its own virtual DOM. So, there are other things you need to learn to work around to tackle issues you confront as a React developer, such as state management and implementing react hooks. It was great fun and so far I am happy with what I have achieved as a newbie front-end developer.
