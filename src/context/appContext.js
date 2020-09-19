import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  user: {
      anonymous: true,
      name: null,
      token: null,
      user_id: "adminUser@123"
  },
  refreshState: {
    reload: false
  },
  theme: {
    mode: "light"
  },
  snackBar: {
    visible: false,
    message: null
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: {
            token: action.payload.token,
            user_id: action.payload.user_id,
            anonymous: false
        }
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {
            token: null,
            email: null,
            anonymous: true
        }
      };
    case "REFRESH_STATE":
      return {
        ...state,
        refreshState: {
          reload: action.payload.reload
        }
      };
    case "CHANGE_MODE":
      return {
        ...state,
        theme: {
          mode: action.payload.mode
        }
      }
    case "DISPLAY_SNACK":
      return {
        ...state,
        snackBar:{
          visible: true,
          message: action.payload.message
        }
      }
    case "HIDE_SNACK":
      return {
        ...state,
        snackBar:{
          visible: false,
          message: null
        }
      }
    default:
      throw new Error();
  }
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
