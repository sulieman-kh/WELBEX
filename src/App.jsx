import styled from "styled-components"
import Home from "./pages/Home"
import { mobile } from "./responsive";

const Container = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  ${mobile({
  padding: '0',
})}
`;


function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App
