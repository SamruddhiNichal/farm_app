import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [aboutUsMenuOpen, setAboutUsMenuOpen] = React.useState(false);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 600); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAboutUsMenuOpen = (event) => {
    setAboutUsMenuOpen(event.currentTarget);
  };

  const handleAboutUsMenuClose = () => {
    setAboutUsMenuOpen(null);
  };

  const handleCategoriesMenuOpen = (event) => {
    setCategoriesMenuOpen(event.currentTarget);
  };

  const handleCategoriesMenuClose = () => {
    setCategoriesMenuOpen(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', boxShadow: 'none' }}>
      <Toolbar sx={{ fontSize: '1.2rem' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Farm Name
        </Typography>
        {isMobileView ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            <List sx={{ display: 'flex' }}>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={handleAboutUsMenuOpen}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button onClick={handleCategoriesMenuOpen}>
                <ListItemText primary="Categories" />
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
            <Menu
              anchorEl={aboutUsMenuOpen}
              open={Boolean(aboutUsMenuOpen)}
              onClose={handleAboutUsMenuClose}
            >
              <MenuItem onClick={handleAboutUsMenuClose} component={Link} to="/our-approach">Our Approach</MenuItem>
            </Menu>
            <Menu
              anchorEl={categoriesMenuOpen}
              open={Boolean(categoriesMenuOpen)}
              onClose={handleCategoriesMenuClose}
            >
              <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories/buffalo">Buffalo</MenuItem>
              <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories/goat">Goat</MenuItem>
            </Menu>
          </div>
        )}
        <Drawer
          anchor="right"
          open={drawerOpen && isMobileView}
          onClose={handleDrawerToggle}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleAboutUsMenuOpen}>
              <ListItemText primary="About" />
            </ListItem>
            <Menu
              anchorEl={aboutUsMenuOpen}
              open={Boolean(aboutUsMenuOpen)}
              onClose={handleAboutUsMenuClose}
            >
              <MenuItem onClick={handleAboutUsMenuClose} component={Link} to="/about-us">Us</MenuItem>
              <MenuItem onClick={handleAboutUsMenuClose} component={Link} to="/our-approach">Our Approach</MenuItem>
            </Menu>
            <ListItem button onClick={handleCategoriesMenuOpen}>
              <ListItemText primary="Categories" />
            </ListItem>
            <Menu
              anchorEl={categoriesMenuOpen}
              open={Boolean(categoriesMenuOpen)}
              onClose={handleCategoriesMenuClose}
            >
              <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories/buffalo">Buffalo</MenuItem>
              <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories/goat">Goat</MenuItem>
            </Menu>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
