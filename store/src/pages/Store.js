
import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store (){

    return (
        <>
        <div className="bg-beige">
        <h1 align="center" className=" p-3 font-weight-bold underline">SENDING SUSTAINABLE</h1>
        <Row xs={1} md={2} className="g-3">
            {productsArray.map((product, idx) => (  
            <Col align="center" key={idx}>
                <ProductCard product={product} />
            </Col>
            ))}

           
        </Row>
        </div>
        </>
        
    )
}

export default Store;