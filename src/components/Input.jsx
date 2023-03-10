import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, dataTesteId, className } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        { label }
        <div className="control">
          <input
            className={ `input-${className}` }
            data-testid={ dataTesteId }
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ name }
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  dataTesteId: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  className: '',
};

export default Input;
