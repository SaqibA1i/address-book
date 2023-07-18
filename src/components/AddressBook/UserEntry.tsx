import { TableCell, TableRow } from "@mui/material";
import { User } from "../../Types/address";
import { Link } from 'react-router-dom';
import { UserContext } from "../../contextApi/UserContext";
import { useContext, useEffect, useState } from "react";
const UserEntry = ({user}: {user: User})=>{
  
    const { setData } = useContext(UserContext);
    useEffect(()=>{setData(user)},[])
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
      <TableCell><Link to={`/details/${user.name.first}_${user.name.last}`}>Details</Link></TableCell>
    </TableRow>
    )
}

export default UserEntry;
