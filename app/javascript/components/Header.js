import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
} from 'react-bootstrap';

// import NotificationContainer from '../containers/NotificationContainer';

function Header() {
  return (
    <>
      <Col sm={4}>
        <i className="fa fa-home fa-3x" />
        <span className="main-title">
          <b>FUNNY MOVIES</b>
        </span>
      </Col>
      <Col sm={8} className="main-header-right">
        <Form inline>
          <Button variant="secondary" size="sm" className="mb-2">
            Login / Register
          </Button>
          <Form.Label htmlFor="headerFormInputPassword" srOnly>
            Password
          </Form.Label>
          <FormControl
            id="headerFormInputPassword"
            placeholder="Password"
            aria-label="Password"
            className="mb-2 mr-sm-2"
          />
          <Form.Label htmlFor="headerFormInputEmail" srOnly>
            Email
          </Form.Label>
          <FormControl
            id="headerFormInputEmail"
            placeholder="Email"
            aria-label="Email"
            className="mb-2 mr-sm-2"
          />
        </Form>
      </Col>
    </>
  );
}

export default Header;
