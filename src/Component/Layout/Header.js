import React from "react";
import Alert from "../UI/Alert";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Alert alert={"free shipping over these thing at 499"} />
      {/* Navigation bar */}
      <div className="navigation-bar">
        <Router>
          <div className="navigation-container">
            <div className="navigation-brand">
              {/* <h3>pandeyFarm </h3> */}
              <Link to="/">pandeyFarm</Link>
            </div>
            <div className="navigation-list">
              <Link to="/Plant">Plants</Link>
              <Link to="/Seeds">Seeds</Link>
              <Link to="/gifting">gifting</Link>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Header;
