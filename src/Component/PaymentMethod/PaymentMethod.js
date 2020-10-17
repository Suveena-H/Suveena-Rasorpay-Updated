import React, { Component } from "react";
import CreditCard from "../CreditCard/CreditCard";
import NetBanking from "../NetBanking/NetBanking";
import UPI from "../UPI/UPI";
import NEFT from "../NEFT/NEFT"
import "./PaymentMethod.css"
export default class PaymentForm extends Component {
  render() {
    return (
      <div className="container  mt-5">
        {/* PAYMNT MODE  */}
        <div className="container paymentmethod">
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
              <div className="ibox-title h2 mb-3 text-center payment-text">
                    Payment method
                  </div>
                <div id="accordion">
                  <CreditCard />
                   <NetBanking />
                  <UPI/>
                  <NEFT/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
