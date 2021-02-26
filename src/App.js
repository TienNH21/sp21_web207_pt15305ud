import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Product from './components/Product';
import Category from './components/category/Category';
import Order from './components/order/Order';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="sm">
          <nav className="navbar navbar-light navbar-expand-lg">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/categories">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/orders">
                  Order
                </Link>
              </li>
            </ul>
          </nav>
          <Typography
            component="div"
            style={{
              backgroundColor: '#cfe8fc',
              height: '100vh'
            }}>
              <Switch>
                <Route path="/products">
                  <Product />
                </Route>

                <Route path="/categories">
                  <Category />
                </Route>

                <Route path="/orders">
                  <Order />
                </Route>
              </Switch>
            </Typography>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
