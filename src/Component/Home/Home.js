import React, { Component } from 'react'
import DonationForm from '../DonationForm/DonationForm'
import PaymentForm from '../PaymentMethod/PaymentMethod'
import "./Home.css"
export default class Home extends Component {
    render() {
        return (
            <div className="bg-img">
            <div className="main-text text-center pt-3 text-primary">
              <h2 className="text-main">Donation Page for Educational Trust</h2>
            </div>
            <DonationForm/>
          </div>
        )
    }
}

