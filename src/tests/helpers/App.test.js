import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa os componentes App e página Login', () => {
  it('Testa se os inputs o botões da página login são renderizados e funcionam corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const headingLogin = screen.getByRole('heading', { name: 'Login', level: 1 });
    const inputEmail = screen.getByLabelText('Email:');
    const inputSenha = screen.getByLabelText('Senha:');
    const { pathname } = history.location;

    expect(headingLogin).toBeVisible();
    expect(inputEmail).toBeVisible();
    expect(inputSenha).toBeVisible();
    expect(pathname).toBe('/');
  });
  it('Testa se o botão permanece disabled até atender os requisitos minimos de email e senha válidos e se ao ser clicado direciona para página com rota: /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const validEmail = 'teste@email.com';
    const validPassword = '123456';

    const enterBtn = screen.getByRole('button', { name: 'Entrar' });
    expect(enterBtn).toBeInTheDocument();
    expect(enterBtn).toBeDisabled();

    const inputEmail = screen.getByLabelText('Email:');
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, validEmail);
    expect(inputEmail).toHaveValue(validEmail);

    const inputSenha = screen.getByLabelText('Senha:');
    expect(inputSenha).toHaveValue('');
    userEvent.type(inputSenha, validPassword);
    expect(inputSenha).toHaveValue(validPassword);

    expect(enterBtn).not.toBeDisabled();
    userEvent.click(enterBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
    expect(inputEmail).not.toBeInTheDocument();
    expect(inputSenha).not.toBeInTheDocument();
    expect(enterBtn).not.toBeInTheDocument();
  });
});
