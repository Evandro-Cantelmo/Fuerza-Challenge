import React from 'react';
import { Container, Emptyfloating } from './styles';
import emptyState from '../../assets/emptyState.svg';
import { Link } from 'react-router-dom';
import { IEmpty } from '../../interfaces/empty.interface';

/**
 * @export
 * @component
 * @name EmptyState
 *
 *
 * @description
 * EmptyState component
 */

export default function EmptyState({ title, linkPath, linkLabel }: IEmpty) {
  return (
    <>
      <Container>
        <Emptyfloating>
          {title !== undefined && <h2>{title}</h2>}

          <img src={emptyState} alt="" />
          <Link to={linkPath}>{linkLabel}</Link>
        </Emptyfloating>
      </Container>
    </>
  );
}
