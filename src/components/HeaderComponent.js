import React, { useState, Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { Alert } from "bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.wrapper = React.createRef();

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });

    console.log(this.state.isModalOpen);
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        "Password: " +
        this.password.value +
        "Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="restaurante confusion"
              />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span>Nosotros
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>
                    Contactenos
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa-sign-in fa-lg"></span>Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Restaurante Confusion</h1>
                <p>
                  Nos inspiramos en la mejor cocina del mundo y creamos una
                  unica fusion de experiencias. Nuestro objetivo es deleitar tus
                  sentidos culinarios
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal
          fade={false}
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlfor="username">Username</Label>
                <Input
                  innerRef={(input) => (this.username = input)}
                  type="text"
                  id="username"
                  name="username"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="password">PassWord</Label>
                <Input
                  innerRef={(input) => (this.password = input)}
                  type="password"
                  id="password"
                  name="password"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    innerRef={(input) => (this.remember = input)}
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Header;
