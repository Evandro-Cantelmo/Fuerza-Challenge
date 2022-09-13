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

    overflow-wrap: anywhere;

    gap: 1.5rem;
    @media only screen and (min-width: 728px) {
      width: 100vw;
      max-width: 100vw;
    }
    div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media only screen and (min-width: 728px) {
        width: 70%;
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    input {
      margin-top: 30px;
      padding: 0.4rem;
      height: 48px;
      width: 100%;
      outline: none;
      padding: 15px;

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
      padding: 0.4rem;
      min-height: 379px;
      width: 100%;
      outline: none;

      resize: none;
      font-weight: 600;
      padding: 15px;

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
