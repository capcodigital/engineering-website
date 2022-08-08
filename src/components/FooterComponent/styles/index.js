import styled from "styled-components/macro";

const Wrapper = styled.div`
  .footer-container {
    display: grid;
    background-color: #000;
    padding: 120px 24px;
    color: #fff;
    justify-items: center;
    text-align: center;
  }

  .footer-circles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 6%;
    // margin: 100px 597px;
    align-items: center;
    justify-items: center;
  }

  .footer-circle {
    min-height: 44px;
    min-width: 44px;
    border-radius: 50%;
    background-color: grey;
  }

`;

export default Wrapper;