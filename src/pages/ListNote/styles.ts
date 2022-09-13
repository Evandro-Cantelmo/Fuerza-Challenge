import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 30px;

  width: 100%;
  max-width: 720px;
  height: 0;

  gap: 1.5rem;
  @media only screen and (min-width: 728px) {
    width: 100vw;
    max-width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
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
  margin-top: 0px;
  @media only screen and (min-width: 728px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 154px;
  height: 178px;
  padding: 10px;

  background: white;
  box-shadow: -3px 2px 0px 2px #faf2ec, -5px 5px 20px rgba(0, 0, 0, 0.3);
  overflow-wrap: anywhere;
  overflow: hidden;

  font-size: 20px;

  border-radius: 4px;
`;
export const Plus = styled.span`
  &::after {
    content: '+';
    font-size: 22px;
  }
`;
