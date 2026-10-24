import React from 'react';

const SVG = ({
  style = {},
  fill = '',
  width = '100%',
  className = '',
  viewBox = '0 0 128 128'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <g id='original'><circle fill={fill} cx='64' cy='64' r='24.08'/><path fill={fill} d='M113.14,23.14a8.27,8.27,0,0,0-13.7-6.25,59,59,0,1,0,11.67,11.67A8.24,8.24,0,0,0,113.14,23.14ZM64,121A57,57,0,1,1,98.1,18.36a8.27,8.27,0,0,0,11.53,11.53A57,57,0,0,1,64,121Z'/></g>
  </svg>
);

export default SVG;
