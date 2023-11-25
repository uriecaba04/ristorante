import React, { useState, Component } from "react";

import {
  Button,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
const required = (val) => val && val.length;
const maxlength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    alert("Thanks :" + JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa-pencil fa-lg"></span>Submit Comment
        </Button>
        <Modal
          fade={false}
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row clasName="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
              </Row>
              <Row clasName="form-group">
                <Col md={12}>
                  <Control.select
                    name="rating"
                    model=".rating"
                    className="form-control"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Control.select>
                </Col>
              </Row>
              <Row clasName="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
              </Row>
              <Row clasName="form-group">
                <Col md={12}>
                  <Control.text
                    model=".author"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="Last name"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Your name is required. ",
                      minlength: "Must be greather than  2 characters. ",
                      maxlength: "Must be  15 characters  or  less. "
                    }}
                  />
                </Col>
              </Row>

              <Row clasName="form-group">
                <Label htmlFor="comment" md={2}>
                  Comment
                </Label>
              </Row>
              <Row clasName="form-group">
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row clasName="form-group">
                <Col md={{ size: 5, offset: 0 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default CommentForm;
