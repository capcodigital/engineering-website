import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "../../images/capco-logo.png";
import Wrapper from "./styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function NavBar() {
  return (
    <Wrapper>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <div className="logo-container">
                  <img className="capco-logo" src={Logo} alt="logo" />
                  <span className="logo-text">Engineering</span>
                </div>
              </Typography>
              <Button color="inherit" className="nav-button">
                Capabilities
              </Button>
              <Button color="inherit" className="nav-button">
                Team
              </Button>
              <a
                href="https://www.capco.com/Careers"
                target="blank"
                rel="noreferrer"
                className="nav-links"
              >
                <Button color="inherit" className="nav-button">
                  Career
                </Button>
              </a>
              <Button color="inherit" className="nav-button">
                Articles
              </Button>
              <a
                href="https://www.capco.com"
                target="blank"
                rel="noreferrer"
                className="nav-links"
              >
                <Button color="inherit" className="nav-button">
                  Capco.com
                </Button>
              </a>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
}

export default NavBar;
