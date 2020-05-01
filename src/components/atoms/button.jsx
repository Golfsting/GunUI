import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { onClick, style, label } = this.props;
    return (
      <button type="button" onClick={onClick} style={style}>
        {label && <span>{label}</span>}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
  style: {},
};

export default Button;
