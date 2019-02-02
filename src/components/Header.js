import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Heading = styled(Link)`
  font-weight: 500;
  color: red !important;
`;

// seperate export to test unwarapped component
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Heading className="navbar-brand" to="/">
      Simple Youtube
    </Heading>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
    <Link className="btn btn-primary" to="/upload">
      Upload
    </Link>
  </nav>
);

export default Header;
