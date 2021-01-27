import './App.css';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  const [clicked, setClicked] = useState(-1);

  useEffect(() => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';
    axios({
      url: url,
      method: 'GET',
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '100vh'
          }}>
            <CreateProduct
              setProducts={ setProducts }
              products={ products }
              formData={ formData }
              setFormData={ setFormData }
              clicked={ clicked }/>
            <Products
              setProducts={ setProducts }
              setFormData={ setFormData }
              setClicked={ setClicked }
              data={ products }/>
          </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
