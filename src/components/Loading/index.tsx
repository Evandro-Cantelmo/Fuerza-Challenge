import React from 'react';
import { CircularProgress } from '@mui/material';
import { Container } from './styles';
import theme from '../../styles/theme';

/**
 * @export
 * @component
 * @name Loading
 *
 *
 * @description
 * Circular Loading
 */
export default function Loading() {
  return (
    <Container>
      <CircularProgress sx={{ color: theme.colors.brown.primary }} />
    </Container>
  );
}
