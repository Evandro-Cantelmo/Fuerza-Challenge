import React from 'react';

export interface IAuthForm {
  title: string;
  linkPath: string;
  linkLabel: string;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  usernameLabel: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordLabel: string;
  forgotPassword?: boolean;
  optionalEmail?: boolean;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  submitButton: string;
}
