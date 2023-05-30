import styled from 'styled-components/macro';

const Wrapper = styled.div`
  .openroles-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    background-color: #000;
    color: #fff;
    padding: 0 24px 70px 24px;
    @media screen and (max-width: 412px) {
      grid-template-columns: 1fr;
    }
  }

  .openroles-image {
    grid-column: span 1;
    min-height: 250px;
    background-color: grey;
  }

  .openroles-text {
    grid-column: span 1;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

`;

export default Wrapper;
