import styled from 'styled-components/macro';

const Wrapper = styled.div`
  .explore-container {
    display: grid;
    background-color: #000;
    padding: 50px 24px;
    @media screen and (max-width: 412px) {
      text-align: center;
    }
  }

  .explore-title {
    margin:0;
    padding: 50px 0;
    color: #fff;
    font-size: 48px;
    font-family: 'Montserrat';
    font-style: normal;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  .explore-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .explore-item {
    grid-column: span 1;
  }

`;

export default Wrapper;
