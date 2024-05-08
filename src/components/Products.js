import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/CartSlice';
const Products = () => {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addItem(product));
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProduct(result))
            .catch(error => error)
    }, [])
    const card = product.map((product) => (
        <div className="col-md-3" style={{marginBottom: "10px"}}>
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
                        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
    );
    return (
        <>
            <h1>Products Dashboard</h1>
            <div className='row'>
                {card}
            </div>
        </>
        
    );
}

export default Products;
