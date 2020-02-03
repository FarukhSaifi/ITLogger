import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AppBar from "./Components/Layouts/AppBar";
import Search from "./Components/Layouts/Search";
import Logs from "./Components/Logs/Logs";
import AddBtn from "./Components/Layouts/AddBtn";
import AddLogModal from "./Components/Logs/AddLogModal";
import EditLogModal from "./Components/Logs/EditLogModal";
import AddTechModal from "./Components/Tech/AddTechModal";
import Tech from "./Components/Tech/Tech";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  useEffect(() => {
    // Init MAterialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className="App containter">
        <AppBar />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Tech />
        <Search />
        <Logs />
      </div>
    </Provider>
  );
};

export default App;
