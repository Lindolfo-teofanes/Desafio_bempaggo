import { useState } from "react";
import styled from "styled-components";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

const Box = styled.div`
    height: 5vh;
    display: flex;
    padding: 10px;
    background-color: #EBEBF2;
    margin: 15px auto 15px auto;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    border:red;
    
    p{
        margin: 0 10px 0 10px;
    }
    
    button{
        border: transparent;
        display: flex;
        width: 25px;
        height: 25px;
        color: white;
        border-radius: 50%;
        
        
        cursor: pointer;
        justify-content: center;
        align-items: center;
        .icon{
            font-size: 20px;
        }
    }
`;

const Counter = styled.div`
    display: flex;
    padding: 5px;
    .active{
        background-color: #2F3676;
    }
    .disabled{
        background-color: #595E84;
    }
    .counter{
        width: 30px;
        margin: auto;
        text-align: center;
    }
`;


function Itens(){
    const [react, setReact] = useState(0);
    const [vue, setVue] = useState(0);
    const [angular, setAngular] = useState(0);
    const [colorR, setColorR] = useState("disabled");
    const [colorV, setColorV] = useState("disabled");
    const [colorA, setColorA] = useState("disabled");
    
    return(
        <>
        <Box>
            <p className="p-react">React</p>
            <Counter>
                <button data-testid="react-minus-button" className={colorR} onClick={()=>{if(react > 0){setReact(react-1)}; if(react === 0 || react === 1) setColorR("disabled")}}><IoIosRemove className="icon"/></button>
                <p data-testid="react-counter" className="counter"> {react} </p>
                <button data-testid="react-plus-button" className="active" onClick={()=>{setReact(react+1); setColorR("active")}}><IoIosAdd className="icon"/></button>
            </Counter>
        </Box>
        <Box>
            <p className="p-vue">Vue</p>
            <Counter>
                <button data-testid="vue-minus-button" className={colorV} onClick={()=>{if(vue > 0){setVue(vue-1)}; if(vue === 0 || vue === 1) setColorV("disabled")}}><IoIosRemove className="icon"/></button>
                <p data-testid="vue-counter" className="counter"> {vue} </p>
                <button data-testid="vue-plus-button" className="active" onClick={()=>{setVue(vue+1); setColorV("active")}}><IoIosAdd className="icon"/></button>
            </Counter>
        </Box>
        <Box>
            <p className="p-angular">Angular</p>
            <Counter>
                <button data-testid="angular-minus-button" className={colorA} onClick={()=>{if(angular > 0){setAngular(angular-1)} if(angular === 0 || angular === 1) setColorA("disabled")}}><IoIosRemove className="icon"/></button>
                <p data-testid="angular-counter" className="counter">{angular}</p>
                <button data-testid="angular-plus-button" className="active" onClick={()=>{setAngular(angular+1); setColorA("active")}}><IoIosAdd className="icon"/></button>
            </Counter>
        </Box>
        
        </>
    )
}

export default Itens;