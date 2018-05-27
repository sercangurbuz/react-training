import React from "react";
import Repo from "./Repo";

const Repos = props => {
  return (
    <table className="table">
      <tbody>
        {props.repos.map(repo => <Repo key={repo.id} repo={repo} />)}
      </tbody>
    </table>
  );
};

export default Repos;
