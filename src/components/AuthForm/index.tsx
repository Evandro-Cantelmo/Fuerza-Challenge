import React from 'react';

import { IAuthForm } from '../../interfaces/authform.interface';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';

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
  authenticated,
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
  handleOnSubmitForm,
}: IAuthForm) {
  return authenticated ? (
    <Redirect to="/journallist" />
  ) : (
    <Container>
      <Link to="/">
        <img src={logo} alt="Noctural name logo" />
      </Link>

      <h1>{title}</h1>

      <Link to={linkPath}>{linkLabel}</Link>
      <Form onSubmit={handleOnSubmitForm}>
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
          id="password"
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
