import styled from "styled-components/macro";

const Wrapper = styled.div`
.events-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 50px 24px;
    background-color: #fff;
    color: #000; 
    @media screen and (max-width: 412px) {
        grid-template-columns: 1fr;
    }
}

.events-text {
    grid-column: span 1;
    @media screen and (max-width: 412px) {
        text-align: center;
    }
}

.events-image {
    grid-column: span 1;
    min-height: 250px;
    background-color: grey;
}


`;

export default Wrapper;