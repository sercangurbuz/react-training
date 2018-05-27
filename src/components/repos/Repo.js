import React from "react";

const Repo = props => {
  const { repo } = props;
  return (
    <tr key={repo.id}>
      <td>
        <img style={{ width: 50, height: 50 }} src={repo.owner.avatar_url} />
      </td>
      <td>{repo.name}</td>
    </tr>
  );
};

export default Repo;
