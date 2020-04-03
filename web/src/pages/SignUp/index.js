import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um email válido.').required('email obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('senha obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return <>
    <img src={logo} alt="GoBarber" />

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome completo"  />
      <Input name="email" type="email" placeholder="Seu e-mail"  />
      <Input name="password" type="password" placeholder="Senha"  />

      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </Form>
  </>;
}
