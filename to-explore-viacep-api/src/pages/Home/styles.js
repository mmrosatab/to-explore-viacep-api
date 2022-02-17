import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  padding: 2%;
  font-size: 8vw;
`;

const Main = styled.main`
  padding: 2%;
  flex: 1;
`;

const Footer = styled.footer`
  svg {
    vertical-align: top;
  }
`;

export { Container, Title, Main, Footer };
