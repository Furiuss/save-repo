import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Repositories from "../../components/Repositories";
import Search from "../../components/Search";

import { getRepositories, createRepository, deleteRepository } from "../../services/api";

import "./style.css";

const userId = "63168ca205c579df813775e9";

const Main = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getRepositories(userId, query);
      setRepositories(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = async (query) => {
    await loadData(query);
  };

  const handleDelete = async (repository) => {
    try {
      await deleteRepository(userId, repository._id)
      await loadData();
    } catch(e) {
      console.error(e)
      setLoadingError(true)
    }
  };

  const handleNewRepo = async (url) => {
    try {
      await createRepository(userId, url);
      await loadData();
    } catch (e) {
      console.error(e);
      setLoadingError(true);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados de repositório.{" "}
        <Link to="/login">Voltar</Link>.
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDelete}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};

export default Main;
