import React, { ChangeEvent } from 'react';
import { IInput } from '../../interfaces/input.interface';
import { Container } from './styles';

/**
 * @export
 * @component
 * @name Input
 *
 *
 * @description
 * Input
 */

export default function Input({ type, value, setValue, id, label }: IInput) {
  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value);
  };
  return (
    <Container>
      <input
        type={type || 'text'}
        value={value}
        id={id}
        onChange={handleEvent}
      />

      <label htmlFor={id}>{label}</label>
    </Container>
  );
}
