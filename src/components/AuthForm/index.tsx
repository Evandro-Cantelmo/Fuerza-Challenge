import React from 'react';

import { IAuthForm } from '../../interfaces/authform.interface';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Button from '../../pages/CustomButton';

/**
 * @export
 * @component
 * @name AuthForm
 *
 *
 * @description
 * Auth Form
 */

export default function AuthForm({
  title,
  linkPath,
  linkLabel,
  username,
  setUsername,
  usernameLabel,
  password,
  setPassword,
  passwordLabel,
  forgotPassword,
  optionalEmail,
  email,
  setEmail,
  submitButton,
}: IAuthForm) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Noctural name logo" />
      </Link>

      <h1>{title}</h1>

      <Link to={linkPath}>{linkLabel}</Link>
      <Form>
        <Input
          value={username}
          setValue={setUsername}
          label={usernameLabel}
          id="username"
        />
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          label={passwordLabel}
          id="username"
        />
        {forgotPassword && <Link to="/">Forgot Password?</Link>}
        {optionalEmail && (
          <Input
            value={email}
            setValue={setEmail && setEmail}
            label="Email (optional)"
            id="email"
          />
        )}
        <Button>{submitButton}</Button>
      </Form>
    </Container>
  );
}
