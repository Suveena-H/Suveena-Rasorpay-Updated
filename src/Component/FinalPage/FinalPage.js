import React, { Component } from "react";
import "./FinalPage.css"
import { Link } from "react-router-dom";
export default class FinalPage extends Component {
  render() {
    return (
      <>
        <div className="show border-primary">
          <div className="modal-dialog modal-confirm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="icon-box">
                  <i
                    className="fa fa-check-circle"
                    style={{ fontSize: "48px", color: "white" }}
                  ></i>
                </div>
                <h4 className="modal-title w-100">Awesome!</h4>
              </div>
              <div className="modal-body">
                <p className="text-center">
                  Your <b>Payment</b> has been confirmed. Check your email for
                  detials.
                </p>
              </div>
              <div className="modal-footer">
                <Link to="/" className="btn btn-primary btn-block">
                  <button data-dismiss="modal" className="btn btn-primary">
                    OK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

