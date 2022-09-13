import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    margin-top: 30px;

    width: 100%;
    max-width: 720px;
    height: 0;

    gap: 1.5rem;

    a {
      color: inherit;
      text-decoration: none;
    }
    input {
  
      padding: 15px;
      height: 48px;
      width: 100%;
      outline: none;

      font-weight: 600;

      color: ${theme.colors.brown.primary};
      background: rgba(255, 255, 255, 0.42);

      border: 1px solid rgba(157, 164, 166, 0.07);
      border-radius: 4px;
      &::placeholder {
        color: ${theme.colors.brown.primary};
      
      }
    }

    textarea {
      padding: 15px;
      min-height: 379px;
      width: 100%;
      outline: none;

      resize: none;
      font-weight: 600;

      color: ${theme.colors.brown.primary};
      background: rgba(255, 255, 255, 0.42);

      border: 1px solid rgba(157, 164, 166, 0.07);
      border-radius: 4px;
      &::placeholder {
        color: ${theme.colors.brown.primary};
        
      }
    }
  `}
`;
export const InputContainer = styled.div`
  width: 100vw;
  padding: 10px 26px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
export const Plus = styled.span`
  &::after {
    content: '+';
    font-size: 22px;
  }
`;
