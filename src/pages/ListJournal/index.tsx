import React from 'react';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';

/**
 * @export
 * @component
 * @name ListJournal
 *
 *
 * @description
 * ListJournal page
 */

export default function ListJournal() {
  return (
    <>
      <Header></Header>
      <EmptyState linkPath="/" linkLabel="Create a journal" />
    </>
  );
}
