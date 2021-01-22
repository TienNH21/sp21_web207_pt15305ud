import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateProduct({ clicked }) {
  return (
    <form style={{ marginTop:'10px' }}>
      <TextField
        fullWidth
        label="Id"
        value={ clicked.id }
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <TextField
        fullWidth
        style={{ marginTop: '10px' }}
        label="Name"
        value={ clicked.name }
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <TextField
        fullWidth
        style={{ marginTop: '10px' }}
        label="Price"
        value={ clicked.price }
        InputLabelProps={{ shrink: true, }}
        variant="outlined" />
      <Button
        style={{ marginTop: '10px' }}
        color="primary">Submit</Button>
    </form>
  );
}

export default CreateProduct;
