import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    const redirectTo = window.location.pathname;
    history.replace(redirectTo);
  }, [history]);

  return null;
};

export default NotFound;
