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

export default function NavBar({ children, title, linkPath }: INavBar) {
  return (
    <Container>
      <HeaderContent>
        <Link to={linkPath}>
          <span>
            <img src={arrowLeft} alt="left arrow"></img>
            {title}
          </span>
        </Link>
        {children || null}
      </HeaderContent>
    </Container>
  );
}
