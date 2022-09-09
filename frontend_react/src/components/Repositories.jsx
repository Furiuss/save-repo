import React, { useState } from "react";

const Repositories = ({ repositories, onDeleteRepo, onNewRepo }) => {
  const [newRepo, setNewRepo] = useState("");

  const addAndCleanRepository = () => {
    if (!newRepo) return;

    onNewRepo(newRepo);
    setNewRepo("");
  }

  return (
    <div className="repositories">
      <h2 className="title">Repositórios</h2>

      <ul className="list">
        {repositories.map((repo) => (
          <li className="item" key={repo._id}>
            <div className="info">
              <div className="owner">{repo.name.split('/')[0]}</div>
              <div className="name">{repo.name.split('/')[1]}</div>
            </div>
            <button onClick={() => onDeleteRepo(repo)}>Apagar</button>
          </li>
        ))}
      </ul>

      <div className="new">
        <label htmlFor="new-repo">NovoRepo:</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button onClick={addAndCleanRepository}>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
