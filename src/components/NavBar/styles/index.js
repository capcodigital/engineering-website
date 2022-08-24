import styled from "styled-components/macro";
import { Drawer } from "@mui/material";

export const Wrapper = styled.div`
  .logo-container {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-gap: 20px;
  }

  .capco-logo {
    display: inline-block;
    width: 85px;
    height: 30.38px;
    left: calc(50% - 170px/2 - 715px);
  }

  .logo-text {
    display: inline-block;
    font-family: Ubuntu Mono, Sans;
  }

  .MuiButton-text {
    font-family: Ubuntu Mono;
    font-size: 18px;
  }

  .MuiPaper-root {
    background-color: #000000;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding-top: 60px;
    font-family: Ubuntu Mono;
    opacity: 0.8;
    text-transform: uppercase;
    background-color: #000000;
    color: #ffffff;
  }
  .MuiTypography-root {
    font-family: Ubuntu Mono;
    font-size: 22px;
  }
`
