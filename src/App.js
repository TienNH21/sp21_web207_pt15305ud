import './App.css';
import ListProducts from './components/ListProducts';
import CreateProduct from './components/CreateProduct';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [listCategory, setListCategory] = useState([]);
  const [danhMucId, setDanhMucId] = useState(-1);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  const limit = 5;

  useEffect(() => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories';
    axios({
      url: url,
      method: 'GET',
    })
      .then((response) => {
        const { data } = response;
        setListCategory(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, []);

  useEffect(() => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories/'
    + danhMucId + '/products?limit=' + limit + "&page=" + page;
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
  }, [
    /*
     * Khi các phần tử trong mảng thay đổi giá trị,
     * useEffect mới được gọi lại.
     */
    danhMucId,
    page,
  ]);

  const danhMucOnChange = function (event) {
    const { name, value } = event.target;
    setDanhMucId(value);
    setPage(1);
  }

  const trangTruoc = function () {
    if (page == 1) {
      return ;
    }

    setPage(page - 1);
  }

  const trangSau = function () {
    setPage(page + 1);
  }

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
              danhMucId={ danhMucId }
              clicked={ clicked }/>
            <div>
              <label>Danh mục</label>
              <select
                onChange={ danhMucOnChange }
                name="category_id">
                <option>-- Chọn danh mục --</option>
                {
                  listCategory.map(function (val, idx) {
                    return (
                      <option key={idx} value={ val.id }>
                        { val.name }
                      </option>
                    );
                  })
                }
              </select>
            </div>
            <ListProducts
              setProducts={ setProducts }
              setFormData={ setFormData }
              setClicked={ setClicked }
              danhMucId={ danhMucId }
              data={ products }/>

            <ul className="pagination mt-4">
              <li
                onClick={ trangTruoc }
                className="page-item">
                <a className="page-link">Trang trước</a>
              </li>
              <li className="page-item">
                <a className="page-link">{ page }</a>
              </li>
              <li
                onClick={ trangSau } className="page-item">
                <a className="page-link">Trang sau</a>
              </li>
            </ul>
          </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
