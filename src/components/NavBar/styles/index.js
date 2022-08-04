import styled from "styled-components/macro";

const Wrapper = styled.div`
  .logo-container {
    display: grid;
    grid-template-columns: 0fr 1fr;
    grid-gap: 20px;
  }

  .nav-links {
    font-size: 12px;
    text-decoration: none;
    color: white;
  }

  .capco-logo {
    width: 85px;
    height: 30.38px;
    left: calc(50% - 170px / 2 - 715px);
  }

  .logo-text {
    height: auto;
    width: auto;
    padding-top: -10px;
    // padding-bottom: 23px;
  }
  .capco-logo,
  .logo-text {
    display: inline-block;
  }

  .logo-text,
  .nav-links {
    font-family: Ubuntu Mono;
  }
`;

export default Wrapper;
