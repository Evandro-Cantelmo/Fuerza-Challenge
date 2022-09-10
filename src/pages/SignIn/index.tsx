import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';

/**
 * @export
 * @component
 * @name SignIn
 *
 *
 * @description
 * SignIn page
 */
export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthForm
      title="Sign in"
      linkLabel="Sign up"
      linkPath="/"
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      usernameLabel="Your username"
      passwordLabel="Your password"
      forgotPassword
    />
  );
}
