import React, { useState, useEffect } from 'react';

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  const updateAuth = (authData) => {
    // setAuthUser(authData);
    console.log('from mf', authData);
    console.log('updated', authUser);
  };

  return { authUser, updateAuth };
};

export default useAuth;
