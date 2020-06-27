import React, { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [state, setState] = useState(false);
  return (
    <header>
      <Logo />
      <div
        onClick={() => {
          setState(!state);
        }}
        className={`hamburger ${state ? 'is-active' : ''}`}
      >
        <div className="hamburger-wrapper">
          <div className="hamburger-elem"></div>
        </div>
      </div>
      <nav className={`navigation ${state ? 'is-active' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <a
              href="#intro"
              onClick={() => {
                setState(!state);
              }}
            >
              Intro
            </a>
          </li>
          <li className="menu-item">
            <a
              href="#techstacks"
              onClick={() => {
                setState(!state);
              }}
            >
              Tech stacks
            </a>
          </li>
          <li className="menu-item">
            <a
              href="#hello"
              onClick={() => {
                setState(!state);
              }}
            >
              Hello
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
