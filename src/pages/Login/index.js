import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';
import { Form, Content } from './styles';
import * as Yup from 'yup';

import api from '../../services/api';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Preencha um e-mail válido.')
    .required('Preencha o e-mail'),
  password: Yup.string()
    .required('Preencha a senha.')
});

export default class Login extends Component {
  handleSubmit = ({ email, password }) => {
    return api.post('/login', {
      email,
      password
    }).then(res => {
      const { token, user_name } = res.data;
      localStorage.setItem('jwt', token);
      localStorage.setItem('username', user_name);
      this.props.history.push('/home');
    });
  }


  render() {
    return (
      <Content>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '400px',
          height: '400px',
          background: '#fff'
        }}>
          <Form schema={SigninSchema} onSubmit={this.handleSubmit}>
            <Input name="email" />
            <Input name="password" type="password" />
            <button type="submit">Login</button>
          </Form>
        </div >
      </Content>

    );
  }
}
