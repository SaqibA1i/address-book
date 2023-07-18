import { useEffect, useState } from "react";
import { User } from "../../Types/address";
import UserEntry from "./UserEntry";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import SearchBar from "../SearchBar";
import withLoading from "../../wrappers/withLoading";

const AddressBook = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [isLoading, setLoading] = useState(true);
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedUsers = users.slice(startIndex, endIndex);
    const TableBodyWithLoading = withLoading(TableBody);

    const getAddresses = async () => {
        const data = await fetch(`https://randomuser.me/api/?results=100`)
        .then(response => response.json())
        .then(data => {
            const userData = data?.results as User[];
            setLoading(false)
            return userData;
    
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false)
          return []
        });
        return data
    }
      

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
      };

    

    useEffect(()=>{
        getAddresses().then((res)=>{setUsers(res)})
    },[])

return  <div style={{maxWidth: "900px", maxHeight:"80vh",width: "80vw", margin: "0 auto", padding:"50px", }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Email&nbsp;</TableCell>
            <TableCell align="left">Phone Number&nbsp;</TableCell>
            <TableCell align="left">Address&nbsp;</TableCell>
            <TableCell align="left">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBodyWithLoading isLoading={isLoading}>
            {paginatedUsers.map((user:User)=><UserEntry user={user}/>)}
        </TableBodyWithLoading>
        
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(num)=>{setRowsPerPage(parseInt(num!.target?.value) || 5)}}
        />
    </div>
}

export default AddressBook;
