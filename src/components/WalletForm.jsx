import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrencies, fetchWalletExchangeRates } from '../redux/actions';
import Input from './Input';
import Button from './Button';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitFormInfos = this.submitFormInfos.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submitFormInfos(event) {
    event.preventDefault();

    const { dispatch } = this.props;

    dispatch(fetchWalletExchangeRates(this.state));
    this.setState((prevState) => ({ id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação' }));
  }

  render() {
    const { value,
      description, method, tag, currency } = this.state;
    const { className, moreClasses, currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <Input
              className={ className }
              type="number"
              name="value"
              id="value"
              value={ value }
              onChange={ this.handleChange }
              dataTesteId="value-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              name="currency"
              id="currency"
              type="select"
              onChange={ this.handleChange }
              value={ currency }
            >
              { currencies
                .map((mapCurrency) => (
                  <option
                    key={ mapCurrency }
                    value={ mapCurrency }
                  >
                    {mapCurrency}
                  </option>))}
            </select>
          </label>
          <label htmlFor="method">
            <select
              data-testid="method-input"
              value={ method }
              type="text"
              name="method"
              id="method"
              onChange={ this.handleChange }
            >
              <option
                value="Dinheiro"
              >
                Dinheiro
              </option>
              <option
                value="Cartão de crédito"
              >
                Cartão de crédito
              </option>
              <option
                value="Cartão de débito"
              >
                Cartão de débito
              </option>
            </select>
          </label>
          <label htmlFor="tag">
            Finalidade da despesa
            <select
              data-testid="tag-input"
              value={ tag }
              type="text"
              name="tag"
              id="tag"
              onChange={ this.handleChange }
            >
              <option
                value="Alimentação"
              >
                Alimentação
              </option>
              <option
                value="Lazer"
              >
                Lazer
              </option>
              <option
                value="Trabalho"
              >
                Trabalho
              </option>
              <option
                value="Transporte"
              >
                Transporte
              </option>
              <option
                value="Saúde"
              >
                Saúde
              </option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição da despesa
            <textarea
              data-testid="description-input"
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <Button
          type="submit"
          label="Adicionar despesa"
          moreClasses={ moreClasses }
          disabled={ false }
          onClick={ this.submitFormInfos }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  moreClasses: PropTypes.string,
  currencies: PropTypes.arrayOf(PropTypes.string),
};

WalletForm.defaultProps = {
  className: 'wallet-form',
  moreClasses: 'wallet-form-btn',
  currencies: [],
};

export default connect(mapStateToProps)(WalletForm);
