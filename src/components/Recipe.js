import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/checkout' />
        }
    }
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    //to remove the item completely
    checkout = ()=>{
        alert('redirecionar')
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Frete(+ R$ 6,00)</span>
                            </label>
                        </li>
                        <li className="collection-item">
                            <b>Total: R$
                                {this.props.total.toLocaleString(
                                    navigator.language, 
                                    {minimumFractionDigits: 2
                                })}
                            </b>
                        </li>
                    </div>
                    <div className="checkout">
                        {this.renderRedirect()}
                        <button className="waves-effect waves-light btn" onClick={this.setRedirect}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
