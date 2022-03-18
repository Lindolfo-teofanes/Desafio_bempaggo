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
                <option value="janeiro">FEV</option>
                <option value="janeiro">MAR</option>
                <option value="janeiro">ABR</option>
                <option value="janeiro">MAI</option>
                <option value="janeiro">JUN</option>
                <option value="janeiro">JUL</option>
                <option value="janeiro">AGO</option>
                <option value="janeiro">SET</option>
                <option value="janeiro">OUT</option>
                <option value="janeiro">NOV</option>
                <option value="janeiro">DEZ</option>
            </Select>
            <Select name="month" id="">
                <option value="">YYYY</option>
                <option value="janeiro">22</option>
                <option value="janeiro">23</option>
                <option value="janeiro">24</option>
                <option value="janeiro">25</option>
                <option value="janeiro">26</option>
                <option value="janeiro">27</option>
                <option value="janeiro">28</option>
                <option value="janeiro">29</option>
                <option value="janeiro">30</option>
                <option value="janeiro">31</option>
                <option value="janeiro">32</option>
                <option value="janeiro">33</option>
            </Select>
            

        </>
    )
}

export default Details;