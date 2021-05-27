import React, { useEffect, useState } from "react";
import Body from "./body";

function Table({ data: value }) {
  const [option, setOption] = useState(-1);
  const [data, setData] = useState(value);
  function onChange(e) {
    setOption(e.target.value);
  }
  useEffect(() => {
    setData(
      value.filter(({ id }) =>
        parseInt(option) === -1 ? true : id === parseInt(option)
      )
    );
    return;
    // eslint-disable-next-line
  }, [option]);

  return (
    <div className="container">
      <h2 className="h2 bg-primary text-white p-2 mb-1">User Details</h2>
      <div className="table-responsive">
        <table
          className="table table-bordered table-hover align-middle"
          border="1"
        >
          <thead className="align-middle table-dark text-center">
            <tr className="info">
              <th>S.no</th>
              <th>First name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">
                First Name{" "}
                <select
                  className="form-select m-2"
                  defaultValue="-1"
                  onChange={onChange}
                >
                  <option value="-1">All</option>
                  {value.map((value, i) => (
                    <option key={i} value={value.id}>
                      {value.first_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {data.map((value, i) => (
              <Body key={value.id} index={i + 1} data={value} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
