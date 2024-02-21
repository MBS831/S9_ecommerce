
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import {useState} from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import  CartProduct  from './CartProduct';    



function NavbarComponent (){
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);   
    
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const checkout = async () =>{
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }


    return (
        <>
    <Navbar expand="sm">
        <Navbar.Brand href="/">Marta's Prints</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse className="justify-content-end"> </Navbar.Collapse>
        <Button onClick={handleShow}> Cart ({productsCount}Items)</Button>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {productsCount > 0 ?
                <>
                <p>Items in your cart:</p>
                {cart.items.map((currentProduct,idx) => 
                ( <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}
                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                <Button variant="success" onClick={checkout}>Purchase Items</Button>
                </>
            :
            <p>Your cart is empty</p>
                }
       </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Proceed to checkout
            </Button>
        </Modal.Footer>

    </Modal>
       </>
);
}

export default NavbarComponent;