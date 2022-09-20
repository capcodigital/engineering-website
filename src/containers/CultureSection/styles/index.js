import styled from "styled-components/macro";

const Wrapper = styled.div`
  .culture-container {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    background-color: #000;
    padding: 120px 24px;
    color: #fff;
    justify-items: center;
    align-items: center;
    text-align: center;
  }

  .culture-title {
    grid-column: 1 / span 3;
    color: #fff;
    font-size: 48px;
    font-family: 'Montserrat';
    font-style: normal;
  }

  .culture-subtitle {
    grid-column: 1 / span 3;
    margin: 50px 0;
    color: #fff;
    font-size: 36px;
    font-family: 'Montserrat';
    font-style: normal;
  }

  .culture-employees {
    grid-column: 2 / span 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px 6%;
    width: 100%;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 412px) {
      grid-template-columns: 1fr;
    }
  }

  .culture-employee {
    width: 100%;
    height: 100%;
  }

  .employee-image {
    width: 100%;
    height: 100%;
  }

`;

export default Wrapper;