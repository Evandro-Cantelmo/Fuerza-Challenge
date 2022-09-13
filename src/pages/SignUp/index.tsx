import React, { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import { AuthContext } from '../../context/AuthContext';
import validatedForm from '../../utils/validatedForm';
import { Toaster, toast } from 'react-hot-toast';
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
  const history = useHistory();

  const { isAuthenticated, newAccount } = useContext(AuthContext);

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatedForm({ username, password })) {
      return;
    }

    if (await newAccount(username, password, email)) {
      toast.success('register success');
      history.push('/');
    } else {
      toast.success('register failed!');
    }
  };

  return (
    <>
      <Toaster position="top-right"></Toaster>
      <AuthForm
        authenticated={isAuthenticated}
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
        handleOnSubmitForm={handleForm}
      />
    </>
  );
}
