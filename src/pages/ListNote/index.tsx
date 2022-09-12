import React from 'react';
import { Button, NavBar } from '../../components';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import { BoxContent, Container, GridContent, Plus } from './styles';

/**
 * @export
 * @component
 * @name ListNote
 *
 *
 * @description
 * ListNote page
 */

export default function ListNote() {
  let test = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header/>

      {test?.length < 1 ? (
        <EmptyState linkPath="/" linkLabel="Create a note" />
      ) : (
        <Container>
                  <NavBar title="HTML">
          <Button onOutline>
            <Plus />
            Add note
          </Button>
        </NavBar>
          <GridContent>
            {test?.map(() => (
              <BoxContent key=''>
                The h1, h2, h3, h4, h5, and h6 elements
                dfsdfsdfsdfsfdsdfsdfsdfasfasdfadfafasdasdasdasdasd
              </BoxContent>
            ))}
          </GridContent>
        </Container>
      )}
    </>
  );
}
