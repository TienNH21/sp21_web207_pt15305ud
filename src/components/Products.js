import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import axios from 'axios';

function Products({
  data,
  setClicked,
  setFormData,
  setProducts,
}) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const onClickHandler = (event, value, index) => {
    setClicked(index);
    setFormData(value);
  }

  const onDeleteProduct = (index) => {
    const id = data[index].id;
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/' + id;
    axios({
      method: 'DELETE',
      url: url,
    }).then((response) => {
      console.log('response', response);
      if (response.status == 200) {
        setProducts((oldState) => {
          const newState = oldState.filter((val, idx) => {
            return idx == index ? false : true;
          });

          return newState;
        });
      }
    }).catch((error) => {
      console.log('error', error, error.response);
    });
  }

  let deleteRow = -1;

  const btnDeleteOnClick = (event, index) => {
    setOpenDialog(true);
    deleteRow = index;
    console.log(deleteRow, index)
  }

  const closeDialog = (isDelete) => {
    setOpenDialog(false);

    console.log(isDelete, deleteRow)
    if (isDelete == true && deleteRow != -1) {
      onDeleteProduct(deleteRow)
    }

    return isDelete;
  }

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={ () => closeDialog(false) }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle>Xác nhận xóa?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có muốn xóa bản ghi này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => closeDialog(false) } color="default">
            Cancel
          </Button>
          <Button onClick={ () => closeDialog(true) } color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((value, index) => {
              return (
                <TableRow
                  onClick={
                    event => onClickHandler(event, value, index)
                  }
                  key={index}>
                  <TableCell>{ value.id }</TableCell>
                  <TableCell>{ value.name }</TableCell>
                  <TableCell>{ value.price }</TableCell>
                  <TableCell>
                    <Button
                      onClick={
                        (event) => btnDeleteOnClick(event, index)
                      }
                      color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default Products;
