import React from 'react';
import './style.css';
// props style that come after style already defined will override all previous styles
// abstraction of styles and power of react

export function Styled() {
  function Box({ size, style, ...rest }) {
    const sizeClassName = size ? `box--${size}` : ``;

    return (
      <div
        className={`box ${sizeClassName}`.trim()}
        style={{ fontStyle: 'italic', ...style }}
        {...rest}
      />
    );
  }

  return (
    <>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: 'pink' }}>
        medium lightblue box
      </Box>
      <Box size="large" style={{ backgroundColor: 'orange' }}>
        large lightblue box
      </Box>
    </>
  );
}
