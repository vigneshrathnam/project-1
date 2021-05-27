import React from "react";

function body({ data, index }) {
  const { first_name, last_name, email, avatar } = data;
  return (
    <tr align="center">
      <td>{index}.</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td><img className="rounded img-fluid" src={avatar} alt={first_name+" "+last_name}/></td>
    </tr>
  );
}

export default body;
