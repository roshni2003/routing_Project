import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const tabStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <AppBar>
      <Toolbar>
        <Tabs color="inherit">
          <Tab label={<Link to="/home" style={tabStyle}>Home</Link>} />
          <Tab label={<Link to="/about" style={tabStyle}>About</Link>} />
          <Tab label={<Link to="/Table" style={tabStyle}>Table</Link>} />
          <Tab label={<Link to="/Table2" style={tabStyle}>Table2</Link>} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;