import styled from "styled-components/macro";

const Wrapper = styled.div`
  .logo-container {
    display: grid;
    grid-template-columns: 0fr 1fr;
    grid-gap: 20px;
  }

  .nav-links, .nav-button {
    font-size: 12px;
    text-decoration: none;
    color: white;
    font-family: 'Ubuntu Mono', Sans;
  }

  .capco-logo {
    width: 85px;
    height: 30.38px;
    left: calc(50% - 170px / 2 - 715px);
    display: inline-block;
  }

  .logo-text {
    height: auto;
    width: auto;
    padding-top: -10px;
    font-family: 'Ubuntu Mono', Sans;
    display: inline-block;
  }
`;

export default Wrapper;
