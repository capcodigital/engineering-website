import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from '../../images/capco-logo.png';
import { Wrapper, StyledDrawer, StyledList, StyledListItem } from './styles';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
  },
});

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List className='drawer-list'>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Wrapper>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            <div className="logo-container">
              <img className="capco-logo" src={Logo} alt="logo"/>
              <span className="logo-text">Engineering</span>
            </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          className=""
        >
          {drawer}
        </StyledDrawer>
      </Box>
    </Box>
    </Wrapper>
  );
}
export default NavBar;

// <Wrapper>
    //     <ThemeProvider theme={darkTheme}>
    //         <Box sx={{ flexGrow: 1 }}>
    //         <AppBar position="static">
    //             <Toolbar>
    //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //                 <div className='logo-container'>
    //                     <img className="capco-logo" src={Logo} alt="logo"/>
    //                     <span className="logo-text">Engineering</span>
    //                 </div>
    //             </Typography>
    //                 <Button color="inherit" className="nav-links">Capabilities</Button>
    //                 <Button color="inherit" className="nav-links">Team</Button>
    //                 <Button color="inherit" className="nav-links">Career</Button>
    //                 <Button color="inherit" className="nav-links">Articles</Button>
    //                 <Button color="inherit" className="nav-links">Capco.com</Button>
    //             </Toolbar>
    //         </AppBar>
    //         </Box>
    //     </ThemeProvider>
    // </Wrapper>