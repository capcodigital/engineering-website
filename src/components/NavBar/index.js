/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { Wrapper, StyledDrawer } from './styles';
import Logo from '../../images/capco-logo.png';

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List className="drawer-list">
        <ListItem disablePadding><ListItemButton sx={{ textAlign: 'center' }}><ListItemText><Link href="#" className="nav-item">Capabilities</Link></ListItemText></ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton sx={{ textAlign: 'center' }}><ListItemText><Link href="#" className="nav-item">Team</Link></ListItemText></ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton sx={{ textAlign: 'center' }}><ListItemText><Link href="#" className="nav-item">Career</Link></ListItemText></ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton sx={{ textAlign: 'center' }}><ListItemText><Link href="#" className="nav-item">Articles</Link></ListItemText></ListItemButton></ListItem>
        <ListItem disablePadding><ListItemButton sx={{ textAlign: 'center' }}><ListItemText><Link href="https://www.capco.com/" className="nav-item">Capco.com</Link></ListItemText></ListItemButton></ListItem>
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
                <img className="capco-logo" src={Logo} alt="logo" />
                <span className="logo-text">Engineering</span>
              </div>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button><Link href="#" className="nav-item">Capabilities</Link></Button>
              <Button><Link href="#" className="nav-item">Team</Link></Button>
              <Button><Link href="#" className="nav-item">Career</Link></Button>
              <Button><Link href="#" className="nav-item">Articles</Link></Button>
              <Button><Link href="https://www.capco.com/" className="nav-item">Capco.com</Link></Button>
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
          >
            {drawer}
          </StyledDrawer>
        </Box>
      </Box>
    </Wrapper>
  );
}
export default NavBar;
