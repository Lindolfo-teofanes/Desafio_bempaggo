import { GlobalStyle } from "../App";
import styled from "styled-components";
import Logo from "../img/logo.png"
import Details from "../components/details";
import swal from 'sweetalert';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #122742;
    width: 50%;
    height: 20em;
    margin: 10% auto auto auto;
    border-radius: 25px;

    @media(max-width: 600px){
        width: 95%;
    }
`;

const Block = styled.div`
    background-color: white;
    width: 20vw;
    display: fl;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    .bempaggo{
        width: 17vw;        
    }

    @media(max-width: 600px){
        width: 20vw;
    }
`;

const Information = styled.div`
    text-align: center;
    width: 30vw;
    h4{
        color: white;        
        margin: 20px 0 20px 0;
    }
    .info{
        margin: 0 0 20px 0;
        width: 70%;
        height: 3.5vh;
        border-radius: 10px;
        border: none;
        text-align: center;

        &::placeholder{
            color: black;
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            font-family: 'Poppins', sans-serif;
        } 
        @media(max-width: 600px){
            width: 85%;            
        }
     
    } 

    button{
        border: none;
        background-color: #3574E3;
        color: white;
        cursor: pointer;
        padding: 10px;
        margin-top: 40px;
        border-radius: 15px;
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        font-family: 'Poppins', sans-serif;
    }
    @media(max-width: 600px){
        width: 70vw;        
    }
`;

const Box = styled.div`
    display: flex;
    width: 100%;
    margin-left: 16%;

    input{
        width: 6.3vw;
        height: 4vh;
        border-radius: 10px;
        border: none;
        text-align: center;

        &::placeholder{
            color: black;
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            font-family: 'Poppins', sans-serif;
        }
        @media(max-width: 600px){
            width: 20vw;
        }
    }
    @media(max-width: 600px){
        margin-left: 7%;
    }
    
`;


function Checkout() {
 
    const Alert = ()=>{
        swal("Tudo Certo!","Pagamento Realizado", "success");
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <Block>
                    <img className="bempaggo" src={Logo} alt="" />
                </Block>
                <Information data-testid="information">
                    <h4 data-testid="card-data">Dados do Cartão</h4>
                    <input data-testid="name"className="info" type="text" placeholder="Nome Completo" />
                    <input data-testid="card-number"className="info" type="text" placeholder="N° do Cartão" />
                    <Box>
                        <Details />
                        <input data-testid="ccv" type="text" placeholder="CVV"/>
                    </Box>
                    <button data-testid="finish" onClick={Alert}>Finalizar Compra</button>
                </Information>
            </Container>
        </>
    )
};

export default Checkout;