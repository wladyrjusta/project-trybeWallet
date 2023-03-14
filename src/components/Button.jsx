import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, type, moreClasses, disabled, onSubmit } = this.props;
    return (
      <button
        className={ `button-${moreClasses}` }
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        onSubmit={ onSubmit }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  moreClasses: PropTypes.string,
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  disabled: true,
  moreClasses: '',
  onSubmit: () => {},
};

export default Button;
