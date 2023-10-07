import React from 'react';
import { AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Tabs textColor="inherit">
          <Tab label="Home" component={Link} to="/home" />
          <Tab label="About" component={Link} to="/about" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
