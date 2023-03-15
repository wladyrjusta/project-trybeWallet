import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa os componentes da página Wallet', () => {
  it('Testa se o componente Header é renderizado de forma correta', () => {
    renderWithRouterAndRedux(<Wallet />);

    const logoImgElement = screen.getByRole('img');
    expect(logoImgElement).toBeVisible();
    expect(logoImgElement).toHaveAttribute('src', 'logo-trybe.png');

    const headingEmail = screen.getByRole('heading', { name: 'Email:', level: 3 });
    expect(headingEmail).toBeInTheDocument();

    const headingTotalExpenses = screen.getByText('Despesa Total: R$');
    expect(headingTotalExpenses).toBeInTheDocument();

    const headingSum = screen.getByRole('heading', { name: '0.00', level: 4 });
    expect(headingSum).toBeInTheDocument();
  });
  it('Testa se o formulário para despesas é renderizado de forma correta', () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByLabelText('Valor');
    expect(valueInput).toBeVisible();
    const currencyInput = screen.getByLabelText('Moeda');
    expect(currencyInput).toBeVisible();
    const methodInput = screen.getByLabelText('Metodo de pagamento');
    expect(methodInput).toBeVisible();
    const tagInput = screen.getByLabelText('Finalidade da despesa');
    expect(tagInput).toBeVisible();
    const descriptionInput = screen.getByLabelText('Descrição da despesa');
    expect(descriptionInput).toBeVisible();
    const addExpenseBtn = screen.getByRole('button');
    expect(addExpenseBtn).toBeVisible();

    userEvent.type(valueInput, '20');
    expect(valueInput).toHaveValue(20);
    userEvent.type(descriptionInput, 'Ida ao Parque de diversões');
    expect(descriptionInput).toHaveValue('Ida ao Parque de diversões');

    userEvent.selectOptions(methodInput, 'Dinheiro');
    expect(methodInput).toHaveValue('Dinheiro');
    userEvent.selectOptions(tagInput, 'Lazer');
    expect(tagInput).toHaveValue('Lazer');
  });
  it('Entrando através da página de login, testa as funcionalidade de Wallet', async () => {
    renderWithRouterAndRedux(<App />);

    const validEmail = 'teste@email.com';
    const validPassword = '123456';

    const enterBtn = screen.getByRole('button', { name: 'Entrar' });
    expect(enterBtn).toBeDisabled();

    const inputEmail = screen.getByLabelText('Email:');
    userEvent.type(inputEmail, validEmail);

    const inputSenha = screen.getByLabelText('Senha:');
    userEvent.type(inputSenha, validPassword);

    expect(enterBtn).not.toBeDisabled();
    userEvent.click(enterBtn);

    const headingEmail = screen.getByRole('heading', { name: `Email: ${validEmail}`, level: 3 });
    expect(headingEmail).toBeInTheDocument();

    const valueInput = screen.getByLabelText('Valor');
    userEvent.type(valueInput, '20');
    expect(valueInput).toHaveValue(20);

    const methodInput = screen.getByLabelText('Metodo de pagamento');
    userEvent.selectOptions(methodInput, 'Dinheiro');
    const tagInput = screen.getByLabelText('Finalidade da despesa');
    userEvent.selectOptions(tagInput, 'Lazer');
    const descriptionInput = screen.getByLabelText('Descrição da despesa');
    userEvent.type(descriptionInput, 'Cinema');
    const addExpenseBtn = screen.getByRole('button');
    userEvent.click(addExpenseBtn);
  });
});
