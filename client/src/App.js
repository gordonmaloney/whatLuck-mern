import React, { useEffect } from "react";
import MainMenu from "./components/MainMenu";
import { useDispatch } from "react-redux";
import { getPotlucks } from "./actions/potlucks";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPotlucks());
  }, []);

  return (
    
        <MainMenu />
    
  );
};

export default App;
