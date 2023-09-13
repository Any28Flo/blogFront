import styled from "styled-components";
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  min-width: 100vw;
  min-height: 100vh;
  background: #3a3a55;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    "nav"
    " main"
    " footer ";
  text-align: center;
  grid-gap: 0.25rem;
`;

const Wrapper = () => {
    return (
        <Container>
            <NavBar/>
            <Outlet />
        </Container>
    )
}

export default Wrapper