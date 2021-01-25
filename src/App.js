import './App.css';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

function App() {
  const initValue = [
    { id: 1, name: 'IPhone 12', price: '28,999,999.00' },
    { id: 2, name: 'IPhone 11', price: '14,999,999.00' },
    { id: 3, name: 'Oppo', price: '5,999,999.00' },
  ];

  const [products, setProducts] = useState(initValue);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });
  const [clicked, setClicked] = useState(-1);

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
