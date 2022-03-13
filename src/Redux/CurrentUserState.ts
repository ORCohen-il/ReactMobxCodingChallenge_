import UserModel from "../models/User.model";
import React from "react";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class usersAppState {
  public users: UserModel[] = [];
}

// Step 2 - Define all possible action for your application state
export enum UsersActionType {
  UserDownloaded = "UserDownloaded",
  UserAdded = "UserAdded",
  UserUpdated = "UserUpdated",
  UserDeleted = "UserDeleted",
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface UserAction {
  type: UsersActionType;
  payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action
export function UsersDownloadedAction(users: UserModel[]): UserAction {
  return { type: UsersActionType.UserDownloaded, payload: users };
}

export function usersAddedAction(user: UserModel): UserAction {
  return { type: UsersActionType.UserAdded, payload: user };
}

export function usersUpdatedAction(user: UserModel): UserAction {
  return {
    type: UsersActionType.UserUpdated,
    payload: user,
  };
}

export function usersDeletedAction(id: Number): UserAction {
  return { type: UsersActionType.UserDeleted, payload: id };
}

// Step 5 - Reducer function perform the required action

export function usersReducer(
  currentState: usersAppState = new usersAppState(),
  action: UserAction
): usersAppState {
  const newState = { ...currentState }; //Spread Operator

  switch (action.type) {
    case UsersActionType.UserDownloaded:
      newState.users = action.payload;
      // console.log(action.payload);
      break;
    case UsersActionType.UserAdded:
      newState.users.push(action.payload);
      console.log(action.payload);
      break;
    case UsersActionType.UserUpdated:
      const name = newState.users.filter((u) => u.name === action.payload.name);
      break;
    case UsersActionType.UserDeleted:
      newState.users = newState.users.filter((c) => c.id !== action.payload);
      break;
  }
  return newState;
}
