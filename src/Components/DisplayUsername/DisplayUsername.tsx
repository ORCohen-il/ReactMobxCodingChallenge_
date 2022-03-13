import "./DisplayUsername.css";
import React, { useEffect, useState } from "react";
import UserModel from "../../models/User.model";
import store from "../../Redux/CurrentUserStore";
import { Table } from "react-bootstrap";
import { UsersDownloadedAction } from "../../Redux/CurrentUserState";

interface DisplayUsernameProps {}

function DisplayUsername(props: DisplayUsernameProps): JSX.Element {
  const [users, setUsers] = useState<UserModel[]>(
    store.getState().usersState.users
  );

  useEffect(() => {

    //component Did Mount
    const unsubscribe = store.subscribe(() => {
      setUsers([...store.getState().usersState.users]);
    });

    // if (localStorage.getItem("users")?.length == 0) {
    //   store.dispatch(UsersDownloadedAction(JSON.parse(localStorage.getItem("users") || "{}")));
    // }

    //component will unmount
    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="DisplayUsername">
      <Table striped bordered hover size="sm" dir="RTL">
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, i) => {
            return [
              <tr key={i}>
                <td>{i}</td>
                <td>{user.id}</td>
                <td>
                  {" "}
                  {user
                    .name!.toString()
                    .charAt(0)
                    .toUpperCase()}
                  {user
                    .name!.toString()
                    .substring(1, 10)
                    .toLowerCase()}{" "}
                </td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>,
            ];
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayUsername;
