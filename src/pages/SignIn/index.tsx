import React, { FormEvent, useContext, useState } from 'react';
import AuthForm from '../../components/AuthForm';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import validatedForm from '../../utils/validatedForm';

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

  const { authenticate, isAuthenticated } = useContext(AuthContext);
  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatedForm({ username, password })) {
      return;
    }

    if (await authenticate(username, password)) {
      toast.success('Signed in');
    } else {
    
      toast.error('something went wrong, user not registered');
    }
  };

  return (
    <>
     <Toaster position="top-right"></Toaster>
      <AuthForm
        authenticated={isAuthenticated}
        title="Sign in"
        linkLabel="Sign up"
        linkPath="/signup"
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleOnSubmitForm={handleForm}
        usernameLabel="Your username"
        passwordLabel="Your password"
        forgotPassword
        submitButton="Log In"
      />
    </>
  );
}
