import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { getProductData } from '../productsStore';

function CartProduct(props){


    const cart = useContext(CartContext);
    const quantity = props.quantity;
    const id = props.id;
    const productData = getProductData(id);
   
    return (
        <>
            <h3>{productData.title}</h3>
            <h1>{quantity}</h1>
            <h1>{(quantity * productData.price).toFixed(2)}</h1>
            <Button variant="danger" onClick={() => cart.deleteFromCart(id)}>Remove from cart</Button>
            <hr></hr>
            
        </>
    );
}   
export default CartProduct;