import React from 'react';
import { User } from '../Types/address';

const DetailsPage = ({ userInfo }:{userInfo: User | null}) => {
    if(userInfo == null){
        return <h1>No data</h1>
    }
  return <div>Details Page for : {userInfo.name.title} {userInfo.name.first} {userInfo.name.last}
  <br/>
  <img style={{borderRadius:"50%"}} src={userInfo.picture.medium} alt="User" /></div>;
};

export default DetailsPage;
