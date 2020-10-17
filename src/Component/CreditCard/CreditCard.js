import React, { Component } from "react";
import "./CreditCard.css";
import { Redirect } from "react-router-dom";
export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values:{
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
      },
      errors: {
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
      },
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "cardName":
        if (value.length < 5) {
          errors.cardName = "Full Name must be 5 characters long";
        } else {
          errors.cardName = "";
        }
        break;
      case "cardNumber":
        if (!/\d{15,16}(~\W[a-zA-Z])*$/.test(value)) {
          errors.cardNumber = "Enter a valid Credit Card Number";
        } else {
          errors.cardNumber = "";
        }
        break;
      case "expDate":
        if (!value.match(/^(0[1-9]|1[012])\/\d{2}$/)) {
          errors.expDate = "Enter a valid Expiry Date";
        } else {
          errors.expDate = "";
        }
        break;
      case "cvv":
        if (value.length < 3) {
          errors.cvv = "Enter a valid CVV";
        } else {
          errors.cvv = "";
        }
        break;
      default:
        break;
    }
    let values = this.state.values;
    values[name] = value;
    this.setState({ errors, values });
  };
  checkIfValidationError = () => {
    const errors = this.state.errors;
    let valid = false;
    Object.entries(errors).forEach(([key,value]) => {
      if (value !== "") {
                valid = true;
      }
    });
    return valid;
  };
  checkIfAnyValueUnset = () => {
    const values = this.state.values;
    let valid = false;
    Object.entries(values).forEach(([key, value]) => {
      console.log(values)
      if (value == "") {
              valid = true;
      }
    });
    return valid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkIfValidationError() || this.checkIfAnyValueUnset()) {
      alert("Fill all the fields");
    } else {
      alert('success')
      this.setState({ creditvalid: true });
    }
  };
  render() {
    const { errors, creditvalid } = this.state;
    if (creditvalid) {
      return <Redirect to="finalpage" />;
    }
    return (
      <div className="card">
        <div className="card-header">
          <div className="pull-right">
            <i
              className="fa fa-cc-amex"
              style={{ fontSize: "25px", color: "blue" }}
            ></i>
            <i
              className="fa fa-cc-visa"
              style={{ fontSize: "25px", color: "darkblue" }}
            ></i>
            <i
              className="fa fa-cc-mastercard"
              style={{ fontSize: "25px", color: "#e45018" }}
            ></i>
          </div>
          <a className="card-link" data-toggle="collapse" href="#creditCard">
            Credit Card/Debit Card
          </a>
        </div>
        <div id="creditCard" className="collapse " data-parent="#accordion">
          <div className="card-body">
            <div className="tab-content">
              <form onSubmit={this.handleSubmit}>
                {/* CARD OWNER */}
                <div className="form-group">
                  {" "}
                  <label>
                    <h6>Card Owner</h6>
                  </label>{" "}
                  <input
                    type="text"
                    name="cardName"
                    onChange={this.handleChange}
                    placeholder="Name of Donor"
                    className="form-control"
                    noValidate
                  />
                  {errors.cardName.length > 0 && (
                    <span className="error">{errors.cardName}</span>
                  )}
                </div>
                {/* CARD NUMBER */}
                <div className="form-group">
                  {" "}
                  <label>
                    <h6>Card number</h6>
                  </label>
                  <div className="form-group">
                    <input
                      type="number"
                      name="cardNumber"
                      onChange={this.handleChange}
                      placeholder="Eg : 0000 0000 0000 0000"
                      className="form-control"
                      maxLength="16"
                      value={this.state.name}
                      noValidate
                    />
                    {errors.cardNumber.length > 0 && (
                      <span className="error">{errors.cardNumber}</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <span>
                          <h6>Expiration Date</h6>
                        </span>
                      </label>
                      <div className="form-group">
                        <div className="row expiryDate">
                          <div className="col-lg-10 col-10">
                            <input
                              type="text"
                              name="expDate"
                              onChange={this.handleChange}
                              placeholder="MM/YY"
                              minLength="5"
                              maxLength="5"
                              className="form-control"
                              value={this.state.name}
                              noValidate
                            />
                            {errors.expDate.length > 0 && (
                              <span className="error">{errors.expDate}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CVV */}
                  <div className="col-sm-4">
                    <div className="form-group mb-4">
                      <label>
                        <h6>
                          CVV <i className="fa fa-question-circle d-inline"></i>
                        </h6>
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.name}
                        maxLength="3"
                        noValidate
                      />
                      {errors.cvv.length > 0 && (
                        <span className="error">{errors.cvv}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
