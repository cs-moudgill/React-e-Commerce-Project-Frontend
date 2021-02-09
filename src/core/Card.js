import React from 'react';
import ImageHelper from './helper/ImageHelper';



const Card = ({product,addCartOption=true,removeCartOption=false}) => {
     
    
    const addCart=(addCartOption)=>{
        return addCartOption && (
            <button
                onClick={() => {}}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
        )
        }
        
        const removeCart=()=>{
        return removeCartOption && (
            <button
            onClick={() => {}}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
        )
        }
    
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{product.name}</div>
        <div className="card-body">
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
          {product.description}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {product.price}</p>
          <div className="row">
            <div className="col-12">
              {addCart(addCartOption)}
            </div>
            <div className="col-12">
              {removeCart(removeCartOption)}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Card;