import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{

    constructor(props) {
        super(props)
    }
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title"><p>{item.title}</p></span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">shopping_cart</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p>
                                <b>R$ {item.price.toLocaleString(
                                    navigator.language, 
                                    {minimumFractionDigits: 2})}
                                </b>
                            </p>
                        </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Produtos</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)