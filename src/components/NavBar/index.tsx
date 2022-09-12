import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderContent } from './styles';
import arrowLeft from '../../assets/arrowLeft.svg';
import { INavBar } from '../../interfaces/navbar.interface';

/**
 * @export
 * @component
 * @name NavBar
 *
 *
 * @description
 * NavBar component
 */

export default function NavBar({ children, title }: INavBar) {
  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <span>
            <img src={arrowLeft}></img>
            {title}
          </span>
        </Link>
        {children || null}
      </HeaderContent>
    </Container>
  );
}
