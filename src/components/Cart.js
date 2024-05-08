import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeItem } from '../slices/CartSlice';
import { useSelector } from 'react-redux';
const Cart = () => {
    const dispatch = useDispatch();
    const removeFromCart = (productId) => {
        dispatch(removeItem(productId));
    }
    const product = useSelector(state => state.cart);
    const card = product.map((product) => (
        <div className="col-md-12" style={{marginBottom: "10px"}}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src= {product.image} style={{width:"100px",height:"130px"}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      INR: {product.price}
                    </Card.Text>
                    <Card.Footer style={{background: "white"}}>
                        <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
    );
    return (
        <>
            {product.length>0 ?<> (<h1>Cart Items</h1>
            <div className='row'>
                {card}
            </div>)</> : (<h1>No Cart Items</h1>)}
        </>
        
    );
}

export default Cart;
