import { object } from "prop-types";
import React, { Component } from "react";
import PaymentForm from "../PaymentMethod/PaymentMethod";
import "./DonationForm.css";
export default class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullNameStatus: false,
      emailStatus: false,
      mobileStatus: false,
      dobStatus: false,
      amountStatus: false,
      pannoStatus: false,

      panRequired: false,
      values: {
        fullName: null,
        email: null,
        mobile: null,
        dob: null,
        amount: null,
        panno: null,
      },
      errors: {
        fullName: "",
        email: "",
        mobile: "",
        dob: "",
        amount: "",
        panno: "",
      },
    };
  }

  // shouldPaymentRender = (emptyCheckExceptions=['panno']) => {
  //   const { errors, values } = this.state;
  //   let ret = true;
  //    Object.entries(errors).forEach(([k, v]) => {
  //     if (v !== "") {
  //       ret = false;
  //     }
  //   })

  //   ret && Object.entries(values).forEach(([k, v]) => {

  //   if (!emptyCheckExceptions.includes(k) && (!v || v == "")) {

  //       ret = false;
  //     }
  //   })

  //   ret = ret || (this.state.panRequired && this.state.values['panno'])
  //   return ret
  // }

  checkIfValidationError = () => {
    const errorsMap = this.state.errors;
    let valid = false;
    Object.entries(errorsMap).forEach(([k, v]) => {
      if (v != "") {
        valid = true;
      }
    });
    return valid;
  };

  checkIfAnyValueUnset = (exceptions = ["panno"]) => {
    const values = this.state.values;
    let valid = false;
    Object.entries(values).forEach(([k, v]) => {
      if (!exceptions.includes(k) && (!v || v == "")) {
        valid = true;
      }
    });
    return valid;
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var valid = /^\d{10}$/;
    var panregex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    switch (name) {
      case "fullName":
        errors.fullName =
          !value || value.length < 5
            ? "Full Name must be 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = reg.test(value)
          ? ""
          : "Enter the valid email with @ and .";
        break;
      case "mobile":
        errors.mobile = !value.match(valid)
          ? "Please enter a phone number so we can call if there are any issues with delivery..!"
          : "";
        break;
      case "dob":
        errors.dob =
          value.slice(0, 4) > new Date().getFullYear()
            ? "Enter a valid Date of Birth"
            : "";
        break;
      case "amount":
        if (value > 50000) {
          this.setState({ panRequired: true });
          document.querySelector(".panno").style.display = "block";
        } else {
          this.setState({ panRequired: false });
          document.querySelector(".panno").style.display = "none";
        }
        break;
      case "panno":
        errors.panno =
          this.state.panRequired &&
          (!value || !panregex.test(value.toUpperCase()))
            ? "Enter a valid Pan No"
            : "";
        break;
      default:
        break;
    }
    let values = this.state.values;
    values[name] = value;
    this.setState({ errors, values });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.checkIfValidationError() || (this.checkIfAnyValueUnset()) || (this.state.panRequired && !this.state.values['panno']) ){
       alert("Fill all the fields");
    } else {
      document.querySelector(".paymentmethod").style.display = "block";
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <div className=" col-lg-12 mt-4  donation-form ">
            <h2 className="text-center donation-text">Donation form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="main ">
                {/* NAME START */}
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    onChange={this.handleChange}
                    placeholder="Name of Donor"
                    className="form-control"
                    noValidate
                  />
                  {errors.fullName.length > 0 && (
                    <span className="error">{errors.fullName}</span>
                  )}
                </div>
                {/* NAME END */}
                {/* EMAIL START */}
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    className="form-control"
                    noValidate
                    placeholder="Email ID"
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                {/* EMAIL END */}

                {/* MOBILE NUMBER START */}
                <div className="form-group">
                  <input
                    type="number"
                    name="mobile"
                    onChange={this.handleChange}
                    className="form-control"
                    noValidate
                    placeholder="Mobile Number"
                  />
                  {errors.mobile.length > 0 && (
                    <span className="error">{errors.mobile}</span>
                  )}
                </div>
                {/* MOBILE NUMBER END */}
                {/* DOB START */}
                <div className="form-group">
                  <input
                    type="date"
                    name="dob"
                    onChange={this.handleChange}
                    placeholder="DD-MM-YY"
                    className="form-control"
                    noValidate
                  />
                  {errors.dob.length > 0 && (
                    <span className="error">{errors.dob}</span>
                  )}
                </div>
                {/* DOB END */}
                {/* DONATION AMOUNT START */}
                <div className="form-group">
                  <input
                    type="number"
                    name="amount"
                    onChange={this.handleChange}
                    placeholder="Donation Amount"
                    className="form-control"
                    noValidate
                  />
                  {errors.amount.length > 0 && (
                    <span className="error">{errors.amount}</span>
                  )}
                </div>
                {/* DONATION AMOUNT END */}
                {/* PAN NO START */}
                <div className="form-group panno">
                  <input
                    type="text"
                    name="panno"
                    onChange={this.handleChange}
                    placeholder="PAN Detail"
                    className="form-control"
                    noValidate
                  />
                  {errors.panno.length > 0 && (
                    <span className="error">{errors.panno}</span>
                  )}
                </div>
                {/* PAN NO END */}
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
        <PaymentForm />
      </div>
    );
  }
}
