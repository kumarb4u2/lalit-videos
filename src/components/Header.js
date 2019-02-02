import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const ColLeft = styled.div`
  width: 50%;
  justify-content: flex-start;
`;

const ColRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

// seperate export to test unwarapped component
export class Header extends PureComponent {
  upload = () => {
    this.props.history.push('/upload');
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Flex>
          <ColLeft>
            <h3>Simplified Youtube</h3>
          </ColLeft>
          <ColRight>
            <Button variant="primary" onClick={this.upload}>
              Upload
            </Button>
          </ColRight>
        </Flex>
      </Navbar>
    );
  }
}

export default withRouter(Header);
