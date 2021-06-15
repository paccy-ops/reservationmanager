import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Popup from "../components/Popup";
import UserForm from "./UserForm";
import Typography from "@material-ui/core/Typography";
import TablePagination from "@material-ui/core/TablePagination";




const data =[
    {
    "id":12,
    'checkin':'10/10/2020',
    'checkout':'31/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo,',
    'budget':20000,
    'condition':'Disponible',

  },
      {
    "id":12,
    'checkin':'13/10/2020',
    'checkout':'21/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo,',
    'budget':20000,
    'condition':'Disponible',

  },
      {
    "id":12,
    'checkin':'11/10/2020',
    'checkout':'4/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':' venenatis vestibulum. Fusce dapibus, tellus ,',
    'budget':20000,
    'condition':'Disponible',

  },
       {
    "id":12,
    'checkin':'03/10/2020',
    'checkout':'08/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem',
    'budget':20000,
    'condition':'Disponible',

  },
       {
    "id":12,
    'checkin':'12/10/2020',
    'checkout':'06/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam',
    'budget':20000,
    'condition':'Disponible',

  },
       {
    "id":12,
    'checkin':'30/10/2020',
    'checkout':'31/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo,',
    'budget':20000,
    'condition':'Disponible',

  },
       {
    "id":12,
    'checkin':'30/10/2020',
    'checkout':'31/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo,',
    'budget':20000,
    'condition':'Disponible',

  }
]
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  se:{
    margin:theme.spacing(4)
  },
  pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },

    newButton: {
        position: 'absolute',
        right: '10px'
    },
  table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '700',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '600',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}));


export default function BasicTable() {
  const classes = useStyles();
  const pages = [2, 5, 10]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const [recordForEdit, setRecordForEdit] = useState(null)
      const [openPopup, setOpenPopup] = useState(false)


      const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }




    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

     function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }



    const recordsAfterPagingAndSorting = () => {
        return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

  return (
      <React.Fragment>
      <Paper className={classes.pageContent}>
    <TableContainer className={classes.table}  component={Paper} >
        <Typography variant="h6">
                    LIST OF USERS RESERVATION ROOMS
                </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">CHECKIN</TableCell>
            <TableCell align="right">CHECHOUT</TableCell>
            <TableCell align="left">CANTIDIDAD ADULTOS</TableCell>
            <TableCell align="left">CANTIDAD NIÑOS</TableCell>
            <TableCell  align="left">DESCRIPCION</TableCell>
            <TableCell align="right">ESTADO</TableCell>
            <TableCell align="right">ACCION</TableCell>
             <TableCell className={classes.se} align="left">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recordsAfterPagingAndSorting().map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.checkin}</TableCell>
              <TableCell align="right">{row.checkout}</TableCell>
              <TableCell align="left">{row.amount_of_adults}</TableCell>
              <TableCell align="left">{row.number_of_children}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.budget}</TableCell>
              <TableCell align="right">{row.condition}</TableCell>
              <TableCell align="middle">
                <div className={classes.root}>
                <Button onClick={() => { openInPopup('') }} variant="contained" color="primary">Aceptar</Button>
                <Button onClick={() => { openInPopup('') }} style={{fontSize:'15px',maxWidth: '100px',maxHeight: '45px',}}  variant="contained" color="secondary">Contra Ofertar</Button>
                  </div>
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
          <TablePagination
              component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={data.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}

          />
              <Popup
    title="User Reservation Info"
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}><UserForm recordForEdit={data}/></Popup>

      </Paper>

</React.Fragment>
  );

}