import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, dataTesteId } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        { label }
        <div className="control">
          <input
            data-testid={ dataTesteId }
            className="input"
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
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;
