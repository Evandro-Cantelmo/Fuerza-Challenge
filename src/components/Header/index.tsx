import React from 'react';
import { Link } from 'react-router-dom';
import { IHeader } from '../../interfaces/header.interface';
import { Container, HeaderContent } from './styles';
import logo from '../../assets/logo.svg';

/**
 * @export
 * @component
 * @name Header
 *
 *
 * @description
 * Header component
 */

export default function Header({ children }: IHeader) {
  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="nucturnal name logo"></img>
        </Link>
        {children || null}
      </HeaderContent>
    </Container>
  );
}
