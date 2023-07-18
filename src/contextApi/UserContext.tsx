import React, { createContext, useState } from 'react';
import { User } from '../Types/address';


interface UserContextProps {
  user: User | null;
  setData: (data: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setData: () => {},
});

export const UserProvider = ({ children }:{children: JSX.Element}) => {
  const [user, setData] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setData }}>
      {children}
    </UserContext.Provider>
  );
};
