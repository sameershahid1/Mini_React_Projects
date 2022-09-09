import React from 'react';
import './Product.css';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../Redux/Slice/cart-slice';

const Product = ({id,name,imgURL,price}) => {
const CartDispatch=useDispatch();

const AddToCart=()=>{
CartDispatch(cartActions.AddToCart(
{
  name,
  id,
  price
}  
));
};

return (
  <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={AddToCart} type='text'>Add to card</button>
    </div>
  )
}

export default Product
