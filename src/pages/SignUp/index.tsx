import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';

/**
 * @export
 * @component
 * @name SignUp
 *
 *
 * @description
 * SignUp page
 */
export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <AuthForm
      title="Sign Up"
      linkLabel="Already have an account"
      linkPath="/"
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      usernameLabel="Define a username"
      passwordLabel="Define a password"
      optionalEmail
      submitButton="Create account"
    />
  );
}
