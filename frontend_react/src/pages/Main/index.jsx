import React from "react";
import Nav from "../../components/Nav";
import Repositories from "../../components/Repositories";
import Search from "../../components/Search";

import "./style.css";

const Main = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log(query);
  };

  const handleDelete = (repository) => {
    console.log("delete", repository);
  };

  const handleNewRepo = (url) => {
    console.log(url);
  }

  return (
    <div className="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories 
        repositories={[]}
        onDeleteRepo={handleDelete}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};

export default Main;
