import  { Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';



function ProductCard (props) {

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return(
    <Card className=" shadow">
        <Card.Body>
            <Card.Img src={product.imageSrc} />
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}€</Card.Text>
            {productQuantity    > 0 ?  
            <>
            <Form as={Row}> 
                <Form.Label column="true" sm="2">Quantity {productQuantity}</Form.Label>
                <Col sm="8">
                <div className="d-flex justify-content-center">
                    <Button sm="3"variant="primary" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                    <Button sm="3"variant="primary" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>         
                </div>
                </Col>
                </Form> 
                <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
            </>    
             
            :
            <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to cart</Button>
            }
            
        </Card.Body>
    </Card>
)}

export default ProductCard;