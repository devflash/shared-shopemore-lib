import React, { useState, useEffect } from 'react';

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  const updateAuth = (authData) => {
    setAuthUser(authData);
  };

  return { authUser, updateAuth };
};

export default useAuth;
