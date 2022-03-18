import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { FiBox } from "react-icons/fi";
import Itens from "./components/itens";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body{
      background-color: #8A2BE2;
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      font-family: 'Poppins', sans-serif;
    }

`;

const Container = styled.div`
    margin: 55px auto auto auto;
    width: 35em;
    background-color: white;
    border-radius: 25px;
    @media (max-width: 600px){
      width: 90%;
    }
    
`;

const Header = styled.header`
    background: #2F3676;
    display: flex;
    width: 100%;
    height: 10em;
    border-radius: 0% 0% 65% 35% / 0% 0% 50% 50%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    overflow: hidden;
    @media (max-width: 600px){
      width: 100%;
      height: 15%;
    }
    
    .text{
      color: white;
      margin: auto 0 auto 40px;
      font-size: 18px;
      @media (max-width: 600px){
        font-size: 15px;
      }
    }

    .box{      
      font-size: 140px;
      margin-left: 27%;
      opacity: 0.3;

      @media (max-width: 600px){
        margin-left: 10%;
        font-size: 80px;
      }
    }
`;

const Main = styled.main`

    margin: 15px 35px 0 35px;
    input{
      width: 100%;
      height: 15vh;
      border-radius: 15px;
      text-align: center;
      border: none;
      border-color: #D3D3D3 ;
      background-color: #EBEBF2;
      margin-top: 15px;      
    }

`;

const Footer = styled.footer`
    background-color: #C4C4C4;
    display: flex;
    margin-top: 20px;
    height: 8vh;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    justify-content: end;
    align-items: center;

    .button{
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      font-family: 'Poppins', sans-serif;
      margin-right: 30px;
      text-decoration: none;
      border: none;
      padding: 10px 30px;
      border-radius: 8px;
      background-color: #2F3676;
      color: white;
      cursor: pointer;
    }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <p className="text">Formulário<br />para compras de<br /><b>Pacotes de adesivos</b></p>
          <FiBox className="box" />
        </Header>
        <Main>
          <h5>Quantidade de Adesivos</h5>
          <Itens />
          <h5>Observações</h5>
          <input type="text" placeholder="Alguma dúvida? Recado?" />
        </Main>
        <Footer>
          <a className="button" href="/compra">Enviar</a>
        </Footer>
      </Container>
    </>

  );
}

export default App;
