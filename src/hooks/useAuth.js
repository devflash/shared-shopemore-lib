import React, { useState, useEffect } from 'react';

const useAuth = (authUser) => {
  const [authUser, setAuthUser] = useState(null);

  const updateAuth = (authUser) => {
    setAuthUser(authUser);
  };

  return { authUser, updateAuth };
};

export default useAuth;
