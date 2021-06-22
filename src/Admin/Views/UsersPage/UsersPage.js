import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import "./bootstrap.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import "./UserPage.css";

function UsersPage() {
  let [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://34.126.78.179/admin/users").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  return (
    <div className="all_users">
      <Navbar />
      <h1>All Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Signup method</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.method}</td>
                {item.block ? (
                  <td
                    onClick={() => {
                      axios
                        .get("http://localhost:8000/admin/user-unblock", {
                          params: {
                            id: item._id,
                          },
                        })
                        .then((response) => {
                          setUser(response.data)
                        });
                    }}
                    className="btn btn-success"
                  >
                    unblock
                  </td>
                ) : (
                  <td
                    onClick={() => {
                      axios
                        .get("http://localhost:8000/admin/user-block", {
                          params: {
                            id: item._id,
                          },
                        })
                        .then((response) => {
                          setUser(response.data)
                        });
                    }}
                    className="btn btn-danger"
                  >
                    block
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersPage;
