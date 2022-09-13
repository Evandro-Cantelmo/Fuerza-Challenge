import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 100%;
  max-width: 720px;
  height: 0;

  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
  span{
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  padding: 20px 0 32px;
`;
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
`;
export const Plus = styled.span`
  &::after{
    content: '+';
    font-size: 22px;
  }
`;
