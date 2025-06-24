import React from 'react';
import './GlitchText.css';

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = false,
  enableOnHover = false,
  className = ''
}) => {
  const classNames = [
    'glitch-text',
    enableShadows ? 'with-shadows' : '',
    enableOnHover ? 'on-hover' : '',
    className
  ].join(' ');

  const style = {
    animationDuration: `${speed}s`
  };

  return (
    <span className={classNames} style={style} data-text={children}>
      {children}
    </span>
  );
};

export default GlitchText;
