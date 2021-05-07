import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const Index = () => {
  return (
    <>
      <Global />
      <div>
        <H1>Главная страница</H1>
      </div>
    </>
  );
}

export default Index;
