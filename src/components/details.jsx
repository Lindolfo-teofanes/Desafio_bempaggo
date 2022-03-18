import styled from "styled-components"

const Select = styled.select`
        width: 23%;
        height: 4vh;
        margin: 0 7px 0 0;
        border-radius: 8px;
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        font-family: 'Poppins', sans-serif;
        text-align: center;

        @media(max-width: 600px){
            width: 25%;
        }
    
`;

function Details() {


    return (
        <>
            <Select name="month" id="">
                <option value="">MM</option>
                <option value="janeiro">JAN</option>
                <option value="fevereiro">FEV</option>
                <option value="marco">MAR</option>
                <option value="abril">ABR</option>
                <option value="maio">MAI</option>
                <option value="junho">JUN</option>
                <option value="julho">JUL</option>
                <option value="agosto">AGO</option>
                <option value="setembro">SET</option>
                <option value="outubro">OUT</option>
                <option value="novembro">NOV</option>
                <option value="dezembro">DEZ</option>
            </Select>
            <Select name="month" id="">
                <option value="">YYYY</option>
                <option value={2022}>22</option>
                <option value={2023}>23</option>
                <option value={2024}>24</option>
                <option value={2025}>25</option>
                <option value={2026}>26</option>
                <option value={2027}>27</option>
                <option value={2028}>28</option>
                <option value={2029}>29</option>
                <option value={2030}>30</option>
                <option value={2031}>31</option>
                <option value={2032}>32</option>
                <option value={2033}>33</option>
            </Select>
            

        </>
    )
}

export default Details;