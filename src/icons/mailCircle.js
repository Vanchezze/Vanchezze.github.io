import React from 'react';

const SVG = ({ style = {}, width = '100%', className = '' }) => (
  <svg
    width={width}
    height={width}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
  >
    <path
      fillRule="evenodd"
      d="M12 0a12 12 0 1 0 0 24a12 12 0 1 0 0-24z M6 7.5h12v9H6z M6 7.5l6 4.6l6-4.6v1.7l-6 4.6l-6-4.6z"
    />
  </svg>
);

export default SVG;
