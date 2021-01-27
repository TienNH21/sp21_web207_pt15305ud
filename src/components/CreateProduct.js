import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function CreateProduct({
  clicked,
  formData,
  setFormData,
  setProducts,
  products,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onCreateProduct = () => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';
    axios({
      url: url,
      method: 'POST',
      data: formData
    })
      .then((response) => {
        const { data } = response;
        setProducts([
          ...products,
          data,
        ]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const onUpdateProduct = () => {
    const url = `https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/${ products[clicked].id }`;
    axios({
      url: url,
      method: 'PUT',
      data: formData
    })
      .then((response) => {
        const { data } = response;

        setProducts((oldState) => {
          return oldState.map((val, idx) => {
            return idx == clicked ? data : val;
          });
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (clicked == -1) {
      // Tạo mới
      onCreateProduct();
    } else {
      // Cập nhật
      onUpdateProduct();
    }
  }

  return (
    <form
      onSubmit={ onSubmitHandler }
      style={{ marginTop:'10px' }}>
      <TextField
        fullWidth
        onChange={ onChangeHandler }
        label="Id"
        value={ formData.id }
        name="id"
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <TextField
        fullWidth
        onChange={ onChangeHandler }
        style={{ marginTop: '10px' }}
        label="Name"
        value={ formData.name }
        name="name"
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <TextField
        fullWidth
        onChange={ onChangeHandler }
        style={{ marginTop: '10px' }}
        label="Price"
        value={ formData.price }
        name="price"
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <Button
        type="submit"
        style={{ marginTop: '10px' }}
        color="primary">Submit</Button>
    </form>
  );
}

export default CreateProduct;
