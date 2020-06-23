import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Techstacks from './components/Techstacks';
import Hello from './components/Hello';
import { SkillContextProvider } from './components/Tech/TechContext';
import './scss/styles.scss';

const scroll =
  window.requestAnimationFrame ||
  function(cb) {
    window.setTimeout(cb, 1000 / 60);
  };

const isElementInViewport = function(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

const cb = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-visible');
  });
};

export default function App() {
  useEffect(() => {
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    const observer = new IntersectionObserver(cb);
    const targets = document.querySelectorAll('.show-on-scroll');
    targets.forEach(target => observer.observe(target));
    const loop = () => {
      Array.prototype.forEach.call(elementsToShow, function(el) {
        isElementInViewport(el)
          ? el.classList.add('is-visible')
          : el.classList.remove('is-visible');
      });
      scroll(loop);
    };
    loop();
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <SkillContextProvider>
        <Techstacks />
      </SkillContextProvider>
      <Hello />
    </div>
  );
}

render(<App />, document.getElementById('root'));
