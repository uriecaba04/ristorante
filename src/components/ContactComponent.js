import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row
} from "reactstrap";

import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";

const Breadcrumpb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/home">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Contact us</BreadcrumbItem>
    </Breadcrumb>
  );
};

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("El estado actual es :", JSON.stringify(values));
    alert("El estado actual es :" + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumpb />
          <div className="col-12">
            <h3>Contact us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Envianos tu feed back</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row clasName="form-group">
                <Label htmlFor="firstname" md={2}>
                  Firs Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15)
                    }}
                    placeholder="First name"
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "El nombre es requerido. ",
                      minlength: "Debe tener mas de  2 caracteres. ",
                      maxlength: "Debe tener maximo 15 caracteres o menos. "
                    }}
                  />
                </Col>
              </Row>
              <Row clasName="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last name"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "El apellido es requerido. ",
                      minlength: "Debe tener mas de  2 caracteres. ",
                      maxlength: "Debe tener maximo 15 caracteres o menos. "
                    }}
                  />
                </Col>
              </Row>

              <Row clasName="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    className="form-control"
                    placeholder="Tel. Number"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15),
                      isNumber
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "El telefono es requerido. ",
                      minlength: "Debe tener mas de  2 caracteres. ",
                      maxlength: "Debe tener maximo 15 caracteres o menos. ",
                      isNumber: "Debe ser numerico. "
                    }}
                  />
                </Col>
              </Row>
              <Row clasName="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    type="email"
                    model=".email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15),
                      validEmail
                    }}
                  />

                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "EL email es requerido. ",
                      minlength: "Debe tener mas de  2 caracteres. ",
                      maxlength: "Debe tener maximo 15 caracteres o menos. ",
                      validEmail: "Debe ser un mail valido. "
                    }}
                  />
                </Col>
              </Row>

              <Row clasName="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <label check>
                      <Control.checkbox
                        type="checkbox"
                        name="agree"
                        model=".agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May We coctact you?</strong>
                    </label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    name="ContactType"
                    model=".ContactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row clasName="form-group">
                <Label htmlFor="message" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row clasName="form-group">
                <Col md={{ size: 3, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feed Back
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
