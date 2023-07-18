import { TableCell, TableRow } from "@mui/material";
import { User } from "../../Types/address";

const UserEntry = ({user}: {user: User})=>{
    return (
        <TableRow
              key={`${user.name.title} ${user.name.first} ${user.name.last}`}
              sx={{ '&:last-child TableCell , &:last-child th': { border: 0 } }}
            >
      <TableCell >
        <img style={{borderRadius:"50%"}} src={user.picture.medium} alt="User" />
      </TableCell >
      <TableCell >{`${user.name.title} ${user.name.first} ${user.name.last}`}</TableCell >
      <TableCell >{user.email}</TableCell >
      <TableCell >{user.phone}</TableCell >
      <TableCell >{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</TableCell >
        
    </TableRow>
    )
}

export default UserEntry;
