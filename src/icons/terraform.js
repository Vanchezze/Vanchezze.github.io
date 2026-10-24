import React from 'react';

const SVG = ({
  style = {},
  fill = '',
  width = '100%',
  className = '',
  viewBox = '0 0 16 16'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="line">
      <path
        fill-rule="nonzero"
        clip-rule="nonzero"
        d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z"
        fill={fill}
      ></path>
    </g>
  </svg>
);

export default SVG;
