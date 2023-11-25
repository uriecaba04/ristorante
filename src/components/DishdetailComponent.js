import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { Loading } from "./LoadingComponent";

import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { baseUrl } from "../shared/baseUrl";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((coment) => {
            return (
              <li key={coment.id}>
                <p>{coment.comment}</p>
                <p>
                  --{coment.autor}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(coment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          />{" "}
        </div>
      </div>
    );
  else return <div></div>;
};

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;

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
    console.log("El estado actual es :", JSON.stringify(values));
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
export default DishDetail;
