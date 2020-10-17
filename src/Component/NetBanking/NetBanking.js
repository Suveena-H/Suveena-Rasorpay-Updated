import React, { Component } from 'react'
import { BankLogo } from "./NetBankLogo";
import { Redirect } from "react-router-dom";
export default class NetBanking extends Component {
  state = {
    data: BankLogo,
    creditvalid:false,

  };
  handlePayment=()=>{
    this.setState({
      creditvalid: true,
    });
  }
    render() {
      const { data } = this.state;
      if (this.state.creditvalid) {
        return <Redirect to="finalpage" />;
      }
      const option = data.map((item, id) => {
        return (
          <option key={id} value="">
            {item.name}
            {item.img}
          </option>
        );
      });
        return (
            <div className="card">
            <div className="card-header">
            <div className="pull-right">
              <i className="fa fa-mobile-phone" style={{ fontSize: "28px" }}></i>
            </div>
              <a className="collapsed card-link" data-toggle="collapse" href="#netBanking">
              Net Banking
            </a>
            </div>
            <div id="netBanking" className="collapse" data-parent="#accordion">
              <div className="card-body">
              <div id="net-banking" className="tab-pane pt-2">
                <div className="form-group">
                  {" "}
                  <label>
                    <h4>Select your Bank</h4>
                  </label>{" "}
                  <select
                    className="form-control"
                    id="ccmonth"
                    defaultValue="{Bank}"
                  >
                    {option}
                  </select>
                </div>
                <div className="form-group">
                  <p>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handlePayment}
                     
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Proceed Pyment
                    </button>
                  </p>
                </div>
                
                <p className="text-muted">
                  Note: After clicking on the button, you will be directed to a
                  secure gateway for payment. After completing the payment
                  process, you will be redirected back to the website to view
                  details of your order.
                </p>
              </div>
              </div>
            </div>
          </div>
        )
    }
}
