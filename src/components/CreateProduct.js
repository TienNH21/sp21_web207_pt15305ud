import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateProduct({
  clicked,
  formData,
  setFormData,
  setProducts,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setProducts((oldState) => {
      return oldState.map((val, idx) => {
        return idx == clicked ? formData : val;
      });
    });
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
