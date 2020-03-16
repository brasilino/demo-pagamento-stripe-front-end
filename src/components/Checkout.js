import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import api from "../api";

const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

class Checkout extends Component{

    render() {

        console.log('stripePromise', stripePromise)

        const cart = {items: this.props.items, total: this.props.total};

        return(
            <div className="container"> 
                <div className="sr-main">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cart={cart} />
                    </Elements>
                </div>       
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Checkout)