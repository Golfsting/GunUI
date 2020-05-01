import React from 'react';

export const withCustomStyle = (divStyle) => (storyFn) => {
  return (<div style={divStyle}>{storyFn()}</div>);
}

const center = {
  'display': 'flex',
  'justify-content': 'center'
};

export const withCenteredStyle = withCustomStyle(center);
