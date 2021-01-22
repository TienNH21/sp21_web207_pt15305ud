import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Products({ data, setClicked }) {
  const onClickHandler = (event, value) => {
    setClicked(value);
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((value, index) => {
              return (
                <TableRow
                  onClick={
                    event => onClickHandler(event, value)
                  }
                  key={index}>
                  <TableCell>{ value.id }</TableCell>
                  <TableCell>{ value.name }</TableCell>
                  <TableCell>{ value.price }</TableCell>
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
