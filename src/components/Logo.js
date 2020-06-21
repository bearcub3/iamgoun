import React from 'react';

export default function Logo() {
  return (
    <a className="logo-link" href="/">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <text
            transform="translate(4 30.866) scale(0.837 0.844)"
            className="logo-1"
          >
            I’m
            <tspan x="0" dy="50" className="logo-2">
              고운
            </tspan>
          </text>
          <text x="18" y="88" className="logo-3">
            /’go u:n/
          </text>
        </svg>
      </h1>
    </a>
  );
}
