import styled from "styled-components/macro";

const Wrapper = styled.div`
.contact-container {
    display: grid; 
    grid-template-columns: 60% 1fr;
    grid-gap: 4%;
    padding: 120px 24px;
    background-color: #fff;
    color: #000;
    align-items: center;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

.contact-text {
    grid-column: span 1;
    font-size: 36px;
    line-height: 50px;
}

.contact-buttons {
    grid-column: span 1;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 6%;
    justify-content: center;
    @media screen and (max-width: 1045px) {
        grid-auto-flow: row;
        grid-gap: 14%;
    }
    @media screen and (max-width: 768px) {
        grid-auto-flow: column;
        grid-gap: 6%;
    }
}

.contact-button {
    padding: 14px 40px;
    background-color: #18A0FB;
    color: #000;
    border: 2px solid #18A0FB;
    border-radius: 6px;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
}

.contact-button--contact {
    background-color: #000;
    color: #18A0FB;
}

.contact-button--join {
    background-color: #18A0FB;
    color: #000;
}

`;

export default Wrapper;