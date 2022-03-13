import "./EditUser.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import UserModel from "../../models/User.model";
import store_Users from "../../Redux/CurrentUserStore";
import {
  usersAddedAction,
  UsersDownloadedAction,
  usersUpdatedAction,
} from "../../Redux/CurrentUserState";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import axios from "axios";
import store from "../../Redux/CurrentUserStore";

interface EditUserProps {}

interface IFormInput {
  id: string;
  name: string;
  gender: string;
  phone: string;
  email: string;
  age: string;
}

function EditUser(props: EditUserProps): JSX.Element {
  const [user, setUser] = useState<UserModel>({});
  const { register, handleSubmit } = useForm<IFormInput>();

  // get Random user from api
  const get_random_user = () => {
    axios
      .get("https://randomuser.me/api")
      .then((user) => {
        setUser({
          id: user.data.results[0].login.salt,
          name:
            user.data.results[0].name.first +
            " " +
            user.data.results[0].name.last,
          gender: user.data.results[0].gender,
          phone: user.data.results[0].phone,
          email: user.data.results[0].email,
          age: user.data.results[0].dob.age,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // add user to list
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let _user: UserModel = {
      id: user.id,
      name: user.name,
      gender: user.gender,
      phone: user.id,
      email: user.email,
      age: user.age,
    };
    localStorage.setItem(
      "users",
      JSON.stringify(store_Users.getState().usersState.users)
    );

    store_Users.dispatch(usersAddedAction(_user));
  };

  useEffect(() => {
    {
      Object.keys(user).length == 0 && get_random_user();
    }
  }, []);

  return (
    <div className="EditUser">
      <h1>Edit User</h1>
      <hr />
      <div className="inputs" dir="RTL">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <label htmlFor="inputId" className="col-sm-0 col-form-label">
              id
            </label>
            <div className="col-sm-12">
              <input
                value={user.id || ""}
                type="text"
                className="form-control"
                id="inputId"
                {...register("id")}
                disabled
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-sm-0 col-form-label">
              Name
            </label>
            <div className="col-sm-12">
              <input
                value={user.name || ""}
                type="text"
                className="form-control"
                id="inputName"
                {...register("name")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputGender" className="col-sm-0 col-form-label">
              Gender
            </label>
            <div className="col-sm-12">
              <input
                value={user.gender || ""}
                type="text"
                className="form-control"
                id="inputGender"
                {...register("gender")}
                disabled
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPhone" className="col-sm-0 col-form-label">
              Phone
            </label>
            <div className="col-sm-12">
              <input
                value={user.phone || ""}
                type="phone"
                className="form-control"
                id="inputPhone"
                {...register("phone")}
                disabled
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputEmail" className="col-sm-0 col-form-label">
              Email
            </label>
            <div className="col-sm-12">
              <input
                value={user.email || ""}
                type="email"
                className="form-control"
                id="inputEmail"
                {...register("email")}
                disabled
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputAge" className="col-sm-0 col-form-label">
              Age
            </label>
            <div className="col-sm-12">
              <input
                value={user.age || ""}
                type="number"
                className="form-control"
                id="inputAge"
                {...register("age")}
              />
            </div>
          </div>
          <div className="buttons">
            <Button type="submit">Send User</Button>
            <Button onClick={get_random_user}>get Random user</Button>
            <Button onClick={() => setUser({})}>Clear</Button>
            <Button
              onClick={() => {
                store.dispatch(UsersDownloadedAction([])),
                  localStorage.setItem("users", "{}");
              }}
            >
              Clear All Users
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
