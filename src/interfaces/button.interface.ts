import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOutline?: boolean;
  children: ReactNode;
}
