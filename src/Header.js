import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
 return (
    <AppBar>
      <Toolbar>
        <Tabs  textColor="inherit">
          <Tab label={<Link to="/home">Home</Link>}/>
          <Tab label={<Link to="/about">About</Link>} />
          <Tab label={<Link to="/Table">Table</Link>} />
          <Tab label={<Link to="/Table2">Table2</Link>} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;