import React from 'react';
import { AppBar, Tab, Tabs, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Tabs textColor="inherit">
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Table" />
          <Tab label="Table2" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;