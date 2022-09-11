import React from 'react';
import { IButton } from '../../interfaces/button.interface';

import { CustomButton } from './styles';

/**
 * @export
 * @component
 * @name Button
 *
 *
 * @description
 * Brown Button
 */
export default function Button({ children, onOutline, ...rest }: IButton) {
  return (
    <CustomButton onOutline={onOutline} {...rest}>
      {children}
    </CustomButton>
  );
}
